const Button = (props)=>{
    return <div>
        <a href={props.link} target="_blank"><button className="button">{props.name}</button></a>
    
    </div>

}
export default Button;