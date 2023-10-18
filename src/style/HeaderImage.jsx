import styled from "styled-components";
import './index.css';


export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #333;
    color: var(--theme-border);
`;

export const LogoImgStyle = styled.img`
    width: 100px;
    display: flex;
    margin-left: -1700px;

`;

export const HomeLinkStyle = styled.a`
    text-decoration: none;
    display: flex;
    color: var(--theme-border);
    font-weight: bold;
    position: absolute;
    right: 0;
    padding: 15px 5px; 
    background: black;
    margin-bottom: 20px;
    margin-right: 60px;
    
`;