import Welcome from "../Welcome";
import Quiz from "../Quiz";
import Score from "../Score";
import { useState } from "react";

export default function Questionaire() {
	const [page, setPage] = useState("welcome");
	const [quiz, setQuiz] = useState(null);
	// load quiz from API and inject into components

	const start = () => {
		setPage("quiz")
		// call api to create quiz and set on cookies
	}

	const next = () => {
		// call API
		setPage('score')
	}

	const reset = () => {
		// clean cookie
		setPage("welcome")
	}

	return (
		<div>
			{page === 'welcome' && (<Welcome quiz={quiz} start={start} />)}
			{page === 'quiz' && (<Quiz quiz={quiz} next={next} />)}
			{page === 'score' && (<Score quiz={quiz} reset={reset} />)}
		</div>
	);
}
