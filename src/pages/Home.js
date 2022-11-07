import React from 'react'
import Ref from '../component/use-ref';
import UseReducer from '../component/use-reducer';
import Header from './Header';
import Footer from './Footer';

export default function Home() {



    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <Ref />
            </div>
            <div>
                <UseReducer />
            </div>
            <h4>{process.env.NODE_ENV}</h4>
            <p>{process.env.REACT_APP_API_URL}</p>
            {process.env.NODE_ENV === 'development' && (<img src='../public/logo512.png' alt='' />)}
            <div>
                <Footer />
            </div>
        </>
    )
}