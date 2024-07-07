import './categItem.css'
import { Link } from 'react-router-dom';

const categItem = ({item}) => {
  return (
    <div className="ItemDiv">
        <img src={item.img} alt='Error'/>
        <div>
          <h1>{item.title}</h1>
          <Link to={item.link}><button>Shop Now</button></Link>
        </div>     
    </div>
  )
}
export default categItem;