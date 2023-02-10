import React from 'react'

import Dragalada1 from '../images/drag.jpeg'
import Dragalada2 from '../images/drrag.jpeg'


import Escape1 from '../images/ghile.jpeg'
import Escape2 from '../images/malasami.jpeg'
import Escape3 from '../images/sukka.jpeg'
import BeFresh1 from '../images/venedita.jpeg'
import BeFresh2 from '../images/shameless.jpeg'
import BeFresh3 from '../images/yenesi.jpeg'
import BeFresh4 from '../images/sethals.jpeg'
import Lolailo1 from '../images/lolailo.jpeg'
import Lolailo2 from '../images/lolailo2.jpg'
import Lolailo3 from '../images/lolailo3.jpg'

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';




function Eventosdrag() {
  return (
    <div class='fiestas'>
        <h2 class='titulos'>NO TODO ES LA NOCHE: DRAGALADA</h2>
        <div class='pack1'>
          <p class='textopack'>
            Pero exactamente, ¿qué es la Dragalada?<br/>

            La Dragalada Drag Tour es la primera fiesta drag diurna que se realiza simultáneamente en 6 locales del barrio de Chueca, entre los que los asistentes rotan de forma periódica. <br/>

            En cada edición de la Dragalada el elenco de artistas drags cambia, para mostrarle al público nuevos talentos y resaltar la diversidad del mundo drag. Entre los participantes de la Dragalada ha habido drag queens (hombres cis que se travisten de mujer), drag kings (mujeres cis que se travisten de hombre), artistas drags transexuales y no binarios, y hyper queens (mujeres cis que practican el arte del drag como drag queens).<br/></p>
        
        <section class='Fotos-dragalada'>
        <img src={Dragalada1} alt='Escape'/>
        <img src={Dragalada2} alt='Escape' />
     
        
        </section>
        </div>

        <h2 class='titulos'>LOS MEJORES LOCALES Y FIESTAS</h2><br/>
        <p class='texto-titulo'>
        El arte del travestismo vive un momento dorado en su larga historia en nuestro país. Si hasta hace algunos años era un movimiento asociado por muchos a la noche, hoy las artistas drag bucean por diferentes plataformas y ambientes. Programas de televisión, redes sociales, locales diurnos… nuevos espacios para mostrar un ejercicio artístico total, que combina moda, maquillaje, presencia escénica, improvisación, humor e imaginación, y que cada día cuenta con más adeptos. <br/>
        </p>
        <h3 class='titulos2'>FLUIDE ESCAPE</h3>
        <div class='pack1'>
        
        <section class='Fotos-dragalada'>
        <img src={Escape1} alt='Escape'/>
        <img src={Escape2} alt='Escape' />
        <img src={Escape3} alt='Escape' />
        
        
        </section>
        <p class='textopack'>
        ¿Cual es el objetivo de Fluide Escape?
        Ofrecer a la comunidad lésbica, no binaria... LGTBQ+ un espacio nocturno de ambiente con música en directo y “enlatada” , Shows y Dancing donde el “Bollerio”: bolleras, tortilleras, señoras, puedan reunirse, enamorarse, bailar y divertirse en libertad en la plaza de chueca. </p>
        </div>

        <h3 class='titulos2'>BeFresh</h3>

        <div class='pack2'>
        <p class='textopack'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        </p>
        
        <section class='Fotos-dragalada'>
        <img src={BeFresh1} alt='dragalada'/>
        <img src={BeFresh2} alt='dragalada' />
        <img src={BeFresh3} alt='dragalada' />
        <img src={BeFresh4} alt='dragalada' />
        
        
        </section>
        </div>
        <h3 class='titulos2'>Lolailo</h3>
        <div class='pack3'>
        
        <section class='Fotos-dragalada'>
        <img src={Lolailo1} alt='Escape'/>
        <img src={Lolailo2} alt='Escape' />
        <img src={Lolailo3} alt='Escape' />
        
        
        </section>
        <p class='textopack'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </p>
        </div>
        
      
 


        
      
        </div>
          






       
  

  
  )
}

export default Eventosdrag

