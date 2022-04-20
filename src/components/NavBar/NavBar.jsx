import { NavLink } from "react-router-dom";

import style from "./NavBar.module.css";

export default function NavBar() {
  return (<header className={style.header}>
    <nav>
      <ul>
        <li className={style.navContainer}>
          <NavLink
            end
            to="/"
            className={({ isActive }) => { return isActive ? (style.navLink + style['navLink-active']) : style.navLink }}
          >
            Home
          </NavLink>
        </li>
        <li className={style.navContainer}>
          <NavLink
            to="/movies"
            className={({ isActive }) => { return isActive ? (style.navLink + style['navLink-active']) : style.navLink }}
          >
            Movies
          </NavLink>
        </li>
      </ul>       
    </nav>
  </header>);
}