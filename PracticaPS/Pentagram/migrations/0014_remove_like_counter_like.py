# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Pentagram', '0013_auto_20160719_1036'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='like',
            name='counter_like',
        ),
    ]
