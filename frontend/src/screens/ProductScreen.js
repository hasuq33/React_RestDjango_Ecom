import React,{useEffect,useState} from 'react'
import { Link,useParams,useNavigate } from 'react-router-dom'
import { Row,Col,Image,ListGroup,Button,Card ,Form} from 'react-bootstrap'
import Rating from '../components/Rating'
import {useDispatch, useSelector} from 'react-redux'
import {listProductDetails} from '../actions/productActions'
import Loader from '../components/Loader'
import { Alert } from 'react-bootstrap'

export default function ProductScreen({history}) {
  const [qty,setQty] = useState(1);

  const {id} =  useParams();
  const  dispatch = useDispatch();
  const productDetails = useSelector(state => state.productDetails);
  const {error, loading, product } = productDetails;
  const navigate = useNavigate();
  


  useEffect(()=>{
    dispatch(listProductDetails(id));
  },[dispatch,id]);

  const addToCartHandler=()=>{
    navigate(`/cart/${id}/qty=${qty}`)
  }

  return (
    <div>
      <Link to={'/'} className='btn btn-light my-3'>Go Back</Link>
      {loading ? <Loader/>:
    error ? <Alert variant='danger'>{error}</Alert>
  :  <Row>
  <Col md={6}>
    <Image src={product.image} alt={product.name} fluid/>
  </Col>
  <Col md={3}>
    <ListGroup variant='flush'>
      <ListGroup.Item>
        <h3>{product.name}</h3>
      </ListGroup.Item>
      <ListGroup.Item>
      <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
      </ListGroup.Item>
      <ListGroup.Item>
        Price: ${product.price}
      </ListGroup.Item>
      <ListGroup.Item>
         {product.description}
      </ListGroup.Item>
    </ListGroup>
  </Col>
  <Col md={3}>
    <Card>
      <ListGroup variant='flush'>
        <ListGroup.Item>
          <Row>
            <Col>Price:</Col>
            <Col>
            <strong>${product.price}</strong>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col>Status:</Col>
            <Col>
            {product.countInStock > 0 ? 'In Stock' : 'Not Available'}
            </Col>
          </Row>
        </ListGroup.Item>
          {product.countInStock>0 &&(<ListGroup.Item>
          <Row>
            <Col>Qty:</Col>
            <Col  className='my-1'>
            <Form.Select  as="select" value={qty} onChange={(e)=> setQty(e.target.value)}>
              {
              [...Array(product.countInStock).keys()].map((x)=>(
                <option key={x+1} value={x+1}>
                  {x+1}
                </option>
              ))
            }
            </Form.Select>
            </Col>
          </Row>
        </ListGroup.Item>) }
        <ListGroup.Item>
          <Row>
          <Button className='btn-block' disabled={product.countInStock == 0} onClick={addToCartHandler}>Add To Cart</Button>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  </Col>
</Row>}
    </div>
  )
}
