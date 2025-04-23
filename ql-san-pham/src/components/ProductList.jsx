import React from "react";
import './ProductList.css'

const sampleProducts = [
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
];

export default function ProductList() {
  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Danh mục</th>
            <th>Tồn kho</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {sampleProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price.toLocaleString("vi-VN")}₫</td>
              <td>{product.category}</td>
              <td>{product.stock}</td>
              <td>
                <button>Xoá</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}