import styles from './PolicyScreen.module.css';

const PolicyScreen = () => {
	return (
		<section className={styles.policy}>
			<h2>Drogi Użytkowniku!</h2>
			<p>
				Dbamy o Twoją prywatność i chcemy, abyś w czasie korzystania z naszych
				usług czuł się komfortowo. Dlatego też poniżej prezentujemy Ci
				najważniejsze informacje o zasadach przetwarzania przez nas Twoich
				danych osobowych oraz plikach cookies, które są wykorzystywane przez
				nasz Sklep. Informacje te zostały przygotowane z uwzględnieniem RODO,
				czyli ogólnego rozporządzenia o ochronie danych.
			</p>
			<h2>ADMINISTRATOR DANYCH OSOBOWYCH</h2>
			<p>
				Piotr Szabat, przedsiębiorca prowadzący działalność nierejestrowaną pod
				nazwą Wickerland o, , NIP 6020140463 ul. Żwirki i Wigury 32, 37-420
				Rudnik nad Sanem Chcesz skontaktować się z nami w związku z
				przetwarzaniem przez nas Twoich danych osobowych, napisz do nas na adres
				e-mail: kontakt@wickerland.pl
			</p>
			<h2>TWOJE UPRAWNIENIA</h2>
			<div>Przysługuje Ci prawo żądania:</div>
			<div>
				1. dostępu do Twoich danych osobowych, w tym uzyskania kopii Twoich
				danych (art. 15 RODO lub - jeśli ma to zastosowanie - art. 13 ust. 1
				lit. f RODO),
			</div>
			<div>2. ich sprostowania (art. 16 RODO),</div>
			<div>3. usunięcia (art. 17 RODO),</div>
			<div>4. ograniczenia przetwarzania (art. 18 RODO),</div>
			<div>
				5. przeniesienia danych do innego administratora (art. 20 RODO).
			</div>
			<div>
				6. wniesienia w dowolnym momencie sprzeciwu wobec przetwarzania Twoich
				danych
			</div>
			<div>
				Skontaktuj się z nami, jeśli chcesz skorzystać ze swoich praw. Sprzeciw
				w odniesieniu do wykorzystywania przez nas plików cookies (o których
				przeczytasz poniżej) możesz wyrazić zwłaszcza za pomocą odpowiednich
				ustawień przeglądarki.
			</div>
			<div>
				Jeśli uznasz, że Twoje dane są przetwarzane niezgodnie z prawem, możesz
				złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych.
			</div>
		</section>
	);
};

export default PolicyScreen;
