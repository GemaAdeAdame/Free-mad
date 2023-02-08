

import React, { component } from 'react';
import corazon from '../images/heart.jpeg';
import helado from '../images/icecream.jpeg';
import gafas from '../images/gafas.jpeg';
import club from '../images/club.jpeg';



class Home extends React.Component{
  render() {
    return (
      <div className='ana-contenedor' container spacing={2}>

        <section className='ana-textosection'>
          <h1 className='ana-text'>Música</h1>
          <h1 className='ana-text'>Cine</h1>
          <h1 className='ana-text'>Código</h1>
          <h1 className='ana-text'>Frikismo</h1>
          <h1 className='ana-text'>Y mucho más...</h1>
		    </section>

       <img className='ana-imagen3' src={corazon} alt="corazon de neon" />
       <img className='ana-imagen4' src={helado} alt="helado de neon" />
       <img className='ana-imagen5' src={gafas} alt="gafas estilo vintage" />
       <img className='ana-imagen6' src={club} alt="antisocial social club" />
      
     </div>
    
     
    );
  }
}

export default Home;

