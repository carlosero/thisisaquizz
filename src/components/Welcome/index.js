export default function Welcome({ start }) {

	return (
		<div>
			<p>Thanks for deciding to do our amazingly short quiz!</p>
			<p>(it’s just 5 questions)</p>
			<p>For each question you will have 4 options, just click the one you think is right and click next.</p>
			<p>If you don’t know the answer, that’s fine! Just click next without selecting any answer.</p>
			<p>Ready?</p>
			<button className="start" onClick={start}>Start</button>
		</div>
	);
}
