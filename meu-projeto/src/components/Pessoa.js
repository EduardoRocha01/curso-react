function Pessoa({nome,idade,profição,foto}){
    
    return(
        <div>
            <img src={foto} alt={nome}></img>
            <h2>Nome:{nome}</h2>
            <p>Idade:{idade}</p>
            <p>profição:{profição}</p>


    </div>
    )
}

export default Pessoa