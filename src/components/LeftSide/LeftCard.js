
import '../style/style.css'
import { days } from '../Helpers/Tools';
import { useEffect } from 'react';
import "../style/ScreensResponsive.css"

function LeftCard(props){

    const date = new Date();
    function DayName(){
        let day=date.getDay()+props?.index
        if(day>=7){
            day=day-7;
        }
        return days[day]
    }
    useEffect(() => {
            document.querySelector(".LeftSide .Cards .Card").classList.add("ActiveCard")
            let cards=document.querySelectorAll(".LeftSide .Cards .Card")
            cards.forEach((card)=>{
                card.addEventListener("click",()=>{
                    cards.forEach((c)=>{
                        c.classList.remove("ActiveCard")
                    })
                    card.classList.add("ActiveCard")
                    
                })
            })

    }, []);
    return(
        <div className="Card">
            {(props?.data?.icon) ? <img alt='' src={`https://mo7amed17.github.io/Weather-app-photos/${props?.data?.icon}.png`}/> 
            :
            "No Data"}
            <h4>{DayName() ? DayName() : "No Data"}</h4>
            <h4 className='Temp'>{(props?.data?.temp) ? <>
            {(Math.round(props?.data?.temp))}
            <div className='TempMark'></div>
            </> : "No Data" }
            </h4>
        </div>
    )
}

export default LeftCard;