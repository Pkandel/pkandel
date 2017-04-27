import React from 'react';
import { render } from 'react-dom';
import { Nav } from './components';
import { BrowserRouter } from 'react-router-dom';

const element = document.getElementById('app');
render(
    <BrowserRouter>
        <Nav />
    </BrowserRouter>, element);
