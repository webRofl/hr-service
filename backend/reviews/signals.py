from django.db.models.signals import post_save
from django.dispatch import receiver

from .models import ProjectReview, ProfileReview

@receiver(post_save, sender=ProjectReview)
def create_project_review(sender, instance, created, **kwargs):
    if created:
        instance.project.reviews.add(instance)

@receiver(post_save, sender=ProfileReview)
def create_profile_review(sender, instance, created, **kwargs):
    if created:
        instance.profile.reviews.add(instance)

