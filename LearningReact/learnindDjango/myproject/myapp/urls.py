from django.urls import path  # importing django urls from path
from . import views  # we import the views.py that we need to create

urlpatterns = [  # we create a list with the url patterns
    # we specify the path, tell it to look for it in views.py and giving it a name
    path('', views.index, name='index'),
    path('counter', views.counter, name='counter'),
    path('register', views.register, name='register'),
    path('login', views.login, name='login'),
]
