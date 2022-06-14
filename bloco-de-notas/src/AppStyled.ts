import styled from "styled-components";

export const NotesList = styled.div`
    display: grid;
    gap: 10px 20px;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, 300px);
    
    margin: 20px auto;
    max-width: 1280px;
    @media (max-width: 1080px) {
        grid-template-columns: repeat(2, 1fr);
        max-width: 980px;
    }
    @media (max-width: 650px){
        grid-template-columns: 1fr;
        max-width: 480px;
    }
`;

export const Header = styled.h1`
    text-align: center;
`;