import styled from "styled-components";

export const RequestSummaryContainer = styled.div`
  background-color: white;
  min-height: 650px;
  padding: 20px;
  border-radius: 10px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductsSubtotal = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
`;

export const Shipping = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
`;

export const Total = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
`;

export const Input = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap:10px;
  
  input{
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    outline: none;
    padding: 5px;
    /* max-width: 200px; */
    border: 1px solid rgba(0, 0, 0, 0.3);
    font-size: 1rem;
  }
  button{
   
    padding: 5px;
    border:none;
    background-color:#6B7280 ;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1rem;
    /* max-width: 120px;  */
    width: 40%;
    transition: .4s ease;

    &:hover{
        background-color: #555555;
    }
    


  }
`;

export const Checkout = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #111827;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  transition: .4s ease;

  &:hover{
    background-color: #0a0f1a;
  }
`;

export const Checkout2 = styled.button`
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: green;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  transition: .4s ease;

  &:hover{
    background-color: darkgreen;
  }
`;

export const Part1 = styled.div``;

export const Part2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 1.1rem;
  p{
     text-decoration: underline;
  }
`;
