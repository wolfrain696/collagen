import './Socials.css'
import socialImg from './../../img/social-2.svg'
import socialTell from './../../img/tell.svg'
import socialMail from './../../img/mail.svg'

const Socials = () => {
    return (
        <div className="social-links" id='link-4'>
            <div className="social-container">
                <div className="social-left">
                    <div className="item-contact ">
                        <img className="social-contact-img" src={socialTell}/>
                        <div className="contact-text">
                            <span>Позвоните нам!</span>
                            <a href="tel:+79953019633" className="phone">
                                8 (995) 301-96-33
                            </a>
                        </div>
                    </div>
                    <div className="item-contact">
                        <img className="social-contact-img"
                             src={socialMail}/>
                        <div className="contact-text">
                            <span>По все вопросам</span>
                            <a href="mailto:collagen_centr@mail.ru" className="mail">
                                collagen_centr@mail.ru
                            </a>
                        </div>
                    </div>
                </div>
                <div className="social-right">
                    <a href="https://www.instagram.com/collagen_msk_/" className="social-item">
                        <div className="social-img">
                            <img className="social-img-item" src={socialImg}/>
                        </div>
                        <h3 className='social-name'>Instagram</h3>
                    </a>
                </div>


            </div>
        </div>
    )
}
export default Socials