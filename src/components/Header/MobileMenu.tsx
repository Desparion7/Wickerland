import { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { SlArrowUp, SlArrowDown } from 'react-icons/sl';
import { MdTableBar } from 'react-icons/md';
import { GiBasket } from 'react-icons/gi';
import { CgBox } from 'react-icons/cg';
import styles from './MobileMenu.module.css';

interface PropsType {
  setIsMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({ setIsMobileMenu }: PropsType) => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const location = useLocation();
  const queryParams = new URLSearchParams(search);

  const [initialPath, setInitialPath] = useState(window.location.pathname);
  const [isActive, setIsActive] = useState('left');
  const [searchValue, setSearchValue] = useState('');
  const [menuAnimation, setMenuAnimation] = useState(styles.show_menu);
  const [isCategoryOpen, setIsCategoryOpen] = useState<string[]>([]);

  const handlerHideMenu = useCallback(() => {
    setTimeout(() => {
      setIsMobileMenu(false);
    }, 150);
    setMenuAnimation(styles.hide_menu);
  }, [setIsMobileMenu]);
  // use efekt to close mobile menu when click on link.
  useEffect(() => {
    if (window.location.pathname !== initialPath) {
      handlerHideMenu();
    }
  }, [navigate, initialPath, handlerHideMenu]);

  const handlerCategory = (category: string) => {
    if (isCategoryOpen.includes(category)) {
      setIsCategoryOpen((prevState) =>
        prevState.filter((item) => item !== category)
      );
    } else {
      setIsCategoryOpen((prevState) => [...prevState, category]);
    }
  };

  const handlerSearch = () => {
    queryParams.set('szukaj', searchValue);

    const newSearch = queryParams.toString();

    navigate({
      pathname: location.pathname,
      search: newSearch,
    });
    setSearchValue('');
    handlerHideMenu();
  };

  return (
    <div className={styles.mobileMenu}>
      <div className={`${styles.mobileMenu__main} ${menuAnimation}`}>
        <div className={styles.mobileMenu__main_search}>
          <input
            type="text"
            placeholder="Szukaj"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <button
            onClick={() => {
              handlerSearch();
            }}
            type="button"
          >
            <BsSearch />
          </button>
        </div>
        <div className={styles.mobileMenu__main_modes}>
          <div
            className={`${styles.mobileMenu__main_mode} ${
              isActive === 'left' ? styles.active : ''
            }`}
            onClick={() => {
              setIsActive('left');
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                setIsActive('left');
              }
            }}
            role="button"
            tabIndex={0}
          >
            Produkty
          </div>
          <div
            className={`${styles.mobileMenu__main_mode} ${
              isActive === 'right' ? styles.active : ''
            }`}
            onClick={() => {
              setIsActive('right');
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                setIsActive('right');
              }
            }}
            role="button"
            tabIndex={0}
          >
            Konto
          </div>
          <span
            className={`${styles.mobileMenu__main_mode_underline} ${
              isActive === 'left' && styles.underline_left
            } ${isActive === 'right' && styles.underline_right}`}
          />
        </div>
        {isActive === 'left' && (
          <div className={styles.mobileMenu__main_options}>
            <div className={styles.mobileMenu__main_options_title}>
              <Link to="/sklep/koszyki">
                <GiBasket
                  className={styles.mobileMenu__main_options_title_icon}
                />
                Koszyki
              </Link>
              <div
                className={`${styles.mobileMenu__main_options_title_arrow} ${
                  isCategoryOpen.includes('koszyki') && styles.arrow_active
                }`}
                onClick={() => {
                  handlerCategory('koszyki');
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    handlerCategory('koszyki');
                  }
                }}
                role="button"
                tabIndex={0}
              >
                {isCategoryOpen.includes('koszyki') ? (
                  <SlArrowUp />
                ) : (
                  <SlArrowDown />
                )}
              </div>
            </div>
            <div
              className={`${styles.mobileMenu__main_options_categories} ${
                isCategoryOpen.includes('koszyki') && styles.categories_active
              }`}
            >
              <Link
                to="/sklep/koszyki/koszyki-wielkanocne"
                className={styles.mobileMenu__main_options_category}
              >
                Koszyki wielkanocne
              </Link>
              <Link
                to="/sklep/koszyki/koszyki-na-kwiaty-owoce-grzyby"
                className={styles.mobileMenu__main_options_category}
              >
                Koszyki na kwiaty, owoce, grzyby
              </Link>
              <Link
                to="/sklep/koszyki/koszyki-piknikowe"
                className={styles.mobileMenu__main_options_category}
              >
                Koszyki piknikowe
              </Link>
              <Link
                to="/sklep/koszyki/koszyki-na-pranie-zabawki"
                className={styles.mobileMenu__main_options_category}
              >
                Kosze na pranie, zabawki
              </Link>
              <Link
                to="/sklep/koszyki/koszyki-na-rower"
                className={styles.mobileMenu__main_options_category}
              >
                Koszyki na rower
              </Link>
              <Link
                to="/sklep/koszyki/koszyki-na-drewno"
                className={styles.mobileMenu__main_options_category}
              >
                Koszyki na drewno
              </Link>
            </div>
            <div className={styles.mobileMenu__main_options_title}>
              <Link to="/sklep/meble">
                <MdTableBar
                  className={styles.mobileMenu__main_options_title_icon}
                />
                Meble
              </Link>
              <div
                className={`${styles.mobileMenu__main_options_title_arrow} ${
                  isCategoryOpen.includes('meble') && styles.arrow_active
                }`}
                onClick={() => {
                  handlerCategory('meble');
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    handlerCategory('meble');
                  }
                }}
                role="button"
                tabIndex={0}
              >
                {isCategoryOpen.includes('meble') ? (
                  <SlArrowUp />
                ) : (
                  <SlArrowDown />
                )}
              </div>
            </div>
            <div
              className={`${styles.mobileMenu__main_options_categories} ${
                isCategoryOpen.includes('meble') && styles.categories_active
              }`}
            >
              <Link
                to="/sklep/meble/ławki-wiklinowe"
                className={styles.mobileMenu__main_options_category}
              >
                Ławki wiklinowe
              </Link>
              <Link
                to="/sklep/meble/fotele-bujaki-krzesła"
                className={styles.mobileMenu__main_options_category}
              >
                Fotele, bujaki, krzesła
              </Link>
              <Link
                to="/sklep/meble/półki"
                className={styles.mobileMenu__main_options_category}
              >
                Półki
              </Link>
              <Link
                to="/sklep/meble/szafki"
                className={styles.mobileMenu__main_options_category}
              >
                Szafki
              </Link>
              <Link
                to="/sklep/meble/stoły-stoliki"
                className={styles.mobileMenu__main_options_category}
              >
                Stoły, stoliki
              </Link>
            </div>
            <div className={styles.mobileMenu__main_options_title}>
              <Link to="/sklep/pojemniki">
                <CgBox className={styles.mobileMenu__main_options_title_icon} />
                Pojemniki
              </Link>
              <div
                className={`${styles.mobileMenu__main_options_title_arrow} ${
                  isCategoryOpen.includes('pojemniki') && styles.arrow_active
                }`}
                onClick={() => {
                  handlerCategory('pojemniki');
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    handlerCategory('pojemniki');
                  }
                }}
                role="button"
                tabIndex={0}
              >
                {isCategoryOpen.includes('pojemniki') ? (
                  <SlArrowUp />
                ) : (
                  <SlArrowDown />
                )}
              </div>
            </div>
            <div
              className={`${styles.mobileMenu__main_options_categories} ${
                isCategoryOpen.includes('pojemniki') && styles.categories_active
              }`}
            >
              <Link
                to="/sklep/pojemniki/kufry-skrzynie"
                className={styles.mobileMenu__main_options_category}
              >
                Kufry, skrzynie
              </Link>
              <Link
                to="/sklep/pojemniki/kufry-skrzynie-z-oparciem"
                className={styles.mobileMenu__main_options_category}
              >
                Kufry, skrzynie z oparciem
              </Link>
              <Link
                to="/sklep/pojemniki/skrzynie-reagałowe"
                className={styles.mobileMenu__main_options_category}
              >
                Skrzynie regałowe
              </Link>
            </div>
            <div className={styles.mobileMenu__main_options_title}>
              <Link to="/sklep/pozostałe">Pozostałe</Link>
              <div
                className={`${styles.mobileMenu__main_options_title_arrow} ${
                  isCategoryOpen.includes('pozostałe') && styles.arrow_active
                }`}
                onClick={() => {
                  handlerCategory('pozostałe');
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    handlerCategory('pozostałe');
                  }
                }}
                role="button"
                tabIndex={0}
              >
                {isCategoryOpen.includes('pozostałe') ? (
                  <SlArrowUp />
                ) : (
                  <SlArrowDown />
                )}
              </div>
            </div>
            <div
              className={`${styles.mobileMenu__main_options_categories} ${
                isCategoryOpen.includes('pozostałe') && styles.categories_active
              }`}
            >
              <Link
                to="/sklep/pozostałe/kwietniki-donice"
                className={styles.mobileMenu__main_options_category}
              >
                Kwietniki, donice
              </Link>
              <Link
                to="/sklep/pozostałe/transportety-dla-zwierząt"
                className={styles.mobileMenu__main_options_category}
              >
                Transportery dla zwierząt
              </Link>
              <Link
                to="/sklep/pozostałe/lampiony"
                className={styles.mobileMenu__main_options_category}
              >
                Lampiony
              </Link>
              <Link
                to="/sklep/pozostałe/wózki"
                className={styles.mobileMenu__main_options_category}
              >
                Wózki
              </Link>
            </div>
          </div>
        )}
        {isActive === 'right' && (
          <div className={styles.mobileMenu__main_options}>
            <div className={styles.mobileMenu__main_options_title}>
              <Link to="/sklep">Sklep</Link>
            </div>
            <div className={styles.mobileMenu__main_options_title}>
              <Link to="/onas">O Nas</Link>
            </div>
            <div className={styles.mobileMenu__main_options_title}>
              <Link to="/kontakt">Kontakt</Link>
            </div>
            <div className={styles.mobileMenu__main_options_title}>
              <Link to="/rejestracja">Logowanie/Rejstracja</Link>
            </div>
          </div>
        )}
      </div>
      <div
        className={`${styles.mobileMenu__backdrop}`}
        onClick={handlerHideMenu}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            handlerHideMenu();
          }
        }}
        role="link"
        tabIndex={0}
        aria-label="backdrop"
      />
    </div>
  );
};

export default MobileMenu;
