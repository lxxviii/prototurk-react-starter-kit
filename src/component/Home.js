import React from 'react';
import Ref from './reducers/useref';
import UseReducer from './reducers/usereducer';
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