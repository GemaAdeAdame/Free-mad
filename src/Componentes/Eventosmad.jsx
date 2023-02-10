import React from 'react'
import maite from '../images/maite.jpg'
import carmina from '../images/carmina.jpg'
import michael from '../images/michael.jpg'
import ernesto from '../images/ernesto.jpg'
import ilustres from '../images/ilustres.jpg'
import antonia from '../images/antonia.jpg'
import dali from '../images/dali.jpg'
import alvarado from '../images/alvarado.jpg'
import heart from '../images/heart.svg'





function Eventosmad() {
  return (
    <div class="max-w-full h-auto container_e">
      <div><h1 class="h1">¡Eventos en Madrid!</h1></div>
      <div class="flex flex-wrap">

        <div class="rounded-lg shadow-lg bg-white max-w-sm m-8 tarjeta1_e">
          <a href="https://www.esmadrid.com/agenda/mayte-martin-quartet-auditorio-nacional-musica">
            <img class="rounded-lg my-8 ml-0 p-5" src={maite} alt="Mayte Martín"/>
          </a>

          <div class="font-bold text-xl m-5">Mayte Martín Quartet</div>
            <p class="text-base ml-5 mr-5">Jazz Auditorio Nacional, del 7 de Marzo al 26 de Abril</p>
            <img class="float-right opacity-50 hover:opacity-100 mr-5 mb-2" src={heart} alt="corazon" />
        </div>

        <div class="rounded-lg shadow-lg bg-white max-w-sm m-8 tarjeta2_e">
          <a href="https://www.esmadrid.com/agenda/excelentia-carmina-burana-auditorio-nacional-musica">
            <img class="rounded-lg my-8 ml-0 mr-10 p-5" src={carmina} alt="Carmina Burana"/>
          </a>
          <div class="font-bold text-xl m-5">Excelentia, Carmina Burana</div>
            <p class="text-base ml-5 mr-5">Orquesta clásica Santa Cecilia, del 20 de Mayo al 5 de Julio</p>
            <img class="float-right opacity-50 hover:opacity-100 mr-5 mb-2" src={heart} alt="corazon" />           
        </div>

        <div class="rounded-lg shadow-lg bg-white max-w-sm m-8 tarjeta3_e">
          <a href="https://www.esmadrid.com/agenda/michael-buble-wizink-center">
            <img class="rounded-lg my-8 ml-0 mr-10 p-5" src={michael} alt="Michael Bublé"/>
          </a>
          <div class="font-bold text-xl m-5">Concierto Michael Bublé</div>
            <p class="text-base ml-5 mr-5">Wizink Center, del 18 al 20 de Abril, dos únicos conciertos</p>
            <img class="float-right opacity-50 hover:opacity-100 mr-5 mb-2" src={heart} alt="corazon" />
        </div>

        <div class="rounded-lg shadow-lg bg-white max-w-sm m-8 tarjeta4_e">
          <a href="https://www.esmadrid.com/agenda/importancia-llamarse-ernesto-teatro-espanol">
            <img class="rounded-lg my-8 ml-0 mr-10 p-5" src={ernesto} alt="La importancia de llamarse Ernesto"/>
          </a>
          <div class="font-bold text-xl m-5">La imp. de llamarse Ernesto</div>
            <p class="text-base ml-5 mr-5">De Oscar Wilde, del 14 de Marzo al 30 de Mayo, dos funciones diarias</p>
            <img class="float-right opacity-50 hover:opacity-100 mr-5 mb-2" src={heart} alt="corazon"/>
        </div>

      </div>

      <div class="flex flex-wrap">

        <div class="rounded-lg shadow-lg bg-white max-w-sm m-8 tarjeta5_e">
          <a href="https://www.esmadrid.com/agenda/ilustres-ignorantes-teatro-cofidis-alcazar">
            <img class="rounded-lg my-8 ml-0 mr-10 p-5" src={ilustres} alt="Ilustres ignorantes"/>
          </a>
          <div class="font-bold text-xl m-5">Ilustres Ignorantes</div>
            <p class="text-base ml-5 mr-5">Séptima temporada, Teatro Gran Vía, todos los martes</p>
            <img class="float-right opacity-50 hover:opacity-100 mr-5 mb-2" src={heart} alt="corazon"/>
        </div>

        <div class="rounded-lg shadow-lg bg-white max-w-sm m-8 tarjeta6_e">
          <a href="https://www.esmadrid.com/agenda/antonia-san-juan-entrevista-mi-hija-mari-teatro-pavon">
            <img class="rounded-lg my-8 ml-0 mr-10 p-5" src={antonia} alt="Antonia SanJuan"/>
          </a>
          <div class="font-bold text-xl m-5">Antonia San Juan</div>
            <p class="text-base ml-5 mr-5">Monólogo de mi hija Mari, teatro Pavón, del 10 al 30 de Abril</p>
            <img class="float-right opacity-50 hover:opacity-100 mr-5 mb-2" src={heart} alt="corazon"/>
        </div>

        <div class="rounded-lg shadow-lg bg-white max-w-sm m-8 tarjeta7_e">
          <a href="https://www.esmadrid.com/agenda/desafio-dali-espacio-51-ifema-madrid">
            <img class="rounded-lg my-8 ml-0 mr-10 p-5" src={dali} alt="Desafio Dalí"/>
          </a>
          <div class="font-bold text-xl m-5">Desafio Dalí</div>
            <p class="text-base ml-5 mr-5">Museo Reina Sofia, del 7 de Junio al 30 de Septiembre</p>
            <img class="float-right opacity-50 hover:opacity-100 mr-5 mb-2" src={heart} alt="corazon"/>
        </div>

        <div class="rounded-lg shadow-lg bg-white max-w-sm m-8 tarjeta8_e">
          <a href="https://www.esmadrid.com/agenda/antonio-alvarado-baja-costura-museo-traje">
            <img class="rounded-lg my-8 ml-0 mr-10 p-5" src={alvarado} alt="Diseñador Antonio Alvarado"/>
          </a>
          <div class="font-bold text-xl m-5">Alvarado, baja costura</div>
            <p class="text-base ml-5 mr-5">Museo Thyssen Bornemisza, del 1 de Febrero al 1 de Mayo</p>
            <img class="float-right opacity-50 hover:opacity-100 mr-5 mb-2" src={heart} alt="corazon"/>
        </div>
  
      </div>
      
    </div>
  )
}

export default Eventosmad

