import styled from "styled-components";

type ContainerProps = {
    bgcolor: string,
    fontcolor?: string,
}

export const Container = styled.fieldset<ContainerProps>`
    border-radius: 10px;
    display: flex;
    flex-flow: column wrap;
    background-color: ${props => props.bgcolor};
    flex: 1;
    max-width: 350px;
    margin: 20px;
    
`;
export const Title = styled.legend`
    border-radius: 10px;
    color: red;
    background-color: aqua;


`;
export const Legend = styled.input`
 border-radius: 10px;
    font-size: 22px;
    background-color: aqua;
    border: 0;
`;

export const Body = styled.textarea<ContainerProps>`
    border: 0;
    font-size: 18px;
    background-color: ${props => props.bgcolor};
    color: ${props => props.fontcolor};
    min-height: 200px;
    height: 100%;
    resize: none;

`;

export const Button = styled.button<ContainerProps>`
    background-color: ${props => props.bgcolor};
    border: 1px solid #000;
    display: inline-block;
    width: 50px;
    color: ${props => props.fontcolor ? props.fontcolor : 'white'};
    cursor: pointer;
`;