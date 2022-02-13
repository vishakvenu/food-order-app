import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items:[],
  cartItems:[],
  cartPrice:0 
}

const cartAdderSlice = createSlice({
  name: "cartAdderSlice",
  initialState,
  reducers: {
    addItemToStoreArray:(state,{payload})=>{
      state.items=payload
    },
    substractCount:(state,{payload})=>{
      state.items.forEach(item=>{
        if(item.name===payload){
          item.count-=1
        }
      })
    },
    addCount:(state,{payload})=>{
      state.items.forEach(item=>{
        if(item.name===payload){
          item.count+=1
        }
      })
    },
    addPriceCount:(state,{payload})=>{
      state.cartPrice=payload
    }
    ,
    addToCart:(state,{payload})=>{
      state.cartItems.push(payload)
    },
    remove:(state,{payload})=>{
      state.cartItems=state.cartItems.filter(item=>item.id!==payload)
      }
  },
  
});

export const {addItemToStoreArray,substractCount,addCount,addToCart,remove,addPriceCount} = cartAdderSlice.actions;

export default cartAdderSlice.reducer;
