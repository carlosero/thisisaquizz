import axios from "axios";

// const API_URL = 'https://thisisaquizz-dev-qn4tol5xia-ue.a.run.app/'
const API_URL = 'http://localhost:3000'

const QuizApi = {
	createQuiz: async () => {
		const response = await axios.post(`${API_URL}/api/v1/quizzes`, {});
		return response.data;
	},
	getQuiz: async (id) => {
		const response = await axios.get(`${API_URL}/api/v1/quizzes/${id}`);
		return response.data;
	},
	answerQuestion: async (quizId, answer) => {
		const response = await axios.post(`${API_URL}/api/v1/quizzes/${quizId}/next`, { answer });
		return response.data;
	}
}

export default QuizApi;
