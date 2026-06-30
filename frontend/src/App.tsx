import { useState } from "react";
import Header from "./components/Header";
import ListingBody from "./components/ListingBody";
import "./index.css";
import { ContextProductCount } from "./utils/context-products";

function App() {

  const [contextProductCount, setContextProductCount] = useState(0);

  return (
    <>
    <ContextProductCount.Provider value={{ contextProductCount, setContextProductCount }}>
      <Header/>
      <main className="app-container">
        <ListingBody/>
      </main>
    </ContextProductCount.Provider>
    </>
  );
}

export default App;
