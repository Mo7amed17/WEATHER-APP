import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
import './style/style.css'
import { useEffect } from 'react';
import { useState } from 'react';
import Swal from "sweetalert2";
import "./style/ScreensResponsive.css"

function Main(){
    let LocalData=JSON.parse(localStorage.getItem("City"))
    const [City, setCity] = useState({});
    function FetchData(city){
        fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next7days?unitGroup=metric&key=9P9SE7QP4PNCSN7P5DLA55ETV&contentType=json`)
    .then((res)=>res.json())
    .then((data)=>{
        setCity(data)
        localStorage.setItem("City",`${JSON.stringify(data)}`)
    }).catch((err)=>{
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'City Not Found',
            showConfirmButton: false,
            timer: 2500
        })
    })
    }

        useEffect(() => {
            LocalData===null ? (<></>) 
        : (
            FetchData(LocalData.address)
        ) 
            let Search =document.querySelector(".Nav .NavLeft .Search")
            let AutoCity =document.querySelectorAll(".Nav .NavLeft .AutoCity h3")
            let SearchInput=Search.childNodes[1]
            let icon=Search.childNodes[2]
            let LoadingScreen=document.querySelector("body .LoadingScreen")
            icon.addEventListener("click",(e)=>{
                FetchData(e.target.previousElementSibling.value)
                e.target.previousElementSibling.value=""
                AutoCity[0].parentElement.style.display="none"
            })
            SearchInput.addEventListener("keypress",(e)=>{
                if(e.key==="Enter"){
                    FetchData(e.target.value)
                    AutoCity[0].parentElement.style.display="none"
                    e.target.value=""
                    e.target.blur()
            }
            })
            SearchInput.addEventListener("input",(e)=>{
                fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${e.target.value}&format=json&apiKey=091ea5f1be3e4753a1a3da93e69d654c`)
                .then((res)=>res.json())
                .then((data)=>{
                    for(let a=0 ; a<=3 ; a++){
                        if(data.results[a]!==undefined){
                            if(data.results[a].city!==undefined){
                                AutoCity[a].textContent=`${data.results[a].city} , ${data.results[a].country}`
                            }
                            else {
                                AutoCity[a].textContent=""
                            }
                        }else {
                            AutoCity[a].textContent=""
                        }
                    }
                    if((data.results[0]===undefined &&data.results[1]===undefined&&data.results[2]===undefined&&data.results[3]===undefined)||(data.results===undefined)){
                        AutoCity[0].parentElement.style.display="none"
                    }else{
                        AutoCity[0].parentElement.style.display="block"
                    }
                }).catch((err)=>{
                    AutoCity[0].parentElement.style.display="none"
                })
                AutoCity.forEach((c)=>{
                    c.addEventListener("click",(e)=>{
                        FetchData((e.target.textContent.slice(0,e.target.textContent.indexOf(","))))
                        AutoCity[0].parentElement.style.display="none"
                        SearchInput.value=""
                    })
                })
                
            })
            LoadingScreen===null ? (<></>) 
            :(
                fetch("https://api.ipregistry.co/?key=wf9lfwx0nh7t3jbw")
                .then((res)=>res.json())
                .then((data)=>{ FetchData(data.location.city)
                    LoadingScreen.style.display="none"
                }).catch((err)=>{
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'There Is An Error , WE Will Reload',
                        showConfirmButton: false,
                        timer: 2500,
                    })
                    setTimeout(() => {
                        window.location.reload()
                    }, 5000);
                })
            )
        }, []);
        
    return(
        <div className="MainPage">
            <LeftSide data={City}/>
            <RightSide data={City}/>
        </div>
    )
}

export default Main;