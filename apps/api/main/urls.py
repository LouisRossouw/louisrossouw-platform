
from django.urls import path
from django.conf import settings
from django.contrib import admin
from django.conf.urls.static import static
from django.views.generic.base import RedirectView

import main.views as main

urlpatterns = [
    path('', RedirectView.as_view(
        url='https://www.louisrossouw.com/')),

    path('admin/', admin.site.urls),

    # path('api/stats', main.stats, name='stats'),
    # path('api/health', main.health, name='health'),
    path('api/ping-me', main.ping_me, name='ping-me'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
