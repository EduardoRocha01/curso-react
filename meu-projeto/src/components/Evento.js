import Button from "./evento/Button"

function Evento(){

     function meuEvento(){
        console.log(`ativando primeiro evento`)
        
    }

    function segundoEvento(){
      console.log("ativando segundo evento")
    }



    return(
      <div>
        <h1>testando eventos</h1>
        <p>Clique para disparar um evento</p>
        <Button event={meuEvento} text="primeiro evento"/>
        <Button event={segundoEvento} text="segundo evento"/>
        
      </div>

    )
}

export default Evento