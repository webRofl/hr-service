from django.db import models
import uuid

from authentication.models import User

class Response(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)
    text = models.TextField()
    target = models.ForeignKey('users.EmployerProfile', on_delete=models.CASCADE)
    is_viewed = models.BooleanField(default=False)

    def __str__(self):
        return self.author.username
