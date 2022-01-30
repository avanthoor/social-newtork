import React from 'react';
import classes from './SideBar.module.scss'
import 'antd/dist/antd.css'
import {
    IdcardOutlined,
    UserOutlined,
    NotificationOutlined,
    MailOutlined,
    TeamOutlined,
    PictureOutlined,
    VideoCameraOutlined,
    SoundOutlined,
    SettingOutlined
} from '@ant-design/icons';
import ava from '../../static/Rectangle 102.svg'
import {NavLink} from "react-router-dom";

function SideBar(props: any) {
    return (
        <div className={classes.sideBar}>
            <div className={classes.avaAndName}>
                <img src={ava} alt=""/>
                <span>Alina Popova</span>
            </div>
            <div className={classes.sideMenu}>
                <ul className={classes.list}>
                    <li><NavLink to='/profile'><IdcardOutlined/><span
                        className={classes.listItem}>My profile</span></NavLink></li>
                    <li><NavLink to='/news'><NotificationOutlined/><span
                        className={classes.listItem}>News</span></NavLink></li>
                    <li><NavLink to='/followers'><UserOutlined/><span
                        className={classes.listItem}>Followers</span></NavLink></li>
                    <li><NavLink to='/messages'><MailOutlined/><span
                        className={classes.listItem}>Messages</span></NavLink></li>
                    <li><NavLink to='/community'><TeamOutlined/><span
                        className={classes.listItem}>Community</span></NavLink></li>
                    <li><NavLink to='/photos'><PictureOutlined/><span
                        className={classes.listItem}>Photos</span></NavLink></li>
                    <li><NavLink to='/videos'><VideoCameraOutlined/><span
                        className={classes.listItem}>Videos</span></NavLink></li>
                    <li><NavLink to='/music'><SoundOutlined/><span className={classes.listItem}>Music</span></NavLink>
                    </li>
                    <li className={classes.settings}><NavLink to='/settings'><SettingOutlined/><span
                        className={classes.listItem}>Settings</span></NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default SideBar;