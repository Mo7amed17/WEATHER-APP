import { useEffect, useState } from 'react';
import {ConvertTime} from "../Helpers/Tools"
import { days } from '../Helpers/Tools';
import { months } from '../Helpers/Tools';
import '../style/style.css'
import "../style/ScreensResponsive.css"

function LeftNavbar(){
        const [App, setApp] = useState();
    const date = new Date();
        useEffect(() => {
                let time=document.querySelector(".LeftNavnar .Left .Time")
                setInterval(() => {
                    time.innerHTML=ConvertTime(date.getHours(),date.getMinutes())
                }, 1000);
                    setApp(document.querySelector(".App"))
            let DarkLightMode= document.querySelectorAll(".DarkLightMode i")
            DarkLightMode.forEach((i)=>{
                i.addEventListener("click",()=>{
                    DarkLightMode.forEach((e)=>{e.classList.remove("activeicon")})
                    i.classList.add("activeicon")
                })
            })

            
        }, []);
            



            function ChooseMessage(){
                let Message;
                const e = ["Good Morning" , "Good Afternoon" , "Good Evening"]
                if((date.getHours())>5 && (date.getHours())<12){
                        Message=e[0]
                }else if((date.getHours())>=12 && (date.getHours())<19){
                    Message=e[1]
                }else {
                    Message=e[2]
                }
                return Message;
            }
            function ChooseIcon(){
                let icon;
                const i = [<i className="fa-regular fa-sun" style={{fontSize:"26px",color:"#F28C38"}}></i> , <i className="fa-solid fa-sun" style={{fontSize:"26px",color:"#F28C38"}}></i> , <i className="fa-regular fa-moon" style={{fontSize:"26px",color:"gray"}}></i>]
                if((date.getHours())>5 && (date.getHours())<12){
                        icon=i[0]
                }else if((date.getHours())>=12 && (date.getHours())<19){
                    icon=i[1]
                }else {
                    icon=i[2]
                }
                return icon;
            }
    return(
        <div className="LeftNavnar">
            <div className="Left">
                <h1 className='Time'>{ConvertTime(date.getHours(),date.getMinutes())}</h1>
                <h5 style={{color:"gray",marginBottom:"20px"}}>{days[date.getDay()]}, {date.getDate()} {months[date.getMonth()]}, {date.getFullYear()}</h5>
                <h3 style={{fontSize:"22px"}}>{ChooseIcon()} &nbsp;{ChooseMessage()}</h3>
            </div>
            <div className="Right">
                <div className="DarkLightMode">
                <i className="fa-regular fa-sun" onClick={(e)=>{
                    App.classList.remove("DarkMode")
                    localStorage.setItem("DarkMode","No")
                }}></i>
                <i className="fa-regular fa-moon" onClick={(e)=>{
                    App.classList.add("DarkMode")
                    localStorage.setItem("DarkMode","Yes")
                }}></i>
                </div>
            </div>
        </div>
    )
}

export default LeftNavbar;