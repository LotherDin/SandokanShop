

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Product } from "../declarations";


export function RouteProduct() {
  const { idProduct,  } = useParams<{ idProduct?: string }>();
  const { addToCart } = useContext(AppContext);
  const [product, setProduct] = useState<Product>();
  //devi fare in modo che i prodotti si scaricano sono nella pagina prodotto,
 

 useEffect(() => {
  getProduct();
   
 },[])
  async function getProduct() {
    const response = await fetch(`https://mockend.up.railway.app/api/products/${idProduct}`);
    const data:Product = await response.json();
    setProduct(data);
  }

    



  
if(!product) {
  return <div>Loading...</div>
}

  return (
   <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
      <Box component="img" sx={{ width: "100%",  height: "auto" }}
      src={product.image}
      alt={product.title}
      />
    </Grid>
    <Grid item xs={12} md={6} justifyContent="center" sx={{ display: "flex" , flexDirection: "column"  }}>
      <Typography variant="h4">{product.title}</Typography>
      <Typography variant="body1">Prezzo:{product.price}</Typography>
      <Typography variant="body1">Quantita`:{product.qty}</Typography>

    
    <Button variant="contained" color="primary" sx={{mt:2}} size="medium" onClick={() => addToCart(product , 1)}>
      Aggiungi al carrello
    </Button>
    </Grid>
   </Grid>
    )
}

