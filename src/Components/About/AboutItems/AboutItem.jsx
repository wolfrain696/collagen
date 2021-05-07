import "./AboutItem.css"


const AboutItems = (props) => {
    return (
        <div className='about-items'>
            <div className='about-item '>
                <div className='about-text'>
                    <h2 className='about-heading'>Cтенки кровеносных сосудов</h2>
                    <p className='text'>Живой коллаген делает кровеносные сосуды прочными и эластичными. В случае
                        ранений насыщенные коллагеном ткани, в том числе кожный покров, быстрее восстанавливаются.</p>
                </div>
                <div className='about-img'>
                    <img src={props.imgOne} alt="girl"/>
                </div>
            </div>
            <div className='about-item reverse'>
                <div className='about-text'>
                    <h2 className='about-heading'>Кости и суставы</h2>
                    <p className='text'>Неденатурированный коллаген второго типа при попадании в организм воспринимается
                        иммунной системой организма как собственный, за счёт чего он работает минимизирует воспаление и
                        боль в суставах.</p>
                    <p className='text text-two'>В то же время баланс распада и обновления клеток нарушается — первых становится
                        больше, и иммунитет реагирует на них как на чужеродные клетки.</p>

                </div>
                <div className='about-img'>
                    <img src={props.imgTwo} alt="girl"/>
                </div>
            </div>
            <div className='about-item'>
                <div className='about-text'>
                    <h2 className='about-heading'>Кожный покров</h2>
                    <p className='text'>Для кожи коллаген очень важен и представлен в ней коллагеном 1-го типа. Коллаген
                        находится в слое дермы и обеспечивает коже тонус, упругость и прочность. Также коллаген
                        способствует увлажнению дермы.</p>
                </div>
                <div className='about-img'>
                    <img src={props.imgThree} alt="girl"/>
                </div>
            </div>

        </div>

    )
}

export default AboutItems
