import PropertiesListItem from "./PropertiesListItem";
import './PropertiesList.css'


const PropertiesList = () => {
    return (
        <div className="properties-list">
            <div className='properties-texts'>
                <div className="properties-flex-container">
                    <h2 className='properties-heading'>20 лет испытаний</h2>
                    <p className='properties-text'>И кропотливого труда понадобилось нам, чтобы показать миру уникальный
                        живой коллаген.</p>
                </div>
            </div>
            <h2 className='properties-heading'>Свойства</h2>
            <div className='properties-list-block'>
                <PropertiesListItem text='Быстро растворяется'/>
                <PropertiesListItem text='Устойчив к нагреванию'/>
                <PropertiesListItem text='Устойчив к пищевым кислотам'/>
                <PropertiesListItem text='Высокая прозрачность'/>
                <PropertiesListItem text='Отсутствие ' lineText='осадка'/>
                <PropertiesListItem text='Низкая ' lineText='вязкость'/>
                <PropertiesListItem text='Нейтральный вкус и аромат'/>

            </div>

        </div>
    )
}

export default PropertiesList