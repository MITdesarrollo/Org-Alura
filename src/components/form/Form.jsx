import { BtnForm } from "../btnForm/BtnForm"
import { InputsForm } from "../inputsForm"
import { SelectItem } from "../selectList/SelectItem"
import "./Form.css"
import React from "react"
import { useState } from "react"


export const Formulario = () => {
    const[name, setName]= useState("")
    const[position, setPosition]= useState("")
    const[photo, setPhoto]= useState("")
    const[team, setTeam]=useState("")

   
    const handlerSend = (event) => {
        event.preventDefault();

        let values = {
            nombre: name,
            position: position,
            photo: photo,
            team: team
        }
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
                    <SelectItem valor={team} setValue={setTeam}/>
                    <BtnForm>Crear</BtnForm>
                </div>
            </form>
        </section>
    )
}

