const API_URL = 'https://api.thisisaquiz.fyi'

const QuizApi = {
	createQuiz: async () => {
		const response = await fetch(`${API_URL}/api/v1/quizzes`, { method: 'POST' });
		return await response.json();
	},
	getQuiz: async (id) => {
		const response = await fetch(`${API_URL}/api/v1/quizzes/${id}`);
		return await response.json();
	},
	answerQuestion: async (quizId, answer, question_number) => {
		const response = await fetch(`${API_URL}/api/v1/quizzes/${quizId}/next`, {
			method: 'POST', headers: {
				"Content-Type": "application/json"
			}, body: JSON.stringify({ answer, question_number })
		});
		return await response.json();
	}
}

export default QuizApi;
