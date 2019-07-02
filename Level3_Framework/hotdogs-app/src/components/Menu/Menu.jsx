import React from "react";
// import { NavLink } from "react-router-dom";
import styles from "./Menu.module.scss";
import { NavHashLink } from "helpers/NavHashLink";
function ImageBar() {
  let links = [
    { name: "Menu", link: "#menu" },
    { name: "Catering", link: "#catering" },
    { name: "About us", link: "#about" },
    { name: "Contact", link: "/contact" }
  ];

  return (
    <header className={styles.header} id="menu">
      <input className={styles.checkbox} type="checkbox" id="menu__checkbox" />
      <label className={styles.label} htmlFor="menu__checkbox">
        <div className={styles.icon_wrapper}>
          <div className={styles.icon} />
        </div>
        <div className={styles.wrapper}>
          <nav className={styles.list}>
            {links.map(({ name, link }) => (
              <NavHashLink
                key={name}
                activeClassName={styles.selected}
                className={styles.link}
                to={`${link}`}
              >
                {name}
              </NavHashLink>
            ))}
          </nav>
        </div>
      </label>
    </header>
  );
}

export default ImageBar;
