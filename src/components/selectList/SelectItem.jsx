import "./Select.css";

export const SelectItem = (props) => {

   

    const handlerChangeSelect = (e) => {
        props.setValue(e.target.value);
    }
    return (
        <div className="select-item">
            <label> Equipos </label>
            <select value={props.valor} onChange={handlerChangeSelect}>
                <option value={""} disabled defaultValue={""} hidden> Seleccionar equipo </option>
                {props.teams.map((el, index) => <option value={el} key={index}>{el}</option>)}
            </select>
        </div>
    )
}