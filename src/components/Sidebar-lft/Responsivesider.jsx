import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Categories from './Categories';
import {
    Link,
} from "react-router-dom";
import LiveTvIcon from '@mui/icons-material/LiveTv';

const Responsivesider = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="primary" onClick={handleShow} className='Offcanvas-btn-two'>
                <LiveTvIcon />
            </Button>

            <Offcanvas show={show} onHide={handleClose} className="Offcanvas-two">
                <Offcanvas.Header closeButton className='offcanvas-header-two'>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    <div className='Sidebar-lft'>
                        <h5>Top Channels</h5>
                        <Link to="/channel" className='flex-box-two'>
                            {/* <div> */}
                                <img src="images/Music.jpg" alt="" />
                            {/* </div> */}
                            <div className='channel-details'>
                                <p className='channel-name'>Music Channel</p>
                                <p className='videos-number'>8 Videos</p>
                                <p className='views'><VisibilityIcon /> 27921 Views</p>
                            </div>
                        </Link>

                        <Link to="/channel" className='flex-box-two'>
                            <div>
                                <img src="images/Music.jpg" alt="" />
                            </div>
                            <div className='channel-details'>
                                <p className='channel-name'>TV Channel</p>
                                <p className='videos-number'>8 Videos</p>
                                <p className='views'><VisibilityIcon /> 27921 Views</p>
                            </div>
                        </Link>

                        <Link to="/channel" className='flex-box-two'>
                            <div>
                                <img src="images/Music.jpg" alt="" />
                            </div>
                            <div className='channel-details'>
                                <p className='channel-name'>Movie Channel</p>
                                <p className='videos-number'>8 Videos</p>
                                <p className='views'><VisibilityIcon /> 3978 Views</p>
                            </div>
                        </Link>

                        <Link to="/channel" className='flex-box-two'>
                            <div>
                                <img src="images/Music.jpg" alt="" />
                            </div>
                            <div className='channel-details'>
                                <p className='channel-name'>Tech Channel</p>
                                <p className='videos-number'>8 Videos</p>
                                <p className='views'><VisibilityIcon /> 3278 Views</p>
                            </div>
                        </Link>

                        <Categories />
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Responsivesider
