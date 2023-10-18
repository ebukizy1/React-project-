import React from "react";
import { useState } from "react";
import { StyleButton, TextInputStyle } from "../style/Calculate";

export function Calculate(){
    const [count , setCount] = useState(0);



        const handleAdd=()=>{
            setCount(count+1);
        };

        const handleMinus=()=>{
            setCount(count-1);
        };

        const handleReset=()=>{
            setCount(0);
        }





    return(
        <div>
        <TextInputStyle> {count}</TextInputStyle>
        <StyleButton onClick={handleAdd}>Add</StyleButton>
        <StyleButton onClick={handleMinus}>Sub</StyleButton>
        <StyleButton onClick={handleReset}>reset</StyleButton>
        </div>
    )





}