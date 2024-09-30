import React from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import {
  Link,
} from "react-router-dom";

const Categories = ({total}) => {
  // console.log("🚀 ~ Categories ~ total:", total)
  return (
    <div className='Category'>
       <h5>  Total Videos</h5>
      {/* <Link to="/channel" className='flex-box-four'>
        <div>
            <VideogameAssetIcon/>
        </div>
        <div className='channel-type'>
            <p className='Type'>GAME (13)</p>
        </div>
      </Link>  */}

      <Link to="/" className='flex-box-four'>
        <div>
            <PlayCircleIcon/>
        </div>
        <div className='channel-type'>
            <p className='Type'>Library Count {total || 0}</p>
        </div>
      </Link> 

      {/* <Link to="/channel" className='flex-box-four'>
        <div>
            <MusicNoteIcon/>
        </div>
        <div className='channel-type'>
            <p className='Type'>MUSIC (14)</p>
        </div>
      </Link>  */}

      
    </div>
  )
}

export default Categories
