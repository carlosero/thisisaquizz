import QuizButton from "../QuizButton";

export default function Welcome({ start }) {

	return (
		<div>
			<p className="mb-30 text-large">Thanks for deciding to do our amazingly short quiz!</p>
			<p className="text-small text-gray">(it’s just 5 questions)</p>
			<p className="mb-30 text-large">For each question you will have 4 options, just click the one you think is right and click next.</p>
			<p className="mb-30 text-large">If you don’t know the answer, that’s fine! Just click next without selecting any answer.</p>
			<p className="mb-30 text-large">Ready?</p>
			<QuizButton className="start" onClick={start}>Start</QuizButton>
		</div>
	);
}
