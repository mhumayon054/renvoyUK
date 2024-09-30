import React from 'react';
import Videoscard from './Videoscard';

const Topview = () => {
  return (
    <div>
      <div className='Latest-tab'>
            <div className='row'>

                <div className='col-xxl-3 col-lg-4 col-sm-6'> 
                   <Videoscard/>
                </div>

                <div className='col-xxl-3 col-lg-4 col-sm-6'> 
                   <Videoscard/>
                </div>

                <div className='col-xxl-3 col-lg-4 col-sm-6'> 
                   <Videoscard/>
                </div>

                <div className='col-xxl-3 col-lg-4 col-sm-6'> 
                   <Videoscard/>
                </div>

                <div className='col-xxl-3 col-lg-4 col-sm-6'> 
                   <Videoscard/>
                </div>

                <div className='col-xxl-3 col-lg-4 col-sm-6'> 
                   <Videoscard/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Topview
