import { TfiLayoutGrid4Alt } from 'react-icons/tfi';
import { BsFillGrid3X3GapFill, BsFillGridFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux';
import styles from './ShopTools.module.css';
import { shopGrid, setGrid } from '../../app/slices/shopViewSlice';
import PriceFilterMobile from './PriceFilterMobile';

const ShopTools = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const sort = queryParams.get('sortuj');

  const [sortMethod, setSortMethod] = useState('sortuj');
  const [isFilterMenu, setIsFilterMenu] = useState(false);
  const [productsOnPage, setProductsOnPage] = useState('9');
  const isDesktop = useMediaQuery({ minWidth: '1000px' });
  const isSmallDesktop = useMediaQuery({ minWidth: '1250px' });
  const grid = useSelector(shopGrid);

  const handlerChangeGrid = (gridNumber: number) => {
    dispatch(setGrid(gridNumber));
  };

  const handlerPageSize = (newSize: string) => {
    queryParams.set('nastronie', newSize);
    queryParams.set('strona', '1');
    const newSearch = queryParams.toString();

    navigate({
      pathname: location.pathname,
      search: newSearch,
    });

    setProductsOnPage(newSize);
  };
  const handlerSortByPrice = (option: string) => {
    queryParams.set('sortuj', option);
    const newSearch = queryParams.toString();

    navigate({
      pathname: location.pathname,
      search: newSearch,
    });
  };
  // filter by price reset when path dont have sort
  useEffect(() => {
    if (!sort) {
      setSortMethod('sortuj');
    }
  }, [sort]);
  return (
    <>
      {isFilterMenu && <PriceFilterMobile setIsFilterMenu={setIsFilterMenu} />}
      <div className={styles.shopTools}>
        {isSmallDesktop && (
          <div className={styles.shopTools_path}>
            <Link to="/" className={styles.active_main}>
              Strona główna
            </Link>
            <span>/</span>
            <p className={styles.active_shopNav}>Sklep</p>
          </div>
        )}

        <div className={styles.shopTools_options}>
          {isDesktop && (
            <>
              <div className={styles.shopTools_options_amount}>
                <div>Pokaż</div>
                <div
                  onClick={() => {
                    handlerPageSize('9');
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      handlerPageSize('9');
                    }
                  }}
                  tabIndex={0}
                  role="button"
                >
                  <p
                    className={`${styles.shopTools_options_amount_number} ${
                      productsOnPage === '9' &&
                      styles.shopTools_options_amount_number_active
                    } `}
                  >
                    9
                  </p>
                </div>

                <span>/</span>
                <div
                  onClick={() => {
                    handlerPageSize('12');
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      handlerPageSize('12');
                    }
                  }}
                  tabIndex={0}
                  role="button"
                >
                  <p
                    className={`${styles.shopTools_options_amount_number} ${
                      productsOnPage === '12' &&
                      styles.shopTools_options_amount_number_active
                    } `}
                  >
                    12
                  </p>
                </div>

                <span>/</span>
                <div
                  onClick={() => {
                    handlerPageSize('18');
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      handlerPageSize('12');
                    }
                  }}
                  tabIndex={0}
                  role="button"
                >
                  <p
                    className={`${styles.shopTools_options_amount_number} ${
                      productsOnPage === '18' &&
                      styles.shopTools_options_amount_number_active
                    } `}
                  >
                    18
                  </p>
                </div>

                <span>/</span>
                <div
                  onClick={() => {
                    handlerPageSize('24');
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      handlerPageSize('24');
                    }
                  }}
                  tabIndex={0}
                  role="button"
                >
                  <p
                    className={`${styles.shopTools_options_amount_number} ${
                      productsOnPage === '24' &&
                      styles.shopTools_options_amount_number_active
                    } `}
                  >
                    24
                  </p>
                </div>
              </div>
              <div className={styles.shopTools_options_view}>
                <BsFillGridFill
                  className={`${
                    grid === 2 && styles.shopTools_options_view_active
                  }`}
                  onClick={() => {
                    handlerChangeGrid(2);
                  }}
                />
                <BsFillGrid3X3GapFill
                  className={`${
                    grid === 3 && styles.shopTools_options_view_active
                  }`}
                  onClick={() => {
                    handlerChangeGrid(3);
                  }}
                />
                <TfiLayoutGrid4Alt
                  className={`${
                    grid === 4 && styles.shopTools_options_view_active
                  }`}
                  onClick={() => {
                    handlerChangeGrid(4);
                  }}
                />
              </div>
            </>
          )}
          {!isDesktop && (
            <div
              className={styles.shopTools_options_filtrs}
              onClick={() => {
                setIsFilterMenu(true);
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  setIsFilterMenu(true);
                }
              }}
              tabIndex={0}
              role="button"
            >
              <GiHamburgerMenu />
              <p>Pokaż Filtry</p>
            </div>
          )}
          <div className={styles.shopTools_options_sorting}>
            <select
              name="sort"
              id="sort"
              onChange={(e) => {
                handlerSortByPrice(e.target.value);
                setSortMethod(e.target.value);
              }}
              value={sortMethod}
            >
              <option value="sortuj" disabled>
                Sortuj
              </option>
              <option value="fromMin">Sortuj po cenie od najniższej</option>
              <option value="fromMax">Sortuj po cenie od najwyższej</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopTools;
