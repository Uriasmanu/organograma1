import '../ListaSuspensa/ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='ListaSuspensa'>
            <label>{props.label}</label>
            <select required={props.required}>
                {props.itens.map((item, index) => (
                    <option key={index}>{item}</option>
                ))}
            </select>
        </div>
    )
}

export default ListaSuspensa