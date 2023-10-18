import styled from "styled-components";

 export const TextInputStyle= styled.p`
     font-size: 100px;
        font-weight: 550;
        color : navy;
`;

export const StyleButton = styled.button`
    height: 60px;
    width: 120px;
    padding: 20px 20px; /* Adjust the padding values as needed */
    justify-content : space-between;
    background-color: navy;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 15px;
    margin-right: 20px;
`;

export const HeaderStyle = styled.h1`
    font-size: 60;
    box-shadow: 30px black;
    justify-content: center;
    align-items: center;
    display: flex;

`;

export const ListStyle = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 10px 0;
    padding: 30px;
    box-shadow: 0px 0px 5px navy; /* Add box shadow */
    border-radius: 5px;
    border: 2px solid ${(props) => (props.isComplete ? 'green' : 'red')};
`;
export const DeleteStyle = styled.button`
    position: absolute;
    right: 0;
    background-color: red;
    padding: 15px 5px; /* Adjust padding as needed */
    color: white; /* Optionally, set text color to white for better visibility */
    border: none;
    cursor: pointer;
    border-radius: 5px; 
    margin-right: 20px;
`
export const ToggleButtonStyle = styled.button`
    background-color: navy;
    padding: 15px 5px; /* Adjust padding as needed */
    color: white; /* Optionally, set text color to white for better visibility */
    border: none;
    cursor: pointer;
    border-radius: 5px; 
    margin-right: 20px;  

`


