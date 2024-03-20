import MaterialCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useContext, useState } from "react";
import { AppContext } from "../Context";
import { Product } from "../declarations";
import { Link } from "react-router-dom";
import ShoppingCart from "@mui/icons-material/AddShoppingCart";

interface Props {
  product: Product;
}

export function Card({ product }: Props) {
  const { addToCart, getTotalAvailableProduct } = useContext(AppContext);

  const totalAvailable = getTotalAvailableProduct(product);
  const [input, setInput] = useState(1);
  return (
    <MaterialCard sx={{ maxWidth: 345 , minHeight : 450, display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
      <CardActionArea>
        <Link
          to={`/product/${product.id}`}
          style={{ textDecoration: "none" }}       
        >
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt={product.title}
          />
        </Link>

        <CardContent sx={{ padding: "20px", maxHeight: 140 ,  }}>
          <Typography sx={{ fontWeight: "bold", }} gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <span>Disponibilità {totalAvailable}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", height: 150, alignItems: "flex-end" , padding: "20px" }}>
       
        <Button
          variant="contained"
          endIcon={<ShoppingCart />}
          disabled={totalAvailable === 0}
          onClick={() => addToCart(product, input)}
        >
          {totalAvailable > 1 ? "Aggiungi al carrello" : "Non disponibile"}
        </Button>
      </CardActions>
    </MaterialCard>
  );
}
