
import { faFaceSmile, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import './Cart.css';

const Cart = ({ cart, clickDeleteToCart }) => {


    return (
        <div className='cart'>
            <div className="top-bar">
                <h3>Order Summary</h3>
                <button className='delete' onClick={clickDeleteToCart}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
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
                            <p>Price: ${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

export default Cart;