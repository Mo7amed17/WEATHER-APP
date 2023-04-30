import { useEffect } from 'react';
import '../style/style.css'
import { useState } from 'react';
import "../style/ScreensResponsive.css"

function LeftRight(props){
    const [data, setdata] = useState(props?.data.days[0]);
    const [Sun, setSun] = useState(100-((Math.round(+props?.data.days[0].cloudcover))+(Math.round(+props?.data.days[0].snow))));
    const [Rain, setRain] = useState(Math.round(+props?.data.days[0].cloudcover));
    const [Snow, setSnow] = useState(Math.round(+props?.data.days[0].snow));
    useEffect(() => {
        let cards=document.querySelectorAll(".LeftSide .Cards .Card")
        let sun ,rain ,snow
        if(+Math.round(+data.cloudcover)>0){
            rain=`, #09acd7 ${(Math.round(+data.cloudcover))}%`
        }else rain=""

        if(+Math.round(+Math.round(data.snow))>0){
            snow=`, #7ba6ff ${(Math.round(+data.snow))}%`
        }else snow=""

        if((100-(+Math.round(+data.snow))+(+Math.round(+data.cloudcover)))>0){
            sun=`, #F28C38 ${(100- (Math.round(+data.cloudcover))+(Math.round(+data.snow)))}%`
        }else sun=""
        
            let max1= Math.max(Math.round(+data.cloudcover),Math.round(+data.snow),(100- (Math.round(+data.cloudcover))+(Math.round(+data.snow))))
            let big=""
            let max2
            if(max1===Math.round(+data.cloudcover)){
                max2= Math.max(Math.round(+data.snow),(100- (Math.round(+data.cloudcover))+(Math.round(+data.snow))))
                if(max2===Math.round(+data.snow)){
                    rain=`, #09acd7 ${(Math.round(+data.snow))}% ${(Math.round(+data.cloudcover))}%`
                }else {
                    rain=`, #09acd7 ${(100- (Math.round(+data.cloudcover))+(Math.round(+data.snow)))}% ${(Math.round(+data.cloudcover))}%`
                }
            }
            else if(max1===Math.round(+data.snow)){
                max2= Math.max(Math.round(+data.cloudcover),(100- (Math.round(+data.cloudcover))+(Math.round(+data.snow))))
                if(max2===Math.round(+data.cloudcover)){
                    snow=`, #7ba6ff ${(Math.round(+data.cloudcover))}% ${(Math.round(+data.snow))}%`
                }else {
                    snow=`, #7ba6ff ${(100- (Math.round(+data.cloudcover))+(Math.round(+data.snow)))}% ${(Math.round(+data.snow))}%`
                }
            }
            else {
                max2= Math.max(Math.round(+data.cloudcover),Math.round(+data.snow))
                if(max2===Math.round(+data.cloudcover)){
                    sun=`, #F28C38 ${(Math.round(+data.cloudcover))}% ${(100- (Math.round(+data.cloudcover))+(Math.round(+data.snow)))}%`
                }else {
                    sun=`, #F28C38 ${(Math.round(+data.snow))}% ${(100- (Math.round(+data.cloudcover))+(Math.round(+data.snow)))}%`
                }
            }

        let CircleStatus=document.querySelector(".LeftRight .CircleStatus")
        CircleStatus.style.backgroundImage=`conic-gradient(#F28C38 0% ${sun} ${rain} ${snow})`


        cards.forEach((card,index)=>{
            card.addEventListener("click",()=>{
                setdata(props?.data.days[index])
                setSun((100-((Math.round(+props?.data.days[index].cloudcover))+(Math.round(+props?.data.days[index].snow)))))
                setRain(Math.round(+props?.data.days[index].cloudcover))
                setSnow(Math.round(+props?.data.days[index].snow))
            })
        })
    }, [data]);
    return(
        <div className="LeftRight">
            <div className='Status'>
                <div className='Sun S'>Sun</div>
                <div className='Rain S'>Rain</div>
                <div className='Snow S'>Snow</div>
            </div>
            <div className='CircleStatus'>
                <div className='CircleStatusData'>
                <h2 style={{margin:"5px 0px",fontSize:"18px",color:"white"}}>Sun= {Sun}%</h2>
                <h2 style={{margin:"5px 0px",fontSize:"18px",color:"white"}}>Rain= {Rain}%</h2>
                <h2 style={{margin:"5px 0px",fontSize:"18px",color:"white"}}>Snow= {Snow}%</h2>
                </div>
            </div>
        </div>
    )
}

export default LeftRight;
