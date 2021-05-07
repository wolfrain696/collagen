import TechImgOne from './../../img/slide.jpg'
import TechImgTwo from './../../img/img-5-2x.jpg'
import './Technologies.css'


const Technologies = () => {
    return (
        <div className="technologies">
            <div className='technologies-item'>
                <div className='technologies-text-block'>
                    <h2 className='technologies-heading'>Эксклюзивная  технология</h2>
                    <p className='technologies-text '>COLLA GEN — это оригинальный биологический комплекс, который
                        состоит из заменимых и незаменимых аминокислот, а также микро- и макроэлементов!</p>
                    <p className='technologies-text-two'>Приготовленный по натуральной технологии, продукт позволяет
                        достичь максимальных показателей усваиваемости. Производство продукта максимально безопасно и
                        сертифицировано по стандартам ISO, ХАССП, HALAL, ЕCO.</p>
                </div>
                <div className='technologies-img'>
                    <img src={TechImgOne}/>
                </div>
            </div>
            <div className='technologies-item reverse'>
                <div className='technologies-text-block'>
                    <p className='technologies-text '>Живой Коллаген представляет собой белок, который состоит из
                        разномолекулярных биологических компонентов. За счёт этого достигается предельно высокая
                        биодоступность продукта, которая даёт возможность соединительной ткани организма быстро
                        восстанавливаться. Живой коллаген после первых же дней приёма заметно повышает прочность и
                        эластичность кожи.</p>
                </div>
                <div className='technologies-img'>
                    <img src={TechImgTwo}/>
                </div>
            </div>
        </div>
    )
}

export default Technologies