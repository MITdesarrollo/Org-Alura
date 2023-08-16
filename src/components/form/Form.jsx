import { BtnForm } from "../btnForm/BtnForm"
import { InputsForm } from "../inputsForm"
import { SelectItem } from "../selectList/SelectItem"
import "./Form.css"
import React from "react"
import { useState } from "react"


export const Formulario = (props) => {
    const[name, setName]= useState("")
    const[position, setPosition]= useState("")
    const[photo, setPhoto]= useState("")
    const[team, setTeam]=useState("")
    
    //aca traje la funcion del app
    const { registercollaborators }= props
   
    const handlerSend = (event) => {
        
        event.preventDefault();
        let values = {
            name: name,
            position: position,
            photo: photo,
            team: team
        }
        //aca envio los datos del form
        registercollaborators(values) 
    }
    

    return (
        <section className="form-container">
            <form action="" onSubmit={ handlerSend }>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <div className="inputs-container">
                    <InputsForm titulo="Nombre" 
                    placeholder=" Ingresar nombre " 
                    required 
                    valor={name}
                    setValue={setName}
                    />
                    <InputsForm titulo="Puesto" 
                    placeholder=" Ingresar  puesto " 
                    required
                    valor={position}
                    setValue={setPosition}
                    />
                    <InputsForm titulo="Foto" 
                    placeholder=" Ingresar enlace de foto " 
                    required
                    valor={photo}
                    setValue={setPhoto}
                    />
                    <SelectItem valor={team} setValue={setTeam}
                    teams={props.teams}/>
                    <BtnForm>Crear</BtnForm>
                </div>
            </form>
        </section>
    )
}

