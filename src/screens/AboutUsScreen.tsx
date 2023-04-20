import styles from './AboutUsScreen.module.css';

const AboutUsScreen = () => {
  return (
    <section className={styles.aboutUsScreen}>
      <div className={styles.aboutUsScreen_quote}>
        <h2>WickerLand</h2>
        <p>
          &ldquo;Nie na dębach niszczą się siły drwali, ale na gałązkach
          wikliny.&rdquo; ~ J. Giraudoux ~
        </p>
      </div>
      <div className={styles.aboutUsScreen_processBox}>
        <div className={styles.aboutUsScreen_processBox_img}>
          <img src="./aboutus1.PNG" alt="zbiory wierzby" />
        </div>
        <div>
          <p className={styles.aboutUsScreen_processBox_subtitle}>Zbiory</p>
          <p className={styles.aboutUsScreen_processBox_text}>
            W naszym sklepie WickerLand specjalizujemy się w sprzedaży produktów
            zrobionych z wikliny. Materiał, z którego wytwarzamy nasze produkty,
            pochodzi z polskich plantacji wierzby, gdzie rośnie ona w naturalnym
            środowisku. Kiedy nadchodzi czas zbioru, do pracy zabierają się
            wykwalifikowani pracownicy, którzy wycinają gałęzie zgodnie z
            zasadami dbałości o środowisko. Następnie, w procesie suszenia,
            gałęzie stają się gotowe do dalszej obróbki.
          </p>
        </div>
      </div>
      <div className={styles.aboutUsScreen_processBox}>
        <div className={styles.aboutUsScreen_processBox_img}>
          <img src="./aboutus2.PNG" alt="plecienie koszyka" />
        </div>
        <div>
          <p className={styles.aboutUsScreen_processBox_subtitle}>Produkcja</p>
          <p className={styles.aboutUsScreen_processBox_text}>
            Proces produkcji naszych produktów z wikliny jest długi i wymaga
            wiele umiejętności. Nasze wyroby są ręcznie robione przez naszych
            doświadczonych rzemieślników, którzy przetwarzają materiał w piękne,
            funkcjonalne przedmioty. Podczas procesu produkcji wykorzystujemy
            tradycyjne techniki, takie jak plecionka, tkanie czy formowanie, co
            pozwala nam osiągnąć różnorodność kształtów i wzorów.
          </p>
        </div>
      </div>
      <div className={styles.aboutUsScreen_processBox}>
        <div className={styles.aboutUsScreen_processBox_img}>
          <img
            src="./aboutus3.PNG"
            alt="koszyki wiklinowe poskładane na sobie"
          />
        </div>
        <div>
          <p className={styles.aboutUsScreen_processBox_subtitle}>Oferta</p>
          <p className={styles.aboutUsScreen_processBox_text}>
            W naszym sklepie WickerLand oferujemy szeroki wybór gotowych
            produktów z wikliny. Nasza oferta obejmuje kosze na różne okazje,
            meble ogrodowe, dekoracje, wianki oraz wiele innych produktów. Nasze
            produkty charakteryzują się wysoką jakością i wyjątkowym designem,
            co sprawia, że są one nie tylko piękne, ale także funkcjonalne.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsScreen;
