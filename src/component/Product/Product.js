import React, { useState } from "react";
import "./Product.css";
// import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Product({ data }) {
  const [quantity, setquantity] = useState(1);
  const [varient, setvarient] = useState("veg");
  const [cartItems, setCartItems] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="m-1 shadow-lg p-3 mb-5 bg-white rounded">
      {data.map((item) => (
        <div key={item.id}>
          <div>{item.productname}</div>
          <div>{item.price}</div>
          <div>{item.category}</div>
        </div>
      ))}
    </div>
  );
}
/**
 * varient of types is array loop throgh by using map method
 * first object so prices of 0 the index small medium large
 * map we have two para obj and index
 */
