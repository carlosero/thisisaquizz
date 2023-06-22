import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import QuizApi from './services/QuizApi';
import App from './App';

it('mocks QuizApi', async () => {
  global.fetch = jest.fn(() => {
    return { json: () => { return { id: 123 } } }
  })

  const quiz = await QuizApi.createQuiz();
  expect(quiz.id).toEqual(123);
})

describe('Questinaire', () => {
  beforeEach(() => {
    global.localStorage.clear();
  });

  it('renders welcome page', () => {
    render(<App />);
    const linkElement = screen.getByText('Welcome to our amazingly short quiz!');
    expect(linkElement).toBeInTheDocument();

    // should have a button with class 'start' and text 'Start the Quiz'
    const startButton = screen.getByRole('button', { name: 'Start the Quiz' });
    expect(startButton).toBeInTheDocument();
    expect(startButton).toHaveClass('start');
  })

  it('advances trough the quiz questions', async () => {
    global.fetch = jest.fn(() => {
      return { json: () => { return { id: 1, question: { number: 1, question: 'The thing?', options: ['Thing 1', 'Thing 2'] } } } }
    })

    render(<App />);
    const startButton = screen.getByRole('button', { name: 'Start the Quiz' });

    await act(() => { startButton.click(); });

    // should render the question, the options, and a button with class "next" and text "Next"
    const question = screen.getByText("The thing?");
    expect(question).toBeInTheDocument();

    const option1 = screen.getByText('Thing 1');
    expect(option1).toBeInTheDocument();

    const option2 = screen.getByText('Thing 2');
    expect(option2).toBeInTheDocument();

    const nextButton = screen.getByRole('button', { name: 'Next' });
    expect(nextButton).toBeInTheDocument();
    expect(nextButton).toHaveClass('next');
  })

  it('renders score page', async () => {
    global.fetch = jest.fn(() => {
      return { json: () => { return { id: 1, question: { number: 1, question: 'The thing?', options: ['Thing 1', 'Thing 2'] } } } }
    })
    render(<App />);
    const startButton = screen.getByRole('button', { name: 'Start the Quiz' });

    await act(() => { startButton.click(); });

    // should render the question, the options, and a button with class "next" and text "Next"
    const question = screen.getByText("The thing?");
    expect(question).toBeInTheDocument();

    const option1 = screen.getByText('Thing 1');
    expect(option1).toBeInTheDocument();

    const option2 = screen.getByText('Thing 2');
    expect(option2).toBeInTheDocument();

    const nextButton = screen.getByRole('button', { name: 'Next' });
    expect(nextButton).toBeInTheDocument();
    expect(nextButton).toHaveClass('next');

    // go to score page

    global.fetch = jest.fn(() => {
      return { json: () => { return { id: 1, state: 'completed', score: 5 } } }
    })
    await act(() => { nextButton.click(); });

    // should render the score, a message, and a button with class "restart" and text "Restart"
    const score = screen.getByText('5');
    expect(score).toBeInTheDocument();
    expect(score).toHaveClass('score');

    const message = screen.getByText('You are a genius!');
    expect(message).toBeInTheDocument();

    const restartButton = screen.getByRole('button', { name: 'Restart' });
    expect(restartButton).toBeInTheDocument();
    expect(restartButton).toHaveClass('restart');
  })
})
