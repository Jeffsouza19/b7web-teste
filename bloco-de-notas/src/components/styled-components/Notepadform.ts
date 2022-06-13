import styled from "styled-components";

type FieldsetProps = {
    bgcolor?: string,
    fontcolor?: string
}

export const Fieldset = styled.fieldset<FieldsetProps>`
    background-color: ${props => props.bgcolor};
    color: ${props => props.fontcolor};
    border-radius: 10px;
    margin: 10px auto;
    width: 500px;
    display: flex;
    flex-direction: column;
    transition: width 2s;

    button{
        margin-top: 10px;
    }

    @media (max-width: 1210px ){
        width: 400px;
        transition: width 2s;
    }
    @media (max-width: 610px ) {
        width: 350px;
        transition: width 2s;
    }
    @media (max-width: 420px){
        width: 300px;
    }
`;

export const TextArea = styled.textarea<FieldsetProps>`
    color: ${props => props.fontcolor};
    height: 150px;
    background-color: transparent;
`;