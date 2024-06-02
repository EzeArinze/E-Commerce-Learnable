import Description from "../components/Description";
import ProductDetail from "../components/ProductDetail";
import Breadcrumbs from "../components/BreadCrumbs";

function ProductPage() {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Shop", path: "/products/:id" },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
      <ProductDetail />
      <Description />
    </div>
  );
}

export default ProductPage;
