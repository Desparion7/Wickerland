import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './HeaderTop.module.css';

const HeaderTop = () => {
  return (
    <div className={styles.headerTop}>
      <h1 className={styles.headerTop__companyName}>Sklep z wikliną</h1>
      <div className={styles.headerTop__contactBox}>
        <div className={styles.headerTop__contactBox_media}>
          <a
            href="https://www.facebook.com/piotr.szabat.16"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/ciabatek/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
        <div className={styles.headerTop__contactBox_message}>
          <Link to="/kontakt">Kontakt</Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
