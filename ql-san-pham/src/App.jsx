// src/App.jsx
import React, { useState } from "react";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";
import './App.css'

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Sản phẩm A",
      price: 120000,
      category: "Điện tử",
      stock: 10,
    },
    {
      id: 2,
      name: "Sản phẩm B",
      price: 80000,
      category: "Gia dụng",
      stock: 5,
    },
  ]);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div className="App">
      <AddProductForm onAdd={handleAddProduct} />
      <ProductList products={products} />
    </div>
  );
}

export default App;
