import React from 'react';
import Videoscard from '../Tabs/Videoscard';

const Channel = () => {
    return (
        <div className='Channel-details'>


            <div className='flex-box-five'>
                <div>
                    <img src="images/Music.jpg" alt="" className='profile-img'/>
                </div>
                <div className='channel-details'>
                    <p className='name'>Channel name</p>
                    <p className='subscribers'>Subsribers</p>
                </div>
            </div>

            <div className='row'>
                <div className='col-xxl-3 col-lg-4 col-sm-6'>
                    <Videoscard />
                </div>

                <div className='col-xxl-3 col-lg-4 col-sm-6'>
                    <Videoscard />
                </div>

                <div className='col-xxl-3 col-lg-4 col-sm-6'>
                    <Videoscard />
                </div>

                <div className='col-xxl-3 col-lg-4 col-sm-6'>
                    <Videoscard />
                </div>

                <div className='col-xxl-3 col-lg-4 col-sm-6'>
                    <Videoscard />
                </div>

                <div className='col-xxl-3 col-lg-4 col-sm-6'>
                    <Videoscard />
                </div>
            </div>
        </div>
    )
}

export default Channel;
