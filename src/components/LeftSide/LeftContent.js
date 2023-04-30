import LeftLeft from "./LeftLeft";
import '../style/style.css'
import LeftRight from "./LeftRight";
import "../style/ScreensResponsive.css"

function LeftContent(props){
    return(
        <div className="LefContent">
            <LeftLeft data={props?.data} day={props.day}/>
            <LeftRight data={props?.data} day={props.day}/>
        </div>
    )
}

export default LeftContent;