import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './MoreAboutProduct.module.css';

interface PropsType {
  description: string | undefined;
  parameters: any;
}

const MoreAboutProduct = ({ parameters, description }: PropsType) => {
  const [activeProducts, setActiveProducts] = useState<string>('opis');

  // a function to organize product parameters( split it )
  const parametersList = parameters.map((objekt: string) => {
    const feature = Object.keys(objekt)[0];
    const value = Object.values(objekt)[0];
    return (
      <div key={feature} className={styles.parameters}>
        <div>{feature}:</div>
        <div>{value}</div>
      </div>
    );
  });

  return (
    <div className={styles.aboutProduct}>
      <div className={styles.aboutProduct_options}>
        <div
          onClick={() => {
            setActiveProducts('opis');
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              setActiveProducts('opis');
            }
          }}
          tabIndex={0}
          role="button"
        >
          <p className={`${activeProducts === 'opis' && styles.active}`}>
            Opis
          </p>
        </div>

        <div
          onClick={() => {
            setActiveProducts('dane techniczne');
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              setActiveProducts('dane techniczne');
            }
          }}
          tabIndex={0}
          role="button"
        >
          <p
            className={`${
              activeProducts === 'dane techniczne' && styles.active
            }`}
          >
            Dane techniczne
          </p>
        </div>
        <div
          onClick={() => {
            setActiveProducts('opinie');
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              setActiveProducts('opinie');
            }
          }}
          tabIndex={0}
          role="button"
        >
          <p className={`${activeProducts === 'opinie' && styles.active}`}>
            Opinie
          </p>
        </div>
        <div
          onClick={() => {
            setActiveProducts('koszty wysyłki');
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              setActiveProducts('koszty wysyłki');
            }
          }}
          tabIndex={0}
          role="button"
        >
          <p
            className={`${
              activeProducts === 'koszty wysyłki' && styles.active
            }`}
          >
            Koszty wysyłki
          </p>
        </div>
      </div>
      <div className={styles.aboutProduct_options_text}>
        {activeProducts === 'opis' && <div>{description}</div>}
        {activeProducts === 'dane techniczne' && <div>{parametersList}</div>}
        {activeProducts === 'opinie' && (
          <div className={styles.aboutProduct_options_text_opinions}>
            <div>Aktualnie produkt nie posiada wystawionych opinii.</div>
            <div>
              Aby dodać opinie musisz się <Link to="/login">zalogować</Link>.
            </div>
          </div>
        )}
        {activeProducts === 'koszty wysyłki' && (
          <div className={styles.aboutProduct_options_text_delivery}>
            <div>
              <p>Kurier Pocztex:</p>
              <p>Kurier pobranie, Pocztex:</p>
            </div>
            <div>
              <p>29,00 zł</p>
              <p>39,00 zł</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoreAboutProduct;
