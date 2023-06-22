import { useState } from "react";

export default function QuizButton({ className, children, onClick }) {
	const [loading, setLoading] = useState(false);

	const triggerOnClick = async () => {
		if (!loading) {
			setLoading(true)
			await onClick()
			setLoading(false)
		}
	}

	return (
		<button onClick={triggerOnClick} className={`${className} button ${loading ? 'button-loading' : ''}`}>
			{children}
		</button>
	);
}
