import React from "react";
import "./ProductList.css";

export default function ProductList({ products, onDelete }) {
    return (
      <div>
        <h2>Danh sách sản phẩm</h2>
        <table>
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
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price.toLocaleString("vi-VN")}₫</td>
                <td>{product.category}</td>
                <td>{product.stock}</td>
                <td>
                  <button onClick={() => onDelete(product.id)}>Xoá</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  