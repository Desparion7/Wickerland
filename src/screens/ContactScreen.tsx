import styles from './ContactScreen.module.css';
import CollapseQuestion from '../components/ContactScreen/CollapseQuestion';
import { useState } from 'react';
import ContactForm from '../components/ContactScreen/ContactForm';

const ContactScreen = () => {
	const [active, setActive] = useState('0');

	return (
		<div className={styles.contactScreen}>
			<div className={styles.contactScreen_map}>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6043.470643885376!2d22.22662552429507!3d50.44172650816605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cd694f76be34d%3A0x44700f1059ef4ad4!2s%C5%BBwirki%20i%20Wigury%2032%2C%2037-420%20Rudnik%20nad%20Sanem!5e0!3m2!1spl!2spl!4v1680186585805!5m2!1spl!2spl'
					width='600'
					height='450'
					allowFullScreen={true}
					loading='lazy'
				></iframe>
				<div className={styles.contactScreen_map_address}>
					<h2>WickerLand</h2>
					<p>Ul. Żwirki i Wigury 32</p>
					<p>37-420 Rudnik nad Sanem</p>
					<p>Tel: 723 930 427</p>
					<p>NIP: 6020140463</p>
					<p>REGON: 386132722</p>
				</div>
			</div>
			<div className={styles.contactScreen_contact}>
				<div className={styles.contactScreen_contact_questions}>
					<h3>Najczęściej zadawane pytania?</h3>
					<CollapseQuestion
						id={'1'}
						setActive={setActive}
						active={active}
						question={
							'Czy otrzymam ten sam produkt jaki jest widoczny na zdjęciu?'
						}
						answer={`Staramy się, aby wszystkie nasze produkty były jak najbardziej
							zgodne z tym, co widzisz na zdjęciu, ale musisz pamiętać, że
							nasze wyroby są wykonane ręcznie z wikliny, co może wprowadzać
							pewne niewielkie różnice w wyglądzie produktu. Mimo to,
							zapewniamy Cię, że każdy produkt jest starannie wykonany z
							najlepszych materiałów i zgodny z naszymi standardami jakości.`}
					/>
					<CollapseQuestion
						id={'2'}
						setActive={setActive}
						active={active}
						question={'Czy otrzymam dokument zakupu?'}
						answer={`Tak, jesteśmy w pełni legalnie działającą firmą. Jesteśmy
							również zwolnieni z Vatu. Twoim dokumentem będzie Faktura z
							informacją o zwolnieniu z Vatu.`}
					/>
					<CollapseQuestion
						id={'3'}
						setActive={setActive}
						active={active}
						question={'Jak mogę zwrócić zakupiony przedmiot?'}
						answer={`Jako osoba prywatna masz prawo zwrócić zakupiony produkt w ciągu
							14 dni od daty zakupu.`}
					/>
					<CollapseQuestion
						id={'4'}
						setActive={setActive}
						active={active}
						question={'Czy stany magazynowe są aktualne?'}
						answer={`Nasze stany magazynowe są aktualizowane raz na 24h. Niestety
							czasami może zdarzyć się tak, że produkt zostanie wysprzedany a
							stany nie zdążą się zaktualizować. W przypadku takiej sytuacji
							zostanie Państwo powiadomieni o braku produktu w ciągu 24 godzin
							od daty zakupu (nie wliczając weekendów.)`}
					/>
				</div>
				<ContactForm />
			</div>
		</div>
	);
};

export default ContactScreen;

