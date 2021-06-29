import {ShoppingBasket } from '@material-ui/icons';
import Badge from '@material-ui/core/Badge';
import { IconButton } from '@material-ui/core';



function Navbar(props) {
    
    
    return (
    <div id = {props.page}>
        <div id = 'navbar'>
            <div className = 'left'>
                <h1 className = 'title'> SNKRFNK//// </h1>
                <a href = './' className = {props.page =='Homepage'?'item-active':'item'}>Home</a>
                <a href = './shop' className = {props.page == 'Shop'?'item-active': 'item'} >Shop</a>
            </div>
            <div className = 'right'>
                <IconButton className = 'Cart'>
                    <Badge className = 'cartBadge' badgeContent = {props.numberItems} color = 'secondary' showZero><ShoppingBasket/></Badge>
                </IconButton>
            </div>
        </div>
    </div> 
)


}




export default Navbar