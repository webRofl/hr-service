from django.contrib import admin

from .models import Response

@admin.register(Response)
class ResponseAdmin(admin.ModelAdmin):
    readonly_fields = ('id', 'created')
