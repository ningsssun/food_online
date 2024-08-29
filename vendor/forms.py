from django import forms
from django.forms import ModelForm
from .models import Vendor
from accounts.validators import allow_only_images_validator


class VendorForm(forms.ModelForm):
    vendor_license = forms.FileField(widget=forms.FileInput(attrs={'class': 'btn btn-info'}), validators=[allow_only_images_validator])
    class Meta:
        model = Vendor
        fields = ['vendor_name', 'vendor_license']
