import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Playlist = () => {

  return (
    <div className='Play'>
        <div className='row'>
          <div className='col-lg-8' id='videosection'>

            <img src="images/Latest-img.jpg" alt="" />

            <div className='channel_details'>
              <p><img src='images/Music.jpg' className='logo_img' /></p>
              <p className='name'>Channel name</p>
            </div>
          </div>
          <div className='col-lg-4' id='VideosCollection'>
            <div className='Upper_portion'>
              <div className='flex_box'>
                <div>
                  <p className='title'>Title</p>
                  <p className='channelName'>Video Numbers</p>
                </div>
                <div className='Dropdown_box'>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                      <MoreVertIcon />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>
                        Save Playlist to library
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
            <div className="collection">

              <div className='flex_box_2'>
                <div>
                  <img src="images/Music.jpg" alt="" />
                </div>
                <div className='flex_box_3'>
                  <p className='title'>title</p>
                  <p className='channelName'>channelName</p>
                </div>
              </div>

            </div>
          </div>
        </div>
    </div>
  );
};

export default Playlist;