import Product from '../Component/Product.js'
function Home(){

    const container ={
        width: '80%',
        margin: 'auto',
}
const fullWidth = {
    display:'flex',
    alignItems:'center',
    border:'2px solid red'  
}
const halfWidth = {
    width:'50%',
    }
return (
    
    <>
   
    <div style={container}>

    <div style={fullWidth}>   

    <div style ={halfWidth}  >
    <h4 className = "text-lg"> <em> Are you hungry? </em> </h4>
    <h1 className="text-3xl md:text-6xl font-bold" >Dont'wait.</h1>
    <button className ="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-500">Order Now</button>
    </div>

    <div  style ={halfWidth}>   
    <img style={{height:'450px'}} src="./images/po.jpg" alt="" />
    </div>
    
    </div>
    </div>

    <div className="pb-12">
    <Product/>
    </div>
    
    </>
)

};
export default Home;