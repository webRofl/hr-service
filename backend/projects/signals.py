from django.db.models.signals import pre_save
from django.dispatch import receiver

from .models import Project

@receiver(pre_save, sender=Project)
def count_total_votes(sender, instance, **kwargs):
    print('PRE_SAVE', sender, instance, instance.reviews.count())

