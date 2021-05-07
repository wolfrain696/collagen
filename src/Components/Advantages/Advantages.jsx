import './Advantages.css'
import AdvantagesItem from "./AdvantagesItem";
import Img1 from '../../img/h1.svg'
import Img2 from '../../img/h2.svg'
import Img3 from '../../img/h3.svg'
import Img4 from '../../img/h4.svg'
import Img5 from '../../img/h5.svg'
import Img6 from '../../img/h6.svg'


const Advantages = () => {
    return (
        <div className='advantages' id='link-2'>
            <h2 className='advantages-title'>Преимущества</h2>

            <div className='advantages-items'>
                <AdvantagesItem advantImg={Img1} advantNumber='01' advantTitle='Сертифицированный и безопасный'
                                advantText='Производственный процесс соответствует требованиям ISO, ХАССП и HALAL, благодаря чему продукт сохраняет органическую 3-хспиральную структуру. Это делает коллаген по-настоящему живым, а сам продукт - уникальным предложением на рынке препаратов, предназначенных для восстановления функций клеток, нормализации обмена веществ и замедления процессов старения.'/>
                <AdvantagesItem advantImg={Img2} advantNumber='02' advantTitle='Легкое усвоение'
                                advantText='Коллаген быстро и легко усваивается организмом. Пептидные цепочки моментально встраиваются в структуру нового волокна, ускоряя процесс его воспроизводства в организме.'/>
                <AdvantagesItem advantImg={Img3} advantNumber='03' advantTitle='Оптимальная форма'
                                advantText='Желеобразная консистенция полностью использует потенциал полезных качеств продукта, в то время как сухие формы коллагена не раскрывают своих возможностей на 100%. Желеобразный коллаген способствует активному построению белковых структур, в том числе мышечного каркаса и внутренних органов.'/>
                <AdvantagesItem advantImg={Img4} advantNumber='04' advantTitle='Регенеративное свойство'
                                advantText='Живой коллаген в 2 раза превосходит традиционный коллаген по содержанию гексозаминов и в 8 раз - по содержанию уроновых кислот, благодаря чему регенеративные свойства продукта усилены многократно.'/>
                <AdvantagesItem advantImg={Img5} advantNumber='05' advantTitle='Расширенный состав'
                                advantText='Продукт отличается от аналогов наличием в составе глицина (активизирует работу мозга), жирных кислот (делает продукт безопасным для печени и почек), оксипролина и оксилизина, обеспечивающим лёгкое усвоение все макро- и микроэлементов без участия витамина С.'/>
                <AdvantagesItem advantImg={Img6} advantNumber='06' advantTitle='Не является лекарством или БАД'
                                advantText='Живой коллаген относится к категории пищевых продуктов, который обладает свойством интенсивной доставки жизненно необходимых микро- и макроэлементов для восстановления организма.'/>
            </div>
        </div>
    )
}
export default Advantages