// src/components/AddProductForm.jsx
import React, { useState } from "react";

export default function AddProductForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price) return;

    const newProduct = {
      ...formData,
      id: Date.now(),
      price: parseInt(formData.price),
      stock: parseInt(formData.stock),
    };

    onAdd(newProduct);

    // Reset form
    setFormData({
      name: "",
      price: "",
      category: "",
      stock: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>Thêm sản phẩm mới</h2>
      <input
        type="text"
        name="name"
        placeholder="Tên sản phẩm"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Giá"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Danh mục"
        value={formData.category}
        onChange={handleChange}
      />
      <input
        type="number"
        name="stock"
        placeholder="Tồn kho"
        value={formData.stock}
        onChange={handleChange}
      />
      <button type="submit">Thêm sản phẩm</button>
    </form>
  );
}
