from django.shortcuts import render
from .products import products
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializer import ProductSerializer
from .models import *
# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes = ['Harshiv','Harsha','Joy']
    return Response(routes)

@api_view(['GET'])
def productdata(request):
    Products = Product.objects.all()
    serailiezed_data = ProductSerializer(Products,many=True)
    return Response(serailiezed_data.data)

@api_view(['GET'])
def detail_products(request,pk):
    productData = Product.objects.get(id=pk)
    serializedData = ProductSerializer(productData,many=False)
    return Response(serializedData.data)