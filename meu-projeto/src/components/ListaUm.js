
import itemDaLista from "./itemDaLista.js"
import Style from "./ListaUm.module.css"


function ListaUm(item,velocidade){
    return(
       <div>
        <h1>Meios de trasnporte</h1>
        <ul id="bloco">
          <li>{item="bicicleta"} {velocidade="15-Km/h"}</li>
           <li>{item="carro"} {velocidade="120-Km/h"} </li>
           <li>{item="moto"} {velocidade="100-Km/h"}</li>
           <li>{item="avião"}- {velocidade="3000-Km/h"}</li>        
           <li>{item="barco"}- {velocidade="150-Km/h"}</li>        
           
        </ul>
       
       
       </div>
    )
}

export default ListaUm