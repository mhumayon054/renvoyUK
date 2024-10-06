import React from 'react';
import Navbar from '../components/Navbar';
import GridCards from '../components/GridCards';

const CardView = () => {
  return (
    <div className='cardview-parent'>
        <Navbar/>
        <GridCards/>
    </div>
  );
}

export default CardView;
