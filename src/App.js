import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import Modal from "./Components/Modal/Modal";

function App() {
  const [products, setProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartOpenHandler = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => {
        setProducts(
          products.map((item) => {
            return { ...item, itemCount: 0 };
          })
        );
      });
  }, []);

  const cartProducts = products.filter((item) => {
    return item.itemCount > 0;
  } )
  return (
    <div className="App">
      <Header cartCount={cartProducts.length} cartOpenHandler={cartOpenHandler} />
      {isCartOpen && <Modal products={cartProducts} />}
      <Products products={products} />
    </div>
  );
}

export default App;
