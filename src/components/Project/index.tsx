import { iProject } from "interface/project.interface"
import * as S from "./styles"

const Project = ({children} : iProject) => {
   return (
      <S.Project>
         {children}
         </S.Project>
          )
}
         export default Project