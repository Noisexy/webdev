# redirect to redirect user to other page
from django.shortcuts import render, redirect
from django.contrib.auth.models import User, auth  # for user authentication
from django.contrib import messages  # to display messages on screen
from django.http import HttpResponse  # to give http responses
from .models import algo  # importing a model I created from the models.py file
from .models import Feature

# Create your views here.

# funtion that we call from urls.py from myapp


# to pass in dynamic data from the backend we can pass it as a paramenter in the render and access the variables in {{}} in the template files
# we can also make a dictionary called context and pass in the dict as the parameter


def index(request):
    # function takes a request
    # nuevaPersona = algo()
    # nuevaPersona.edad = 20
    # nuevaPersona.nombre = "puta"

    features = Feature.objects.all()
    return render(request, 'index.html', {'features': features})
    # we render the index.html from the templates folder that we have to specify in settings.py


def counter(request):
    words = request.POST['words']
    amount_of_words = len(words.split())
    return render(request, 'counter.html', {'amount': amount_of_words})


def register(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        password2 = request.POST['password2']

        if password == password2:
            # checking if the email already exists
            if User.objects.filter(email=email).exists():
                messages.info(request, 'Email already exists')
                # as the user entered an invalid email we redirect him to the register page back again
                return redirect('register')
            elif User.objects.filter(username=username).exists():
                messages.info(request, 'Username already exists')
                # as the user entered an invalid username we redirect him to the register page back again
                return redirect('register')
            else:
                user = User.objects.create_user(
                    username=username, email=email, password=password)
                user.save()
                return redirect('login')
        else:
            messages.info(request, 'Passwords do not match')
            return redirect('register')
    else:
        return render(request, 'register.html')


def login(request):
    if request.method == 'POST':
        username = request.POST["username"]
        password = request.POST['password']

        user = auth.authenticate(username=username, password=password)

        if user is not None:
            auth.login(request, user)
            return redirect('/')
        else:
            messages.info(request, 'Invalid credentials')
            return redirect('login')
    else:
        return render(request, 'login.html')
