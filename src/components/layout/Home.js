import React from 'react';
import Slider from './Slider'
import Latestnews from './Latestnews';
import News from './News';
import Product from './Product';


const Home = () => {
    return (
        <div>
            <Slider />
                <section>
                <Latestnews />
                <News />
                <Product />
            </section>
        </div>
    )
}
export default Home