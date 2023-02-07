import "./App.css";
import Home from "./Componentes/Home";
import Login from "./Componentes/Login";
import Loginvalidado from "./Componentes/Loginvalidado";
import Frikicoders from "./Componentes/Frikicoders";
import Eventosmad from "./Componentes/Eventosmad";
import Eventosdrag from "./Componentes/Eventosdrag";
import Carrito from "./Componentes/Carrito";



function App() {
  return (
     <div>
      <Home />
     {/* <Login />*/}
      <Loginvalidado />
      <Frikicoders />
      <Eventosmad />
      <Eventosdrag />
      <Carrito />
     </div>
     
     
    
   
  
  );
}

export default App;
