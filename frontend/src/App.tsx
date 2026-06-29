import Header from "./components/Header";
import ProductFilterCard from "./components/Header/ProductFilterCard";
import "./index.css";

function App() {
  return (
    <>
      <Header/>
      <main className="app-container">
        <ProductFilterCard/>
      </main>
    </>
  );
}

export default App;
