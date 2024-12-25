from django.contrib import admin
from django.urls import path, include
from api.views import CreateUserView, home
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/user/register/', include('api.urls')),
    path('api/token/', include('api.urls')),
    path('api/token/refresh/', include('api.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include('api.urls')),
    path('', home, name='home'),  # Ruta para la raíz
]
