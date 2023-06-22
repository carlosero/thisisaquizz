import Welcome from "../Welcome";
import Quiz from "../Quiz";
import Score from "../Score";
import { useState } from "react";
import QuizApi from "../../services/quiz-api";

export default function Questionaire() {
	const [page, setPage] = useState("welcome");
	const [quiz, setQuiz] = useState(null);

	const start = () => {
		// store quiz id in cookies?
		QuizApi.createQuiz().then((quiz) => {
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
		// clean cookie
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
