# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import Pentagram.models


class Migration(migrations.Migration):

    dependencies = [
        ('Pentagram', '0008_auto_20160715_1001'),
    ]

    operations = [
        migrations.AlterField(
            model_name='photo',
            name='photo',
            field=models.ImageField(null=True, upload_to=Pentagram.models.photos_directory),
        ),
    ]
