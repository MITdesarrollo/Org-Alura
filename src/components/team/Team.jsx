import { Card } from "../cards/Card"
import "./team.css"

export const Team = (props) => {
    const { colorBg, colorLine, title } = props.data
    const { collaborators } = props
    
    return
    <>
        {collaborators.length > 0 &&
            <section className="team-container" style={{ backgroundColor: colorBg }}>
                <h3 style={{ borderColor: colorLine }}>{title}</h3>
                <div className="collaborators-container">
                    {
                        collaborators.map((collaborator, index) => <Card key={index} data={collaborator} />)
                    }
                </div>
            </section>}
    </>
}