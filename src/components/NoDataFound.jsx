import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
export default function NoDataFound({ nodataTitle }) {
    return (
        <div className='no-data-found'>
            <img src='../images/nofound.jpg' />
            <h3>{nodataTitle}</h3>
        </div>
    );
}