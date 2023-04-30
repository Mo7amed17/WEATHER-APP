
import '../style/style.css'
import LeftCard from './LeftCard';
import LeftContent from './LeftContent';
import LeftNavbar from './LeftNavbar'
import "../style/ScreensResponsive.css"

function LeftSide(props){
        let data=JSON.parse(localStorage.getItem("City"))
    return(
        <div className="LeftSide" >
            <LeftNavbar/>
            <div className='Cards'>
                { props?.data?.days ? 
                (
                    (props.data.days.map((day,index)=>{
                            if(window.screen.width<=830 && window.screen.width>=373){
                                if(index<=3){
                                    return(
                                        <LeftCard data={day} key={index} index={index}/>
                                    )
                                }
                            }
                            else if(window.screen.width<=372){
                                if(index<=2){
                                    return(
                                        <LeftCard data={day} key={index} index={index}/>
                                    )
                                }
                            }
                            else{
                                if(index<=5){
                                    return(
                                        <LeftCard data={day} key={index} index={index}/>
                                    )
                                }
                            }
                    }))
                ) : data?.days ?  
                (
                    (data.days.map((day,index)=>{
                        if(index<=5){
                            return(
                                <LeftCard data={day} key={index} index={index}/>
                            )
                        }
                    }))
                ): <></>
                }
            </div>
                { props?.data?.days ? 
                (
                    (props.data.days.map((day,index)=>{
                        if(index<=0){
                            return(
                                <LeftContent day={day} key={index} data={data}/>
                            )
                        }
                    }))
                ) : data?.days ?  
                (
                    (data.days.map((day,index)=>{
                        if(index<=0){
                            return(
                                <LeftContent day={day} key={index} data={data}/>
                            )
                        }
                    }))
                ): <></>
                }
                
        </div>
    )
}

export default LeftSide;

