/** @format */

// import logo from './logo.svg';
import './App.scss';
import './responsive.scss';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useParams, useLocation } from 'react-router-dom';
import CreateStamps from './screens/CreateStamps.jsx';
// import GplayerListing from "./screens/GplayerListing.jsx";
import Unauthorized from './components/Unauthorized';
import FYouPlayer from './screens/FYouPlayer.jsx';

import YoutubeList from './pages/YoutubeList.jsx';

import YoutubePlayer from './screens/YoutubePlayer.jsx';

import Library from './pages/Library.jsx';
// import NewLibrary from "./pages/videos.jsx";

import FrontentLibrary from './pages/FrontentLibrary.jsx';

import Footer from '../src/components/Footer.jsx';
import Topbar from '../src/components/Topbar/Topbar';
import Responsivetopbar from '../src/components/Topbar/Responsivetopbar';
import Login from './pages/auth/Login.js';
import Signup from './pages/auth/Signup';
import ProtectedRoute from './components/ProtectedRoute.js';
import Page404 from './screens/Page404.jsx';
import UpdateThumbnail from './pages/UpdateThumbnail.jsx';
import Sidebar from './components/Sidebar-lft/Sidebar.jsx';
import axios from 'axios';
import Perfomer from './pages/Perfomer.jsx';
import TopRated from './pages/TopRated.jsx';
import RecentlyAdded from './pages/RecentlyAdded.jsx';
import MostPlayed from './pages/MostPlayed.jsx';
import Random from './pages/Random.jsx';
import Favorite from './pages/Favorite.jsx';

