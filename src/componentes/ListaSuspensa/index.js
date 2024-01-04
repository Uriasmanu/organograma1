import '../ListaSuspensa/ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='ListaSuspensa'>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item =>{
                    return <option>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa