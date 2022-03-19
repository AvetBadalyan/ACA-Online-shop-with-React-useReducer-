import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart_Modal/Cart";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";

function App() {
  const [products, setProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartOpenHandler = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(
          data.map((item) => {
            return { ...item, totalCount: 0 };
          })
        );
      });
  }, []);

  console.log(products);
  return (
    <div className="App">
      <Header
        products={products}
        cartOpenHandler={cartOpenHandler}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />
      {isCartOpen && <Cart />}
      <Products products={products} />
    </div>
  );
}

export default App;
