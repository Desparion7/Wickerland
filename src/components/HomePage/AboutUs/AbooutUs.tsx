import styles from './AboutUs.module.css';

const AbooutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.aboutUs_box}>
        <h2>Wicker Land Sklep</h2>
        <p>
          WickerLand to firma z wieloletnim doświadczeniem w produkcji i
          sprzedaży wyrobów z wikliny. Od początku swojej działalności stawiamy
          na najwyższą jakość naszych produktów oraz estetykę wykonania. Nasze
          wyroby to nie tylko funkcjonalne akcesoria, ale także elementy
          dekoracyjne, które doskonale komponują się w każdym wnętrzu.
        </p>
      </div>
      <div className={styles.aboutUs_box}>
        <h3>
          Istnieje możliwość wykonania wyrobu na zamówienie, w takim przypadku
          prosimy o kontakt telefoniczny.
        </h3>
        <p>
          Prowadzimy sprzedaż na terenie całego kraju jak i Europy. Zapraszamy
          również osoby zainteresowane długofalową współpracą.
        </p>
        <p>
          W ofercie naszej firmy znajdują się kosze, koszyki, plecionki, donice
          oraz wiele innych wyrobów z wikliny. Wszystkie nasze produkty powstają
          z najlepszej jakości surowców, a ich produkcja odbywa się z
          zachowaniem tradycyjnych metod rzemieślniczych. Dzięki temu mamy
          pewność, że oferujemy klientom produkty, które nie tylko wyglądają
          pięknie, ale także są trwałe i odporne na działanie czynników
          zewnętrznych.
        </p>
      </div>
    </section>
  );
};

export default AbooutUs;
