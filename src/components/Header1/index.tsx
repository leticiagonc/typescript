import * as S from "./styles"
import perfil from "assets/img/perfil.svg"
import { Link } from "react-router-dom"
const Header1 = () => {
   return (
      <S.Header1>
         <h1>Nota Máxima</h1>
         <input type="text" id="pesquisar" value="&#128270;" />
         <Link to="/" >
               <img src={perfil} alt="HTML tutorial" />
            </Link>
         </S.Header1>
          )
}
            export default Header1