import React, { useState } from 'react'
import styles from './Add.module.css'
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';




export default function Add({ handlerAddProduct }) {
  const [productName, setProductName] = useState('');
  const [productQuantity, setProductQuantity] = useState('')
  const [productPrice, setProductPrice] = useState('');
  const [productDiscount, setProductDiscount] = useState('');
  const navigate = useNavigate();

  const handleAddClick = () => {
    handlerAddProduct({
      id: uuid(),
      name: productName,
      quantity: productQuantity,
      price: productPrice,
      discount: productDiscount,
    });

    setProductName('');
    setProductQuantity('');
    setProductPrice('');
    setProductDiscount('');

    navigate('/view');
  };

  return (
    <div>
      <div className={styles.inputsContainer}>
        <span>Name: </span> <input
          type='text'
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          id="product-name"
          name="product-name">
        </input><br></br>
        <span>Quantity: </span> <input
          type='number'
          value={productQuantity}
          onChange={(e) => setProductQuantity(e.target.value)}
          id="product-quantity"
          name="product-quantity"></input><br></br>
        <span>Price: </span> <input
          type='number'
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          id="product-price"
          name="product-price"></input><br></br>
        <span>Discount: </span> <input
          type='number'
          value={productDiscount}
          onChange={(e) => setProductDiscount(e.target.value)}
          id="product-discount"
          name="product-discount"></input>
      </div>
      <button onClick={handleAddClick}>ADD PRODUCT</button>
    </div>
  )
}
