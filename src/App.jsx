import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SinglePokemon from "./components/SinglePokemon/SinglePokemon";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("home");

  return (
    <BrowserRouter>
      <NavBar 
      categoryList={["Home", "Products", "Contact Us"]}
      state={selectedCategory}
      />
      <Routes>
        <Route exact path="/" element={<ItemListContainer greeting={"Welcome to my shop!"} />} />
        <Route exact path="/products/:category" element={<ItemListContainer />} />
        {/* <Route exact path="/contact us" element={<ItemListContainer greeting={"Contact Us"} />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
