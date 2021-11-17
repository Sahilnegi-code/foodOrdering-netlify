import ProductItem from './ProductItem';
import {useState,useEffect} from 'react';
export default function Product() {
    const container ={
        width:'80%',
        margin : 'auto'
    };
    const[ProdItem,setProductItem]=useState([]);


useEffect(()=>{
    fetch('/api/products',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
       )
    .then(response=>response.json())
    .then(products=>{
        setProductItem(products)
    });
    

}, [ProdItem] );


    return (
        <>
        <div style={container} className="py-6">

        <h1 className="text-lg font-bold my-5">Products</h1>
        <div className="grid grid-cols-5 gap-4">
    {
        ProdItem.map(prod=><ProductItem key ={prod._id} prod = {prod}/>)
    }
    
    
        </div>

        </div>
        
        </>
    )
}
