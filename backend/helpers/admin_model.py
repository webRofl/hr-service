from django.contrib.admin import ModelAdmin

class AdminHelper(ModelAdmin):
    def set_options(self, prepopulated_fields = None, read_only_fields = None):
        self.prepopulated_fields = prepopulated_fields
        self.read_only_fields = read_only_fields

