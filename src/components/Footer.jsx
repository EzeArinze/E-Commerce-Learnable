import styles from "./Footer.module.css";
import facebook from "../assets/images/footer/facebook.png";
import instagram from "../assets/images/footer/instagram.png";
import twitter from "../assets/images/footer/twitter.png";

export default function Footer() {
  return (
    <div className={styles.footerSection}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.brandName}>Bandage</h1>
          <div className={styles.socialIcons}>
            <img
              src={facebook}
              className={styles.socialImg}
              alt="social icon 1"
            />
            <img
              src={instagram}
              className={styles.socialImg}
              alt="social icon 2"
            />
            <img
              src={twitter}
              className={styles.socialImg}
              alt="social icon 3"
            />
          </div>
        </div>
      </header>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <section className={styles.infoSection}>
            <h2 className={styles.sectionTitle}>Company Info</h2>
            {["About Us", "Carrier", "We are hiring", "Blog"].map(
              (item, index) => (
                <p key={index} className={styles.infoItem}>
                  {item}
                </p>
              )
            )}
          </section>
          <section className={styles.infoSection}>
            <h2 className={styles.sectionTitle}>Legal</h2>
            {["About Us", "Carrier", "We are hiring", "Blog"].map(
              (item, index) => (
                <p key={index} className={styles.infoItem}>
                  {item}
                </p>
              )
            )}
          </section>
          <section className={styles.infoSection}>
            <h2 className={styles.sectionTitle}>Features</h2>
            {[
              "Business Marketing",
              "User Analytic",
              "Live Chat",
              "Unlimited Support",
            ].map((item, index) => (
              <p key={index} className={styles.infoItem}>
                {item}
              </p>
            ))}
          </section>
          <section className={styles.infoSection}>
            <h2 className={styles.sectionTitle}>Resources</h2>
            {["IOS & Android", "Watch a Demo", "Customers", "API"].map(
              (item, index) => (
                <p key={index} className={styles.infoItem}>
                  {item}
                </p>
              )
            )}
          </section>
          <section className={styles.contactSection}>
            <h2 className={styles.sectionTitle}>Get In Touch</h2>
            <form className={styles.subscribeForm}>
              <label htmlFor="emailInput" className={styles.visuallyHidden}>
                Your Email
              </label>
              <input
                className={styles.inputEmail}
                type="email"
                id="emailInput"
                placeholder="Your Email"
                aria-label="Your Email"
              />
              <button className={styles.btnSubscribe}>Subscribe</button>
            </form>
            <p className={styles.contactNote}>Lore imp sum dolor Amit</p>
          </section>
        </div>
        <p className={styles.footerNote}>
          Made With Love By Finland All Right Reserved
        </p>
      </footer>
    </div>
  );
}
