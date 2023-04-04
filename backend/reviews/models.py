from django.db import models
import uuid
from django.core.validators import MinValueValidator, MaxValueValidator

from authentication.models import User


class BaseReview(models.Model):
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)
    text = models.TextField(default='')
    rate = models.PositiveSmallIntegerField(validators=[MinValueValidator(0), MaxValueValidator(5)])
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.author.username

    class Meta:
        abstract = True


class ProjectReview(BaseReview):
    project = models.ForeignKey('projects.Project', on_delete=models.CASCADE)


class ProfileReview(BaseReview):
    profile = models.ForeignKey(User, on_delete=models.CASCADE, related_name='+')