function App() {
  let user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    // const fetchGeoData = async () => {
    //   const ipUrl = 'https://get.geojs.io/v1/ip/geo.json';

    //   try {
    //     const ipResponse = await fetch(ipUrl);
    //     if (!ipResponse.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     const ipData = await ipResponse.json();
    //     const { latitude, longitude } = ipData;

    //     const nominatimUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`;

    //     const geoResponse = await fetch(nominatimUrl);
    //     if (!geoResponse.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     const geoData = await geoResponse.json();
    //     const { postcode } = geoData.address;

    //     console.log(postcode || 'Zip code not found');
    //   } catch (error) {
    //     console.error('Error fetching data:', error);

    //   }
    // };

    // fetchGeoData();

    const fetchData = async () => {
      try {
        const ipResponse = await axios.get('https://api.ipify.org?format=json');
        const ipData = ipResponse.data;
        const zipCode = await axios.get(`http://ip-api.com/json/${ipData?.ip}`);
        console.log('zipCode>>>>>>>>>', zipCode);
        // localStorage.setItem("userIp",ipData?.ip);
        if (!user || user == null) {
          localStorage.setItem('userIp', ipData?.ip);
          localStorage.setItem('userZipCode', zipCode?.data?.zip);
        } else {
          localStorage.removeItem('userIp');
          // localStorage.removeItem("userZipCode");
          localStorage.setItem('userZipCode', zipCode?.data?.zip);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);

  const location = useLocation();
  console.log('🚀 ~ App ~ location:', location);

  const shouldShowSidebar =
    location.pathname == '/login' || location.pathname == '/signup';

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_contentBasePath}auth/current_user`,
          {
            withCredentials: true, // Ensure cookies are sent with the request
          }
        );
        console.log('🚀 ~ fetchUserData ~ response:', response);
        {
          response?.data?.data &&
            localStorage.setItem(
              'user',
              JSON.stringify(response?.data?.data?.user)
            );
        }
        {
          response?.data?.data?.tokens &&
            localStorage.setItem(
              'app-access-token',
              JSON.stringify(response?.data?.data?.tokens?.access?.token)
            );
        }
        {
          response?.data?.data?.tokens &&
            localStorage.setItem(
              'app-refresh-token',
              JSON.stringify(response?.data?.data?.tokens?.refresh?.token)
            );
        }
        setUserData(response.data.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <div className='App'>
        <div className='flex-app'>
          <div>

            <div className='App_flex_box'>
              {!shouldShowSidebar && (
                <div className='Sidebar'>
                  <Sidebar />
                </div>
              )}
              <div className='flex-grow-1 dashboard_content_box'>
                <div className='container'>
                  <div className='dashboard_content_flex'>
                    <Topbar />
                    <Responsivetopbar />

                    <Routes>
                      {/* auth routes */}
                      <Route path='/signup' element={<Signup />} />
                      <Route path='/login' element={<Login />} />

                      {/* admin */}

                      <Route
                        path='/videos'
                        element={
                          // <ProtectedRoute allowedRoles={["admin"]}>
                          <Library />
                          // </ProtectedRoute>
                        }
                      />

                      <Route
                        path='/toprated'
                        element={
                          // <ProtectedRoute allowedRoles={["admin"]}>
                          <TopRated />
                          // </ProtectedRoute>
                        }
                      />
                      <Route
                        path='/recentlyadded'
                        element={
                          // <ProtectedRoute allowedRoles={["admin"]}>
                          <RecentlyAdded />
                          // </ProtectedRoute>
                        }
                      />
                      <Route
                        path='/favorites'
                        element={
                          // <ProtectedRoute allowedRoles={["admin"]}>
                          <Favorite />
                          // </ProtectedRoute>
                        }
                      />
                      <Route
                        path='/mostplayed'
                        element={
                          // <ProtectedRoute allowedRoles={["admin"]}>
                          <MostPlayed />
                          // </ProtectedRoute>
                        }
                      />

                      <Route
                        path='/random'
                        element={
                          // <ProtectedRoute allowedRoles={["admin"]}>
                          <Random />
                          // </ProtectedRoute>
                        }
                      />

                      {/* <Route
                  path="/admin/library"
                  element={
                    <ProtectedRoute allowedRoles={["admin"]}>
                      <NewLibrary />
                    </ProtectedRoute>
                  }
                /> */}

                      <Route
                        path='/admin/createStamp/:id'
                        element={
                          <ProtectedRoute allowedRoles={['admin']}>
                            <CreateStamps />
                          </ProtectedRoute>
                        }
                      />

                      {/* <Route
                  path="/admin/reports"
                  element={
                    <ProtectedRoute allowedRoles={["admin"]}>
                      <GplayerListing />
                    </ProtectedRoute>
                  }
                /> */}
                      <Route
                        path='/admin/updateThumbnail/:id'
                        element={
                          <ProtectedRoute allowedRoles={['admin']}>
                            <UpdateThumbnail />
                          </ProtectedRoute>
                        }
                      />

                      {/* user */}
                      <Route
                        path='/'
                        element={
                          // <ProtectedRoute allowedRoles={["admin", "user"]}>
                          <FrontentLibrary />
                          // </ProtectedRoute>
                        }
                      />
                      <Route
                        path='/player/:id'
                        element={
                          // <ProtectedRoute allowedRoles={["admin", "user"]}>
                          <FYouPlayer />
                          // </ProtectedRoute>
                        }
                      />

                      <Route
                        path='/youtube'
                        element={
                          // <ProtectedRoute allowedRoles={["admin", "user"]}>
                          <YoutubeList />
                          // </ProtectedRoute>
                        }
                      />

                      <Route
                        path='/youtube/:id'
                        element={
                          // <ProtectedRoute allowedRoles={["admin", "user"]}>
                          <YoutubePlayer />
                          // </ProtectedRoute>
                        }
                      />

                      <Route
                        path='/perfomer'
                        element={
                          // <ProtectedRoute allowedRoles={["admin", "user"]}>
                          <Perfomer />
                          // </ProtectedRoute>
                        }
                      />

                      <Route path='/unauthorized' element={<Unauthorized />} />
                      <Route path='*' element={<Page404 />} />
                    </Routes>

                    <Footer />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
