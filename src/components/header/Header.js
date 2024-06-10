import "./styles.css"
import CV from './../../img/icons/СV_Sofiia-Kolokolcheva.pdf'
import photo from './../../img/myphoto.svg'

function Header () {
    return (
        <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Hi, I am <em>Sofiia</em></strong><br/>
                a frontend ReactJS developer
            </h1>
            <div className="header__text">
                <p>motivated by a genuine passion for both learning and expressing creativity.</p>
            </div>
            <a href={CV} className="btn" download>Download my CV</a>
            

        </div>
        <div className="header__photo">
        <img className="my-photo" src={photo} alt="myphoto"/>
        </div>
    </header>
    )
}

export default Header;