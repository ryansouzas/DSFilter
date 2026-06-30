import type { ProductDTO } from "../../models/product";
import ProductCard from "../ProductCard";
import "./styles.css";

type Props = {
  products: ProductDTO[];
};
    

export default function ProductListCard({products}: Props) {
    return (
        <section className="product-list-card">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    );
}