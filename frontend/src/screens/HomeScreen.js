import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Row,Col } from 'react-bootstrap'
import Product from '../components/product'
import {listProducts} from '../actions/productActions'
import Loader from '../components/Loader'
import { Alert } from 'react-bootstrap'

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList  = useSelector(state => state.productList) 
  const {error, loading, products} = productList

  useEffect(()=>{
    dispatch(listProducts());
  },[dispatch])
  
  return (
  <div>
    <h1>Latest Product</h1>
    {loading ? <Loader/>:
    error ? <Alert variant='danger'>{error}</Alert>
  :  <Row>
  {products.map(product =>(
    <Col key={product.id} sm={12} md={6} lg={4} xl={3}><Product product={product}/></Col>
  ))}
</Row>}
  </div>
  )
}
