
import telergam from "./../../img/icons/telegram.svg";
import instagram from "./../../img/icons/instagram.svg";
import gitHub from "./../../img/icons/gitHub.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";
import "./styles.css"


function Footer () {
    return (
        <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="https://instagram.com/sofi.ko_?igshid=Y2IzZGU1MTFhOQ==" target="_blank"><img src={instagram} alt="Link"/></a></li>
                    <li className="social__item"><a href="https://t.me/sofikoshkaaa" target="_blank"><img src={telergam} alt="Link"/></a></li>
                    <li className="social__item"><a href="https://github.com/Sofikoshka" target="_blank"><img src={gitHub} alt="Link"/></a></li>
                    <li className="social__item"><a href="https://www.linkedin.com/in/sofiakolokolcheva?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank"><img src={linkedIn} alt="Link"/></a></li>
                </ul>
                <div className="copyright">
                    <p>©Sofia Kolokolcheva 2024</p>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;