import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Products
                        key={product.id}
                        data={product}
                        // handleAddToCart={handleAddToCart}
                    ></Products>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    // cart={cart}
                    // clickDeleteToCart={clickDeleteToCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;