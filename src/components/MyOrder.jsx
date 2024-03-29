import React from 'react';
import arrowIcon from '@icons/flechita.svg';
import "@styles/MyOrder.scss";

function MyOrder({children, orderList, orderListId, setOpenOrderMenu}) {
    //Se busca la orden por su id
    const order = orderList.find((productList)=>{
        return orderListId === productList.id;
    })
    const handleCloseAside = ()=>{
        setOpenOrderMenu(prevState => !prevState)
    }
    return (
        <div className="my-order">
            <div className="my-order-container">
                <div className="my-order__close">
                    <img className='my-order__close-arrow' src={arrowIcon} alt="close" onClick={handleCloseAside}/>
                    <h1 className="my-order__title">My order</h1>
                </div>
                
                <div className="order">
                    <p>
                      <span>{order.date}</span>
                      <span>{`${order.articles} articles`}</span>
                    </p>
                    <p>{`$${order.totalPrice}`}</p>
                </div>
                <div className="my-order-content">
                    {children}
                </div>
            </div>
        </div>
    )
}
export { MyOrder }