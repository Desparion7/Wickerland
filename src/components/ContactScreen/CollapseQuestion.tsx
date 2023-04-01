import styles from './CollapseQuestion.module.css';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import { useRef } from 'react';

interface PropsType {
	setActive: React.Dispatch<React.SetStateAction<string>>;
	active: string;
	id: string;
	question: string;
	answer: string;
}

const CollapseQuestion = ({
	id,
	active,
	setActive,
	question,
	answer,
}: PropsType) => {
	const questionRef = useRef<HTMLDivElement>(null);

	const handleCollapse = () => {
		if (active === id) {
			setActive('0');
		} else {
			setActive(id);
		}
	};

	return (
		<div className={styles.collapseQuestio}>
			<div
				className={styles.collapseQuestio_question}
				onClick={() => {
					handleCollapse();
				}}
			>
				<p
					className={`${
						active === id && styles.collapseQuestio_question_active
					}`}
				>
					{question}
				</p>
				{active === id ? <SlArrowUp /> : <SlArrowDown />}
			</div>
			<div
				className={`${styles.collapseQuestio_answear}`}
				ref={questionRef}
				style={
					active === id && questionRef.current
						? {
								height: questionRef.current.scrollHeight + 'px',
						  }
						: { height: '0px' }
				}
			>
				<p>{answer}</p>
			</div>
		</div>
	);
};

export default CollapseQuestion;
