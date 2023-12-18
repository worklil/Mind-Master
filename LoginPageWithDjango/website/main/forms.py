from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.contrib.auth.forms import PasswordChangeForm
from .models import Post


class ChangePasswordForm(PasswordChangeForm):
    pass


class RegisterForm(UserCreationForm):
    email = forms.EmailField(required=True)
    # this field is required

    class Meta:
        # this class is used to give additional information about the form
        model = User
        fields = ['username', 'email', 'password1', 'password2']
        # these are the fields that will be displayed in the form


class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'description']
        # these are the fields that will be displayed in the form
