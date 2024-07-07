import './productItem.css'
import { FaHeart } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdSearch } from 'react-icons/md';

export default function productItem({item}){
  return (
    <div className='prodItem'>
        <img src={item.img} alt="Error" />
        <div className="prodIcons">
            {/* ------cart icon------------ */}
            <div className='iconDiv'>
                <AiOutlineShoppingCart size={24} color="black"/>
            </div>
            {/* ---------------------search icon --------------------------- */}
            <div className='iconDiv'>
                <MdSearch size={24} color="black" />
            </div>
            {/* -----------------------heart icon--------------------- */}
            <div className='iconDiv'>
                <FaHeart size={20} color="black"/>
            </div>
        </div>
    </div>
  )
}
