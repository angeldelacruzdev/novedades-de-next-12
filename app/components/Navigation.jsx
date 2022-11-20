import React from "react";
import Link from "next/link";

import styles from "./Navigation.module.css";

const routes = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
  {
    label: "Posts",
    route: "/posts",
  },
];

const Navigation = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav>
          <ul className={styles.navigation}>
            {routes.map(({ label, route }) => (
              <li key={route}>
                <Link href={route}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
