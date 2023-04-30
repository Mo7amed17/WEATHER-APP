import "./style/DarkMode.css"
import "./style/ScreensResponsive.css"
import "./style/DarkMode.css"


function Footer(){
    return(
        <div className="Footer">
            <div className="ContactWithUs">
                <h1>Contact With Us</h1>
                <div className="ContactWithUsIcons">
                <a target="_blank" href="https://github.com/Mo7amed17"><i className="fa-brands fa-github"></i></a>
                <a target="_blank" href="https://www.facebook.com/Mo7amed1717"><i className="fa-brands fa-facebook"></i></a>
                <a target="_blank" href="https://www.linkedin.com/in/mo7amed-atef-13a903234/"><i className="fa-brands fa-linkedin"></i></a>
                <a target="_blank" href="https://wa.me/01003693464"><i className="fa-brands fa-whatsapp"></i></a>
                </div>
                <a target="_blank" href="https://mo7amed17.github.io/Portfolio/" className="OurProjects">Our Projects</a>
            </div>
        </div>
    )
}

export default Footer