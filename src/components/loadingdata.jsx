import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
export default function Loadingdata({title}) {
    return (
        <div className='no-data-outer'>
            <img src={require('../images/loader.gif')} />
            <h3>
                {title ?? "Loading Data..."}
            </h3>
        </div>
    );
}
