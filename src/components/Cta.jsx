// import cta from "../assets/images/gallary/cta.png";
import styles from "./Cta.module.css";

function Cta() {
  return (
    <section className={styles.Cta}>
      <span className={styles.CtaSetion}>
        <p className={styles.CtaHeader}>Designing Better Experience</p>
        <p className={styles.CtaSubHeader}>
          Problems trying to resolve the conflict between{" "}
        </p>
        <p className={styles.CtaSubtitle}>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:{" "}
        </p>
        <p className={styles.CtaPrice}>$16.48</p>
        <button className={styles.Ctabutton}>Add Your Call To Action</button>
      </span>
    </section>
  );
}

export default Cta;
