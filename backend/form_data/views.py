from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import authentication, permissions
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model
from django.core.mail import EmailMessage
# converts html template to a string message for emails
from django.template.loader import render_to_string
from django.http import HttpResponse
from django.conf import settings
from lctec_project import settings
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_str
from django.utils.http import urlsafe_base64_decode
from django.contrib.auth.tokens import default_token_generator
from rest_framework import permissions, status
from django.middleware.csrf import get_token
# for saving profilepic
from PIL import Image
from django.core.files import File
from io import BytesIO
from django.core.files.uploadedfile import InMemoryUploadedFile
from rest_framework.permissions import AllowAny
from django.http import JsonResponse
import requests

# send thank you email to user after purchase
from django.core.mail import EmailMessage
from django.template.loader import render_to_string

# set up logger
import logging
import os
logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)

# create file handler and set level to INFO
log_file = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'lctec_user_logs.txt')
fh = logging.FileHandler(log_file)
fh.setLevel(logging.INFO)

# create formatter
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
fh.setFormatter(formatter)
logger.addHandler(fh)


user = get_user_model()


EMAIL_ON = True

@api_view(['POST'])
@authentication_classes([])
@permission_classes([])
def process_form_data(request):

    template = render_to_string('../templates/cust_alert.html', {
        'cust_name': request.data.get('name', ''),
        'cust_email': request.data.get('email', ''),
        'service': request.data.get('service', ''),
        'details': request.data.get('msgs', ''),
    })

    # dont send email if name or email is empty
    if request.data.get('name', '') == '' or request.data.get('email', '') == '':
        return Response(status=200)

    # send thankyou email to user
    email = EmailMessage(
        # email subject title default is 'subject'
        'CUSTOMER ALERT',
        # email template default is 'body'
        template,
        settings.EMAIL_HOST_USER,
        # recipient list
        # [request.user.email],
        [settings.env('ADMIN_EMAIL')],
    )
    email.fail_silently=False
    # only send email if this flag is true
    if EMAIL_ON:
        email.send()


    return Response(status=200)



@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def get_geoData(request):

    userIP = request.data.get('userIP', ''),

    geoAPIKey = settings.env('geoAPIKey')

    payload = {'key': geoAPIKey, 'ip': userIP, 'format': 'json'}

    try:
        response = requests.get('https://api.ip2location.io/', params=payload)
        data = response.json()
        geolocation = {
            'city_name': data.get('city_name', ''),
            'region_name': data.get('region_name', ''),
            'country_name': data.get('country_name', ''),
        }
        return JsonResponse(geolocation)
    except Exception as e:
        return JsonResponse({'error': 'Location Not Available'})