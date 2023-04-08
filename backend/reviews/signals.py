from django.db.models.signals import post_save
from django.dispatch import receiver

from .models import ProjectReview, ProfileReview
from users.models import EmployerProfile, EmployeeProfile

@receiver(post_save, sender=ProjectReview)
def create_project_review(sender, instance, created, **kwargs):
    if created:
        instance.project.reviews.add(instance)

@receiver(post_save, sender=ProfileReview)
def create_profile_review(sender, instance, created, **kwargs):
    if created:
        employee_instance = EmployeeProfile.objects.filter(user=instance.profile.id)
        if len(employee_instance) != 0:
            employee_instance[0].reviews.add(instance)
            return
        
        employer_instance = EmployerProfile.objects.filter(user=instance.profile.id)
        if len(employer_instance) != 0:
            employer_instance[0].reviews.add(instance)
            return

