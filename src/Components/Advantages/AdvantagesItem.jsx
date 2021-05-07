import './Advantages.css'


const AdvantagesItem = (props) => {
    return (

        <div className='advantages-item'>
            <div className='item-top'>
                <img src={props.advantImg}/>
                <h3 className='advantages-item-number'>{props.advantNumber}</h3>
            </div>
            <div className='advantages-content'>
                <h2 className='advantages-item-title'>{props.advantTitle} </h2>
                <p className='advantages-text'>{props.advantText}</p>
            </div>
        </div>

    )
}
export default AdvantagesItem
