import { useState, useEffect, useRef } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import styles from './DesktopMenu.module.css';

const DesktopMenu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [subcategory, setSubcategory] = useState<string>('');
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setSubcategory('');
    };
    const currentRef = menuRef.current;

    if (currentRef) {
      currentRef.addEventListener('mouseenter', handleMouseEnter);
      currentRef.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('mouseenter', handleMouseEnter);
        currentRef.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [subcategory, isVisible]);

  return (
    <div className={styles.desktopMenu} ref={menuRef}>
      <div className={styles.desktopMenu_menu}>
        <GiHamburgerMenu />
        Produkty
        <MdOutlineKeyboardArrowDown />
      </div>
      {isVisible && (
        <div
          className={`${styles.desktopMenu_options} ${styles.show_options}`}
          onClick={() => {
            setIsVisible(false);
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              setIsVisible(false);
            }
          }}
          role="button"
          tabIndex={0}
        >
          <div className={styles.desktopMenu_options_option}>
            <Link
              to="/sklep/koszyki"
              className={styles.desktopMenu_options_option_category}
              onMouseEnter={() => {
                setSubcategory('koszyki');
              }}
            >
              <div>Koszyki</div>
              <MdOutlineKeyboardArrowRight />
            </Link>
            {subcategory === 'koszyki' && (
              <div className={styles.desktopMenu_options_option_subcategory}>
                <Link
                  to="/sklep/koszyki/koszyki-wielkanocne"
                  className={
                    styles.desktopMenu__options_option_subcategory_link
                  }
                >
                  Koszyki wielkanocne
                </Link>
                <Link
                  to="/sklep/koszyki/koszyki-na-kwiaty-owoce-grzyby"
                  className={
                    styles.desktopMenu__options_option_subcategory_link
                  }
                >
                  Koszyki na kwiaty, owoce, grzyby
                </Link>
                <Link
                  to="/sklep/koszyki/koszyki-piknikowe"
                  className={
                    styles.desktopMenu__options_option_subcategory_link
                  }
                >
                  Koszyki piknikowe
                </Link>
                <Link
                  to="/sklep/koszyki/koszyki-na-pranie-zabawki"
                  className={
                    styles.desktopMenu__options_option_subcategory_link
                  }
                >
                  Kosze na pranie, zabawki
                </Link>
                <Link
                  to="/sklep/koszyki/koszyki-na-rower"
                  className={
                    styles.desktopMenu__options_option_subcategory_link
                  }
                >
                  Koszyki na rower
                </Link>
                <Link
                  to="/sklep/koszyki/koszyki-na-drewno"
                  className={
                    styles.desktopMenu__options_option_subcategory_link
                  }
                >
                  Koszyki na drewno
                </Link>
              </div>
            )}
          </div>
          <div className={styles.desktopMenu_options_option}>
            <Link
              to="/sklep/meble"
              className={styles.desktopMenu_options_option_category}
              onMouseEnter={() => {
                setSubcategory('meble');
              }}
            >
              <div>Meble</div>
              <MdOutlineKeyboardArrowRight />
            </Link>
            {subcategory === 'meble' && (
              <div className={styles.desktopMenu_options_option_subcategory}>
                <Link
                  to="/sklep/meble/ławki-wiklinowe"
                  className={
                    styles.desktopMenu__options_option_subcategory_link
                  }
                >
                  Ławki wiklinowe
                </Link>
                <Link
                  to="/sklep/meble/fotele-bujaki-krzesła"
                  className={
                    styles.desktopMenu__options_option_subcategory_link
                  }
                >
                  Fotele, bujaki, krzesła
                </Link>
                <Link
                  to="/sklep/meble/półki"
                  className={
                    styles.desktopMenu__options_option_subcategory_link
                  }
                >
                  Półki
                </Link>
                <Link
                  to="/sklep/meble/szafki"
                  className={
                    styles.desktopMenu__options_option_subcategory_link
                  }
                >
                  Szafki
                </Link>
                <Link
                  to="/sklep/meble/stoły-stoliki"
                  className={
                    styles.desktopMenu__options_option_subcategory_link
                  }
                >
                  Stoły, stoliki
                </Link>
              </div>
            )}
          </div>
          <div className={styles.desktopMenu_options_option}>
            <Link
              to="/sklep/pojemniki"
              className={styles.desktopMenu_options_option_category}
              onMouseEnter={() => {
                setSubcategory('pojemniki');
              }}
            >
              <div>Pojemniki</div>
              <MdOutlineKeyboardArrowRight />
            </Link>
            {subcategory === 'pojemniki' && (
              <div className={styles.desktopMenu_options_option_subcategory}>
                <Link
                  to="/sklep/pojemniki/kufry-skrzynie"
                  className={
                    styles.desktopMenu__options_option_subcategory_link
                  }
                >
                  Kufry, skrzynie
                </Link>
                <Link
                  to="/sklep/pojemniki/kufry-skrzynie-z-oparciem"
                  className={
                    styles.desktopMenu__options_option_subcategory_link
                  }
                >
                  Kufry, skrzynie z oparciem
                </Link>
                <Link
                  to="/sklep/pojemniki/skrzynie-reagałowe"
                  className={
                    styles.desktopMenu__options_option_subcategory_link
                  }
                >
                  Skrzynie regałowe
                </Link>
              </div>
            )}
          </div>
          <div className={styles.desktopMenu_options_option}>
            <Link
              to="/sklep/pozostałe"
              className={styles.desktopMenu_options_option_category}
              onMouseEnter={() => {
                setSubcategory('pozostałe');
              }}
            >
              <div>Pozostałe</div>
              <MdOutlineKeyboardArrowRight />
            </Link>
            {subcategory === 'pozostałe' && (
              <div className={styles.desktopMenu_options_option_subcategory}>
                <Link
                  to="/sklep/pozostałe/kwietniki-donice"
                  className={
                    styles.desktopMenu__options_option_subcategory_link
                  }
                >
                  Kwietniki, donice
                </Link>
                <Link
                  to="/sklep/pozostałe/transportety-dla-zwierząt"
                  className={
                    styles.desktopMenu__options_option_subcategory_link
                  }
                >
                  Transportery dla zwierząt
                </Link>
                <Link
                  to="/sklep/pozostałe/lampiony"
                  className={
                    styles.desktopMenu__options_option_subcategory_link
                  }
                >
                  Lampiony
                </Link>
                <Link
                  to="/sklep/pozostałe/wózki"
                  className={
                    styles.desktopMenu__options_option_subcategory_link
                  }
                >
                  Wózki
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DesktopMenu;
