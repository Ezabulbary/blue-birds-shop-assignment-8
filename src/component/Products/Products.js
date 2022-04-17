import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import './Products.css';

const Products = (props) => {
    const { data, handleAddToCart } = props;
    const { pairImage, name, price, sideImage } = data;
    const [flipImage, setFlipImage] = useState(false);
    
    return (
        <div
            className='product'
            onMouseEnter={() => setFlipImage(true)}
            onMouseLeave={() => setFlipImage(false)}
        >
            <div>
                <img
                    className="product-img"
                    src={flipImage ? sideImage : pairImage}
                    alt=""
                />
            </div>
            <div className='product-info'>
                <h2>Name: {name}</h2>
                <p>Price: ${price}</p>
            </div>
            <div className='product-btn'>
                <button onClick={() => handleAddToCart(data)}>Add To Cart
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
        </div>
    );
};

export default Products;