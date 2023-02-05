from django.contrib.admin import ModelAdmin

class AutoSlug:
  def get(field):
    class ReturnClass(ModelAdmin):
      prepopulated_fields = {'slug': (field,)}
    
    return ReturnClass