from functools import wraps
# from users.serializers import IsSuperUser
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view, permission_classes, authentication_classes


def decorator_ping_me(view_func):
    """Custom decorator to combine multiple DRF decorators."""
    @api_view(['GET'])
    @permission_classes([AllowAny])
    @authentication_classes([])
    @wraps(view_func)
    def _wrapped_view(request, *args, **kwargs):
        return view_func(request, *args, **kwargs)

    return _wrapped_view
