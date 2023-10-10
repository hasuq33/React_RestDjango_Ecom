import React,{useEffect} from 'react'
import{useParams,useLocation} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';


export default function CartScreen() {
  let params = useParams();
    const productId = params.id;
    const product_qty = Number(params.qty.split("=")[1]) 

  const dispatch = useDispatch();
  useEffect(()=>{
    if(productId){
      dispatch(addToCart(productId,product_qty));
    }
  },[dispatch,productId,product_qty])

  return (
    <>
    <h1>Cart Screen</h1>
    <p>
      Add To Cart : ProductId: {productId} Qty:{product_qty}  
    </p>
    </>
  )
}
