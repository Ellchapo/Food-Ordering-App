import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import cartContext from '../../store/cartContext';
import CartItem from './CartItem';
const Cart=(props)=>{ 
    const crtCtx=useContext(cartContext);
    const totalAmout = `$${crtCtx.totalAmount.toFixed(2)}`;
    const hasItems=crtCtx.items.length>0;

    const cartItemRemoveHandler=(id)=>{
         crtCtx.removeItem(id);
    };
    const cartItemAddHandler=(item)=>{
        crtCtx.addItem(item);
     //crtCtx.addItem({...item,amount:'1'});
    };
    const cartItems=(
        <ul className={classes['cart-items']}>
          {
            crtCtx.items.map((item)=>(
                <CartItem key={item.id}
                 name={item.name} 
                 amount={item.amount} 
                 price={item.price}
                 onRemove={cartItemRemoveHandler.bind(null,item.id)}
                 onAdd={cartItemAddHandler.bind(null,item)}
                 />
            ))
          }
        </ul>
    );
return(
    <Modal>
        {cartItems}
        <div className={classes.total}>
            <span>Total amount</span>
            <span>{totalAmout}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
           {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
);
};
export default Cart;