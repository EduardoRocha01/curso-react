  import {useState} from 'react'
 
 function Form(){

     function cadastrarUsuario(e){
        e.preventDefault()
        console.log(`usario ${name} foi cadastrado`)
        console.log(`usou a senha ${password} para cadastro `)
        console.log("cadastrou usuario")

     }

     const[name,setName] = useState()
     const[password, setPassword] = useState()
   
    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}> 
                <div>
                    <label htmlFor="name">nome:</label>
                    <input 
                           type="text"
                           id="name" 
                           name="name"
                           placeholder="digite seu nome"
                           onChange={(e) => setName(e.target.value)}
                        />
                </div>

                <div>
                    <label htmlFor="password">senha:</label>
                    <input  
                    type="password" 
                    id="password" 
                    name="password"  
                    placeholder="digite sua senha"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )

 }

 export default Form