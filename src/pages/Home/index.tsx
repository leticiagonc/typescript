import { Header1,Project } from "components";
import {projects} from "services/data"
import * as S from "./styles"

const Home = () => {
    return(
        <>
     <Header1 />
     <S.Main>
      {projects.map((item)=>(
          <Project key ={item.id}>
              <p>{item.materia}</p>
              <h4>  </h4>
          </Project>
      ))}
      </S.Main>

      </>
    );
};
export default Home;