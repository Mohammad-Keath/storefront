import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import { connect } from 'react-redux'
import {add} from '../store/ShoppingListState'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Product({product,add,ShoppingListState}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image={product.photo}
      title={product.name}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {product.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      <p>{product.discription}</p>
      </Typography>
    </CardContent>
    <CardActions>
      <AddShoppingCartIcon onClick={()=>{add(product)}}/>
      {/* <Button size="small">Add to favorate</Button> */}
    </CardActions>
  </Card>
  );
}
const mapDispatchToProps= {add}
const mapStateToProps = (state)=>({
  ShoppingListState:state.ShoppingListState
})
export default connect(mapStateToProps,mapDispatchToProps)(Product);
// export default Product