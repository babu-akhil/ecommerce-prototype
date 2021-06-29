import ProductCard from './ProductCard.js'
import {productsData} from '../ProductsData.js'
import React, {useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Carousel from 'react-material-ui-carousel'
import CardActions from '@material-ui/core/CardActions';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import LocalMall from '@material-ui/icons/LocalMall';
import TextField from '@material-ui/core/TextField';

function CardFunc(props) {
    let [quantityInput,setQuantityInput] = useState(1);


    function changeQuantityInput(e) {
        setQuantityInput(parseInt(e.target.value))
    }

    function pushToCart() {
        let order = {...props.product, quantity: quantityInput}
        props.addToCart(order)
    }

    return (
    <Card className = 'Card'>
            <CardMedia>
            <div className = 'image'>
            <Carousel width = '250px' thumbWidth = '60px'>
            {props.product.images.map((image, index) => {return(
                    <div key = {index}>
                        <img src = {image.url }></img>
                    </div>
            )})}
            </Carousel>
            </div>
            </CardMedia>
        <CardContent>
        <div className = 'name'>
            {props.product.name}
        </div>
        <div className = 'price'>
            ₹{props.product.price}
        </div>
        </CardContent>
        <CardActions>
            <TextField
            id="standard-number"
            type="number"
            className = 'quantity'
            value = {quantityInput}
            InputProps={{ inputProps: { min: 0} }}
            onChange = {changeQuantityInput}
            default = {1}
            InputLabelProps={{
                shrink: true,
            }}
            />
            <Button size = 'small' color = 'primary' onClick = {pushToCart}>
                    <AddShoppingCartIcon />
                        Add to Cart
            </Button>
        </CardActions>
    </Card>
    )

}


function ProductsDisplay(props) {

    console.log(props.CartDetails)

    return (
        <div className = 'ProductsDisplayContainer'>
            <Grid container className = 'ProductsDisplay' spacing = {2}>
                    {productsData.map((product) => {return <CardFunc product = {product} key = {product.id} addToCart = {props.changeCart}/>})}
            </Grid>
            <div className = 'Cart' style = {{visibility: props.cartVisibility?'visible':'hidden'}}>
                {props.CartDetails.map((order) => {
                    return (
                    <div className = 'orderCard' key = {order.id}>
                        <div className = 'order title'>
                            {order.name}
                        </div>
                        <div className = 'order quantity'>
                            {order.quantity}
                        </div>
                        <div className = 'order price'>
                            ₹{order.quantity*order.price}
                        </div>
                    </div>
                    )
                })}
                <div className = 'order total'>
                    ₹{props.CartDetails.reduce((total, order) => {return total + (order.quantity*order.price)}, 0)}
                </div>
            </div>
        </div>
        )
}

export default ProductsDisplay