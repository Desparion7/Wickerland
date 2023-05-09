import { RiCloseFill } from 'react-icons/ri';
import { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PriceFilter from './PriceFilter';
import styles from './PriceFilterMobile.module.css';

interface PropsType {
  setIsFilterMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const PriceFilterMobile = ({ setIsFilterMenu }: PropsType) => {
  const navigate = useNavigate();
  const [initialPath] = useState(window.location.pathname);
  const [filterMenuAnimation, setFilterMenuAnimation] = useState(
    styles.show_menu
  );
  const handlerHideMenu = useCallback(() => {
    setTimeout(() => {
      setIsFilterMenu(false);
    }, 150);
    setFilterMenuAnimation(styles.hide_menu);
  }, [setIsFilterMenu]);
  // use efekt to close mobile menu when click on link.
  useEffect(() => {
    if (window.location.pathname !== initialPath) {
      handlerHideMenu();
    }
  }, [navigate, handlerHideMenu, initialPath]);

  return (
    <div className={styles.priceFilterMobile}>
      <div
        className={`${styles.priceFilterMobile__main} ${filterMenuAnimation}`}
      >
        <div
          className={styles.priceFilterMobile__main_close}
          onClick={handlerHideMenu}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              handlerHideMenu();
            }
          }}
          tabIndex={0}
          role="button"
        >
          <RiCloseFill />
          <span>Zamknij</span>
        </div>
        <PriceFilter handlerHideMenu={handlerHideMenu} />
        <div className={styles.priceFilterMobile__main_category}>
          <h3>Podkategorie</h3>
          <h4 className={styles.priceFilterMobile__main_category_main}>
            <Link to="/sklep/koszyki">Koszyki</Link>
          </h4>
          <Link to="/sklep/koszyki/koszyki-wielkanocne">
            Koszyki wielkanocne
          </Link>
          <Link to="/sklep/koszyki/koszyki-na-kwiaty-owoce-grzyby">
            Koszyki na kwiaty, owoce, grzyby
          </Link>
          <Link to="/sklep/koszyki/koszyki-piknikowe">Koszyki piknikowe</Link>
          <Link to="/sklep/koszyki/koszyki-na-pranie-zabawki">
            Kosze na pranie, zabawki
          </Link>
          <Link to="/sklep/koszyki/koszyki-na-rower">Koszyki na rower</Link>
          <Link to="/sklep/koszyki/koszyki-na-drewno">Koszyki na drewno</Link>
          <h4 className={styles.priceFilterMobile__main_category_main}>
            <Link to="/sklep/meble">Meble</Link>
          </h4>
          <Link to="/sklep/meble/ławki-wiklinowe">Ławki wiklinowe</Link>
          <Link to="/sklep/meble/fotele-bujaki-krzesła">
            Fotele, bujaki, krzesła
          </Link>
          <Link to="/sklep/meble/półki">Półki</Link>
          <Link to="/sklep/meble/szafki">Szafki</Link>
          <Link to="/sklep/meble/stoły-stoliki">Stoły, stoliki</Link>
          <h4 className={styles.priceFilterMobile__main_category_main}>
            <Link to="/sklep/pojemniki">Pojemniki</Link>
          </h4>
          <Link to="/sklep/pojemniki/kufry-skrzynie">Kufry, skrzynie</Link>
          <Link to="/sklep/pojemniki/kufry-skrzynie-z-oparciem">
            Kufry, skrzynie z oparciem
          </Link>
          <Link to="/sklep/pojemniki/skrzynie-reagałowe">
            Skrzynie regałowe
          </Link>
          <h4 className={styles.priceFilterMobile__main_category_main}>
            <Link to="/sklep/pozostałe">Pozostałe</Link>
          </h4>
          <Link to="/sklep/pozostałe/kwietniki-donice">Kwietniki, donice</Link>
          <Link to="/sklep/pozostałe/transportety-dla-zwierząt">
            Transportery dla zwierząt
          </Link>
          <Link to="/sklep/pozostałe/lampiony">Lampiony</Link>
          <Link to="/sklep/pozostałe/wózki">Wózki</Link>
        </div>
      </div>
      <div
        className={`${styles.priceFilterMobile__backdrop}`}
        onClick={handlerHideMenu}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            handlerHideMenu();
          }
        }}
        tabIndex={0}
        role="button"
        aria-label="backdrop"
      />
    </div>
  );
};

export default PriceFilterMobile;
