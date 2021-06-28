import Navbar from './Components/Navbar.js'
import Footer from './Components/Footer.js'
import ProductsDisplay from './Components/ProductsDisplay.js'
import background from './Images/wallpaper2.jpg'


function Shop() {
    return (
    <div id = 'ShopContainer' style = {{backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <Navbar page = 'Shop'/>
        <ProductsDisplay />
        <Footer />
    </div>
    )
}




export default Shop