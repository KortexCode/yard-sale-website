import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserDesktopMenu } from './UserDesktopMenu';
import { UserMobileMenu  } from './UserMobileMenu';
import menuIcon from '@icons/icon_menu.svg';
import shoppingCartIcon from '@icons/icon_shopping_cart.svg';
import navbarLeftLogo from '@logos/logo_yard_sale.svg';
import { LinkItem } from './LinkItem';
import "@styles/Menu.scss";

function Menu(props){
    const navigate = useNavigate();
    //MANEJO DE EVENTOS DE CLICK
    const handleLogIn = ()=>{
      if(props.username && !props.openDesktopMenu){
        props.setOpenDesktopMenu(true);
        props.setOpenShoppingCart(false); 
      }
      else if(props.username && props.openDesktopMenu){
        props.setOpenDesktopMenu(false);
      }
      else
        navigate("/log-in")
    }
    const handleOpenMobileMenu = () => {
      props.setShowMobileMenu(prevState => !prevState);
       
    }
    const handleOpenShoppingCart = () => {
      props.setOpenShoppingCart(prevState => !prevState); 
      props.setOpenDesktopMenu(false);
      props.setOpenProductDetail(false);
    }

    const navlink = [
      {
        name: "Clothes",
        to:"/categories/1/products",
      },
      {
        name: "Electronics",
        to:"/categories/2/products",
      },
      {
        name: "Furnitures",
        to:"/categories/3/products",
      },
      {
        name: "shoes",
        to:"/categories/4/products",
      },
      {
        name: "Others",
        to:"/categories/5/products",
      },
    ]

    return(
        <header>
            <nav>
                <img src={menuIcon} alt="menu" className="menu"
                 onClick={handleOpenMobileMenu}/>
                
                <UserMobileMenu username={props.username}
                authUser={props.authUser} setShowMobileMenu={props.setShowMobileMenu}
                showMobileMenu={props.showMobileMenu} setOpenDesktopMenu={props.setOpenDesktopMenu}
                navlink={navlink} />
                 
                <div className="navbar-left">
                  <img src={navbarLeftLogo} alt="logo" className="nav-logo"/>

                  <ul className='Menu-ul'>
                    <li className='Menu-li menu-all'>
                      <NavLink className={({ isActive, isPending }) => isPending ? "Menu-navLink" 
                        : isActive ? " Menu-navLinkActived" : "Menu-navLink"} to="/">
                        All
                      </NavLink>
                    </li>
                    {navlink.map((item)=> <LinkItem key={item.name} item={item}/>)}
                  </ul>
                </div>

                <div className="navbar-right">
                  <ul className='Menu-desktop Menu-ul'>
                    <li className="navbar-email Menu-login" onClick={handleLogIn}>{props.username || "LogIn"}</li>
                    <li className="navbar-shopping-cart">
                      <img src={shoppingCartIcon} alt="shopping cart" 
                      onClick={handleOpenShoppingCart} className="shopping-cart__icon"/>
                      {props.shoppingList.length == 0 ? null : <div>{props.shoppingList.length}</div>}
                    </li>
                  </ul>
                  <UserDesktopMenu authUser={props.authUser}
                   setOpenDesktopMenu={props.setOpenDesktopMenu} openDesktopMenu={props.openDesktopMenu} />
                </div>
            </nav>
        </header>
    )
}

export {Menu}