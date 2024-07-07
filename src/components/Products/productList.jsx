import './products.css'
import ProdItem from './productItem'
import { Link } from 'react-router-dom';

export default function Products({product}){
    return (
        <div className='prodDiv'>
            {product.map(item =>
                <Link to={`/product/${item.id}`} key={item.id}>
                    <ProdItem item={item}/>
                </Link>
            )}
        </div>
    )
}