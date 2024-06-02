/* eslint-disable react/prop-types */
import { MdClose } from "react-icons/md";
import styles from "./Modal.module.css";

function Modal({ modalData, closeModal }) {
  if (!modalData) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button onClick={closeModal} className={styles.closeModalButton}>
          <MdClose size={24} />
        </button>
        <div className={styles.modalDetails}>
          <img
            src={modalData.item.thumbnail}
            alt={modalData.item.title}
            className={styles.modalImage}
          />
          <div className={styles.modalText}>
            <h3>
              {modalData.type === "cart"
                ? "Successfully Added To Cart"
                : "Successfully Added To Favorite"}
            </h3>
            <p>{modalData.item.title}</p>
            <p> $ {modalData.item.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
