import { useState } from "react";
import "./styles.css";

type Props = {
    onFilter: (min: number, max: number) => void;
};

export default function ProductFilterCard({ onFilter }: Props) {

    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setMinPrice(event.target.value);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onFilter(Number(minPrice), Number(maxPrice));
        setMinPrice("");
        setMaxPrice("");
    }

    return (
        <div className="app-container product-filter-card">
            <form className="product-filter-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Preço mínimo"
                    value={minPrice}
                    onChange={handleChange} />
                <input
                    type="text"
                    placeholder="Preço máximo"
                    value={maxPrice}
                    onChange={(event) => setMaxPrice(event.target.value)} />
                <button type="submit" className="app-btn btn-green">Filtrar</button>
            </form>
        </div>
    );
}