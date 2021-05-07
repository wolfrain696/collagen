import './Product.css'
import ProductImg from '../../img/1.png'


const Product = (props) => {
    return (
        <div className='product' id='link-3'>
            <div className="product-container">
                <h1 className="title-sub">Стоимость</h1>
                <div className="product-price">
                    <div className="product-items">
                        <img src={ProductImg} className="product-item"/>
                        <h2 className="product-name">COLLA GEN пищевой Халяль, банка 1 кг.</h2>
                        <p className="art">Курс приёма 3 месяца.</p>
                        <p className="price">6500,00руб.</p>
                        <button onClick={() => props.setActive(true) } className="product-tell">Быстрый заказ </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product