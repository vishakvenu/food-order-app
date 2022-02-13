import { configureStore } from '@reduxjs/toolkit'
import cartAdder from './services/cartAdderSlice'

const store = configureStore({
  reducer: {
      cart:cartAdder
  }
})

export default store