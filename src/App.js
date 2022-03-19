import { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";

export const ACTION_TYPES = {
  SET_PRODUCTS: "SET_PRODUCTS",
  COUNTER_ADD_HANDLER: "COUNTER_ADD_HANDLER",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_PRODUCTS:
      return action.res;
    // ՉԵՄ ՀԱՍԿԱՑԵԼ ՈՐ ԱՅԴԻՆ ՈՒՄՆ Ա
    case ACTION_TYPES.COUNTER_ADD_HANDLER: {
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, count: item.count + 1 };
        } else {
          return item;
        }
      });
    }
  }
}

function App() {
  const [products, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((res) =>
      res.json().then((res) => {
        let resWithCounter = res.map((item) => ({ ...item, count: 0 }));
        dispatch({
          type: ACTION_TYPES.SET_PRODUCTS,
          res: resWithCounter,
        });
      })
    );
  }, []);

  console.log(products);
  return (
    <div className="App">
      <Header />
      <Products products={products} dispatch={dispatch} />
    </div>
  );
}

export default App;
