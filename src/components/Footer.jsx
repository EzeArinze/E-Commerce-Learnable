import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerSection}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.brandName}>Bandage</h1>
          <div className={styles.socialIcons}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e4993d3160bcfae09f21f29b17bcb50566d8ea6e33494d025df088d79ecbdb5?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
              className={styles.socialImg}
              alt="social icon 1"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/36d3ea0706a35f6c79abd462fe0f2bb6b6acd061c3ded46a31123656f142f86a?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
              className={styles.socialImg}
              alt="social icon 2"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7f7aac6c0005852ad352a0291d051682fd982d589f5edf4f349bf374f1aa981?apiKey=df44ca8e15de4475b0d7b182ebb1db7c&"
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
            {["About Us", "Carrier", "We are hiring", "Blog"].map((item, index) => (
              <p key={index} className={styles.infoItem}>{item}</p>
            ))}
          </section>
          <section className={styles.infoSection}>
            <h2 className={styles.sectionTitle}>Legal</h2>
            {["About Us", "Carrier", "We are hiring", "Blog"].map((item, index) => (
              <p key={index} className={styles.infoItem}>{item}</p>
            ))}
          </section>
          <section className={styles.infoSection}>
            <h2 className={styles.sectionTitle}>Features</h2>
            {["Business Marketing", "User Analytic", "Live Chat", "Unlimited Support"].map((item, index) => (
              <p key={index} className={styles.infoItem}>{item}</p>
            ))}
          </section>
          <section className={styles.infoSection}>
            <h2 className={styles.sectionTitle}>Resources</h2>
            {["IOS & Android", "Watch a Demo", "Customers", "API"].map((item, index) => (
              <p key={index} className={styles.infoItem}>{item}</p>
            ))}
          </section>
          <section className={styles.contactSection}>
            <h2 className={styles.sectionTitle}>Get In Touch</h2>
            <form className={styles.subscribeForm}>
              <label htmlFor="emailInput" className={styles.visuallyHidden}>Your Email</label>
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
        <p className={styles.footerNote}>Made With Love By Finland All Right Reserved</p>
      </footer>
    </div>
  );
} 
