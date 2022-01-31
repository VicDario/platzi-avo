import fetch from 'isomorphic-unfetch';
import Layout from '@components/Layout/Layout';
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader';
import ProductList from '@components/ProductList/ProductList';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
	const response = await fetch('https://platzi-avo-r050t3brl-vicdario.vercel.app/api/avo');
	const { data: productList }: TAPIAvoResponse = await response.json();

	return {
		props: {
			productList
		}
	}
}

const HomePage = ({ productList } : { productList: TProduct[]}) => {
	return (
		<Layout>
			<KawaiiHeader />
			<ProductList products={productList} />
		</Layout>
	);
};

export default HomePage;
