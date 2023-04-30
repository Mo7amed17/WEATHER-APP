
import '../style/style.css'
import sun from '../media/sun.png'
import moon from '../media/moon.png'
import { DayDate } from '../Helpers/Tools';
import "../style/ScreensResponsive.css"

function RightCard(props){
                let date=new Date();

    return(
        <div className="RightCard">
            <div className='Sun'>
                { props?.data ?
                    (((((date).getHours())<=18) && (((date).getHours())>5)) ? <img src={sun} alt="sun"/> : <img src={moon} alt="moon"/>)
                    :
                    <></>
                }
            </div>
            <div className='City'>
            <h3 className='LiveUpdate'>Live</h3>
            <i className="fa-solid fa-location-dot"></i>
            <h2 style={{textTransform:"capitalize",letterSpacing:"1px"}}>{ (props?.data?.address) ? props?.data?.address : "No Data"}</h2>
            </div>
            {(props?.day?.icon) ? <img className='RightCardIcon' alt='' src={`https://mo7amed17.github.io/Weather-app-photos/${props?.day?.icon}.png`}/> : "No Data"}
            <h4 style={{color:"white"}}>{props?.day ? (`Today, ${DayDate(date) }`) : "No Data"}</h4>
            <h4 className='Temp'>{(props?.data?.currentConditions?.temp) ? <>
            {(Math.round(props?.data.currentConditions?.temp))}
            <div className='TempMark'></div>
            </> : "No Data" }
            </h4>
            <h3 style={{color:"white"}}>{(props?.data?.currentConditions?.conditions) ? (props?.data?.currentConditions?.conditions) : "No Data"}</h3>
            <div className='WindandHum'>
            <div className='Wind'>
            {(props?.data?.currentConditions?.windspeed) ? <>
                <div className='TheWind'><i className="fa-solid fa-wind"></i>Wind</div>
                {`${Math.round(props?.data?.currentConditions?.windspeed)} Km/h`}
            </>
            : "No Data"
            }
            </div>
            <div className='Hum'>
            {(props?.data?.currentConditions?.humidity)? <>
                <div className='TheHum'><i className="fa-solid fa-temperature-half"></i>Hum</div>
                {`${Math.round(props?.data?.currentConditions?.humidity)} %`}
            </>
            : "No Data"
            }
            </div>
            </div>
        </div>

    )
}

export default RightCard;