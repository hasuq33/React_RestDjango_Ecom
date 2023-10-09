from django.urls import path
from . import views


urlpatterns = [
    path('',views.getRoutes,name="Routes"),
    path('products/',views.productdata,name="product Data"),
    path('products/<str:pk>',views.detail_products,name="Product Details"),
]