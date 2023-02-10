import "./App.css";
import Home from "./Componentes/Home";
import Login from "./Componentes/Login";
import Frikicoders from "./Componentes/Frikicoders";
import Eventosmad from "./Componentes/Eventosmad";
import Eventosdrag from "./Componentes/Eventosdrag";
import Carrito from "./Componentes/Carrito";
import ResponsiveAppBar from "./Componentes/Navbar";
import BottomNavigation from "./Componentes/Footer";



function App() {
  return (
     <div>
      <ResponsiveAppBar />
      <Home />
      <Login />
      <Frikicoders />
      <Eventosmad />
      <Eventosdrag />
      <Carrito />
      <BottomNavigation />
     </div>
     
     
    
   
  
  );
}

export default App;
