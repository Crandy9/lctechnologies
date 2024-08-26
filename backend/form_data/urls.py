# manually created urls.py file

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from form_data import views


urlpatterns = [
    path('form-data/', views.process_form_data),
    path('get-device-data/', views.get_user_device)
] 

