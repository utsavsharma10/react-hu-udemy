import React, { useEffect, useState } from "react";

const Cart = ({ cart, setCart }: any) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id: number) => {
    const arr = cart.filter((item: any) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item: any) => (ans += item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((item: any) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.author}</p>
          <p>{item.price}</p>
          <p>{item.discount}</p>
          <p>{item.tag1}</p>
          <p>{item.tag2}</p>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
    </article>
  );
};

export default Cart;
