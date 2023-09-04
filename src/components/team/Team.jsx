import { useState } from "react"
import { Card } from "../cards/Card"
import "./team.css"

export const Team = (props) => {
    const { colorBg, colorLine, title , id } = props.data
    console.log(props.data.id, "segundo");
    const { collaborators, deletecollaborator, handlerColor , like} = props


    return (
        collaborators.length > 0 &&
        <section className="team-container" style={{ backgroundColor: colorBg }}>
            <input type="color"
                className="color"
                value={colorLine}
                onChange={(e) => {
                    handlerColor(e.target.value, id)
                }}
            />
            <h3 style={{ borderColor: colorLine }}>{title}</h3>
            <div className="collaborators-container">
                {
                    collaborators.map((collaborator, index) => <Card key={index} 
                        data={collaborator}
                        colorLine={colorLine}
                        deletecollaborator={deletecollaborator}
                        like={like}
                    />)
                }
            </div>
        </section>)

}