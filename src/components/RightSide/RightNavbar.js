import '../style/style.css'
import "../style/ScreensResponsive.css"

function RightNavbar(){
    let data=JSON.parse(localStorage.getItem("City"))
    let event=0;

    return(
        <div className="Nav">
            <div className="NavLeft">
                <div className='Search'>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input  type="text" placeholder='Search...'/>
                <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className='AutoCity'>
                    <h3></h3>
                    <h3></h3>
                    <h3></h3>
                    <h3></h3>
                </div>
            </div>
            <div className="NavRight">
            <i className="fa-regular fa-bell Notification" onClick={(e)=>{
                let Popup=document.querySelector(".Nav .NavRight .NotificationMessage")
                Popup.addEventListener("click",()=>event=0)
                event++;
                if(event%2===1){
                    Popup.style.visibility="visible"
                    Popup.style.transitionDuration="1s"
                }else if(event%2===0){
                    Popup.style.visibility="hidden"
                    Popup.style.transitionDuration="0s"
                }
            }}>
                <div className='NotificationMessage'>
                    <h2>
                        {
                            data?.alerts[0]!=null ? (data.alerts[0]) : ("No Notifications.") 
                        }
                    </h2>
                </div>
            </i>
            </div>
        </div>
    )
}

export default RightNavbar;