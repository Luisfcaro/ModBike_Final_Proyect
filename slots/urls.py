from django.urls import path, include
from rest_framework import routers
from slots import views

router = routers.DefaultRouter()
router.register(r'slots', views.SlotViewSet, 'slots')

urlpatterns = [
    path('rest/', include(router.urls))
]