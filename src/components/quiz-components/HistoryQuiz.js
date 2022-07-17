import React, { useState } from 'react'
import "../../styles/QuestionCompOne.css"
import { Link } from 'react-router-dom'
import { HistoryData } from '../Data'
const HistoryQuiz = () => {

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < HistoryData.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='questions'>
			<div className='question-comp'>
				{showScore ? (
					<>
					<div className='score-section'>
					<Link to='/' className='text-decoration-none'><button className='back-to-home'> <i className="fa-solid fa-arrow-left me-3"></i> Back To Home </button></Link> 

				<p className='result '>Your Result</p>
						<p className='score' >Your IQ is {score / 20 * 100}  </p>
						<p className='score-details'>In this test You have answered {score} correct answers from  {HistoryData.length} </p>
						<div className=''>
							<h3 className='mt-3 mb-2'  >Books Quiz</h3>
							<p className='mt-3 mb-1' >Play Popular Quizs online without instalation</p>
							<div className='return-links'>
								<Link to='/films' className='text-decoration-none' >Entertainment Films</Link>
								<Link to='/quiz-home' className='text-decoration-none'><button className='retake ps-3 pe-5'> <i className="fa-solid fa-rotate-right  ps-2 pe-2 me-2 ms-3"></i> Tetake</button></Link> 

							</div>
							<div className='share'>
								<strong className='pb-2 pt-1'>Share Result</strong>
								<ul className='share-icons'>
									<li ><a href="https://whatsapp.com" target='_blank'><i className="fa-brands fa-whatsapp"></i></a> </li>
									<li ><a href="https://twitter.com" target='_blank'><i className="fa-brands fa-twitter"></i></a> </li>
									<li ><a href="https://facebook.com" target='_blank'><i className="fa-brands fa-facebook"></i></a> </li>
									<li ><a href="https://telegram.com" target='_blank'><i className="fa-brands fa-telegram"></i></a> </li>
									<li ><a href="https://pinterest.com" target='_blank'><i className="fa-brands fa-pinterest"></i></a> </li>

								</ul>
							</div>
						</div>
					</div>
					</>
				) : (
					<>
						<div className='question-section'>
						<Link to='/quiz-home' className='text-decoration-none'><button className='return-to-home'> <i className="fa-solid fa-arrow-left me-3"></i> Back To Home </button></Link> 

							<div className='question-count'>
								<span>Question {currentQuestion + 1}</span>/{HistoryData.length}
							</div>
							<div className='question-text'>{HistoryData[currentQuestion].questionText}</div>
						</div>
						<div className='answer-section'>
							{HistoryData[currentQuestion].answerOptions.map((answerOption) => (
								<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
							))}
						</div>
					</>
				)}
			</div>
		</div>
	);
}
export default HistoryQuiz