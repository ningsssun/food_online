from django.shortcuts import render
from vendor.forms import VendorForm


def vprofile(request):
    profile_form = UserProfileForm()
    vendor_form = VendorForm()
    return render(request, 'vendor/vprofile.html')
