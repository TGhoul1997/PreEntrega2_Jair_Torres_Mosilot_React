import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("home");

  return (
    <BrowserRouter>
      <NavBar 
      categoryList={["Home", "Products", "Contact Us"]}
      state={selectedCategory}
      />
      <Routes>
        <Route exact path="/" 
        element={<ItemListContainer  />}/>
        <Route exact path="/products" 
        element={<ItemListContainer  />} />
        <Route exact path="/products/:category" 
        element={<ItemListContainer  />} />
        <Route exact path="/id/:number" 
        element={<ItemListContainer  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
