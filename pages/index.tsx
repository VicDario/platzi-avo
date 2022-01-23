import { useEffect, useState } from 'react';
import Navbar from '../components/navbar/Navbar';
const Home = () => {
    const [productList, setProductList] = useState<TProduct[]>([]);

    useEffect(() => {
        fetch('/api/avo')
            .then(res => res.json())
            .then(({ data, length }) => {
                setProductList(data);
                console.log(productList)
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
                        <img src={product.image} alt="" />
                    </div>
                );
            })}
        </div>
    )
}

export default Home;