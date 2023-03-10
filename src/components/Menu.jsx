import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserDesktopMenu } from './UserDesktopMenu';
import { UserMobileMenu  } from './UserMobileMenu';
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

    }

    return(
        <header>
            <nav>
                <img src="./icons/icon_menu.svg" alt="menu" className="menu"
                 onClick={handleOpenMobileMenu}/>
                
                <UserMobileMenu username={props.username}
                authUser={props.authUser} setShowMobileMenu={props.setShowMobileMenu}
                showMobileMenu={props.showMobileMenu} setOpenDesktopMenu={props.setOpenDesktopMenu}/>
                 
                <div className="navbar-left">
                  <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"/>

                  <ul className='Menu-ul'>
                    <li className='Menu-li'>
                      <NavLink className='Menu-navLink' to="/">All</NavLink>
                    </li>
                    <li className='Menu-li'>
                      <NavLink className='Menu-navLink' to="/categories/1/products">Clothes</NavLink>
                    </li>
                    <li className='Menu-li'>
                      <NavLink className='Menu-navLink' to="/categories/2/products">Electronics</NavLink>
                    </li>
                    <li className='Menu-li'>
                      <NavLink className='Menu-navLink' to="/categories/3/products">Furnitures</NavLink>
                    </li>
                    <li className='Menu-li'>
                      <NavLink className='Menu-navLink' to="/categories/4/products">Shoes</NavLink>
                    </li>
                    <li className='Menu-li'>
                      <NavLink className='Menu-navLink' to="/categories/5/products">Others</NavLink>
                    </li>
                  </ul>
                </div>

                <div className="navbar-right">
                  <ul className='Menu-desktop Menu-ul'>
                    <li className="navbar-email Menu-login" onClick={handleLogIn}>{props.username || "LogIn"}</li>
                    <li className="navbar-shopping-cart">
                      <img src="./icons/icon_shopping_cart.svg" alt="shopping cart" 
                      onClick={handleOpenShoppingCart}/>
                      <div>{props.shoppingList.length}</div>
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