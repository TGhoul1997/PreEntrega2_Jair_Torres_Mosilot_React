import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("home");

  return (
    <>
      <NavBar 
      categoryList={["Home", "Products", "Contact Us"]}
      state={selectedCategory}
      />
      <ItemListContainer greeting={"Welcome to my shop!"} />
    </>
  );
}

export default App;
