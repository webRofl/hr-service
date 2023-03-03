from rest_framework import serializers

from .models import Profile, Skill

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ('id', 'name',)


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        exclude = ('is_active', 'slug', 'id',)

class ProfileUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        exclude = ('is_active', 'slug', 'id',)

    def is_valid(self, raise_exception=False):
        if hasattr(self, 'initial_data'):
            try:
                obj = Profile.objects.get(user=self.initial_data['user'])
            except (ObjectDoesNotExist, MultipleObjectsReturned):
                return super().is_valid()
            else:
                self.instance = obj
                return super().is_valid()
        else:
            return super().is_valid()

        return instance

