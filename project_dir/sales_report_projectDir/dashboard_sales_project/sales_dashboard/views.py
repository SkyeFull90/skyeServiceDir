import requests
from django.shortcuts import render
import os  # Import the os module
from supabase_py import create_client


def sales_report_view(request):
    url: str = os.environ.get('SUPABASE_URL')
    key: str = os.environ.get('SUPABASE_KEY')

    supabase = create_client(url, key)

    # Example GET request to fetch data
    response = supabase.table('sales_report').select('*').execute()

    if response.get('data'):
        data = response['data']
        return render(request, 'sales_report_template.html', {'reports': data})
    else:
        return render(request, 'error_template.html')  # Render an error page


def home(request):
    return render(request, 'home.html')
