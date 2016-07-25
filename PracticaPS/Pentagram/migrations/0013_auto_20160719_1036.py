# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Pentagram', '0012_auto_20160718_1216'),
    ]

    operations = [
        migrations.CreateModel(
            name='Like',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('counter_like', models.IntegerField(default=0)),
            ],
        ),
        migrations.RemoveField(
            model_name='photo',
            name='counter_like',
        ),
        migrations.AddField(
            model_name='like',
            name='photo',
            field=models.ForeignKey(to='Pentagram.Photo'),
        ),
        migrations.AddField(
            model_name='like',
            name='user',
            field=models.ForeignKey(to=settings.AUTH_USER_MODEL),
        ),
    ]
