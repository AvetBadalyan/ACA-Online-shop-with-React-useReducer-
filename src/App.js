import { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";

const ACTION_TYPES = {
  SET_PRODUCTS: "SET_PRODUCTS",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_PRODUCTS:
      return action.res;
  }
}

function App() {
  const [products, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((res) =>
      res
        .json()
        .then((res) => dispatch({ type: ACTION_TYPES.SET_PRODUCTS, res: res }))
    );
  }, []);

  console.log(products);
  return (
    <div className="App">
      <Header />
      <Products products={products} />
    </div>
  );
}

export default App;
