import "./card.css"

export const Card = (props) =>{
    const { nombre , photo, position, team } = props.data
    
    return(
        <div className="card-container">
            <div className="card-header">
                <img src={photo} alt="gitmio" />
            </div>
            <div className="card-info">
                <h4>{nombre}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}