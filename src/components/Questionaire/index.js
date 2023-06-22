import Loading from "../Loading";
import Welcome from "../Welcome";
import Quiz from "../Quiz";
import Score from "../Score";
import { useState, useEffect } from "react";
import QuizApi from "../../services/quiz-api";

export default function Questionaire() {
	const [page, setPage] = useState("welcome");
	const [quiz, setQuiz] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const quizId = localStorage.getItem('quizId')

		if (quizId) {
			QuizApi.getQuiz(quizId).then((quiz) => {
				setQuiz(quiz)
				if (quiz.state === 'completed') {
					setPage('score')
					setLoading(false)
				} else {
					setPage('quiz')
					setLoading(false)
				}
			})
		} else {
			setLoading(false)
		}
	}, [])

	const start = async () => {
		// store quiz id in cookies?
		const apiQuiz = await QuizApi.createQuiz()
		localStorage.setItem('quizId', apiQuiz.id)
		setQuiz(apiQuiz)
		setPage("quiz")
	}

	const next = async (answer) => {
		const apiQuiz = await QuizApi.answerQuestion(quiz.id, answer)
		setQuiz(apiQuiz)
		if (apiQuiz.state === 'completed') {
			setPage('score')
		}
	}

	const restart = () => {
		localStorage.removeItem('quizId')
		setPage("welcome")
	}

	if (loading) {
		return <Loading />
	}

	return (
		<div>
			{page === 'welcome' && (<Welcome start={start} />)}
			{page === 'quiz' && (<Quiz quiz={quiz} next={next} />)}
			{page === 'score' && (<Score quiz={quiz} restart={restart} />)}
		</div>
	);
}
