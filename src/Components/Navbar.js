import {ShoppingBasket } from '@material-ui/icons';
import Badge from '@material-ui/core/Badge';
import { IconButton } from '@material-ui/core';
import {Link} from 'react-router-dom'


function Navbar(props) {
    
    
    return (
    <div id = {props.page}>
        <div id = 'navbar'>
            <div className = 'left'>
                <h1 className = 'title'> SNKRFNK//// </h1>
                <Link to = '/' className = {props.page =='Homepage'?'item-active':'item'}>Home</Link>
                <Link to="/shop" className = {props.page == 'Shop'?'item-active': 'item'} >Shop</Link>
            </div>
            <div className = 'right'>
                <IconButton className = 'Cart' onClick = {props.toggleCartVisibility}>
                    <Badge className = 'cartBadge' badgeContent = {props.numberItems} color = 'secondary' showZero><ShoppingBasket/></Badge>
                </IconButton>
            </div>
        </div>
    </div> 
)


}




export default Navbar