import Main from "./components/Main";
import './components/style/style.css'
import Loading from './components/media/lodaingscreen.gif'
import { useEffect } from "react";
import './components/style/DarkMode.css'
import "./components/style/ScreensResponsive.css"
import Footer from "./components/Footer";
function App() {
  let LocalData=JSON.parse(localStorage.getItem("City"))
  useEffect(() => {
    let DarkMode=localStorage.getItem("DarkMode")
      let App=document.querySelector(".App")
      let DarkLightModeIcon= document.querySelectorAll(".DarkLightMode i")
      if(DarkMode==="Yes"){
        App.classList.add("DarkMode")
        DarkLightModeIcon[1].classList.add("activeicon")
        DarkLightModeIcon[0].classList.remove("activeicon")
      }else{
        App.classList.remove("DarkMode")
        DarkLightModeIcon[0].classList.add("activeicon")
        DarkLightModeIcon[1].classList.remove("activeicon")
      }
  }, []);
  return (
    <div className="App">
      <div className="container">
      {
        LocalData ? <></> : (<div className="LoadingScreen">
        <h2 className="LoadingText">Loading Your Location...</h2>
      <img  src={Loading} alt="Loading..."/>
      </div>)
      }
      <Main/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
