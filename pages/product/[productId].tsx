import { useState, useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import Layout from '@components/Layout/Layout';
import ProductSummary from '@components/ProductSummary/ProductSummary';

const ProductPage: NextPage = () => {
	const { query } = useRouter();
	const [product, setProduct] = useState<TProduct | null>(null);

	useEffect(() => {
		if (query.productId) {
			window
				.fetch(`/api/avo/${query.productId}`)
				.then((response) => response.json())
				.then((data: TProduct) => {
					setProduct(data);
				});
		}
	}, [query.productId]);

	return <Layout>{product == null ? null : <ProductSummary product={product} />}</Layout>;
};

export default ProductPage;
