import { useState } from "react";

export default function Quiz({ quiz, next }) {
	const [answer, setAnswer] = useState(null);

	const onAnswerSelected = (opt) => {
		setAnswer(opt.target.value);
	}

	const advance = () => {
		next(answer);
	}

	return (
		<div>
			<p className="text text-gray text-bold">Quiz #{quiz.id}</p>
			<p className="text-large">
				{quiz.question.number}. <span className="question">{quiz.question.question}</span>
			</p>
			<p className="text-x-small text-bold">Select your answer:</p>
			<div className="options">
				{quiz.question.options.map((option, index) => (
					<div className="option" key={index}>
						<input type="radio" id={`answer-${index}`} name="answer" value={option} checked={answer === option} onChange={onAnswerSelected} />
						<label className="text" htmlFor={`answer-${index}`}>{option}</label>
					</div>
				))}
			</div>
			<button className="next button" onClick={advance}>Next</button>
		</div>
	);
}
