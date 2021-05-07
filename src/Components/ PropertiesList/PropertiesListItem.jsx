import './PropertiesList.css'



const PropertiesListItem = (props) => {
    return (
        <div className="properties-list-item">
            <p className='properties-list-item-text'>{props.text}</p>
            <p className='properties-list-item-text'>{props.lineText}</p>

        </div>
    )
}
export default PropertiesListItem