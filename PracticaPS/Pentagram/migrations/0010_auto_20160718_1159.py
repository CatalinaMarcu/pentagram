# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Pentagram', '0009_auto_20160715_1010'),
    ]

    operations = [
        migrations.AlterField(
            model_name='photo',
            name='counter_like',
            field=models.IntegerField(default=0),
        ),
    ]
