const Input = (props) => {

    return (
        <div className="field">
            <label className="label">{props.label}</label>
            <div className="control">
                <input 
                    className='input'
                    type={props.type} 
                    name={props.name} 
                    value={props.value} 
                    placeholder={props.placeholder} 
                    onChange={props.onChange}
                    />
            </div>
        </div>
    )
}

export default Input;