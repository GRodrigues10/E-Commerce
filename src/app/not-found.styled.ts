import styled from "styled-components";

export const NotFoundContainer = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 20px;

h1{
    font-size: 1.6rem;
    text-align: center;
}
a{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
}

button{
    padding: 10px;
    width: 100%;
    background-color: white;
    max-width: 180px;
    font-size: 1.1rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: .4s ease;
    &:hover{
        background-color:#F5F5F5;
    }

}

@media screen and (min-width: 530px) {
    h1{
    font-size: 1.8rem;
}
}

@media screen and (min-width: 768px) {
    h1{
    font-size: 2rem;
}
}


@media screen and (min-width: 992px) {
    h1{
    font-size: 2.2rem;
}
}

@media screen and (min-width: 1200px) {
    h1{
    font-size: 2.5rem;
}
}
`