import style from './Frases.module.css'

function Frases(){
  return(
    <div className={style.FrasesContainer}>
        <p className={style.FrasesContent}>Este é um componente com uma frase</p>
    </div>
  )
}

export default Frases