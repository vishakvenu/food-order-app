import HomePage from "./component";
import Navbar from "./component/NavBar/Navbar";
import {Routes,Route} from "react-router-dom";
import Item from "./component/itemContainer/item";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/"  element={<HomePage />}/>
    <Route path="/items" element={<Item/>}/>
    
    </Routes>
   
    </>
  );
}

export default App;
