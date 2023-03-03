from rest_framework import permissions

class IsGetMethodOrAuthOnly(permissions.BasePermission):
    def get_permissions(self):
        if self.action in ['retrieve']:
            perms = [permissions.ReadOnlyMenuPermission]
        else:
            perms = [permissions.IsAuthenticated]
        return [p() for p in perms]

