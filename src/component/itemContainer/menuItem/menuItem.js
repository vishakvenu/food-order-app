
import { addCount, addItemToStoreArray, addPriceCount, addToCart, remove, substractCount } from '../../../store/services/cartAdderSlice';
import { Rating, Typography } from '@mui/material';
import PorottaBeef from '../../../assets/carousel/porottabeef.jpg'
import "./menuItem.css";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const MenuItem = ({setShowCartBtn, value, name, price, count, src, description,item }) => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const cartPrice = useSelector(state => state.cart.cartPrice);
    const [btnState, setBtnState] = useState(0);

    const dispatch=useDispatch()

    useEffect(()=>{
        let newArray=[]
        cartItems?.forEach(item=>{
              newArray.push(item.price)
         })
  
      let number=newArray.reduce((prev,next)=>prev+next,0)

      dispatch(addPriceCount(number))
    },[btnState])
    
    const clickHandler=(item)=>{
        setShowCartBtn(true)
       dispatch(addToCart(item))
        setBtnState(prev=>prev+1)
    
       }

       console.log(cartPrice)
    return (

        <div className="menuItem">
            <div className='menuWrapper'>
                <div className="menuLeft">
                    <Rating name="disabled" value={value}
                    sx={{color:"#F2CB05"}}
                     disabled />
                    <Typography variant="h5">{name}</Typography>
                    <Typography variant="h6">{price} &#x20B9;</Typography>
                    <div style={{ textAlign: "right", display: "flex", justifyContent: "space-around" }}>
                        <button 
                        onClick={()=>dispatch(substractCount(name))}
                        disabled={count<=0?true:false}
                        >-</button>
                        <span>{count}</span>
                        <button onClick={()=>dispatch(addCount(name))}>+</button>
                    </div>
                </div>
                <div className="menuRight">
                    <div className='imageWrapper'>
                        <img src={src} alt="porottabeef" />
                    </div>
                    <button className="addToCartBtn" onClick={()=>clickHandler(item)}>Add to Cart</button>
                </div>
            </div>

            <Typography variant="body2" sx={{ py: "0px", "@media(max-width:780px)": { py: "5px" } }}> made with Maida or Atta </Typography>
            <div className="addtocartWrapper">
                <button className="addToCartBtnMb" onClick={()=>clickHandler(item)}>Add to Cart</button>
            </div>


        </div>)

};

{/* <ul>
        {name?.map(item=>(
          <li key={item.id}>
            <div>{item.name}</div>
            {item.count>0?<button onClick={()=>dispatch(substractCount(item.name))}>-</button>:
            <button style={{pointerEvents:"none"}}onClick={()=>dispatch(substractCount(item.name))}>-</button>}

            <span>{item.count}</span>
            <button onClick={()=>dispatch(addCount(item.name))}>+</button><br />
            <button onClick={()=>dispatch(addToCart(item))}>Add to cart</button>
            <button onClick={()=>dispatch(remove(item.id))}>remove item</button>
          </li>
        ))}
      </ul> */}


export default MenuItem;
