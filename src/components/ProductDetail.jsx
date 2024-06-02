// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useGetProductDetailQuery } from "../services/products";
// import { ClipLoader } from "react-spinners";
// import { add } from "../store/cartSlice";
// import { put } from "../store/favoriteSlice";
// import {
//   FaCartPlus,
//   FaRegHeart,
//   FaChevronLeft,
//   FaChevronRight,
// } from "react-icons/fa";
// import StarRating from "./StarRating";
// import styles from "./ProductDetail.module.css";
// import {
//   setCurrentImageIndex,
//   nextImage,
//   prevImage,
// } from "../store/productDetailSlice";

// function ProductDetail() {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const { data: product, error, isLoading } = useGetProductDetailQuery(id);
//   const favoriteItems = useSelector((state) => state.favorite);
//   const addedItems = useSelector((state) => state.cart);
//   const currentImageIndex = useSelector(
//     (state) => state.productDetail.currentImageIndex
//   );

//   const staticColors = ["#00FF00", "#0000FF", "#FFFF00", "#FFA500"];

//   function addToCart(item) {
//     if (!isAdded(item)) {
//       dispatch(add(item));
//     }
//   }

//   function addToFavorite(item) {
//     if (!isFavorite(item)) {
//       dispatch(put(item));
//     }
//   }

//   function isAdded(item) {
//     return addedItems.some((addItem) => addItem.id === item.id);
//   }

//   function isFavorite(item) {
//     return favoriteItems.some((favItem) => favItem.id === item.id);
//   }

//   function handleNextImage() {
//     dispatch(nextImage(product.images.length));
//   }

//   function handlePrevImage() {
//     dispatch(prevImage(product.images.length));
//   }

//   function handleThumbnailClick(index) {
//     dispatch(setCurrentImageIndex(index));
//   }

//   if (isLoading) {
//     return (
//       <div className={styles.loaderContainer}>
//         <ClipLoader size={50} color="#23a6f0" />
//       </div>
//     );
//   }

//   if (error) {
//     return <p>Something went wrong, try again later.</p>;
//   }

//   if (!product) {
//     return null;
//   }

//   return (
//     <div className={styles.productdetail}>
//       <div className={styles.imagewrapper}>
//         <FaChevronLeft
//           onClick={handlePrevImage}
//           className={`${styles.navicon} ${styles.left}`}
//         />
//         <img
//           src={product.images[currentImageIndex]}
//           alt={product.title}
//           className={styles.productdetailimage}
//         />
//         <FaChevronRight
//           onClick={handleNextImage}
//           className={`${styles.navicon} ${styles.right}`}
//         />
//         <div className={styles.thumbnailcontainer}>
//           {product.images?.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`${product.title} thumbnail ${index + 1}`}
//               className={`${styles.thumbnail} ${
//                 index === currentImageIndex ? styles.activethumbnail : ""
//               }`}
//               onClick={() => handleThumbnailClick(index)}
//             />
//           ))}
//         </div>
//       </div>
//       <div className={styles.productdetailcontent}>
//         <h2 className={styles.productdetailtitle}>{product.title}</h2>
//         <span className={styles.ratingnreview}>
//           <StarRating rating={product.rating} />
//           <p>{product.reviews.length} Reviews</p>
//         </span>
//         <p className={styles.productdetailprice}>
//           ${product.price?.toFixed(2)}
//         </p>
//         <span className={styles.avialable}>
//           Availability{" "}
//           {product.stock && <p className={styles.inStock}>In Stock</p>}
//         </span>

//         <div className={styles.colorOptions}>
//           {staticColors.map((color, index) => (
//             <button
//               key={index}
//               style={{ backgroundColor: color }}
//               className={styles.colorButton}
//             />
//           ))}
//         </div>

//         <div className={styles.productdetailbuttons}>
//           <button className={styles.selectoptionButton}>Select Options</button>

//           <button
//             onClick={() => addToCart(product)}
//             disabled={isAdded(product)}
//             className={styles.iconbutton}
//           >
//             <FaCartPlus className={`icon ${isAdded(product) ? "added" : ""}`} />
//           </button>
//           <button
//             onClick={() => addToFavorite(product)}
//             disabled={isFavorite(product)}
//             className={styles.iconbutton}
//           >
//             <FaRegHeart
//               className={`icon ${isFavorite(product) ? "favorited" : ""}`}
//             />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetail;

