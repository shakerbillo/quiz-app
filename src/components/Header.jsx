import React from 'react';
import quizLogo from '../assets/quiz-logo.png';


const Header = () => {
	return (
		<>
			<header>
				<img src={quizLogo} alt='quiz logo' />
				<h1>ReactQuiz</h1>
			</header>
			
		</>
	);
};

export default Header;
