function Formulario(){

     function nomeUsuario(){
        
     }

    return(
        <div>
            <h1>formulario</h1>
            <form onSubmit={nomeUsuario}>
                <div><input type="text" placeholder="digite seu nome"/></div>
                <div><input type="submit" value="cadastrar"/></div>
            </form>
        </div>
    )
}

export default Formulario