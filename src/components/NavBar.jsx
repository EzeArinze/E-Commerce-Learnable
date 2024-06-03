import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useSelector } from "react-redux";
import { BsTelephone } from "react-icons/bs";
import { IoIosMail, IoIosArrowDown } from "react-icons/io";
import { MdOutlineShoppingCart, MdOutlinePersonOutline } from "react-icons/md";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaRegHeart,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";
import Favorite from "./Favorite";

function HeaderBar() {
  return (
    <nav className={styles.hearderbar}>
      <header className={styles.headerNav}>
        <div className={styles.phone}>
          <BsTelephone />
          <p>(225) 555-0118 </p>
        </div>
        <div className={styles.phone}>
          <IoIosMail />
          <p>MichelleRivera@example.com</p>
        </div>
        <div className={styles.phone}>
          <p>Follow us and get the chance to win 80% off</p>
        </div>
        <div className={styles.phone}>
          <p>Follow us: </p>
          <FaInstagram />
          <FaYoutube />
          <FaFacebook />
          <FaTwitter />
        </div>
      </header>
    </nav>
  );
}

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartProducts = useSelector((state) => state.cart);
  const favProducts = useSelector((state) => state.favorite);
  const [isFavoriteOpen, setIsFavoriteOpen] = useState(false);
  const [isShopHovered, setIsShopHovered] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleFavorite = () => {
    setIsFavoriteOpen(!isFavoriteOpen);
  };

  return (
    <>
      <HeaderBar />
      <nav className={styles.navbar}>
        <div className={styles.brandnavbar}>
          <h1 className={styles.navbarbrand}>Bandage</h1>
          <div className={styles.hamburger} onClick={toggleMobileMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div
          className={`${styles.navbaritem} ${
            isMobileMenuOpen ? styles.active : ""
          }`}
        >
          <NavLink
            to="/"
            className={styles.navbarlink}
            onClick={toggleMobileMenu}
          >
            Home
          </NavLink>
          <span
            onMouseEnter={() => setIsShopHovered(true)}
            onMouseLeave={() => setIsShopHovered(false)}
          >
            <span className={styles.navbarlink}>
              Shop
              <IoIosArrowDown className={styles.arrowDown} />
            </span>
            {isShopHovered && (
              <div className={styles.dropdownContent}>
                <NavLink to="/Favorite" className={styles.dropdownItem}>
                  <FaRegHeart /> Favorites: {favProducts.length}
                </NavLink>
                <NavLink to="/CartPage" className={styles.dropdownItem}>
                  <MdOutlineShoppingCart /> Cart: {cartProducts.length}
                </NavLink>
              </div>
            )}
          </span>
          <NavLink className={styles.navbarlink}>Blog</NavLink>
          <NavLink className={styles.navbarlink}>Contact</NavLink>
          <NavLink className={styles.navbarlink}>Pages</NavLink>
        </div>
        <div
          className={`${styles.navbaritem} ${
            isMobileMenuOpen ? styles.active : ""
          }`}
        >
          <NavLink className={styles.navbarlinkcolor}>
            <MdOutlinePersonOutline /> Login / Register
          </NavLink>
          <div
            onClick={() => setIsFavoriteOpen(true)}
            className={styles.navbarlinkcolor}
          >
            <FaRegHeart /> {favProducts.length}
          </div>
          <NavLink to="/CartPage" className={styles.navbarlinkcolor}>
            <MdOutlineShoppingCart /> {cartProducts.length}
          </NavLink>
        </div>
      </nav>
      {isFavoriteOpen && (
        <div className={styles.popup}>
          <div className={styles.modal}>
            <Favorite />
            <button onClick={toggleFavorite} className={styles.closeButton}>
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
