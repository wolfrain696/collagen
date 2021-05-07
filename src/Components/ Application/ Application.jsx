import './Application.css'
import ApplicationImg from '../../img/fam.jpg'


const Application = (props) => {
    return (
        <div className='application'>
            <div className="application-container">
                <div className="application-top">
                    <h1 className="application-title">Применение</h1>
                </div>
                <div className="application-bottom">
                    <div className="left">
                        <div className="application-text">
                            <p className='margin-text'>
                                Съедать от 1 чайной до 2 ст. ложки в день за полчаса до приёма
                                пищи, запивая водой. Также можно развести дозировку в вводе и употребить как коктейль.
                                Разрешено употреблять желеобразный коллаген вместе с овощами и фруктами. Его можно
                                смешивать
                                с другими продуктами, соблюдая при этом температурный режим до 60 С.</p>
                            <p>
                                Если у вас
                                есть
                                аллергия на куриный белок или наблюдается индивидуальная непереносимость отдельных
                                компонентов продукта — рекомендуется перед приёмом коллагена взять консультацию у вашего
                                врача.
                            </p>
                        </div>
                        <button onClick={() => props.setActive(true) } className="application-tell">Быстрый заказ</button>
                    </div>
                    <div className="right">
                        <div className="img-wrapper">
                            <img className="application-img" src={ApplicationImg}/>
                        </div>
                        <h3 className='right-title'>Оптимальный курс</h3>
                        <div className="application-text">
                            <p className='right-text'>
                                Оптимальный курс равен 3 месяцам. После курса можно сделать
                                перерыв 3 месяца, а затем, в зависимости от образа жизни и потребностей организма,
                                повторить
                                курс. Людям преклонного возраста рекомендуется употреблять коллаген на постоянной
                                основе,
                                так же как и профессиональным спортсменам. Также можно употреблять детям с первых дней
                                жизни.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Application
