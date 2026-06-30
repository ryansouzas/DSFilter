import { useContext, useState } from "react";
import type { ProductDTO } from "../../models/product";
import { findByPrice } from "../../services/product-service";
import ProductFilterCard from "../ProductFilterCard";
import ProductListCard from "../ProductListCard";
import { ContextProductCount } from "../../utils/context-products";

export default function ListingBody() {

    const [products, setProducts] = useState<ProductDTO[]>([]);
    const {setContextProductCount } = useContext(ContextProductCount);

    function handleFilter(min: number, max: number) {
        const filteredProducts = findByPrice(min, max);
        setProducts(filteredProducts);
        setContextProductCount(filteredProducts.length);
        console.log("Filtered products:", filteredProducts);
    }


    return (
        <div>
            <ProductFilterCard onFilter={handleFilter} />

            {products.length > 0 && (
                <ProductListCard products={products} />)}
        </div>
    );
}