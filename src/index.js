import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App'; 

import {   GlobalProvider } from "./components/context/GlobalData.jsx"; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <GlobalProvider>
    <App /> 
    </GlobalProvider>
);
 
