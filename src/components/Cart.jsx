/* eslint-disable react/prop-types */
// import { useDispatch, useSelector } from "react-redux";
// import { remove, increaseQuantity, decreaseQuantity } from "../store/cartSlice";
// import StarRating from "./StarRating";

// import styles from "./Cart.module.css";

// function Card() {
//   const products = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   function removeItem(id) {
//     dispatch(remove(id));
//   }

//   const increaseItemQuantity = (id) => {
//     dispatch(increaseQuantity(id));
//   };

//   const decreaseItemQuantity = (id) => {
//     dispatch(decreaseQuantity(id));
//   };

//   return (
//     <section className={styles.cartContainer}>
//       {products.length === 0 ? (
//         <p className={styles.emptyMessage}>You have no items in your cart.</p>
//       ) : (
//         <div className={styles.cart}>
//           <div className={styles.cartItems}>
//             {products.map((product) => (
//               <div key={product.id} className={styles.productCard}>
//                 <img
//                   src={product.images[0]}
//                   alt={product.title}
//                   className={styles.productImage}
//                 />
//                 <div className={styles.productDetails}>
//                   <h2 className={styles.productName}>{product.title}</h2>
//                   <span className={styles.RatingandReview}>
//                     <StarRating rating={product.rating} />
//                     <p className={styles.reviews}>
//                       {product.reviews.length} Reviews
//                     </p>
//                   </span>
//                   <p className={styles.productPrice}>
//                     $
//                     {(
//                       (product.price -
//                         (product.price * product.discountPercentage) / 100) *
//                       product.quantity
//                     ).toFixed(2)}
//                   </p>
//                   {product.stock && <p className={styles.inStock}>In Stock</p>}
//                   <div className={styles.quantityControl}>
//                     <button
//                       className={styles.quantityButton}
//                       onClick={() => decreaseItemQuantity(product.id)}
//                     >
//                       -
//                     </button>
//                     <span className={styles.quantity}>{product.quantity}</span>
//                     <button
//                       className={styles.quantityButton}
//                       onClick={() => increaseItemQuantity(product.id)}
//                     >
//                       +
//                     </button>
//                   </div>
//                   <button
//                     className={styles.removeButton}
//                     onClick={() => removeItem(product.id)}
//                   >
//                     Remove Item
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <OrderSummary products={products} />
//         </div>
//       )}
//     </section>
//   );
// }

// // eslint-disable-next-line react/prop-types
// function OrderSummary({ products }) {
//   // eslint-disable-next-line react/prop-types
//   if (!products || products.length === 0) return null;

//   const subtotal = products
//     // eslint-disable-next-line react/prop-types
//     .reduce((sum, product) => {
//       return (
//         sum +
//         (product.price - (product.price * product.discountPercentage) / 100) *
//           product.quantity
//       );
//     }, 0)
//     .toFixed(2);

//   // eslint-disable-next-line react/prop-types
//   const totalItems = products.reduce(
//     (sum, product) => sum + product.quantity,
//     0
//   );

//   return (
//     <div className={styles.orderSummaryContainer}>
//       <h2>Order Summary</h2>
//       <div className={styles.orderSummaryDetails}>
//         <div className={styles.orderSummaryItem}>
//           <span>Items: </span>
//           <span>{totalItems}</span>
//         </div>
//         <div className={styles.orderSummaryItem}>
//           <span>Subtotal: </span>
//           <span>${subtotal}</span>
//         </div>
//         <div className={styles.orderSummaryItem}>
//           <span>Total: </span>
//           <span>${subtotal}</span>
//         </div>
//       </div>
//       <button className={styles.checkoutButton}>Proceed to Checkout</button>
//     </div>
//   );
// }

// export default Card;

import { useSelector, useDispatch } from "react-redux";
import styles from "./Cart.module.css";
import { remove, increaseQuantity, decreaseQuantity } from "../store/cartSlice";
import StarRating from "./StarRating";
import MasterCard from "../assets/images/payment/Mastercard.png";
import Visa from "../assets/images/payment/VisaInc.png";
import Paystack from "../assets/images/payment/Paystack.png";

