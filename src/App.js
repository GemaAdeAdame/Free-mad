import "./App.css";
import Home from "./Componentes/Home";
import Login from "./Componentes/Login";
import Loginvalidado from "./Componentes/Loginvalidado";
import Frikicoders from "./Componentes/Frikicoders";
import Eventosmad from "./Componentes/Eventosmad";
import Eventosdrag from "./Componentes/Eventosdrag";
import Carrito from "./Componentes/Carrito";
import ResponsiveAppBar from "./Componentes/Navbar";
import BottomNavigation from "./Componentes/Footer";
import Apiexterna from "./Componentes/Apiexterna";



function App() {
  return (
     <div>
      <ResponsiveAppBar />
      <Home />
      <Apiexterna />
     {/* <Login />*/}
      <Loginvalidado />
      <Frikicoders />
      <Eventosmad />
      <Eventosdrag />
      <Carrito />
      <BottomNavigation />
     </div>
     
     
    
   
  
  );
}

export default App;


