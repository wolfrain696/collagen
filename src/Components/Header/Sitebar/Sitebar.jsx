import React from "react";
import './sitebar.css'
const Sitebar = () => {
    return (
        <div className='sitebar'>
            <ul className='menu'>
                <li className="menu__item"><a className="menu__link one" href="#link-1">О продукте</a></li>
                <li className="menu__item"><a className="menu__link" href="#link-2">Преимущества</a></li>
                <li className="menu__item"><a className="menu__link" href="#link-3">Цена</a></li>
                <li className="menu__item"><a className="menu__link end" href="#link-4">Контакты</a></li>
            </ul>
        </div>
    )
}
export default Sitebar