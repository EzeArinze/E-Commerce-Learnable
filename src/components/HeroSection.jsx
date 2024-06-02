import mediabg from "../assets/images/mediabg1.png";
import flower from "../assets/images/flower.png";
import lamp from "../assets/images/lamb.png";
import mud from "../assets/images/mud.png";
import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <section className={styles.herosection}>
      <div className={styles.mainImageWrapper}>
        <div className={styles.pix1Container}>
          <img src={mediabg} alt="main image" className={styles.image} />
          <span className={styles.textContainer}>
            <h4>5 items</h4>
            <h3>FURNITURE</h3>
            <p>Read More</p>
          </span>
        </div>
        <div className={styles.secondaryImageWrapper}>
          <img src={flower} alt="flower image" className={styles.image} />
          <span className={styles.secondaryTextContainer}>
            <h4>5 items</h4>
            <h3>FURNITURE</h3>
            <p>Read More</p>
          </span>
          <div className={styles.thirdpix}>
            <div style={{ position: "relative" }}>
              <img src={lamp} alt="lamp image" className={styles.image} />
              <span className={styles.thirdTextContainer}>
                <h4>5 items</h4>
                <h3>FURNITURE</h3>
                <p>Read More</p>
              </span>
            </div>
            <div style={{ position: "relative" }}>
              <img src={mud} alt="mud image" className={styles.image} />
              <span className={styles.thirdTextContainer}>
                <h4>5 items</h4>
                <h3>FURNITURE</h3>
                <p>Read More</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
