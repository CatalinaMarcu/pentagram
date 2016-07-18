# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Pentagram', '0002_comments'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comments',
            old_name='user_id',
            new_name='user',
        ),
        migrations.AlterField(
            model_name='comments',
            name='comment',
            field=models.CharField(max_length=250),
        ),
        migrations.AlterField(
            model_name='comments',
            name='photo_id',
            field=models.IntegerField(),
        ),
    ]
