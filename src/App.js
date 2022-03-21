import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import Modal from "./Components/Modal/Modal";

function App() {
  const [products, setProducts] = useState([]);
  const [cartState, setCartState] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartOpenHandler = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const addCart = (el) => {
    if (cartState.find((item) => item.id === el.id)) {
      setCartState((prev) => {
        return prev.map((item) => {
          if (item.id === el.id) {
            console.log(item, el);
            return { ...item, totalCount: item.totalCount + 1 };
          }
          return item;
        });
      });
    } else {
      setCartState((prev) => [...prev, el]);
    }
  };

  const subCart = (el) => {
    if (cartState.find((item) => item.id === el.id)) {
      setCartState((prev) => {
        return prev.map((item) => {
          if (item.id === el.id && el.totalCount > 0) {
            return { ...item, totalCount: item.totalCount - 1 };
          }
          return item;
        });
      });
    }
  };

  return (
    <div className="App">
      <Header products={products} cartOpenHandler={cartOpenHandler} />
      {isCartOpen && <Modal cartState={cartState} />}
      <Products products={products} addCart={addCart} subCart={subCart} />
    </div>
  );
}

export default App;
