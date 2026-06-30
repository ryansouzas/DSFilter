import { useState } from "react";
import type { ProductDTO } from "../../models/product";
import { findByPrice } from "../../services/product-service";
import ProductFilterCard from "../ProductFilterCard";

export default function ListingBody() {

    const [products, setProducts] = useState<ProductDTO[]>([]);
    
    function handleFilter(min: number, max: number) {
        const filteredProducts = findByPrice(min, max);
        setProducts(filteredProducts);
        console.log("Filtered products:", filteredProducts);
    }

    return (
        <div>
            <ProductFilterCard onFilter={handleFilter}/>
        </div>
    );
}