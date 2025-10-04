import styled from "styled-components";

export const CartContainer = styled.section`
  /*  */
  ` 

export const CartDetails = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  background-color: white;
  flex-direction: column;
  border-radius: 10px;
  cursor: default;
  transition: 0.4s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
  }

  width: 100%;         /* ocupa todo o container em telas pequenas */
  max-width: 600px;    /* não passa de 650px */
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: 200px;
  }

  @media screen and (min-width: 1440px){
      width: 650px;
  }
`;

export const CartText = styled.div`
.tag-sale {
  display: inline-block; /* ou inline */
  width: auto;           /* força a largura mínima necessária */
  /* max-width: fit-content; opcional, só para garantir */
  background-color:#4caf50;
  color: white;
  padding: 8px;
  border-radius: 4px;
  font-size: 1rem;
  margin-bottom: 4px;
  
}

.shipping-info {
  font-size: 0.85rem;
  color: #555;
}
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-right: 60px;

  h3 {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  p {
    margin-top: 10px;
    text-align: justify;
    margin-bottom: 10px;
  }

  h4 {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 768px) {
    h3 {
      margin-top: 0;
    }
    p {
      margin-top: 0;
      margin-bottom: 0;
    }

    h4 {
      margin-bottom: 0;
      margin-top: 0;
    }
  }

  @media screen and (min-width: 992px) {
    h3{
      margin-bottom: 0px;
    }
    
  }

  @media screen and (min-width: 1200px) {
    h3 {
      font-size: 1.5rem;
    }



    h4 {
      font-size: 1.2rem;
      margin-bottom: 0;
      margin-top: 0;
    }
  }
`;
export const CartControls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 100%;

  width: 100%;
  svg {
    cursor: pointer;
    transition: 0.4s ease;
    &:hover {
      color: red;
    }
  }
  @media screen and (min-width: 768px) {
    flex-direction: column;
    width: 100%;

    align-items: end;
    width: 15%;
  }
`;
export const CartInputs = styled.div`

  display: flex;
   width: fit-content;  
  border: 1px solid #d1d5db;
  padding: 3px;
  border-radius: 5px;
 background-color: white;


  button {
    border: none;
    background: white;
    width: 25px;
    cursor: pointer;
    svg {
      &:hover {
        color: black;
      }
    }
  }
  .plus {
    padding: 5px;
    width: 25px;
    position: relative;
    top: 5px;
  }
  .minus {
    padding: 5px;
    width: 25px;
    position: relative;
    top: 5px;
  }
  .plus svg {
    width: 15px;
    height: 15px;
  }
  .minus svg {
    width: 15px;
    height: 15px;
  }
  .number {
    padding: 7px;
    cursor: text;
    height: 100%;
  }
`;
