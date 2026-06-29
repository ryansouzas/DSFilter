import "./styles.css";

export default function ProductFilterCard() {
    return (
        <div className="app-container product-filter-card">
            <form className="product-filter-form">
                <input type="number" placeholder="Preço mínimo" />
                <input type="number" placeholder="Preço máximo" />
                <button type="submit" className="app-btn btn-green">Filtrar</button>
            </form>
        </div>
    );
}