import './home.css'
import NavBar from './../../components/NavBar/navBar'
import Slider from './../../components/Slider/slider'
import Category from './../../components/Category/category'
import Product from '../../components/Products/productList'
import News from './../../components/NewsLetter/newsLetter'
import Footer from './../../components/Footer/footer'
import {product} from './../../data'

function home(){
    const prod = Object.values(
        product.reduce((acc, item) => {
          if (!acc[item.type]) {
            acc[item.type] = [];
          }
          if (acc[item.type].length < 2) {
            acc[item.type].push(item);
          }
          return acc;
        }, {})
      ).flat();
    return(
        <div className="homeDiv">
            <NavBar/>
            <Slider/>
            <Category/>
            <Product product={prod}/>
            <News/>
            <Footer/>
        </div>
    );
}

export default home;