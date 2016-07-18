# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Pentagram', '0006_auto_20160715_0935'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='photo_id',
            field=models.ForeignKey(to='Pentagram.Photo'),
        ),
    ]
