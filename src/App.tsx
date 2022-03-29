import React, {useState} from 'react';
import CoursesList from './components/CoursesList';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
// import './App.css';

function App() {
  const [cart, setCart] = useState([] as any);
  type itemProps = {
          id: number,
          title: string,
          author: string,
          price: number,
          discount: number,
          tag1: string,
          tag2: string,
  }

  const handleClick = (item:itemProps) => {
      // cart.push(item);
      
      if (cart.indexOf(item) !== -1) return;
      setCart([...cart, item]);
      console.log(cart);
  }

  // useEffect(() => {
  //   console.log("item added in cart");
  // }, [cart]);

  return (
    <React.Fragment>
      <Navbar/>
      <CoursesList handleClick={handleClick}></CoursesList>
      <Cart cart={cart} setCart={setCart}></Cart>
    </React.Fragment>

  );
}

export default App;
