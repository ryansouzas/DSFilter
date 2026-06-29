import "./styles.css";

export default function ProductFilterCard() {
    return (
        <div className="app-container product-filter-card">
            <form className="product-filter-form">
                <input type="text" placeholder="Preço mínimo" />
                <input type="text" placeholder="Preço máximo" />
                <button type="submit" className="app-btn btn-green">Filtrar</button>
            </form>
        </div>
    );
}