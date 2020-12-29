import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {UseStateValue} from "./StateProvider"




function header() {
    const [{user}, dispatch] = UseStateValue()
    return (
        <div className="header">
            <div className="header__left">
                <img
                className="facebookLogo"
                src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Facebook_icon_192.png"
                
                alt=""/>
                <div className="header__input">
                    <SearchIcon />
                    <input placeholder="search facebook" type="text"/>
                </div>
            </div>
                
            <div className="header__center">
                <div className="header__option
                header__option--active">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header__option
                ">
                    <FlagIcon fontSize="large"/>
                </div>
                <div className="header__option
                ">
                    <SubscriptionsIcon fontSize="large"/>
                </div>
                <div className="header__option
                ">
                    <StorefrontIcon fontSize="large"/>
                </div>
                <div className="header__option
                ">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                <AccountCircleIcon src={user.phoURL} />
                <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                <AddIcon />
                </IconButton>

                <IconButton>
                <ForumIcon />
                </IconButton>

                <IconButton>
                <NotificationsActiveIcon />
                </IconButton>

                <IconButton>
                <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default header

