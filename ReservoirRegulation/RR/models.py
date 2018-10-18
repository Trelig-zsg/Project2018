from django.db import models

# Create your models here.

class Reservoir(models.Model):
    RName = models.CharField(max_length=64,default='XX水坝')
    RLocation = models.CharField(max_length=32,default='中国')
    RDescription = models.TextField(null=True)

    def __str__(self):
        return self.RName