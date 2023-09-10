import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Product({product}) {
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
      Discription: {product.discription}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Add to Cart</Button>
      <Button size="small">Add to favorate</Button>
    </CardActions>
  </Card>
  );
}

export default Product;