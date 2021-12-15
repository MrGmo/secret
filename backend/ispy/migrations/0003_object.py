# Generated by Django 3.2.9 on 2021-12-14 21:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('ispy', '0002_delete_object'),
    ]

    operations = [
        migrations.CreateModel(
            name='Object',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('object_url', models.TextField(max_length=2000)),
                ('object_name', models.CharField(max_length=255)),
                ('object_confidence_level', models.IntegerField()),
                ('object_notes', models.TextField(max_length=1000)),
            ],
        ),
    ]
