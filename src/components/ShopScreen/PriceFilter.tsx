import { useState, useEffect, useMemo, FunctionComponent } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './PriceFilter.module.css';

type PriceFilterProps = {
  handlerHideMenu?: () => void;
};

const PriceFilter: FunctionComponent<PriceFilterProps> = ({
  handlerHideMenu,
}: PriceFilterProps) => {
  PriceFilter.defaultProps = {
    handlerHideMenu: () => {},
  };
  const navigate = useNavigate();
  const location = useLocation();
  const { search } = useLocation();
  const memoizedQueryParams = useMemo(
    () => new URLSearchParams(search),
    [search]
  );

  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(2000);

  // Price filter reset when path don't have min  and max price
  useEffect(() => {
    const min = memoizedQueryParams.get('min');
    if (!min) {
      setMinValue(0);
      setMaxValue(2000);
    }
  }, [memoizedQueryParams]);

  const handleSliderChange: (value: number | number[]) => void = (value) => {
    if (Array.isArray(value)) {
      // user
      setMinValue(value[0]);
      setMaxValue(value[1]);
    } else {
      // value is a single number, which means the user clicked on one of the dots
      const middle = (maxValue - minValue) / 2;
      if (value < middle) {
        setMinValue(value);
      } else {
        setMaxValue(value);
      }
    }
  };

  const handlerPriceFilter = () => {
    memoizedQueryParams.set('min', minValue.toString());
    memoizedQueryParams.set('max', maxValue.toString());

    const newSearch = memoizedQueryParams.toString();

    navigate({
      pathname: location.pathname,
      search: newSearch,
    });
    // component is used at desktop and mobile. On mobile must close slider menu
    if (handlerHideMenu) {
      handlerHideMenu();
    }
  };

  return (
    <div className={styles.priceFilter}>
      <div className={styles.priceFilter_name}>Filtruj po cenie</div>
      <div className={styles.priceFilter_slider}>
        <Slider
          min={0}
          max={2000}
          range
          allowCross={false}
          value={[minValue, maxValue]}
          onChange={handleSliderChange}
          railStyle={{ backgroundColor: '#ddd' }}
          handleStyle={[
            {
              backgroundColor: '#70a01f',
              borderColor: '#108ee9',
              borderRadius: '0',
              width: '8px',
              height: '20px',
              border: 'none',
              marginTop: '-8px',
              opacity: '1',
              boxShadow: 'none',
            },
            {
              backgroundColor: '#70a01f',
              borderColor: '#108ee9',
              borderRadius: '0',
              width: '8px',
              height: '20px',
              border: 'none',
              marginTop: '-8px',
              opacity: '1',
              boxShadow: 'none',
            },
          ]}
          dotStyle={{
            backgroundColor: '#70a01f',
            borderColor: '#108ee9',
          }}
          activeDotStyle={{
            backgroundColor: '#70a01f',
            borderColor: '#70a01f',
          }}
          trackStyle={{ backgroundColor: '#70a01f' }}
        />
      </div>
      <div className={styles.priceFilter_value}>
        <div className={styles.priceFilter_value_range}>
          <p>Cena:</p>
          <p>{minValue} zł</p>
          <span>-</span>
          <p>{maxValue} zł</p>
        </div>
        <button onClick={handlerPriceFilter} type="button">
          Filtruj
        </button>
      </div>
    </div>
  );
};

export default PriceFilter;
