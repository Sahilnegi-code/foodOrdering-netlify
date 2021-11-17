import {useContext,useEffect,useState} from  'react';
import { CartContext } from '../CartContext';
export default function Cart() {
  let total=0;
  const [priceFetched, togglePriceFetched] = useState(false);
  const [products,setProducts]= useState([]);
  const { cart , setCart} = useContext(CartContext);
  
  function getSum(productId, price){
    const sum = price * getQty(productId);
    total +=sum;
    return sum;
  }

  const getQty=(productId)=>{
    return cart.items[productId];
  }

  const increment =(productId)=>{
    const oldQty = cart.items[productId];
    const _cart = {...cart};
    _cart.items[productId]= oldQty+1;
    _cart.totalItems+=1;
    setCart(_cart)
    
  }

  const decrement =(productId)=>{
    const oldQty = cart.items[productId];
    if(oldQty===1){
      return;
    }
    const _cart = {...cart};
    _cart.items[productId]= oldQty-1;
    _cart.totalItems-=1;
    setCart(_cart)
    
  }

  useEffect(() => {
    if(!cart.items){
      return;
    }
    if(priceFetched){

      return true;  
    } 
    fetch('/api/products/cart-items',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        ids:Object.keys(cart.items)
      })
      
    }).then(res=>res.json())
    .then(products=>{
      setProducts(products);
      togglePriceFetched(true);
    })
  },[cart,priceFetched])
  
  const handleDelete=(productId)=>{
    const _cart = {...cart};
    const qty = _cart.items[productId]
    delete _cart.items[productId];
    _cart.totalItems -=qty;
    setCart(_cart); 
    const updatedProductList  = products.filter((product)=>product._id !== productId);
    setProducts(updatedProductList);
  }
  const orderNow = ()=>{
    window.alert('Ordered Succesfully');
    setCart([]);
    setProducts([]);
  }
  const container ={
    width:'60%',
    margin:'auto'
  }
    return (
      
      products.length ?   
      <>
      <div className="pb-24 w-full lg:w-1/2" style = {container}>
      <h1 className="my-12 font-bold">Cart items</h1>
          <ul >
          {
            products.map(product=>{
              return (
                

                <li className="mb-12" key={product._id}>

                <div className = "flex items-center justify-between">
      
                <div className = "flex items-center  ">
                <img style={{width:'100px'}} src="/images/p.jpg" alt="" />
                <span className ="ml-4 font-bold w-48   "> {product.name}</span>
                </div>
      
                <div>
                <button onClick={()=>{decrement(product._id)}} className="bg-yellow-500 py-2 px-4 rounded-full leading-none">-</button>
                <b className="px-4">{getQty(product._id)}</b>
                <button onClick={()=>{increment(product._id)}} className="bg-yellow-500 py-2 px-4 rounded-full leading-none">+</button>
                </div>
      
                <span >{getSum(product._id, product.price)}</span>
                <button onClick={()=>{handleDelete(product._id)}} className = "bg-red-500 px-4 py-2 rounded-full text-white leading-none">Delete</button>
                </div>
      
                <hr className="my-6 "/>
                </li>

             
              )
            })
 

          }


      
           </ul>
          <div className ="text-right font-bold">
          <b>Grand Total</b>: { total }
          </div>

          <div className ="text-right mt-6">
          <button onClick={orderNow} className="bg-yellow-500 px-4 py-2 rounded-full leading-none "> Order Now</button>
          </div>

      
          </div>
          </>
          :
          <img src="./images/emptyCart.png" className="mx-auto w-1/2 mt-12" alt ="emptyCart"/ >
        
      
    )
}
