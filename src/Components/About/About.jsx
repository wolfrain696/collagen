import "./About.css"
import AboutItems from "./AboutItems/AboutItem";
import Girl from './../../img/girl.png'
import  Sone from './../../img/s41.png'
import Swto from './../../img/s42.png'
import Sthree from './../../img/s43.png'



const About = () => {
    return (
        <div className='about-items' id='link-1'>
            <div className='about-item color'>
                <div className='about-text'>
                    <h2 className='about-heading'>Зачем нужен коллаген?</h2>
                    <p className='text'>Коллаген незаменим! Этот уникальный по своим свойствам белок укрепляет весь
                        организм в целом, обеспечивая целостность и нормальное функционирование внутренних органов и
                        систем.</p>
                </div>
                <div className='about-img girl'>
                    <img src={Girl} alt="girl"/>
                </div>
            </div>
            <AboutItems imgOne={Sone} imgTwo={Swto} imgThree={Sthree}/>
        </div>
    )
}

export default About
