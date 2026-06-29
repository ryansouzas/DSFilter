import Header from "./components/Header";
import ProductFilterCard from "./components/ProductFilterCard";
import ProductListCard from "./components/ProductListCard";
import "./index.css"

function App() {
  return (
    <>
      <Header/>
      <main className="app-container">
        <ProductFilterCard/>
        <ProductListCard/>
      </main>
    </>
  );
}

export default App;
