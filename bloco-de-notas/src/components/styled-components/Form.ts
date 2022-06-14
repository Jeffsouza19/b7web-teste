import styled from "styled-components";

export const Form = styled.div`
    display: flex;
    justify-content: space-between;
    
    select {
        
       
        @media (max-width: 420px){
            width: 55px;
        }
    }

    label{
        font-size: 18px;
        @media (max-width: 420px){
            font-size: 15px;
        }
    }
`;