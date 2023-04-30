import LeftLeftDown from "./LeftLeftDown";
import LeftLeftTop from "./LeftLeftTop";
import '../style/style.css'
import "../style/ScreensResponsive.css"


function LeftLeft(props){
    return(
        <div className="LeftLeft">
            <LeftLeftTop data={props?.data} day={props.day}/>
            <LeftLeftDown data={props?.data}/>
        </div>
    )
}

export default LeftLeft;
