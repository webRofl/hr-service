from rest_framework import serializers

from .models import Profile, Skill

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('name', 'second_name', 'city', 'bio', 'github', 'linkedin', 'youtube', 'website',)

    def save(self, **kwargs):
        owner = kwargs.get('owner')
        if owner.is_authenticated:
            instance = Profile.objects.filter(user=owner)
            if instance.exists() == True:
                instance = self.update(validated_data=self.validated_data, instance=instance)
            else:
                instance = self.create(validated_data=self.validated_data, user=owner)

            return instance
        else:
            raise serializers.NotAuthenticated(detail=None, code=None)

    def update(self, validated_data, **kwargs):
        return kwargs.get('instance').update(**validated_data)

    def create(self, validated_data, user):
        validated_data['user'] = user

        return Profile.objects.create(**validated_data)


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ('name', 'slug', 'description',)
