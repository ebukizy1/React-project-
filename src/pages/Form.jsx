import React, { useState } from 'react'
import { InputStyle, TextContainer, UserDetailsContain } from '../style/UserDetailsStyle';


// function reducer(state , action){
//     switch(action,  type){
//         case "handleChange"
//         return(

//         )
//     }
// }


export default function UserDetail() {
    const initailValue = {
        firstName :'',
        lastName : '',
        email : '',
        age : 0,
        height : 0.0,
        username : ''
        
    }


    // const [data, dispatch] = useReducer(reducer, initailValue)

    // const handleChange =()=>{
    //     dispatch({
    //         type : "handleChange",
    //         field : event.target.name,
    //         payload : event.target.value
    //     })
    // }
    const [data, setData] = useState(initailValue);
    const [showForm, setShowForm] = useState(false); 

    const handleChange = (event)=>{
        setData((prevState) =>({
            ...prevState,
            [event.target.name] : event.target.value
        }))
    }
        
  return (
    
    <UserDetailsContain>
        <UserDetailsContain>
            <TextContainer>First Name : {data.firstName}</TextContainer>
            <TextContainer>Last Name : {data.lastName}</TextContainer>
            <TextContainer>Username : {data.lastName}</TextContainer> 
            <TextContainer>Email : {data.email}</TextContainer>
            <TextContainer>Age : {data.age}</TextContainer>
            <TextContainer>Height : {data.height}</TextContainer>
        </UserDetailsContain>
        <UserDetailsContain>
            <TextContainer>First Name : {data.firstName}</TextContainer>
            <TextContainer>Last Name : {data.lastName}</TextContainer>
            <TextContainer>Username : {data.lastName}</TextContainer> 
            <TextContainer>Email : {data.email}</TextContainer>
            <TextContainer>Age : {data.age}</TextContainer>
            <TextContainer>Height : {data.height}</TextContainer>
        </UserDetailsContain>
        {/* )} */}
        <InputStyle value={data.firstName} name={"firstName"} type='text' onChange={handleChange}></InputStyle>
        <InputStyle value={data.lastName} name={"lastName"} type='text' onChange={handleChange}></InputStyle>
        <InputStyle value={data.email} name={"userName"} type='text' onChange={handleChange}></InputStyle>
        <InputStyle value={data.age} name={"age"} type='text' onChange={handleChange}></InputStyle>
        <InputStyle value={data.height} name={"email"} type='text' onChange={handleChange}></InputStyle>
        <button ></button>
        </UserDetailsContain> 
  );
}
