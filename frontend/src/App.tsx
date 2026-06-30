import Header from "./components/Header";
import ListingBody from "./components/ListingBody";
import "./index.css";

function App() {
  return (
    <>
      <Header/>
      <main className="app-container">
        <ListingBody/>
      </main>
    </>
  );
}

export default App;
