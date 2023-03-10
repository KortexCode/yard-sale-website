import React from 'react'
import { Link } from 'react-router-dom';
import "@styles/UserDesktopMenu.scss";

function UserDesktopMenu(props) {
    
    const handleLogout = ()=>{
        props.authUser(null);
        props.setOpenDesktopMenu(false);
    }

    return (
        <div className={`desktop-menu ${!props.openDesktopMenu && "desktop-menu--disable"}`}>
            <ul className='desktop-menu__ul'>
                <li className='desktop-menu__li'>
                    <Link className='desktop-menu__link' to="/my-orders">
                        My orders
                    </Link>
                </li>
                <li>
                    <Link className='desktop-menu__link' to="/my-account">My Profile</Link>
                </li>
                <li>
                    <Link className='desktop-menu__link' to="/" onClick={handleLogout}>Log out</Link>
                </li>
            </ul>
        </div>
    )
}

export { UserDesktopMenu }