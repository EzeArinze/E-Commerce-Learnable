import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { Provider } from "react-redux";
import store from "../store/store";
import Footer from "./Footer";
import styles from "./Layout.module.css";

function Layout() {
  return (
    <Provider store={store}>
      <NavBar />
      <div className={styles.layoutContainer}>
        <main className={styles.mainContent}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default Layout;
