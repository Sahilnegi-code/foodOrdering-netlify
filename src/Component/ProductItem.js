import { Link} from "react-router-dom";
import {useContext,useState} from 'react';
import {CartContext} from '../CartContext';

 function ProductItem(props) {
   const [isAdding ,setIsAdding] = useState(false);

    const {cart,setCart}  = useContext(CartContext);
     



const addToCart = (e,product)=>{
  e.preventDefault();
  let _cart = {...cart}
  if(!_cart.items){
    _cart.items ={};
  }
  if(_cart.items[product._id]){
    _cart.items[product._id]+=1;

  }
  else{
    _cart.items[product._id]=1;
  }
  if(!_cart.totalItems){
    _cart.totalItems = 0;

  }
  _cart.totalItems+=1;
  setCart(_cart);
  setIsAdding(true);
  setTimeout(()=>{
  setIsAdding(false);
  },1000)
}

     
    return (
        <>
      <Link to = {`/products/${props.prod._id}`}>

      <div>
      <img   src={props.prod.image} alt="pizza" />
      <div className="text-center">
      <h2 className="text-lg font-bold py-2">{props.prod.name}</h2>
      <span className="bg-gray-200 py-1 rounded-full px-4 ">{props.prod.size}</span>
      </div>
      <div className="flex justify-between items-center mt-1" >
      <span>₹{props.prod.price}</span>
      <button disabled={isAdding} onClick={(e)=>{addToCart(e,props.prod)}} className={`${isAdding? 'bg-green-500':'bg-yellow-500'} rounded-full font-bold px-4 py-1`}>ADD
      {isAdding?'ED':''}</button>    
      </div>
      </div>

      </Link>

            
        </>
    )
}
export default ProductItem;