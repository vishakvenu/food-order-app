import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ItemData } from '../../data/Itemdata';
import './item.css';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { addItemToStoreArray } from '../../store/services/cartAdderSlice';
import MenuItem from './menuItem/menuItem';
import SearchBarItem from './menuItem/Searchbar/SearchBar';


const Item = () => {
  const [showCartBtn, setShowCartBtn] = useState(false);
  const menuItems = useSelector(state => state.cart.items);
  const CartItems = useSelector(state => state.cart.cartItems);
  let priceCount = useSelector(state => state.cart.cartPrice);
  const [searchBarState, setSearchBarState] = useState(false);
  const [counter, setCounter] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addItemToStoreArray(ItemData))
  }, [searchBarState]);


  // console.log(CartItems)
  return (
    <div className="itemBackground">
      <Container maxWidth="md" sx={{
        py: "10px", display: "flex",
        flexFlow: "column"
      }} className="menuItemcontainer">

        <div className="headerSection">
          <Typography variant="h4" color="#fff" sx={{ mb: "5px" }}>Order Online</Typography>
          <SearchBarItem 
          setSearchBarState={setSearchBarState}/>

        </div>
      </Container>
      <div className="menuItemList" >

        {showCartBtn &&
          <div className="viewCart">
            <Container maxWidth="md" className="viewCartContainer" >


              <div className="details" style={{ padding: "10px" }}>
                <Typography variant="body1">{CartItems?.length}items</Typography>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>{priceCount} &#x20B9;</Typography>
              </div>
              <div className="btn">
                <button>Place Order</button>
              </div>
            </Container>
          </div>}

        <Container maxWidth="md">
          {!searchBarState?menuItems?.map(item => (
            <MenuItem setShowCartBtn={setShowCartBtn}
            setCounter={setCounter}
              {...item} 
              item={item}
              key={item.id} />
          )):
          <Typography variant="h5" color="#fff">Items not found</Typography>
          }
        </Container>


      </div>






    </div>
  );
};

export default Item;
