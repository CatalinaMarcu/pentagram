from uuid import uuid1

from django.contrib.auth.models import User
from django.db import models

# Create your models here.
def photos_directory(instance, filename):
    #files will be uploaded to MEDIA_root/user_<id>/<filename>
    return 'photos/user_{0}/{1}_{2}'.format(instance.user.username, str(uuid1()), filename)

class Photo (models.Model):
    user = models.ForeignKey(User)
    counter_like = models.IntegerField(default=0)
    photo = models.ImageField(upload_to=photos_directory, null=True)

class Comment(models.Model):
    user_id=models.ForeignKey(User , null=True)
    photo_id=models.ForeignKey(Photo)
    comments=models.CharField(max_length=250)

# class Comment(models.Model):
#     user = models.ForeignKey(User)
#     photo = models.ForeignKey(Photo)
#     comment = models.TextField(null=False)
#
#
# class User(User):
#     pass