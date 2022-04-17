
import { faFaceSmile, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './Cart.css';

const Cart = ({ cart, clickDeleteToCart }) => {
    const [addProduct, setAddProduct] = useState(false);
    const [freeProducts, getFreeProducts] = useState({});

    const getOneForMe = () => {
        const randomNumber = Math.floor(Math.random() * cart.length);
        const item = cart[randomNumber];
        getFreeProducts(item);
    }

    useEffect(() => {
        if (cart.length > 0) {
            setAddProduct(true);
        }
        else {
            setAddProduct(false);
        }
    }, [cart])

    return (
        <div className='cart'>
            <div className="top-bar">
                <h3>Selected Products</h3>
            </div>
            {
                cart.map((item, id) => (
                    <div className="cart-item" key={id}>
                        <img
                            className='cart-item-image'
                            src={item.pairImage}
                            alt=""
                        />
                        <div className='product-info'>
                            <p>{item.name}</p>
                        </div>
                        <button className='delete'>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                ))
            }
            <div>
                <button className={addProduct ? "get-one-btn" : "get-one-btn-disable"} onClick={getOneForMe} disabled={!addProduct}>Get One For Me
                    <FontAwesomeIcon icon={faFaceSmile} />
                </button>
                <button className={addProduct ? "all-delete" : "all-delete-disable"} onClick={clickDeleteToCart} disabled={!addProduct}>Clear All Products
                    <FontAwesomeIcon icon={faTrash} />
                </button>
                {Object.keys(freeProducts).length > 0 && <div className="cart-item">
                    <img
                        className='cart-item-image'
                        src={freeProducts.pairImage}
                        alt=""
                    />
                    <div className='product-info'>
                        <p>{freeProducts.name}</p>
                        <p>Price: ${freeProducts.price}</p>
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default Cart;