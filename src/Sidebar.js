import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { UseStateValue } from './StateProvider';


function Sidebar() {
    const [{user}, dispatch] = UseStateValue()
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName}/>
            <SidebarRow Icon={LocalHospitalIcon} title ="Covid-19"/>
            <SidebarRow Icon={EmojiFlagsIcon} title ="Pages"/>
            <SidebarRow Icon={PeopleIcon} title ="Friends"/>
            <SidebarRow Icon={ChatIcon} title ="Messsenger"/>
            <SidebarRow Icon={StorefrontIcon} title ="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title ="Videoss"/>
            <SidebarRow Icon={ExpandMoreIcon} title ="Marketplace"/>
        </div>
    )
}

export default Sidebar
