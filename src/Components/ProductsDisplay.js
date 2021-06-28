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



function CardFunc(props) {
    console.log(props.product.images)

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
            <Button size = 'small' color = 'primary'>
                    <AddShoppingCartIcon />
                        Add to Cart
            </Button>
            <Button size = 'small' color = 'primary'>
                    <LocalMall />
                        Buy now
            </Button>
        </CardActions>
    </Card>
    )

}


function ProductsDisplay() {
    return (
        <Grid container className = 'ProductsDisplay' spacing = {2}>
                {productsData.map((product) => {return <CardFunc product = {product} key = {product.id}/>})}
        </Grid>
    )
}

export default ProductsDisplay