from django.contrib import admin

from reviews.models import ProjectReview, ProfileReview

admin.site.register(ProjectReview)
admin.site.register(ProfileReview)
