import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Navbar from '../components/Navbar/Navbar';
const Home: NextPage = () => {
    const [productList, setProductList] = useState<TProduct[]>([]);

    useEffect(() => {
        fetch('/api/avo')
            .then(res => res.json())
            .then(({ data, length }) => {
                setProductList(data);
            })
            .catch(err => console.log(err));
    }, []);
    return (
        <div>
            <Navbar />
            <h1>Home Platzi-avo</h1>
            {productList.map((product, index) => {
                return (
                    <div key={index}>
                        <h2>{product.name}</h2>
                        <img src={product.image} alt={product.name}/>
                    </div>
                );
            })}
        </div>
    )
}

export default Home;