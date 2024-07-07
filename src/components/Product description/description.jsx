import './description.css'

export default function description({item}){
  return (
    <div className='descriptionDiv'>
        <div className="descPic">
            <img src={item.img} alt="Error"/>
        </div>
        <div className="description">
            <p id='productName'>{item.name}</p>
            <p>{item.description}</p>
        </div>
    </div>
  )
}
