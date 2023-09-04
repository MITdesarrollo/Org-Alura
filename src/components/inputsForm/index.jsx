import "./InputsForm.css"
import { useState } from "react";

export const InputsForm = (props) => {
    //si al type le pongo un igual al lado , tomo eso como el valor por defecto sino le llega la props

    const { type = "text"} = props
    const handlerChange = (e) =>{
        props.setValue(e.target.value)
    }
    
    return(
        <div className={`input input-${type}`}>
            <label> { props.titulo } </label>
            <input type={type} placeholder = { props.placeholder } 
            required={ props.required } 
            value={props.value} 
            onChange={handlerChange}/>
        </div>
    )
}