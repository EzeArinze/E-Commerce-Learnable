// import { useDispatch, useSelector } from "react-redux";
// import { remove } from "../store/favoriteSlice";
// import styles from "./Favorite.module.css";

// function Favorite() {
//   const products = useSelector((state) => state.favorite);
//   const dispatch = useDispatch();

//   function removeItem(id) {
//     dispatch(remove(id));
//   }

//   return (
//     <div>
//       {products.length === 0 ? (
//         <p className={styles.noItemsMessage}>
//           You have no items in your favorites.
//         </p>
//       ) : (
//         <ul className={styles.productList}>
//           {products.map((item) => (
//             <li key={item.id} className={styles.productCard}>
//               <img
//                 src={item.images[0]}
//                 alt={item.title}
//                 className={styles.productImage}
//               />
//               <h3 className={styles.productName}>{item.title}</h3>
//               <p className={styles.productPrice}>${item.price.toFixed(2)}</p>
//               <button
//                 onClick={() => removeItem(item.id)}
//                 className={styles.productButton}
//               >
//                 Remove item
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default Favorite;

// import { useDispatch, useSelector } from "react-redux";
// import { remove } from "../store/favoriteSlice";
// import styles from "./Favorite.module.css";

// function Favorite() {
//   const products = useSelector((state) => state.favorite);
//   const dispatch = useDispatch();

//   function removeItem(id) {
//     dispatch(remove(id));
//   }

//   return (
//     <div>
//       {products.length === 0 ? (
//         <p className={styles.noItemsMessage}>
//           You have no items in your favorites.
//         </p>
//       ) : (
//         <ul className={styles.productList}>
//           {products.map((item) => (
//             <li key={item.id} className={styles.productRow}>
//               <img
//                 src={item.images[0]}
//                 alt={item.title}
//                 className={styles.productImage}
//               />
//               <div className={styles.productDetails}>
//                 <h3 className={styles.productName}>{item.title}</h3>
//                 <p className={styles.productPrice}>${item.price.toFixed(2)}</p>
//                 <button
//                   onClick={() => removeItem(item.id)}
//                   className={styles.FavProductButton}
//                 >
//                   Remove item
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default Favorite;

import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/favoriteSlice";
import styles from "./Favorite.module.css";

function Favorite() {
  const products = useSelector((state) => state.favorite);
  const dispatch = useDispatch();

  function removeItem(id) {
    dispatch(remove(id));
  }

  return (
    <div className={styles.favoritePage}>
      {products.length === 0 ? (
        <p className={styles.noItemsMessage}>
          You have no items in your favorites.
        </p>
      ) : (
        <ul className={styles.productList}>
          {products.map((item) => (
            <li key={item.id} className={styles.productRow}>
              <img
                src={item.images[0]}
                alt={item.title}
                className={styles.productImage}
              />
              <div className={styles.productDetails}>
                <h3 className={styles.productName}>{item.title}</h3>
                <p className={styles.productPrice}>${item.price.toFixed(2)}</p>
                <button
                  onClick={() => removeItem(item.id)}
                  className={styles.FavProductButton}
                >
                  Remove item
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorite;
