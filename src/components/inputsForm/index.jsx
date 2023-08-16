import "./InputsForm.css"
import { useState } from "react";

export const InputsForm = (props) => {
 
    const handlerChange = (e) =>{
        props.setValue(e.target.value)
    }
    
    return(
        <div className="input-form">
            <label> { props.titulo } </label>
            <input type="text" placeholder = { props.placeholder } 
            required={ props.required } 
            value={props.value} 
            onChange={handlerChange}/>
        </div>
    )
}