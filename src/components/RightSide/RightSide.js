
import '../style/style.css'
import RightCard from './RightCard';
import RightNavbar from './RightNavbar';
import DesigndeBy from './DesignedBy'
import "../style/ScreensResponsive.css"

function RightSide(props){
        let data=JSON.parse(localStorage.getItem("City"))
    return(
        <div className="RightSide">
            <div className='TheContainer'>
            <RightNavbar/>
            {
                props?.data?.days ?
                (
                    <RightCard data={props?.data} day={props?.data?.days[0]}/>
                )
                :
                data?.days ? 
                (
                    <RightCard data={data} day={data?.days[0]}/>
                )
                :
                <RightCard/>
            } 
            <DesigndeBy/>
            </div>
        </div>
    )
}

export default RightSide;