function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id));
  };

  const increaseItemQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const decreaseItemQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  // Compute total items
  const totalItems = products.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <section className={styles.cartContainer}>
        <h1 className={styles.cartTitle}>Shopping Cart</h1>

        {products.length === 0 ? (
          <p className={styles.emptyMessage}>You have no items in your cart.</p>
        ) : (
          <section className={styles.cart}>
            <div className={styles.cartItems}>
              <header className={styles.cartHeader}>
                <span className={styles.cartTh}>Item Details</span>
                <span className={styles.cartTh}>Quantity</span>
                <span className={styles.cartTh}>Price</span>
              </header>
              {products.map((product) => (
                <article key={product.id} className={styles.productCard}>
                  <div className={styles.imgSide}>
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className={styles.productImage}
                    />
                    <button
                      className={styles.CartRemoveButton}
                      onClick={() => removeFromCart(product.id)}
                    >
                      Remove
                    </button>
                  </div>

                  <div className={styles.productDetails}>
                    <h2 className={styles.productName}>{product.title}</h2>
                    {product.stock && (
                      <p className={styles.inStock}>In Stock</p>
                    )}

                    <div className={styles.ratingReviewContainer}>
                      <StarRating rating={product.rating} />
                      <p className={styles.reviews}>
                        {product.reviews.length} Reviews
                      </p>
                    </div>
                  </div>
                  <div className={styles.quantityControl}>
                    <button
                      className={styles.quantityButton}
                      onClick={() => decreaseItemQuantity(product.id)}
                    >
                      -
                    </button>
                    <span className={styles.quantity}>{product.quantity}</span>
                    <button
                      className={`${styles.quantityButton} ${styles.addButton}`}
                      onClick={() => increaseItemQuantity(product.id)}
                    >
                      +
                    </button>
                  </div>
                  <div className={styles.priceContainer}>
                    <p className={styles.productPrice}>
                      $
                      {(
                        (product.price -
                          (product.price * product.discountPercentage) / 100) *
                        product.quantity
                      ).toFixed(2)}
                    </p>
                    <p className={styles.productMul}>
                      $
                      {(
                        product.price -
                        (product.price * product.discountPercentage) / 100
                      ).toFixed(2)}{" "}
                      x {product.quantity} Item{product.quantity > 1 ? "s" : ""}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <OrderSummary products={products} totalItems={totalItems} />
          </section>
        )}
      </section>
    </>
  );
}

function OrderSummary({ products, totalItems }) {
  if (!products || products.length === 0) return null;

  const subtotal = products
    .reduce((sum, product) => {
      return (
        sum +
        (product.price - (product.price * product.discountPercentage) / 100) *
          product.quantity
      );
    }, 0)
    .toFixed(2);

  return (
    <aside className={styles.summary}>
      <div className={styles.summaryContent}>
        <header className={styles.summaryHeader}>
          <h2 className={styles.summaryTitle}>Order Summary</h2>
          <p className={styles.summaryItems}>
            {totalItems} Item{totalItems > 1 ? "s" : ""}
          </p>
        </header>
        <section className={styles.deliveryInfo}>
          <h3 className={styles.deliveryLabel}>Delivery Charges</h3>
          <p className={styles.deliveryText}>
            Add your delivery address to checkout to see delivery charges.
          </p>
        </section>
        <hr className={styles.divider} />
        <section className={styles.subtotal}>
          <h3 className={styles.subtotalLabel}>Subtotal</h3>
          <p className={styles.subtotalAmount}>
            <span>${subtotal}</span>
          </p>
        </section>
        <hr className={styles.divider} />
        <section className={styles.total}>
          <h3 className={styles.totalLabel}>Total</h3>
          <p className={styles.totalAmount}>
            <span>${subtotal}</span>
          </p>
        </section>
        <p className={styles.excludingText}>Excluding Delivery Charges</p>
        <button className={styles.checkoutButton}>Proceed to Checkout</button>
        <section className={styles.paymentMethods}>
          <h3>Payment Methods</h3>
          <img
            src={Paystack}
            alt="payment methods"
            className={styles.paymentIcon}
          />
          <img
            src={MasterCard}
            alt="payment methods"
            className={styles.paymentIcon}
          />
          <img
            src={Visa}
            alt="payment methods"
            className={styles.paymentIcon}
          />
        </section>
      </div>
    </aside>
  );
}

export default Cart;
