import { useState } from 'react';
import styles from './HomePageProducts.module.css';
import ProductPreview from '../../ProductPreview/ProductPreview';
import { homeBasket, homeChest, homeFurniture } from '../../../db/homePage';

const HomePageProducts = () => {
  const [activeProducts, setActiveProducts] = useState<string>('koszyki');

  return (
    <div className={styles.homepage_products}>
      <div className={styles.homepage_products_titles}>
        <div
          onClick={() => {
            setActiveProducts('koszyki');
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              setActiveProducts('koszyki');
            }
          }}
          tabIndex={0}
          role="button"
        >
          <h3 className={`${activeProducts === 'koszyki' && styles.active}`}>
            Koszyki
          </h3>
        </div>

        <div
          onClick={() => {
            setActiveProducts('pojemniki');
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              setActiveProducts('pojemniki');
            }
          }}
          tabIndex={0}
          role="button"
        >
          <h3 className={`${activeProducts === 'pojemniki' && styles.active}`}>
            Pojemniki
          </h3>
        </div>

        <div
          onClick={() => {
            setActiveProducts('meble');
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              setActiveProducts('meble');
            }
          }}
          tabIndex={0}
          role="button"
        >
          <h3 className={`${activeProducts === 'meble' && styles.active}`}>
            Meble
          </h3>
        </div>
      </div>

      <div className={styles.homepage_products_box}>
        {activeProducts === 'koszyki' &&
          homeBasket.map((product) => (
            <ProductPreview key={product.pid} grid={4} product={product} />
          ))}
        {activeProducts === 'meble' &&
          homeFurniture.map((product) => (
            <ProductPreview key={product.pid} grid={4} product={product} />
          ))}
        {activeProducts === 'pojemniki' &&
          homeChest.map((product) => (
            <ProductPreview key={product.pid} grid={4} product={product} />
          ))}
      </div>
    </div>
  );
};

export default HomePageProducts;
