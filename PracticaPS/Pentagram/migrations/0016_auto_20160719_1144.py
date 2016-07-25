# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Pentagram', '0015_auto_20160719_1142'),
    ]

    operations = [
        migrations.RenameField(
            model_name='like',
            old_name='user_id',
            new_name='user',
        ),
    ]
