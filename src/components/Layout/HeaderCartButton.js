import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import { useContext } from "react";
import cartContext from '../../store/cartContext';

const HeaderCartButton = (props)=>{
  const cartCtx = useContext(cartContext);
  //let curNumber=0;
  const numberOfCartItems = cartCtx.items.reduce((curNumber,item)=>{
    return Number(curNumber)+Number(item.amount); 
  },0);
 return(<button onClick={props.onClick} className={classes.button}>
    <span className={classes.icon}>
      <CartIcon/>
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>
        {numberOfCartItems}
    </span>
 </button>);
};
export default HeaderCartButton;