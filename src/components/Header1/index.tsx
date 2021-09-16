import * as S from "./styles"
import perfil from "assets/img/perfil.svg"
const Header1 = () => {
   return (
      <S.Header1>
         <h1>Nota Máxima</h1>
         <input type="text" id="pesquisar" value="&#128270;" />
         <a href="perfildousuario.html" >
               <img src={perfil} alt="HTML tutorial" />
            </a>
         </S.Header1>
          )
}
            export default Header1