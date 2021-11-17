
import {useState,useEffect} from 'react';
import {useParams,useHistory} from 'react-router-dom';


function SingleProduct() {
    const container = {
        width:'80%',
        margin:'auto'
    }
    const [product,setProduct]= useState({});
    const params = useParams();
    console.log(params);
    const history = useHistory();

    // useEffect is called one time when dependent array is empty at the time of Component rendering 
    useEffect(() => {
        fetch(`/api/products/${params._id}`)
        .then((res)=>res.json())
        .then((product) =>{
            setProduct(product)
        }
            // console.log(product);
            
    )});
    return (
        <>
        <div style = {container}>
        <button className='mb-12 font-bold  ' onClick={()=>{
            history.goBack();
        }}>Back</button>
        <div className="flex">
        <img src={product.image}  alt="pizza"/>
        <div className="ml-10">
        <h1 className="font-bold"> {product.name} </h1>
        <div >{product.size}</div>
        <div className="my-1 font-bold ">{product.price}</div>
        <button className="bg-yellow-500 py-1 font-bold rounded-full mt-4 px-8"> Add to cart </button>

        </div>
        </div>
        </div>
        </>
    )
}

export default SingleProduct;
