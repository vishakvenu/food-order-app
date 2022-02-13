import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ItemData } from '../../../../data/Itemdata';
import { addItemToStoreArray } from '../../../../store/services/cartAdderSlice';
import './SearchBar.css'

const SearchBarItem = ({setSearchBarState}) => {
  const menuItems = useSelector(state => state.cart.items);
 
  const dispatch = useDispatch();
  const [val, setVal] = useState("");
  const searchHandler=(e)=>{
      setVal(e.target.value)
      let arr=[]
     
      if(e.target.value.length>3){
        menuItems.forEach(item=>{
          let nameFromMenu=item.name.toLowerCase().substring(0,4)
          let nameFromSearchBar=val.trim().toLowerCase().substring(0,4)
            if(nameFromMenu===nameFromSearchBar){
              arr.push(item)
            }else{
              setSearchBarState(true)
            }     
        }) 
        if(arr.length){
          dispatch(addItemToStoreArray(arr))
          setSearchBarState(false)
        }
        
      }else if(e.target.value.length<3){
        setSearchBarState(false)
        dispatch(addItemToStoreArray(ItemData))
      }

  }

  return (
    <div className='searchBarContainer'>
      <input type="text" placeholder="search items.." 
      value={val}
      onChange={searchHandler}/>
      <IconButton sx={{background:"#fff"}}>
     <SearchIcon /> 
      </IconButton>
    </div>
   
  )
}

export default SearchBarItem ;