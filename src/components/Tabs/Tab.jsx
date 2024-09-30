import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Latest from './Latest';
import Topview from './Top-view';
import Allvideos from './Allvideos';
import {
  Link,
} from "react-router-dom";

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='Tabs'>
      <Link to="/channel" className='flex-box-five'>
        <div>
          <img src="images/Music.jpg" alt="" className='profile-img' />
        </div>
        <div className='channel-details'>
          <p className='name'>Channel name</p>
          <p className='subscribers'>Subsribers</p>
        </div>
      </Link>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Latest" value="1" />
              <Tab label="Top Viewed" value="2" />
              <Tab label="See All videos" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1"><Latest /></TabPanel>
          <TabPanel value="2"><Topview /></TabPanel>
          <TabPanel value="3"><Allvideos /></TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}