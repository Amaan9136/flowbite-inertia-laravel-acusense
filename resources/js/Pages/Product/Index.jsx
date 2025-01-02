// resources/js/Pages/Product/Index.jsx
import { Inertia } from '@inertiajs/inertia';
import { useState } from 'react';
import QRCode from 'react-qr-code';

const ProductIndex = ({ products }) => {
    const [name, setName] = useState(''); // Product name state
    const [showForm, setShowForm] = useState(false); // To toggle the form visibility
    const [errors, setErrors] = useState({}); // For handling form validation errors

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        Inertia.post('/products', { name }, {
            onError: (error) => {
                setErrors(error); // Handle validation errors
            }
        });
    };

    return (
        <div>
            <h2>Product List</h2>
            <button onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Cancel' : 'Create Product'}
            </button>

            {/* Show the form when `showForm` is true */}
            {showForm && (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Product Name"
                    />
                    {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                    <button type="submit">Create Product</button>
                </form>
            )}

            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <div>
                            <h3>{product.name}</h3>
                            <QRCode value={JSON.stringify({ prodkey: product.id, name: product.name })} />
                            <a href={`/generate-qr/${product.id}`}>Generate QR</a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductIndex;
