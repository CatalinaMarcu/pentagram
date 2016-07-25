# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Pentagram', '0014_remove_like_counter_like'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='like',
            name='photo',
        ),
        migrations.RemoveField(
            model_name='like',
            name='user',
        ),
        migrations.AddField(
            model_name='like',
            name='photo_id',
            field=models.ForeignKey(null=True, to='Pentagram.Photo'),
        ),
        migrations.AddField(
            model_name='like',
            name='user_id',
            field=models.ForeignKey(null=True, to=settings.AUTH_USER_MODEL),
        ),
    ]
