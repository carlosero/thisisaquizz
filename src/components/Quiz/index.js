import { useState } from "react";

export default function Quiz({ next }) {
	// load from API and show
	const [question, setQuestion] = useState(0);

	return (
		<div>
			<p>Quiz</p>
			<button className="next" onClick={next}>Next</button>
		</div>
	);
}
