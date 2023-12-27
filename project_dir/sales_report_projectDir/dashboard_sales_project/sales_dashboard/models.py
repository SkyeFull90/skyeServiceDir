# models.py

from django.db import models


class Sales(models.Model):
    id = models.AutoField(primary_key=True)  # Django implicitly creates an AutoField 'id'
    model_type = models.CharField(max_length=255)
    report = models.TextField()

    def __str__(self):
        return f"{self.model_type} - {self.id}"
