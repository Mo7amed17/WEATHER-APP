
import '../style/style.css'
import {ConvertTime} from "../Helpers/Tools"
import { days } from '../Helpers/Tools';
import { useEffect } from 'react'
import { useState } from 'react';
import "../style/ScreensResponsive.css"

function LeftLeftTop(props){    
    const [Day, setDay] = useState(days[(new Date()).getDay()]);
    const [Sunrise, setSunrise] = useState(props?.data.days[0].sunrise);
    const [Sunset, setSunset] = useState(props?.data.days[0].sunset);
        useEffect(() => {
            let cards=document.querySelectorAll(".LeftSide .Cards .Card")
            cards.forEach((card,index)=>{
                card.addEventListener("click",()=>{
                    setDay(card.children[1].textContent)
                    setSunrise(props?.data.days[index].sunrise)
                    setSunset(props?.data.days[index].sunset)
                })
            })
        }, []);
    return(
        <div className="LeftLeftTop">
            <h1>
            <i className="fa-solid fa-calendar-day"></i>
            {Day}
            </h1>
            <div className='SunriseAndSunset'>
                <div className='Sunrise'>
                <i className="fa-regular fa-sun"></i>
                <div className='Information'>
                    <h5 style={{margin:"0px",color:"gray"}}>Sunrise</h5>
                    <h3 style={{margin:"0px",color:"#538cff"}}>{ConvertTime(+(Sunrise).slice("0","2"),+(Sunrise).slice("3","5"))}</h3>
                </div>
                </div>
                <div className='Sunset'>
                <i className="fa-regular fa-moon" style={{color:"gray"}}></i>
                <div className='Information'>
                    <h5 style={{margin:"0px",color:"gray"}}>Sunset</h5>
                    <h3 style={{margin:"0px",color:"#538cff"}}>{ConvertTime(+(Sunset).slice("0","2"),+(Sunset).slice("3","5"))}</h3>
                </div>
                </div>
            </div>
        </div>
    )
}

export default LeftLeftTop;
