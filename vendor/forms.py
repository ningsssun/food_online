from django import forms
from django.forms import ModelForm
from .models import Vendor


class VendorForm(forms.ModelForm):
    vendor_license = forms.ImageField(widget=forms.FileInput(attrs={'class': 'btn btn-info'}))
    class Meta:
        model = Vendor
        fields = ['vendor_name', 'vendor_license']
