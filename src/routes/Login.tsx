import { useContext, useState } from "react";
import { AppContext } from "../Context";

export function RouteLogin() {
  const { login } = useContext(AppContext);
  const [inputUsername, setInputUsername] = useState<string>("");

  return (
    <div style={{ display: "flex", flexDirection: "column",  alignItems: "center" , backgroundColor : "#76ABAE"}}>
      <h1>SANDOKAN SHOP</h1>
      <h1>Login</h1>
      <input
        type="text"
        value={inputUsername}
        onChange={(e) => setInputUsername(e.target.value)}
      />
      <button
        onClick={() => {
          login(inputUsername);
        }}
      >
        Login
      </button>
    </div>
  );
}
