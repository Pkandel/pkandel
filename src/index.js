import React from 'react';
import { render } from 'react-dom';
import { Nav } from './components';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTop'

const element = document.getElementById('app');
render(
    <BrowserRouter>
    <ScrollToTop>
        <Nav />
    </ScrollToTop>
    </BrowserRouter>, element);
