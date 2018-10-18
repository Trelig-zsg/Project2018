from django.shortcuts import render
from django.http import HttpResponse

from .import models

# Create your views here.
def index(request):
    Reservoir = models.Reservoir.objects.get(pk=1)
    return render(request, 'RR/index.html', {'r': Reservoir})