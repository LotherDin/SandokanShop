import { useContext, useState } from "react";
import { AppContext } from "../Context";
import {  useNavigate } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@mui/material";

export function RouteCart() {
    const {cart, removeFromCart,checkout} = useContext(AppContext);
    const navigate = useNavigate();
    const [input, setInput] = useState("");
    const [errors, setErrors] = useState("");
   

    if(cart.length === 0) return <h1 style = {{color : "white"}}>Nessun prodotto nel carrello!</h1>;

   

        return(
            <div >
                <h1>Cart</h1>
                <ul>
                    {cart.map(({prod, qty}) => (
                    <Grid container spacing = {2} alignItems="center" >
                        <Grid item xs = {4}>
                            <Box component="img" sx={{width:"100%" , height:"auto" , maxWidth:"150px"}} src={prod.image} alt={prod.title}/>
                        </Grid>
                        <Grid item xs = {8}>
                            <Typography sx={{fontWeight:"bold" , color : "white"}} variant="h6">{prod.title}</Typography>
                            <Typography  sx={{fontWeight:"bold" , color : "white"}}variant="body1">Quantita : {qty}</Typography>
                            <Typography sx={{fontWeight:"bold" , color : "white"}} variant="body1">Prezzo : {prod.price}</Typography>
                            <Button variant="contained" color="error" onClick={() => removeFromCart(prod.id)}>Rimuovi da Carrello!</Button>
                            </Grid>
                    </Grid>
                    ))}
                            
                </ul>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <p style = {{color:"white", fontSize:"30px", marginLeft:"10px" }}>PROCEDI AL PAGAMENTO<br></br>
                    <p style = {{color:"white", }}>Inserisci i dati della tua carta</p>
                    
                    </p>
                    <input type="text" placeholder="Numero carta" value={input} onChange={(e) =>{
                        if(!errors) setErrors("");
                        setInput(e.target.value);
                    }}/>
                    {!!errors && <p style = {{color:"red"}}>{errors}</p>}
                    <button style={{color : "red" }} onClick={()=>{if(!input){ checkout();navigate("/checkout");
                } else setErrors("inserisci il numero della tua carta")}}>Compra</button>
                         
                </div>
                
                
            </div>
        )
    }
