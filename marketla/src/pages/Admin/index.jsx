import { useState } from "react";
import "./admin.css";

const Admin = () => {
    const [product, setProduct] = useState({
        title: "",
        category: "",
        image: "",
        price: "",
    });

    const handleInputChange = (e) => {
        const id = e.target.id;
        const val = e.target.value;

        let copy = { ...product }; //Spread operator
        copy[id] = val;

        setProduct(copy);
    };

    const saveProduct = () => {
        console.log(product);

        clearForm();
    };

    const clearForm = () => {
        setProduct({ title: "", category: "", image: "", price: "" });
    };

    return (
        <div className="admin page">
            <h1>Store Management</h1>

            <div className="parent-container">
                <h3>Register Product</h3>
                <div>
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input
                        value={product.title}
                        onChange={handleInputChange}
                        type="text"
                        name="Title"
                        id="title"
                        className="form-control"
                    />
                </div>
                <div>
                    <label htmlFor="category" className="form-label">
                        Category
                    </label>
                    <input
                        value={product.category}
                        onChange={handleInputChange}
                        type="text"
                        name="Category"
                        id="category"
                        className="form-control"
                    />
                </div>
                <div>
                    <label htmlFor="image" className="form-label">
                        Image
                    </label>
                    <input
                        value={product.image}
                        onChange={handleInputChange}
                        type="text"
                        name="Image"
                        id="image"
                        className="form-control"
                    />
                </div>
                <div>
                    <label htmlFor="price" className="form-label">
                        Price
                    </label>
                    <input
                        value={product.price}
                        onChange={handleInputChange}
                        type="number"
                        name="Price"
                        id="price"
                        className="form-control"
                    />
                </div>

                <div>
                    <button
                        onClick={() => saveProduct()}
                        className="btn btn-dark"
                    >
                        Save Product
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Admin;
