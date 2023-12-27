from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('sales_report/', views.sales_report_view, name="sales-report")
]
