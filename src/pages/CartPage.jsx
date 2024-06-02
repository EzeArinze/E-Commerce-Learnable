// import Cart from "../components/Cart";
// import Product from "../components/Product";

// function CartPage() {
//   return (
//     <div>
//       <Cart />
//       <Product
//         showLoadMore={false}
//         headerTitle=""
//         headerSubtitle="PRODUCTS RELATED TO ITEMS IN YOUR CART"
//         headerDescription=""
//       />
//     </div>
//   );
// }

// export default CartPage;

// src/pages/CartPage.jsx

import Cart from "../components/Cart";
import Product from "../components/Product";
import Breadcrumbs from "../components/BreadCrumbs";

function CartPage() {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/" },
    { label: "Cart", path: "/CartPage" },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      <Cart />
      <Product
        showLoadMore={false}
        headerTitle=""
        headerSubtitle="PRODUCTS RELATED TO ITEMS IN YOUR CART"
        headerDescription=""
      />
    </div>
  );
}

export default CartPage;
