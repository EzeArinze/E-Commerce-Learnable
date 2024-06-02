import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useSelector } from "react-redux";
import { BsTelephone } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { MdOutlineShoppingCart, MdOutlinePersonOutline } from "react-icons/md";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaRegHeart,
} from "react-icons/fa";
import { useState } from "react";

function HeaderBar() {
  return (
    <header className={styles.hearderbar}>
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
  );
}

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartProducts = useSelector((state) => state.cart);
  const favProducts = useSelector((state) => state.favorite);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
          <NavLink className={styles.navbarlink}>Shop</NavLink>
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
          <NavLink to="/favorite" className={styles.navbarlinkcolor}>
            <FaRegHeart /> {favProducts.length}
          </NavLink>
          <NavLink to="/CartPage" className={styles.navbarlinkcolor}>
            <MdOutlineShoppingCart /> {cartProducts.length}
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

// import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { BsTelephone } from "react-icons/bs";
// import { IoIosMail } from "react-icons/io";
// import { MdOutlineShoppingCart, MdOutlinePersonOutline } from "react-icons/md";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaTwitter,
//   FaYoutube,
//   FaRegHeart,
//   FaTimes,
// } from "react-icons/fa";
// import styles from "./Navbar.module.css";
// import Cart from "./Cart"; // Adjust the import path as needed
// import Favorite from "./Favorite"; // Adjust the import path as needed
// import { useState } from "react";

// function HeaderBar() {
//   return (
//     <header className={styles.hearderbar}>
//       <div className={styles.phone}>
//         <BsTelephone />
//         <p>(225) 555-0118 </p>
//       </div>
//       <div className={styles.phone}>
//         <IoIosMail />
//         <p>MichelleRivera@example.com</p>
//       </div>
//       <div className={styles.phone}>
//         <p>Follow us and get the chance to win 80% off</p>
//       </div>
//       <div className={styles.phone}>
//         <p>Follow us: </p>
//         <FaInstagram />
//         <FaYoutube />
//         <FaFacebook />
//         <FaTwitter />
//       </div>
//     </header>
//   );
// }

// function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [isFavoriteOpen, setIsFavoriteOpen] = useState(false);
//   const cartProducts = useSelector((state) => state.cart);
//   const favProducts = useSelector((state) => state.favorite);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const toggleCart = () => {
//     setIsCartOpen(!isCartOpen);
//     setIsFavoriteOpen(false); // Close Favorite popup if open
//   };

//   const toggleFavorite = () => {
//     setIsFavoriteOpen(!isFavoriteOpen);
//     setIsCartOpen(false); // Close Cart popup if open
//   };

//   return (
//     <>
//       <HeaderBar />
//       <nav className={styles.navbar}>
//         <div className={styles.brandnavbar}>
//           <h1 className={styles.navbarbrand}>Bandage</h1>
//           <div className={styles.hamburger} onClick={toggleMobileMenu}>
//             <div></div>
//             <div></div>
//             <div></div>
//           </div>
//         </div>
//         <div
//           className={`${styles.navbaritem} ${
//             isMobileMenuOpen ? styles.active : ""
//           }`}
//         >
//           <NavLink
//             to="/"
//             className={styles.navbarlink}
//             onClick={toggleMobileMenu}
//           >
//             Home
//           </NavLink>
//           <NavLink to={"/CartPage"} className={styles.navbarlink}>
//             Shop
//           </NavLink>
//           <NavLink className={styles.navbarlink}>Blog</NavLink>
//           <NavLink className={styles.navbarlink}>Contact</NavLink>
//           <NavLink className={styles.navbarlink}>Pages</NavLink>
//         </div>
//         <div
//           className={`${styles.navbaritem} ${
//             isMobileMenuOpen ? styles.active : ""
//           }`}
//         >
//           <NavLink className={styles.navbarlinkcolor}>
//             <MdOutlinePersonOutline /> Login / Register
//           </NavLink>
//           <div onClick={toggleFavorite} className={styles.navbarlinkcolor}>
//             <FaRegHeart /> {favProducts.length}
//           </div>
//           <div onClick={toggleCart} className={styles.navbarlinkcolor}>
//             <MdOutlineShoppingCart /> {cartProducts.length}
//           </div>
//         </div>
//       </nav>
//       {isCartOpen && (
//         <div className={styles.popup}>
//           <div className={styles.modal}>
//             <Cart />
//             <button onClick={toggleCart} className={styles.closeButton}>
//               <FaTimes />
//             </button>
//           </div>
//         </div>
//       )}
//       {isFavoriteOpen && (
//         <div className={styles.popup}>
//           <div className={styles.modal}>
//             <button onClick={toggleFavorite} className={styles.closeButton}>
//               <FaTimes />
//             </button>
//             <Favorite />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Navbar;
