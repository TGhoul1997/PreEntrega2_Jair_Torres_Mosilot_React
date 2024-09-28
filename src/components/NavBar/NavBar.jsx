import { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo.png";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar({ categoryList, setSelectedCategory, state }) {
  return (
    <nav className="flex space-x-5 h-32 justify-around items-center bg-blue-400">
      <div className="flex content-center ">
        <img className="w-40" src={logo} alt="Logo de la marca" />
      </div>
      <ul className="flex space-x-16 list-none">
        {categoryList.map((new_category) => {
          if (new_category == categoryList[0]) {
            return (
              <li className="text-xl">
                <Link to={`/`}>{new_category}</Link>
              </li>
            );
          }
          return (
            <li className="text-xl">
              <Link to={new_category}>{new_category}</Link>
            </li>
          );
        })}
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
