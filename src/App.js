import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import Modal from "./Components/Modal/Modal";

function App() {
  const [products, setProducts] = useState([]);
  const [arrayofProductsInCart, setArrayofProductsInCart] = useState([]);
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
    if (arrayofProductsInCart.find((item) => item.id === el.id)) {
      setArrayofProductsInCart((prev) => {
        return prev.map((item) => {
          if (item.id === el.id) {
            return { ...item, totalCount: item.totalCount + 1 };
          }
          return item;
        });
      });
    } else {
      setArrayofProductsInCart((prev) => [...prev, el]);
    }
  };

  const subCart = (el) => {
    if (arrayofProductsInCart.find((item) => item.id === el.id)) {
      setArrayofProductsInCart((prev) => {
        return prev.map((item) => {
          if (item.id === el.id && el.totalCount > 0) {
            return { ...item, totalCount: item.totalCount - 1 };
          }
          return item;
        });
      });
    }
  };

  const addModalCount = (id) => {
    setArrayofProductsInCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, totalCount: item.totalCount + 1 };
        }
        return item;
      })
    );
  };

  const subModalCount = (id) => {
    setArrayofProductsInCart((prev) =>
      prev.map((item) => {
        if (item.id === id && item.totalCount !== 0) {
          return { ...item, totalCount: item.totalCount - 1 };
        } else return item;
      })
    );
  };

  const emptyModal = (id) => {
    setArrayofProductsInCart((prev) => {
      return prev.filter((item) => {
        return item.id !== id;
      });
    });
  };

  return (
    <div className="App">
      <Header products={products} cartOpenHandler={cartOpenHandler} />
      {isCartOpen && (
        <Modal
          arrayofProductsInCart={arrayofProductsInCart}
          addModalCount={addModalCount}
          subModalCount={subModalCount}
          emptyModal={emptyModal}
        />
      )}
      <Products products={products} addCart={addCart} subCart={subCart} />
    </div>
  );
}

export default App;
