import styles from './CollapseQuestion.module.css';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import { useState } from 'react';

interface PropsType {
	id: number;
	question: string;
	answer: string;
}

const CollapseQuestion = ({ id, question, answer }: PropsType) => {
	const [toggle, setToggle] = useState(false);

	const handleCollapse = () => {
		const collapses = document.querySelectorAll(
			'[class*="collapseQuestio_answear"]'
		);
		collapses.forEach((item) => {
			item.classList.remove('show');
			console.log(item);
		});
	};

	return (
		<div className={styles.collapseQuestio}>
			<div
				className={styles.collapseQuestio_question}
				onClick={() => {
					handleCollapse();
				}}
			>
				<p className={`${toggle && styles.collapseQuestio_question_active}`}>
					Czy otrzymam ten sam produkt jaki jest widoczny na zdjęciu?
				</p>
				{toggle ? <SlArrowUp /> : <SlArrowDown />}
			</div>
			<div className={styles.collapseQuestio_answear}>
				<p>
					Staramy się, aby wszystkie nasze produkty były jak najbardziej zgodne
					z tym, co widzisz na zdjęciu, ale musisz pamiętać, że nasze wyroby są
					wykonane ręcznie z wikliny, co może wprowadzać pewne niewielkie
					różnice w wyglądzie produktu. Mimo to, zapewniamy Cię, że każdy
					produkt jest starannie wykonany z najlepszych materiałów i zgodny z
					naszymi standardami jakości.
				</p>
			</div>
		</div>
	);
};

export default CollapseQuestion;
