import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (selectedProduct) => {
        let newCarts = [];
        const exist = cart.find(product => product.id === selectedProduct.id);
        if (!exist) {
            selectedProduct.quantity = 1;
            newCarts = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            selectedProduct.quantity = selectedProduct.quantity + 1;
            newCarts = [...rest, selectedProduct];
        }

        setCart(newCarts);
    }

    const clickDeleteToCart = () => {
        setCart([]);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Products
                        key={product.id}
                        data={product}
                        handleAddToCart={handleAddToCart}
                    ></Products>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    clickDeleteToCart={clickDeleteToCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;