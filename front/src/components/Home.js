import React, { Fragment, useState } from 'react';
import { Heading } from './Heading';
import { Patientlist } from './Patientlist';
import Auth from './Auth';
import { NavbarPage } from './NavbarPage';
import { Container } from 'mdbreact';

export const Home = () => {
     
    const { user } = useState('');

    return (
        <Fragment>
            <div className="App">
                <NavbarPage />
                <div className="container mx-auto">
                    <h3 className="text-center  text-3xl mt-20 text-base leading-8 text-black font-bold tracking-wide uppercase">COVID Fighting App</h3>
                    <Heading />
                    { user ? <Patientlist /> : <Auth /> }
                </div>
            </div>
        </Fragment>
    )
}