// ProductDetail.js
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductDetailQuery } from "../services/products";
import { ClipLoader } from "react-spinners";
import { add } from "../store/cartSlice";
import { put } from "../store/favoriteSlice";
import {
  FaCartPlus,
  FaRegHeart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import StarRating from "./StarRating";
import Modal from "./Modal";
import styles from "./ProductDetail.module.css";
import {
  setCurrentImageIndex,
  nextImage,
  prevImage,
} from "../store/productDetailSlice";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data: product, error, isLoading } = useGetProductDetailQuery(id);
  const favoriteItems = useSelector((state) => state.favorite);
  const addedItems = useSelector((state) => state.cart);
  const currentImageIndex = useSelector(
    (state) => state.productDetail.currentImageIndex
  );

  const [modalData, setModalData] = useState(null);

  const staticColors = ["#00FF00", "#0000FF", "#FFFF00", "#FFA500"];

  function addToCart(item) {
    if (!isAdded(item)) {
      dispatch(add(item));
      setModalData({ type: "cart", item });
    }
  }

  function addToFavorite(item) {
    if (!isFavorite(item)) {
      dispatch(put(item));
      setModalData({ type: "favorite", item });
    }
  }

  function isAdded(item) {
    return addedItems.some((addItem) => addItem.id === item.id);
  }

  function isFavorite(item) {
    return favoriteItems.some((favItem) => favItem.id === item.id);
  }

  function handleNextImage() {
    dispatch(nextImage(product.images.length));
  }

  function handlePrevImage() {
    dispatch(prevImage(product.images.length));
  }

  function handleThumbnailClick(index) {
    dispatch(setCurrentImageIndex(index));
  }

  function closeModal() {
    setModalData(null);
  }

  if (isLoading) {
    return (
      <div className={styles.loaderContainer}>
        <ClipLoader size={50} color="#23a6f0" />
      </div>
    );
  }

  if (error) {
    return <p>Something went wrong, try again later.</p>;
  }

  if (!product) {
    return null;
  }

  return (
    <div className={styles.productdetail}>
      <div className={styles.imagewrapper}>
        <FaChevronLeft
          onClick={handlePrevImage}
          className={`${styles.navicon} ${styles.left}`}
        />
        <img
          src={product.images[currentImageIndex]}
          alt={product.title}
          className={styles.productdetailimage}
        />
        <FaChevronRight
          onClick={handleNextImage}
          className={`${styles.navicon} ${styles.right}`}
        />
        <div className={styles.thumbnailcontainer}>
          {product.images?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.title} thumbnail ${index + 1}`}
              className={`${styles.thumbnail} ${
                index === currentImageIndex ? styles.activethumbnail : ""
              }`}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
      </div>
      <div className={styles.productdetailcontent}>
        <h2 className={styles.productdetailtitle}>{product.title}</h2>
        <span className={styles.ratingnreview}>
          <StarRating rating={product.rating} />
          <p>{product.reviews.length} Reviews</p>
        </span>
        <p className={styles.productdetailprice}>
          ${product.price?.toFixed(2)}
        </p>
        <span className={styles.avialable}>
          Availability{" "}
          {product.stock && <p className={styles.inStock}>In Stock</p>}
        </span>

        <div className={styles.colorOptions}>
          {staticColors.map((color, index) => (
            <button
              key={index}
              style={{ backgroundColor: color }}
              className={styles.colorButton}
            />
          ))}
        </div>

        <div className={styles.productdetailbuttons}>
          <button className={styles.selectoptionButton}>Select Options</button>

          <button
            onClick={() => addToCart(product)}
            disabled={isAdded(product)}
            className={styles.iconbutton}
          >
            <FaCartPlus className={`icon ${isAdded(product) ? "added" : ""}`} />
          </button>
          <button
            onClick={() => addToFavorite(product)}
            disabled={isFavorite(product)}
            className={styles.iconbutton}
          >
            <FaRegHeart
              className={`icon ${isFavorite(product) ? "favorited" : ""}`}
            />
          </button>
        </div>
      </div>
      <Modal modalData={modalData} closeModal={closeModal} />
    </div>
  );
}

export default ProductDetail;
