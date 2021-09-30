from django.urls import path
from .views import articleList, articleDetails

urlpatterns = [
    path('articles', articleList),
    path('articles/<int:pk>/', articleDetails)
]
