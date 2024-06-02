import styles from "./Gallery.module.css";
import user1 from "../assets/images/user.1.png";
import StarRating from "./StarRating";
import gallery1 from "../assets/images/gallary/gallery1.png";
import gallery2 from "../assets/images/gallary/gallery2.png";
import gallery3 from "../assets/images/gallary/gallery3.png";
import gallery4 from "../assets/images/gallary/gallery4.png";
import gallery5 from "../assets/images/gallary/gallery5.png";
import gallery6 from "../assets/images/gallary/gallery6.png";
import gallery7 from "../assets/images/gallary/gallery7.png";
import gallery9 from "../assets/images/gallary/gallery9.png";
import gallery10 from "../assets/images/gallary/gallery10.png";

function Gallery() {
  return (
    <div className={styles.Gallery}>
      <WhatTheySay />
      <Photos />
    </div>
  );
}

export default Gallery;

function WhatTheySay() {
  return (
    <section className={styles.section}>
      <div className={styles.theysay}>
        <h1>What They Say About Us</h1>
        <img src={user1} alt="user 1 profile" />
        <StarRating rating={4} />
        <p>
          Slate helps you see how many more days you need to work to reach your
          financial goal.
        </p>
        <h2>Regina Mile</h2>
        <h3>Designer</h3>
      </div>
    </section>
  );
}

const images = [
  { src: gallery1, alt: "Image 1" },
  { src: gallery2, alt: "Image 2" },
  { src: gallery3, alt: "Image 3" },
  { src: gallery4, alt: "Image 4" },
  { src: gallery5, alt: "Image 5" },
  { src: gallery6, alt: "Image 6" },
  { src: gallery7, alt: "Image 7" },
  { src: gallery9, alt: "Image 9" },
  { src: gallery10, alt: "Image 10" },
];

function Photos() {
  return (
    <section className={styles.section}>
      <ul className={styles.photos}>
        {images.map((image, index) => (
          <li key={index} className={styles.imageContainer}>
            <img src={image.src} alt={image.alt} className={styles.image} />
          </li>
        ))}
      </ul>
    </section>
  );
}
