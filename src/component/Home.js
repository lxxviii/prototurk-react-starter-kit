import React from 'react';
import Ref from './use/use-ref';
import UseReducer from './use/use-reducer';
import Header from './Header';
import Footer from './Footer';

export default function Home() {

    return (
        <>
            <Header />
            <Ref />
            <UseReducer />
            <Footer />
        </>
    );
}