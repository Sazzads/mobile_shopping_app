import React from 'react';
import { useGetAllProductsQuery } from '../features/productsApi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
// import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
    // const { items, status } = useSelector(state => state.products)
    const { data, error, isLoading } = useGetAllProductsQuery();

    const dispatch = useDispatch()
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    return (
        <div className='home-container '>
            <ToastContainer />
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
                                            <button onClick={() => handleAddToCart(product)}>Add To cart</button>
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