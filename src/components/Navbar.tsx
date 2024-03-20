import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { AppContext } from "../Context";
import { Link, useNavigate } from "react-router-dom";

import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";


export default function DrawerAppBar() {
    const { getTotalProductInCart, logout, username } = useContext(AppContext);
    const total = getTotalProductInCart();
    const navigate = useNavigate();
  




    

    return (
        <>
        <CssBaseline/>
        <AppBar component="nav" sx={{ backgroundColor: "#31363F" }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                    <Link to = "/" style = {{textDecoration : "none", color : "white"}}>SANDOKAN-SHOP</Link>
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <IconButton sx={{marginRight: "50px"}} aria-label="cart" onClick={() => navigate("/cart")}>
                        <Badge badgeContent={total} color="error">
                            <ShoppingCartIcon sx={{ color: 'white', marginLeft: "10px" }} />
                        </Badge>
                    </IconButton>
                    {!!username && (<Button sx={{ color: 'white', }} onClick={logout} variant="contained" color="error">Logout { "     "}{username}</Button>)}
                </Box>
            </Toolbar>
        </AppBar>
        </>
    );
}
   