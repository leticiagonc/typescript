import * as S from "./styles"
import perfil from "assets/img/perfil.svg"
import { Link } from "react-router-dom"
const Header2 = () => {
   return (
      <S.Header2>
         <h1>Biologia</h1>
         <input type="text" id="pesquisar" value="&#128270;" />
         <Link to="/" >
               <img src={perfil} alt="HTML tutorial" />
            </Link>
         </S.Header2>
          )
}
            export default Header2
            