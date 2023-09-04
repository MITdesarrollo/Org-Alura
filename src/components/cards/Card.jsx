import "./card.css"

export const Card = (props) =>{
    const { name , photo, position, team , id , fav} = props.data
    const{ colorLine, deletecollaborator, like } = props
    console.log(props.data.id);
    return(
        <div className="card-container">
            <span className="delete" onClick={() => deletecollaborator(id)}><img src="src/assets/borrar.png" alt="" /></span>
            <div className="card-header" style={{backgroundColor:colorLine}}>
                <img src={photo} alt="gitmio" />
            </div>
            <div className="card-info">
                <h4>{name}</h4>
                <h5>{position}</h5>
                <div className="favs">
                {fav ? <img src="src/assets/dislike.png" alt="like" onClick={()=>like(id)} /> : <img src="src/assets/like.png" alt="" onClick={()=>like(id)} />}
                </div>
                 
                
            </div>
        </div>
    )
}