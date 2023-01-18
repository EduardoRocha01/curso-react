import {useState} from 'react'

function FormularioDois(){
      
    function CadastrarUser(e){
         e.preventDefault()
        console.log(`o usuario ${nome} /com data de nascimento ${datanacimento} / e CPF: ${cpf} se cadastrou`)
        

    }

       const[nome,setName] = useState()
       const[datanacimento,setDatanacimento] = useState()
       const[cpf,setCpf] = useState()

      return (
        <div>
            <h1>Formulario</h1>

            <form onSubmit={CadastrarUser}>
                  <div>
                        <label  htmlFor="name">Nome:</label>
                        <input 
                          type="text" 
                           id="nome"
                             name="nome"
                              placeholder="digite seu nome"
                               onChange={(e) => setName( e.target.value)}
                               />
                  </div>

                  <div>
                        <label  htmlFor="datanacimento">nascimento:</label>
                        <input
                         type="date"
                          id="datanacimento"
                           name="datanacimento"
                            placeholder="data de nascimento"
                             onChange={(e) => setDatanacimento(e.target.value)}
                             />
                  </div>

                  <div>
                        <label  htmlFor="cpf">nascimento:</label>
                        <input
                         type="number"
                          id="cpf"
                           name="cpf"
                            placeholder="digite seu CPF"
                            onChange={(e) => setCpf(e.target.value)}
                            />
                  </div>

                  <div><input type="submit"  value="cadastar"/></div>
            </form>
        </div>
      )
}

export default FormularioDois