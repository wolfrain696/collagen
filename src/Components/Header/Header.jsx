import './Header.css'
import Sitebar from "./Sitebar/Sitebar";
import HeaderImg from './../../img/col1.jpg'
import Logo from './../../img/logo.png'

const Header = (props) => {

    let burger = (e) => {
        e.target.classList.toggle('active')
        document.querySelector('.sitebar').classList.toggle('active')
    }

    return (
        <div className='header__wrapper'>
            <img src={HeaderImg}  className="header__img"/>
            <header className="header">
                <div className="container">
                    <div className="header__body">
                        <a href="#" className="header__logo">
                            <img src={Logo} alt=""/>
                        </a>
                        <Sitebar />
                        <div  onClick={burger} className="header__burger">
                            <span></span>
                        </div>

                    </div>
                </div>
            </header>
        </div>
    )
}
export default Header