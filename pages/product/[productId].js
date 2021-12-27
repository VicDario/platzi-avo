import { useRouter } from "next/router";

const ProductItem = () => {
    const router = useRouter();
    const { productId } = router.query;
    return (
        <div>
            <h1>Product Item: {productId}</h1>
        </div>
    );
}

export default ProductItem;