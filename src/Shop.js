import Navbar from './Components/Navbar.js'
import Footer from './Components/Footer.js'
import ProductsDisplay from './Components/ProductsDisplay.js'
import background from './Images/wallpaper2.jpg'
import {useState, useEffect} from 'react'

function Shop() {

    let [Cart,setCart] = useState([])
    let [number,setNumber] = useState(0);

    function handleChangeCart(order) {
        let newCart = [...Cart, order]
        setCart(newCart)
    }

    useEffect(() => {
        let NewNumber = Cart.reduce((total, order)=>{return (total + (order.quantity))}, 0)
        setNumber(NewNumber)
        console.log(NewNumber)
    }, [Cart]);

    return (
    <div id = 'ShopContainer' style = {{backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <Navbar page = 'Shop' numberItems = {number}/>
        <ProductsDisplay Cart = {Cart} changeCart = {handleChangeCart}/>
        <Footer />
    </div>
    )
}




export default Shop