import {Link} from "react-router-dom";
import {useContext} from 'react';
import { CartContext } from "../CartContext";
export default function Navigation() {
    const cartStyle ={
        background:'orange',
        display: 'flex',
        padding : '6px 12px',
        borderRadius : '60px'
    }
    const container ={
        width: '80%',
        margin: 'auto',
          

    }
    const {cart} = useContext(CartContext);
    return (
        <>

        <nav style={container} className="flex  justify-between py-4">
        <Link to = "/">
        <img style={{height:50,borderRadius:'44%'}} src="./images/logo.jpg" alt="" />
        </Link>

        <ul className="flex items-center justify-between">
        
        <li><Link to ="/">Home</Link></li>
        <li  className='ml-4'> <Link to ="/product">Product</Link>   </li>
        <li className='ml-4'><Link  to ="/cart"><div style={cartStyle}><span>{cart.totalItems?cart.totalItems:0}</span><img className="ml-2" style ={{height:25 ,borderRadius:30}}src="./images/cart.jpg" alt="cart" /></div></Link></li>
        </ul>
        
        </nav>
            
        </>
    )
}
