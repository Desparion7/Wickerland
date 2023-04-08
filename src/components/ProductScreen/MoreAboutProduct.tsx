import styles from './MoreAboutProduct.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface PropsType {
	description: string | undefined;
	parameters: any;
}

const MoreAboutProduct = ({ parameters, description }: PropsType) => {
	const [activeProducts, setActiveProducts] = useState<string>('opis');

	// a function to organize product parameters( split it )
	const parametersList = parameters.map((objekt: string, index: number) => {
		const feature = Object.keys(objekt)[0];
		const value = Object.values(objekt)[0];
		return (
			<div key={index} className={styles.parameters}>
				<div>{feature}:</div>
				<div>{value}</div>
			</div>
		);
	});

	return (
		<div className={styles.aboutProduct}>
			<div className={styles.aboutProduct_options}>
				<p
					className={`${activeProducts === 'opis' && styles.active}`}
					onClick={() => {
						setActiveProducts('opis');
					}}
				>
					Opis
				</p>
				<p
					className={`${activeProducts === 'dane techniczne' && styles.active}`}
					onClick={() => {
						setActiveProducts('dane techniczne');
					}}
				>
					Dane techniczne
				</p>
				<p
					className={`${activeProducts === 'opinie' && styles.active}`}
					onClick={() => {
						setActiveProducts('opinie');
					}}
				>
					Opinie
				</p>
				<p
					className={`${activeProducts === 'koszty wysyłki' && styles.active}`}
					onClick={() => {
						setActiveProducts('koszty wysyłki');
					}}
				>
					Koszty wysyłki
				</p>
			</div>
			<div className={styles.aboutProduct_options_text}>
				{activeProducts === 'opis' && <div>{description}</div>}
				{activeProducts === 'dane techniczne' && <div>{parametersList}</div>}
				{activeProducts === 'opinie' && (
					<div className={styles.aboutProduct_options_text_opinions}>
						<div>Aktualnie produkt nie posiada wystawionych opinii.</div>
						<div>
							Aby dodać opinie musisz się <Link to='/login'>zalogować</Link>.
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
