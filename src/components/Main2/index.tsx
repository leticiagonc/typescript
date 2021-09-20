import * as S from "./style"
import { Link } from "react-router-dom"
import foto1 from "assets/img/briofitas.svg"
import foto2 from "assets/img/pteridofita.svg"
import foto3 from "assets/img/gimnosperma.svg"
import foto4 from "assets/img/angiospermas.svg"
const Main2 = () => {
   return (
       <S.Body2>
           <h3 className ="videos">Videoaulas e  exercícios</h3>
           <h4>Videoaulas:</h4>
      <img  src= {foto1} alt="Briófita" width="100" height="150"/>
      <img  src= {foto2} alt="Pteridófita" width="100" height="150"/>
      <img  src= {foto3} alt="Gimnosperma" width="100" height="150"/>
      <img  src= {foto4} alt="Angiosperma" width="100" height="150"/>
      <h4>Exercícios:</h4>
      <Link to="/">ENEM</Link> 
       
      
      <Link to="/">Vestibulares</Link>
       </S.Body2>
   )
   }
   export default Main2