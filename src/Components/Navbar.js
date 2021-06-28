function Navbar(props) {
    
    
    return (
    <div id = {props.page}>
        <div id = 'navbar'>
            <h1 className = 'title'> SNKRFNK//// </h1>
            <a href = './' className = {props.page =='Homepage'?'item-active':'item'}>Home</a>
            <a href = './shop' className = {props.page == 'Shop'?'item-active': 'item'} >Shop</a>
        </div>
    </div> 
)


}




export default Navbar