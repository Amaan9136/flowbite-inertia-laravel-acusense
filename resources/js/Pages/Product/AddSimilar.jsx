// resources/js/Pages/Product/AddSimilar.js
import { useState } from 'react';

const AddSimilarProducts = ({ product }) => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (productId) => {
        fetch('/add-similar-products', {
            method: 'POST',
            body: JSON.stringify({ product_id: productId }),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(response => response.json())
        .then(data => {
            setCart([...cart, product]);
            alert(data.message);
        });
    };

    return (
        <div>
            <h2>Product: {product.name}</h2>
            <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
        </div>
    );
};

export default AddSimilarProducts;
