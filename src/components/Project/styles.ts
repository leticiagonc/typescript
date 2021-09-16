import styled from "styled-components"

export const Project = styled.section `
width: 100px;
padding: 20px;
margin: 10px;
display: flex; 
flex-direction: row;
text-align: justify;

.table1 {
    border-style: lightblue ;
    background-color: lightblue; 
    margin: 25px 25px 25px 25px;
    text-align: center;
    border-radius: 3rem;
   }
   .table2{
    border-style: lightblue ;
    background-color: lightblue; 
    margin: 25px 25px 25px 25px;
    text-align: center;
    border-radius: 3rem;
    align-items: center;
    justify-content: center;
    width: 50%;
    display:flex;
    flex-direction:row;
}
.index{
    text-align: center;
    border-radius: 3rem;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column; 

    h4{
    text-align: center;
    border-radius: 3rem;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    .caixa{
    width: 25%;
    border-style: rgb(99, 111, 223) solid;
    background-color: rgb(99, 111, 223);  
    text-align: center;
    font-family: Arial;
    border-radius: 3rem;
    align-items: center;
    justify-content: center;
    }
  }
}

.caixa{
    width: 25%;
    border-style: rgb(99, 111, 223) solid;
    background-color: rgb(99, 111, 223);  
    text-align: center;
    font-family: Arial;
    border-radius: 3rem;
    align-items: center;
    justify-content: center;
}
`