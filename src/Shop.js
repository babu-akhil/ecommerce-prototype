import Navbar from "./Components/Navbar.js";
import Footer from "./Components/Footer.js";
import ProductsDisplay from "./Components/ProductsDisplay.js";
import background from "./Images/wallpaper2.jpg";
import { useState, useEffect } from "react";
import {productsData} from './ProductsData.js'

function Shop() {
  let [Cart, setCart] = useState([]);
  let [number, setNumber] = useState(0);
  let [SimplifiedCart, setSimplifiedCart] = useState([])
  let [cartVisibility, setCartVisibility] = useState(false)

  function handleChangeCart(order) {
    let newCart = [...Cart, order];
    setCart(newCart);
  }

  function toggleCartVisibility(){
      setCartVisibility(!cartVisibility)
      console.log(cartVisibility)
  }

  function simplifyCart() {

    let ids = [...new Set (Cart.map(order => order.id))]

    let cart = []
    for(const id of ids) {
        let quantityOfId = Cart.filter(order => order.id === id).reduce((total, order) => {return total + order.quantity}, 0)
        let productDetails = productsData.filter(product => product.id === id)[0]
        cart.push({...productDetails, quantity: quantityOfId})
    }
    setSimplifiedCart(cart)
  }

  useEffect(() => {
    let NewNumber = Cart.reduce((total, order) => {
      return total + order.quantity;
    }, 0);
    setNumber(NewNumber);
    simplifyCart()
  }, [Cart]);

  return (
    <div
      id="ShopContainer"
      style={{
        backgroundColor: '#bbd4ce'
      }}
    >
      <Navbar page="Shop" numberItems={number} toggleCartVisibility = {toggleCartVisibility}/>
      <ProductsDisplay Cart={Cart} changeCart={handleChangeCart} CartDetails = {SimplifiedCart} cartVisibility = {cartVisibility}/>
      <Footer />
    </div>
  );
}

export default Shop;
