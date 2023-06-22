import Welcome from "../Welcome";
import Quiz from "../Quiz";
import Score from "../Score";
import { useState, useEffect } from "react";
import QuizApi from "../../services/quiz-api";

export default function Questionaire() {
	const [page, setPage] = useState("welcome");
	const [quiz, setQuiz] = useState(null);

	useEffect(() => {
		const quizId = localStorage.getItem('quizId')

		if (quizId) {
			QuizApi.getQuiz(quizId).then((quiz) => {
				setQuiz(quiz)
				if (quiz.state === 'completed') {
					setPage('score')
				} else {
					setPage('quiz')
				}
			})
		}
	}, [])

	const start = () => {
		// store quiz id in cookies?
		QuizApi.createQuiz().then((quiz) => {
			localStorage.setItem('quizId', quiz.id)
			setQuiz(quiz)
			setPage("quiz")
		})
	}

	const next = (answer) => {
		QuizApi.answerQuestion(quiz.id, answer).then((quiz) => {
			setQuiz(quiz)
			if (quiz.state === 'completed') {
				setPage('score')
			}
		})
	}

	const reset = () => {
		localStorage.removeItem('quizId')
		setPage("welcome")
	}

	return (
		<div>
			{page === 'welcome' && (<Welcome start={start} />)}
			{page === 'quiz' && (<Quiz quiz={quiz} next={next} />)}
			{page === 'score' && (<Score quiz={quiz} reset={reset} />)}
		</div>
	);
}
