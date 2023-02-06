import React from 'react'
import cerebralCul from '../images/cerebralCul.jpeg'
import femenino from '../images/femenino.jpeg'
import reactjs from '../images/reactjs.jpeg'
import techfest from '../images/techfest.jpeg'

function Frikicoders() {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <div class="text-center titulo_l">
        <h2>FrikiCoders ¿Quieres saber lo que se programa en tú ciudad?</h2>
      </div>
      <div class="container-l">

        <div class="flex flex-wrap">

          <div class="rounded-lg shadow-lg max-w-sm m-8 evento1_l">
            <a href="https://www.lanavemadrid.com/actividad/meta-world-congress-2023/" data-mdb-ripple="true" data-mdb-ripple-color>
              <img class="rounded-lg my-6 ml-0 p-4" src={cerebralCul} alt='Imagen evento Metaverso'/>
            </a>
            <div class="font-bold text-xl m-5 letra_l">Meta World Congress</div>
            <p class="text-base ml-6 mr-6 letra_l" >Meta World Congress, el evento tecnológico dedicado al metaverso, web3, realidad virtual y realidad aumentada, ya tiene reservadas las fechas de su primera edición, que se celebrará el próximo 31 de marzo y 1 de abril de 2023, en La Nave de Madrid, el centro de innovación más importante de Madrid.</p>
            </div>

            <div class="rounded-lg shadow-lg max-w-sm m-8 evento2_l">
            <a href="https://www.eventbrite.es/e/entradas-innovando-en-femenino-mujeres-en-montegancedo-519661570747" data-mdb-ripple="true" data-mdb-ripple-color>
              <img class="rounded-lg my-6 ml-0 mr-10 p-4" src={femenino} alt='Imagen evento Innovando en femenino'/>
            </a>
            <div class="font-bold text-xl m-5 letra_l">Innovando en femenino: Mujeres en Montegancedo</div>
            <p class="text-base ml-6 mr-6 letra_l" >"Innovando en femenino: Mujeres en Montegancedo" es un evento que tendrá lugar el próximo 13 de febrero, con motivo del Día Internacional de la Mujer y Niña en la Ciencia, en la Escuela Técnica Superior de Informática de la Universidad Politécnica de Madrid (UPM).El Campus Científico-Tecnológico de la upm, de Excelencia Internacional, acoge un evento organizado conjuntamente por los centros: IMDEA Software, CeDInt, E-USOC, CBGP, IDR y CTB, en el que sus investigadoras mostrarán su trabajo a jóvenes de entre 14-16 años, a través de ingeniosos talleres, retos, charlas y también habrá un debate.</p>
            </div>

            <div class="rounded-lg shadow-lg max-w-sm m-8 evento3_l">
            <a href="https://www.eventbrite.com/e/entradas-clase-introduccion-a-reactjs-519910405017" data-mdb-ripple="true" data-mdb-ripple-color>
              <img class="rounded-lg my-6 ml-0 p-4" src={reactjs} alt='Imagen ecurso introducción React.JS'/>
            </a>
            <div class="font-bold text-xl m-5 letra_l"> Introducción a React.JS</div>
            <p class="text-base ml-6 mr-6 letra_l" >React.JS es la librería de frontend más extendida para la creación de SPA (Single Page Applications, páginas web sin cargas).En esta clase verás como crear una pequeña aplicación con React desde cero: una aplicación de contactos al estilo Tinder.Para ello repasaremos las características fundamentales de la librería y crearemos tantos componentes funcionales como necesitemos para dar vida a nuestro particular IronTinder. Como siempre, tras la clase recibiréis todos los códigos desarrollados así como los materiales utilizados durante la misma.</p>
            </div>

            <div class="rounded-lg shadow-lg max-w-sm m-8 evento4_l">
            <a href="https://www.eventbrite.es/e/entradas-t3chfest-2023-515596953367?aff=ebdssbcategorybrowse" data-mdb-ripple="true" data-mdb-ripple-color>
              <img class="rounded-lg my-6 ml-0 p-4" src={techfest} alt='Imagen evento techfest 2023'/>
            </a>
            <div class="font-bold text-xl m-5 letra_l">T3chFest 2023</div>
            <p class="text-base ml-6 mr-6 letra_l" >Hemos preparado para T3chFest 2023 un programa lo más variado y completo posible, con charlas divulgativas y técnicas, inspiradoras y de profundidad. ¡Esto es lo que podrás encontrar en los cuatro tracks durante el jueves 2 y viernes 3 de marzo!</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Frikicoders