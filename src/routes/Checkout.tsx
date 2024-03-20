import { useContext, useEffect } from "react";
import { AppContext } from "../ContextProvider";


export function RouteCheckout() {
    const {onCheckoutSuccess} = useContext(AppContext);

    useEffect(() => {
        setTimeout(onCheckoutSuccess, 3000)
    },[]);
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", fontStyle: "roboto", color: "white"}}>
            <h1>Grazie per l'acquisto!</h1>
            <p>A breve verrai indirizzato alla Home...</p>
        </div>
    )
}