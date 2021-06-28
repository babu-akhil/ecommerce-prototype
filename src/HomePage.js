import Navbar from './Components/Navbar.js'
import SneakersGif from './Images/Homepage/sneakers.gif'
import Footer from './Components/Footer.js'

function Banner() {
    return (
        <a  id = 'Bannerlink' href = '/shop'>
        <div id = 'Banner'>
            <img src = {SneakersGif}></img>
            <p> 🔥 👟 <br></br>get yours<br></br>today</p>
        </div>
        </a>
    )
}



function HomePage() {

return (
    <div>
        <Navbar page = 'Homepage'/>
        <Banner />
        <Footer />
    </div>
)   

}

export default HomePage;
