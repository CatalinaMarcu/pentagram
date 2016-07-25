from uuid import uuid1
from django.conf import settings
from django.contrib.auth.models import User
from django.db import models
from django.dispatch.dispatcher import receiver
from django.db.models.signals import post_save
from rest_framework.authtoken.models import Token

# Create your models here.
from pip.download import user_agent


def photos_directory(instance, filename):
    #files will be uploaded to MEDIA_root/user_<id>/<filename>
    return 'photos/user_{0}/{1}_{2}'.format(instance.user.username, str(uuid1()), filename)

class Photo (models.Model):
    user = models.ForeignKey(User)
    #counter_like = models.IntegerField(default=0)
    photo = models.ImageField(upload_to=photos_directory, null=True)

class Comment(models.Model):
    user_id=models.ForeignKey(User , null=True)
    photo_id=models.ForeignKey(Photo)
    comments=models.CharField(max_length=250)

class Like(models.Model):
    photo = models.ForeignKey(Photo ,null = True)
    user = models.ForeignKey(User,null = True)

@receiver(post_save , sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created= False , **kwargs):
    if created:
        Token.objects.create(user=instance)