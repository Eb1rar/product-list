import data from "./helper/data";
import "./App.scss";
import Header from "./components/Header/Header";
import Product from "./components/ProductCard/Product";

function App() {
  return (
    <div>
      <Header />
      <Product data={data} />
    </div>
  );
}

export default App;
