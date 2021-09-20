import * as S from "./style"
import { Link } from "react-router-dom"
const Main1 = () => {
   return (
       <S.Main1>
           <h3>Disciplinas:</h3>
           <p>
            <h1> Biologia </h1>
                <Link to="Biologia">BIOlOGIA</Link>   
                <Link to="/">QUIMICA</Link>
                <Link to="/">FISICA</Link>
                <Link to="/">MATEMATICA</Link>
                <Link to="/">GEOGRAFIA</Link>
                <Link to="/">HISTORIA</Link>
                <Link to="/">SOCIOLOGIA</Link>
                <Link to="/">FILOSOFIA</Link>
                <Link to="/">REDACAO</Link>
                <Link to="/">LITERATURA</Link>
                <Link to="/">INGLES</Link>
           </p>
           <h4 className="table2">Encontre todos os conteúdos que caem no ENEM e vestibulares
             <Link to="" className="caixa">Conheça nossos planos!</Link>
            </h4>
       </S.Main1>
   )
}

export default Main1