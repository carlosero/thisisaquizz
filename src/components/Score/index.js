import QuizButton from "../QuizButton";

const CONGRATULATIONS_MESSAGES = {
	5: "You are a genius!",
	4: "You almost got it all right!",
	3: "You can do better than this",
	2: "A read of some history books would be advised...",
	1: "You really should read some history books",
	0: "Looks like someone skipped school"
}

export default function Score({ quiz, reset }) {

	return (
		<div>
			<p className="text-large">Congratulations on finishing the quiz!</p>
			<p className="text-large">Score: <span className="score">{quiz.score}</span>/5</p>
			<p className="text text-gray">{CONGRATULATIONS_MESSAGES[quiz.score]}</p>
			<QuizButton className="restart" onClick={reset}>Reset</QuizButton>
		</div>
	);
}
