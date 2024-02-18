import React, { useRef } from 'react';
const Answers = ({ answers, selectedAnswer, currentAnswerState, onSelect }) => {
	const shuffledAnswersRef = useRef;

	if (!shuffledAnswersRef.current) {
		shuffledAnswersRef.current = [...answers];
		shuffledAnswersRef.current.sort(() => Math.random() - 0.5);
	}
	return (
		<>
			<ul id='answers'>
				{shuffledAnswersRef.current.map((answer) => {
					const isSelected = selectedAnswer === answer;
					let cssClass = '';
					if (currentAnswerState === 'answered' && isSelected) {
						cssClass = 'selected';
					}

					if (
						(currentAnswerState === 'correct' ||
							currentAnswerState === 'wrong') &&
						isSelected
					) {
						cssClass = currentAnswerState;
					}

					return (
						<li key={answer} className='answer'>
							<button
								onClick={() => onSelect(answer)}
								className={cssClass}
								disabled={currentAnswerState !== ''}
							>
								{answer}
							</button>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Answers;
