import React from 'react';
import './App.css';
import SideBar from "./components/SidebBar/SideBar";
import 'antd/dist/antd.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NewsPage from "./components/NewsPage/NewsPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import FollowersPage from './components/FollowersPage/FollowersPage';
import MessagesPage from './components/MessagesPage/MessagesPage';
import CommunityPage from './components/CommunityPage/CommunityPage';
import PhotosPage from './components/PhotosPage/PhotosPage';
import VideosPage from './components/VideosPage/VideosPage';
import MusicPage from './components/MusicPage/MusicPage';
import SettingsPage from './components/SettingsPage/SettingsPage';

function App() {
    return (
        <BrowserRouter>
            <div className='wrapper'>
                <div className='container'>
                    <div className='sideBar'>
                        <SideBar/>
                    </div>
                    <div className='content'>
                        <Routes>
                            <Route path='/profile' element={<ProfilePage/>}/>
                            <Route path='/news' element={<NewsPage/>}/>
                            <Route path='/followers' element={<FollowersPage/>}/>
                            <Route path='/messages' element={<MessagesPage/>}/>
                            <Route path='/community' element={<CommunityPage/>}/>
                            <Route path='/photos' element={<PhotosPage/>}/>
                            <Route path='/videos' element={<VideosPage/>}/>
                            <Route path='/music' element={<MusicPage/>}/>
                            <Route path='/settings' element={<SettingsPage/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
