import React from 'react';
import Loader from 'react-loader-spinner';

import './css/loaderContainer.css';

const LoaderCointaner = () => (
    <div className='loader-container'>
        <Loader type='TailSpin' color='#ee5b18' height='40' width='40' />
    </div>
);

export default LoaderCointaner;