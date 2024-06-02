/* eslint-disable react/prop-types */
// src/components/Breadcrumbs.jsx

import { Link } from "react-router-dom";
import styles from "./BreadCrumbs.module.css";

function Breadcrumbs({ items }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className={styles.breadcrumb}>
        {items.map((item, index) => (
          <li
            key={index}
            className={`${styles.breadcrumbItem} ${
              index === items.length - 1 ? styles.active : ""
            }`}
          >
            {index === items.length - 1 ? (
              item.label
            ) : (
              <Link to={item.path}>{item.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
