const Button = (props) => {

    return (
        <div className="field">
            <button className={props.className}>{props.label}</button>
        </div>
    )
}

export default Button