import './ButtonComponent.css'

function ButtonComponent(props){
    return(
    <button type="button" disabled={props.disabled} onClick={() => console.log(props.logText)}>{props.buttonimput}</button>
)
    }
export default ButtonComponent;




