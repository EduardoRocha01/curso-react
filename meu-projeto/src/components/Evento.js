function Evento(){

    function meuEvento(){
        console.log("opa, fui ativado")
        
    }



    return(
      <div>
        <h1>testando eventos</h1>
        <p>Clique para disparar um evento</p>
        <button onClick={meuEvento}>ativar</button>
      </div>

    )
}

export default Evento