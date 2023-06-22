const API_URL = 'https://thisisaquizz-dev-qn4tol5xia-ue.a.run.app'

const QuizApi = {
	createQuiz: async () => {
		const response = await fetch(`${API_URL}/api/v1/quizzes`, { method: 'POST' });
		return await response.json();
	},
	getQuiz: async (id) => {
		const response = await fetch(`${API_URL}/api/v1/quizzes/${id}`);
		return await response.json();
	},
	answerQuestion: async (quizId, answer) => {
		const response = await fetch(`${API_URL}/api/v1/quizzes/${quizId}/next`, { method: 'POST', body: JSON.stringify({ answer }) });
		return await response.json();
	}
}

export default QuizApi;
