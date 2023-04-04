from django.db.models.signals import post_save
from django.dispatch import receiver

from .models import Response

@receiver(post_save, sender=Response)
def append_response(sender, instance, **kwargs):
    print('START')
    target = instance['target']
    print('BEFORE')
    responses = list(target['responses'])
    print('LIST')
    responses.append(instance)
    print('APPEND')
    target['responses'].set(responses)
    print('PRE SAVE')
    target.save()
