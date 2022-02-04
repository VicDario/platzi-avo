import { GetStaticProps, GetStaticPaths } from 'next';
import fetch from 'isomorphic-unfetch';
import Layout from '@components/Layout/Layout';
import ProductSummary from '@components/ProductSummary/ProductSummary';

export const getStaticProps: GetStaticProps = async({ params }) => {
	const productId = params?.productId as string;
	const response = await fetch(`https://platzi-avo-r050t3brl-vicdario.vercel.app/api/avo/${productId}`);
	const data : TAPIAVODetailResponse = await response.json();

	return {
		props: {
			data
		}
	}
}
export const getStaticPaths: GetStaticPaths = async() => {
	const response = await fetch(`https://platzi-avo-r050t3brl-vicdario.vercel.app/api/avo`);
	const { data: productList }: TAPIAvoResponse = await response.json();

	const paths = productList.map(({ id }) => ({ params: { productId: id } }));

	return {
		paths,
		fallback: false
	}
}

const ProductPage = ({ product }: { product: TProduct }) => {
	return <Layout>{product == null ? null : <ProductSummary product={product} />}</Layout>;
};

export default ProductPage;
