from django.db.models.signals import post_save
from django.dispatch import receiver

from .models import Response

@receiver(post_save, sender=Response)
def append_response(sender, instance, **kwargs):
    target = instance['target']
    responses = list(target['responses'])
    responses.append(instance)
    target['responses'].set(responses)
    target.save()
