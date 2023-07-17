import React from 'react';
import { useGetAllProductsQuery } from '../features/productsApi';
// import { useSelector } from 'react-redux';

const Home = () => {
    // const { items, status } = useSelector(state => state.products)
    const { data, error, isLoading } = useGetAllProductsQuery()
    return (
        <div className='home-container '>
            {
                isLoading ? (<p>Loading....</p>) :
                    error ? (<p>An error occurred..</p>) :
                        (
                            <>
                                <h2>--New Arrivals--</h2>
                                <hr className='hr-line' />
                                <hr />
                                <div className="products">
                                    {
                                        data?.map(product => <div key={product.id} className='product'>
                                            <h3>{product.name}</h3>
                                            <img src={product.image} alt={product.name} />
                                            <div className="details">
                                                <h5>{product.desc}</h5>
                                                <h5 className='price'>Price: ${product.price}</h5>
                                            </div>
                                            <button>Add To cart</button>
                                        </div>)
                                    }
                                </div>
                                <hr />
                            </>
                        )}
        </div>
    );
};

export default Home;