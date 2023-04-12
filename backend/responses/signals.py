from django.db.models.signals import post_save
from django.dispatch import receiver
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
import json

from .models import Response
from users.models import EmployerProfile

@receiver(post_save, sender=Response)
def append_response(sender, instance, **kwargs):
    employer = EmployerProfile.objects.get(user=instance.target)
    employer.responses.add(instance)
    employer.save()

    channel_layer = get_channel_layer()
    async_to_sync(channel_layer.group_send)(
        employer.username,
        {
            'type': 'receive',
            'message': f'User {instance.author.username} responded to the vacancy',
        },
    )
