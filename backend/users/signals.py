from django.db.models.signals import m2m_changed
from django.dispatch import receiver
from django.db import models

from .models import Profile

@receiver(m2m_changed, sender=Profile.reviews.through)
def count_votes(sender, instance, **kwargs):
    votes_sum = instance.reviews.all().aggregate(models.Sum('rate'))

    instance.total_votes = instance.reviews.all().count()
    instance.votes_average = votes_sum['rate__sum'] / instance.total_votes if votes_sum['rate__sum'] != None else 0

    instance.save()

