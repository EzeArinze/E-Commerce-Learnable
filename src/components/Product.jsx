import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../services/products";
import { add } from "../store/cartSlice";
import { put } from "../store/favoriteSlice";
import { useDispatch, useSelector } from "react-redux";
import { loadMore } from "../store/productSlice";
import { CiHeart } from "react-icons/ci";
import { ClipLoader } from "react-spinners";
import Modal from "./Modal"; // Import the new Modal component
import styles from "./Product.module.css";

function Product({
  // eslint-disable-next-line react/prop-types
  showLoadMore = true,
  // eslint-disable-next-line react/prop-types
  headerTitle = "Product Dashboard",
  // eslint-disable-next-line react/prop-types
  headerSubtitle = "BEST SELLER PRODUCT",
  // eslint-disable-next-line react/prop-types
  headerDescription = "Problems trying to resolve conflict between",
}) {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetProductsQuery();
  const { visibleItems } = useSelector((state) => state.products);

  const [modalData, setModalData] = useState(null);

  function handleLoadMore() {
    dispatch(loadMore());
  }

  function addToCart(item) {
    dispatch(add(item));
    setModalData({ type: "cart", item });
  }

  function addToFavorite(item) {
    dispatch(put(item));
    setModalData({ type: "favorite", item });
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

  return (
    <div className={styles.productdashboard}>
      <div className={styles.productheadertext}>
        <h3>{headerTitle}</h3>
        <h2>{headerSubtitle}</h2>
        <p>{headerDescription}</p>
      </div>
      <ul className={styles.productlist}>
        {data.products.slice(0, visibleItems).map((item) => (
          <li key={item.id} className={styles.productitem}>
            <Link to={`/products/${item.id}`} className={styles.productlink}>
              <img
                src={item.thumbnail}
                alt={item.title}
                className={styles.productimage}
              />
              <div className={styles.productinfo}>
                <h3 className={styles.producttitle}>{item.title}</h3>
                <p className={styles.categoryName}>{item.category}</p>
                <span className={styles.price}>
                  <p className={styles.productprice}>
                    ${item.price.toFixed(2)}
                  </p>
                  <p className={styles.productPrice}>
                    $
                    {(
                      item.price -
                      (item.price * item.discountPercentage) / 100
                    ).toFixed(2)}
                  </p>
                </span>
              </div>
            </Link>
            <div className={styles.actionButtons}>
              <button
                className={styles.favoriteButton}
                onClick={() => addToFavorite(item)}
              >
                <CiHeart className={styles.iconButton} />
              </button>
              <button
                className={styles.addToCartbtn}
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
      {showLoadMore && visibleItems < data.products.length && (
        <button onClick={handleLoadMore} className={styles.loadmorebutton}>
          LOAD MORE PRODUCT
        </button>
      )}
      <Modal modalData={modalData} closeModal={closeModal} />
    </div>
  );
}

export default Product;
