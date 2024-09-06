import { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo.png";
import "./NavBar.css";

function NavBar({ categoryList, setSelectedCategory, state }) {
  return (
    <nav className="flex space-x-5 h-32 justify-around items-center bg-blue-400">
      <div className="flex content-center ">
        <img className="w-40" src={logo} alt="Logo de la marca" />
      </div>
      <ul className="flex space-x-16 list-none">
        {categoryList.map((new_category) => {
          return (
            <li className="text-xl">
              <a href="#">{new_category}</a>
            </li>
          );
        })}
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
