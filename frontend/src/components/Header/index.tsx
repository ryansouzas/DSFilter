import { useContext } from "react";
import { ContextProductCount } from "../../utils/context-products";
import "./styles.css";

export default function Header() {

    const { contextProductCount } = useContext(ContextProductCount);
    return (
        <header className="app-header">
            <div className="app-container app-header-container">
                <h1>DSFilter</h1>
                <h3>{contextProductCount} produto(s)</h3>
            </div>
        </header>
    );

}