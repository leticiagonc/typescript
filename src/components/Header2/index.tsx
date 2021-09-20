import * as S from "./styles"
import perfil from "assets/img/perfil.svg"
const Header2 = () => {
   return (
      <S.Header2>
         <h1>Biologia</h1>
         <input type="text" id="pesquisar" value="&#128270;" />
         <a href="perfildousuario.html" >
               <img src={perfil} alt="HTML tutorial" />
            </a>
         </S.Header2>
          )
}
            export default Header2