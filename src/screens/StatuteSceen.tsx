import styles from './Statute.module.css';

const StatuteSceen = () => {
	return (
		<section className={styles.statute}>
			<h2>Regulamin sklepu internetowego</h2>
			<p>
				Określający m.in. zasady zawierania umów sprzedaży poprzez Sklep,
				zawierający najważniejsze informacje o Sprzedawcy, Sklepie oraz o
				prawach Konsumenta
			</p>
			<p>
				Postanowienia dotyczące Przedsiębiorcy uprzywilejowanegomają
				zastosowanie do umów zawartych od dnia 1 stycznia 2023r.
			</p>
			<h2>§ 1 DEFINICJE</h2>
			<div className={styles.statute_box}>
				<div>
					Dni robocze - dni od poniedziałku do piątku za wyjątkiem dni ustawowo
					wolnych od pracy.
				</div>
				<div>
					Konsument - konsument w rozumieniu przepisów Kodeksu cywilnego.
				</div>
				<div>
					Konto - uregulowana odrębnym regulaminem nieodpłatna funkcja Sklepu
					(usługa świadczona drogą elektroniczną), dzięki której Kupujący może
					założyć w Sklepie swoje indywidualne konto
				</div>
				<div>Kupujący - każdy podmiot kupujący w Sklepie.</div>
				<div>
					Kupujący uprzywilejowany - Konsument lub Przedsiębiorca
					uprzywilejowany.
				</div>
				<div>
					Przedsiębiorca uprzywilejowany - osoba fizyczna zawierająca ze
					Sprzedawcą umowę bezpośrednio związaną z jej działalnością
					gospodarczą, ale nieposiadającą dla niej charakteru zawodowego
					(definicja obowiązuje dla umów zawartych od dnia 1 stycznia 2023 r.).
				</div>
				<div>Regulamin - niniejszy regulamin.</div>
				<div>
					Sklep - sklep internetowy WickerLand- Sklep dla ludzi kochających
					buhcraft znajduje się pod adresem https://wickerland.pl
				</div>
				<div>
					Sprzedawca - Piotr Szabat, przedsiębiorca prowadzący działalność
					nierejestrowaną pod nazwą Wickerland,
				</div>
			</div>
			<h2>§ 2 KONTAKT ZE SPRZEDAWCĄ</h2>
			<div className={styles.statute_box}>
				<div>1. WickerLand Ul. Żwirki i Wigury 32, 37-420 Rudnik nad Sanem</div>
				<div>2. Adres e-mail: kontakt@wickerland.pl</div>
				<div>3. Tel. 723 930 427l</div>
			</div>
			<h2>§ 3 WYMOGI TECHNICZNE</h2>
			<div className={styles.statute_box}>
				<div>
					1. Dla prawidłowego funkcjonowania Sklepu potrzebne jest: urządzenie z
					dostępem do Internetu oraz przeglądarka internetowa obsługująca
					JavaScript oraz pliki cookies.
				</div>
				<div>
					2. Dla złożenia zamówienia w Sklepie, poza wymogami określonymi w ust.
					1, niezbędne jest aktywne konto e-mail.
				</div>
			</div>
			<h2>§ 4 ZAKUPY W SKLEPIE</h2>
			<div className={styles.statute_box}>
				<div>
					1. Ceny towarów widoczne w Sklepie są całkowitymi cenami za towar.
				</div>
				<div>
					2. Sprzedawca zwraca uwagę, że na całkowitą cenę zamówienia składają
					się wskazane w Sklepie: cena za towar oraz, jeśli w danym przypadku ma
					to zastosowanie, koszty dostawy towaru.
				</div>
				<div>
					3. Wybrany do kupienia towar należy dodać do koszyka w Sklepie.
				</div>
				<div>
					4. Następnie Kupujący wybiera z dostępnych w Sklepie: sposób dostawy
					towaru oraz metodę płatności za zamówienie, a także podaje dane
					niezbędne do zrealizowania złożonego zamówienia.
				</div>
				<div>
					5. Zamówienie zostaje złożone w momencie potwierdzenia jego treści i
					zaakceptowania Regulaminu przez Kupującego.
				</div>
				<div>
					6. Złożenie zamówienia jest tożsame z zawarciem umowy sprzedaży
					pomiędzy Kupującym a Sprzedawcą.
				</div>
				<div>
					7. Sprzedawca przekaże Kupującemu uprzywilejowanemu potwierdzenie
					zawarcia umowy sprzedaży na trwałym nośniku najpóźniej w momencie
					dostarczenia towaru.
				</div>
				<div>
					8. Kupujący może zarejestrować się w Sklepie, tj. założyć w nim Konto,
					lub dokonywać zakupów bez rejestracji poprzez podawanie swoich danych
					przy każdym ewentualnym zamówieniu.
				</div>
			</div>
			<h2>§ 5 PŁATNOŚCI</h2>
			<div className={styles.statute_box}>
				<div>
					1. Za złożone zamówienie można zapłacić, w zależności od wyboru
					Kupującego
				</div>
				<div>
					2. W przypadku wybrania przez Kupującego płatności z góry, za
					zamówienie należy zapłacić w terminie 3 Dni roboczych od złożenia
					zamówienia.
				</div>
				<div>
					3. Sprzedawca informuje, że w przypadku niektórych metod płatności, ze
					względu na ich specyfikę, opłacenie zamówienia tą metodą jest możliwe
					wyłącznie bezpośrednio po złożeniu zamówienia.
				</div>
				<div>
					4. Kupujący dokonując zakupów w Sklepie akceptuje stosowanie faktur
					elektronicznych przez Sprzedawcę. Kupujący ma prawo wycofać swoją
					akceptację.
				</div>
			</div>
			<h2>§ 6 REALIZACJA ZAMÓWIENIA</h2>
			<div className={styles.statute_box}>
				<div>1. Sprzedawca jest obowiązany do dostarczenia towaru bez wad.</div>
				<div>2. Termin realizacji zamówienia wskazany jest w Sklepie.</div>
				<div>
					3. W przypadku, gdy Kupujący wybrał płatność z góry za zamówienie,
					Sprzedawca przystąpi do realizacji zamówienia po jego opłaceniu.
				</div>
				<div>
					4. W sytuacji, gdy w ramach jednego zamówienia Kupujący zakupił towary
					o różnym terminie realizacji, zamówienie zostanie zrealizowane w
					terminie właściwym dla towaru o najdłuższym terminie.
				</div>
				<div>
					5. Towar dostarczany jest wyłącznie na terytorium Rzeczypospolitej
					Polskiej.
				</div>
				<div>
					6. Towary zakupione w Sklepie dostarczane są w zależności od tego jaką
					metodę dostawy wybrał Kupujący
				</div>
			</div>
			<h2>§ 7 PRAWO ODSTĄPIENIA OD UMOWY</h2>
			<div className={styles.statute_box}>
				<div>
					1. Kupujący uprzywilejowany ma prawo odstąpić od umowy zawartej ze
					Sprzedawcą za pośrednictwem Sklepu, z zastrzeżeniem § 8 Regulaminu, w
					terminie 14 dni bez podania jakiejkolwiek przyczyny.
				</div>
				<div>
					2. Termin do odstąpienia od umowy wygasa po upływie 14 dni od dnia w
					którym Kupujący uprzywilejowany wszedł w posiadanie towaru
				</div>
				<div>
					3. Aby Kupujący uprzywilejowany mógł skorzystać z prawa odstąpienia od
					umowy musi poinformować Sprzedawcę, korzystając z danych podanych w §
					2 Regulaminu, o swojej decyzji o odstąpieniu od umowy w drodze
					jednoznacznego oświadczenia (na przykład pismo wysłane pocztą lub
					informacja przekazana pocztą elektroniczną).
				</div>
			</div>
			<h2>§ 8 WYJĄTKI OD PRAWA ODSTĄPIENIA OD UMOWY</h2>
			<div className={styles.statute_box}>
				<div>
					1. Prawo odstąpienia od umowy zawartej na odległość, o którym mowa w §
					7 Regulaminu, nie przysługuje w odniesieniu do umowy w której
					przedmiotem świadczenia jest rzecz nieprefabrykowana, wyprodukowana
					według specyfikacji Kupującego uprzywilejowanego lub służąca
					zaspokojeniu jego zindywidualizowanych potrzeb;
				</div>
			</div>
			<h2>§ 9 REKLAMACJE</h2>
			<div className={styles.statute_box}>
				<div>
					1. W przypadku wystąpienia wady towaru Konsument ma możliwość
					reklamowania wadliwego towaru na podstawie uregulowanej w Kodeksie
					cywilnym rękojmi lub gwarancji, o ile gwarancja została udzielona.
				</div>
				<div>
					2. Korzystając z rękojmi Konsument może, na zasadach oraz w terminach
					określonych w Kodeksie cywilnym
				</div>
				<div>
					3. Sprzedawca prosi o składanie reklamacji na podstawie rękojmi na
					adres pocztowy lub elektroniczny wskazany w § 2 Regulaminu.
				</div>
			</div>
			<h2>§ 10 DANE OSOBOWE</h2>
			<div className={styles.statute_box}>
				<div>
					1. Administratorem danych osobowych przekazanych przez Kupującego
					podczas korzystania ze Sklepu jest Sprzedawca. Szczegółowe informacje
					dotyczące przetwarzania danych osobowych przez Sprzedawcę - w tym o
					pozostałych celach oraz podstawach przetwarzania danych, a także o
					odbiorcach danych - znajdują się w dostępnej w Sklepie Polityce
					prywatności - ze względu na zasadę przejrzystości, zawartą w ogólnym
					rozporządzeniu Parlamentu Europejskiego i Rady (UE) o ochronie danych
					- „RODO”.
				</div>
				<div>
					2. Celem przetwarzania danych Kupującego przez Sprzedawcę, podanych
					przez Kupującego w związku z zakupami w Sklepie, jest realizacja
					zamówień.
				</div>
				<div>
					3. Podanie danych przez Kupującego jest dobrowolne, ale jednocześnie
					konieczne do zawarcia umowy sprzedaży. Niepodanie danych uniemożliwi
					zawarcie umowy sprzedaży w Sklepie.
				</div>
				<div>
					4. W celu realizacji swoich praw, Kupujący powinien skontaktować się
					ze Sprzedawcą przy wykorzystaniu danych z § 2 Regulaminu.
				</div>
			</div>
			<h2>§ 11 ZASTRZEŻENIA</h2>
			<div className={styles.statute_box}>
				<div>
					1. Zakazane jest dostarczanie przez Kupującego treści o charakterze
					bezprawnym.
				</div>
				<div>
					2. Każdorazowo składane w Sklepie zamówienie stanowi odrębną umowę
					sprzedaży i wymaga osobnej akceptacji Regulaminu. Umowa zawierana jest
					na czas i w celu realizacji zamówienia.
				</div>
				<div>
					3. W przypadku ewentualnego sporu z Kupującym niebędącym Kupującym
					uprzywilejowanym, sądem właściwym będzie sąd właściwy dla siedziby
					Sprzedawcy.
				</div>
				<div>
					4. Umowy zawierane na podstawie Regulaminu zawierane są w języku
					polskim.
				</div>
			</div>
		</section>
	);
};

export default StatuteSceen;
