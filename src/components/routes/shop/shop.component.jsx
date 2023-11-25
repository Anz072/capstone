import { Fragment, useContext } from 'react';
import { ProductsContext } from '../../../context/products.context';
import ProductCard from '../../product-card/product-card.component';
import './shop.styles.scss';

const Shop = () =>{
    const {products} = useContext(ProductsContext);
    return(
    <Fragment>

    <h1> This is shop yo</h1>
    <div className='products-container'>
        {products.map((item)=>
        <ProductCard key={item.id} product={item}/>)}
    </div>
    </Fragment>

    )
}

export default Shop;