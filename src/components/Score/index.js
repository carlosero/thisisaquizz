import { useState } from "react";

export default function Score({ reset }) {
	// load from API and show
	const [question, setQuestion] = useState(0);

	return (
		<div>
			<p>Score</p>
			<button className="reset" onClick={reset}>Reset</button>
		</div>
	);
}
