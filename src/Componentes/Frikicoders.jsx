import React from 'react'
import meta from '../images/meta.jpg'
import femenino from '../images/femenino.jpg'
import reactjs from '../images/reactjs.jpg'
import techfest from '../images/techfest.jpg'

function Frikicoders() {
  return (
    <div class="completo">
      <div class="content">   
         Hello    FrikiCoders     Events¡       
      </div>
      <div class="container_l">
          <div class="evento1_l">
          <div class="evenIm"><img class="card_img" src={meta} alt='Imagen evento Metaverso'/>
            </div>
            <div class="card_texts letra_l">
              <h2 class="card_title">Meta World Congress</h2>
              <p class="card_paragraph letra_l" >El evento tecnológico dedicado al metaverso, web3, realidad virtual y realidad aumentada,se celebrará el 31 de marzo y 1 de abril,en La Nave de Madrid, el centro de innovación más importante de Madrid.</p>
            </div>
            
            <a href="https://www.lanavemadrid.com/actividad/meta-world-congress-2023/" target="_blank"><button class="boton py-4 px-4 border-b-4 rounded">
            + INFO</button></a>

          </div>

          <div class="evento2_l">

            <div class="evenIm"><img class="card_img" src={femenino} alt='Imagen evento Innovando en femenino'/></div>
              
            
              <div class="card_texts letra_l">
                <h2 class="card_title">Innovando en femenino: Mujeres en Montegancedo</h2>
                <p class="card_paragraph letra_l" >"Tendrá lugar el 13 de febrero, con motivo del Día Internacional de la Mujer y Niña en la Ciencia, en la Escuela Técnica Superior de Informática de la Universidad Politécnica de Madrid (UPM).</p>
              </div>

             
                <a href="https://www.eventbrite.es/e/entradas-innovando-en-femenino-mujeres-en-montegancedo-519661570747" target="_blank"><button class="boton py-2 px-4 border-b-4 rounded">+ INFO</button></a>
            
            </div>

            <div class="evento3_l">
              
              <div class="evenIm"><img class="card_img" src={reactjs} alt='Imagen ecurso introducción React.JS'/>
              </div>

              <div class="card_texts letra_l"> <h2 class="card_title">Introducción a React.JS</h2>
              <p class="card_paragraph letra_l" >React.JS es la librería de frontend más extendida para la creación de SPA (Single Page Applications, páginas web sin cargas).En esta clase verás como crear una pequeña aplicación con React desde cero.</p>
              </div>

              
                <a href="https://www.eventbrite.com/e/entradas-clase-introduccion-a-reactjs-519910405017" target="_blank"><button class="boton py-2 px-4 border-b-4 rounded">+ INFO</button></a>
              
            </div>

            <div class="evento4_l">

              <div class="evenIm"> <img class="card_img" src={techfest} alt='Imagen evento techfest 2023'/></div>
            
              <div class="card_texts letra_l">
                <h2 class="card_title">T3chFest 2023</h2>
                <p class="card_paragraph letra_l" >Hemos preparado un programa lo más variado y completo posible, con charlas divulgativas y técnicas, inspiradoras y de profundidad. ¡Esto es lo que podrás encontrar en los cuatro tracks durante el jueves 2 y viernes 3 de marzo!</p>
              </div> 
              
                <a href="https://www.eventbrite.es/e/entradas-t3chfest-2023-515596953367?aff=ebdssbcategorybrowse" target="_blank"><button class="boton py-2 px-4 border-b-4 rounded">+ INFO</button></a>
             
            </div>
      </div>
    </div>
  )
}

export default Frikicoders