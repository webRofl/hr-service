from django.db.models.signals import post_save
from django.dispatch import receiver
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
import json

from .models import Response

@receiver(post_save, sender=Response)
def append_response(sender, instance, **kwargs):
    target = instance.target
    target.responses.add(instance)
    target.save()

    channel_layer = get_channel_layer()
    async_to_sync(channel_layer.group_send)(
        target.username,
        {
            'type': 'receive',
            'message': f'User {instance.author.username} responded to the vacancy',
        },
    )
