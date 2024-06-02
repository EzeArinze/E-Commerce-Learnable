import styles from "./Description.module.css";
import TB from "../assets/images/TB.png";
import { useParams } from "react-router-dom";
import { useGetProductDetailQuery } from "../services/products";
import Product from "./Product";
import col from "../assets/images/brands/col-md-2.png";
import col3 from "../assets/images/brands/fa-brands-2.png";
import col4 from "../assets/images/brands/fa-brands-3.png";
import col5 from "../assets/images/brands/fa-brands-4.png";
import col6 from "../assets/images/brands/fa-brands-5.png";
import col7 from "../assets/images/brands/Vector.png";

function Description() {
  const { id } = useParams();
  const { data: product, isLoading, error } = useGetProductDetailQuery(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong, try again later.</p>;
  }

  return (
    <section className={styles.Description}>
      <div className={styles.DescriptionHeader}>
        <span className={styles.DescriptionHeaderText}>
          <p>Description</p>
          <p>Additional Informarmation</p>
          <p> Reviews ({product?.reviews?.length ?? 0})</p>
        </span>
        <MainDescription />
        <BestSellerProduct />
        <ImageList />
      </div>
    </section>
  );
}

function MainDescription() {
  return (
    <section className={styles.MainDescription}>
      <div className={styles.DescriptionSectionText}>
        <h3 className={styles.DescriptionH3}>the quick fox jumps over </h3>
        <p className={styles.DescriptionParagragh}>
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
        <p className={styles.DescriptionParagragh}>
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
        <p className={styles.DescriptionParagragh}>
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>
      </div>
      <div>
        <img
          src={TB}
          alt="table and chair"
          className={styles.DescriptionImage}
        />
      </div>
    </section>
  );
}

function BestSellerProduct() {
  return (
    <section>
      <Product
        showLoadMore={false}
        headerTitle=""
        headerSubtitle="BEST SELLER PRODUCTS"
        headerDescription=""
      />
    </section>
  );
}

function ImageList() {
  return (
    <section className={styles.imageGallery}>
      <div className={styles.imgList}>
        <img src={col} alt="brands" className={styles.brandsImg} />
        <img src={col3} alt="brands" className={styles.brandsImg} />
        <img src={col4} alt="brands" className={styles.brandsImg} />
        <img src={col5} alt="brands" className={styles.brandsImg} />
        <img src={col6} alt="brands" className={styles.brandsImg} />
        <img src={col7} alt="brands" className={styles.brandsImg} />
      </div>
    </section>
  );
}

export default Description;
