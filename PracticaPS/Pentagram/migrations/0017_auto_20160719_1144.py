# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Pentagram', '0016_auto_20160719_1144'),
    ]

    operations = [
        migrations.RenameField(
            model_name='like',
            old_name='photo_id',
            new_name='photo',
        ),
    ]
