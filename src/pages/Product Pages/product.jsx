import './product.css'
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar/navBar';
import Description from '../../components/Product description/description';

export default function Product({ products }) {
  const { id } = useParams();
  console.log('ID from URL:', id);
  console.log('Products:', products);

  const product = products.find(p => p.id === parseInt(id));
  console.log('Found product:', product);

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <NavBar/>
      <Description item={product}/>
    </div>
  );
}