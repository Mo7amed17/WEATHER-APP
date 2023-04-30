import '../style/style.css'
import { useEffect , useState } from 'react';
import { days ,months} from '../Helpers/Tools';
import "../style/ScreensResponsive.css"

function LeftLeftDown(props){
    let date=new Date();
    const [DayName, setDayName] = useState(days[date.getDay()]);
    const [Day, setDay] = useState(date.getUTCDate());
    const [month, setmonth] = useState(months[date.getMonth()]);
    const [year, setyear] = useState(date.getFullYear());
    const [icon, seticon] = useState(props.data.days[0].icon);
    const [description, setdescription] = useState(props.data.days[0].description);
    const [temp, settemp] = useState(props.data.days[0].temp);
    const [wind, setwind] = useState(props.data.days[0].windspeed);
    const [hum, sethum] = useState(props.data.days[0].humidity);
    useEffect(() => {
        let cards=document.querySelectorAll(".LeftSide .Cards .Card")
        cards.forEach((card,index) => {
            card.addEventListener("click",()=>{
                setDayName(card.children[1].textContent)
                setyear((props.data.days[index].datetime).slice("0","4"))
                setmonth(months[+((props.data.days[index].datetime).slice("5","7")) -1])
                setDay((props.data.days[index].datetime).slice("8","10"))
                seticon(props.data.days[index].icon)
                setdescription(props.data.days[index].description)
                setwind(props.data.days[index].windspeed)
                sethum(props.data.days[index].humidity)
                settemp(props.data.days[index].temp)
            })
        });
    }, []);
    return(
        <div className="LeftLeftDown">
                    <h2 style={{textAlign:"center",color:"#538cff"}}>{`${DayName} , ${Day} ${month} ${year}`}</h2>
            <div className='DayData'>
                    {<img style={{height:"100px",width:"100px"}} alt='' src={`https://mo7amed17.github.io/Weather-app-photos/${icon}.png`}/>}
                    <h1 style={{margin:"0px"}}>{Math.round(temp)}</h1>
                    <div className='WindandHum'>
                <div className='TheWind'><span>Wind</span> &nbsp;&nbsp;{`${Math.round(wind)}Km/h`}</div>
                <span>Hum</span> &nbsp;&nbsp;&nbsp;&nbsp; {`${Math.round(hum)}%`}
                </div>
            </div>
                        <h3 style={{textAlign:"center"}}>{description}</h3>
        </div>
    )
}

export default LeftLeftDown;
