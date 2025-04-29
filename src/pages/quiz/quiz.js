
export const quiz = (QUIZ_CONTENT) => {
  'use strict';

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffleChoices = (container) => {
    const answerChoices = Array.from(container.children);
    for (let i = answerChoices.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [answerChoices[i], answerChoices[randomIndex]] = [answerChoices[randomIndex], answerChoices[i]];
    }
    answerChoices.forEach(choice => container.appendChild(choice));
  };

  const QUIZ_TITLE = QUIZ_CONTENT.title;
  const QUIZ_DATA = [...QUIZ_CONTENT.data];
  const quizArray = shuffleArray(QUIZ_DATA);

  const state = { currentIndex: 0, score: 0 };

  const $quiz = document.querySelector('.quiz');
  if (!$quiz) return;

  const $title = $quiz.querySelector('#js-quiz-title');
  const $number = $quiz.querySelector('#js-question-number');
  const $questionContent = $quiz.querySelector('#js-question-content');
  const $buttons = $quiz.querySelectorAll('.js-quiz-button');
  const $scoreDisplay = $quiz.querySelector('#js-score');
  const $finishScreen = $quiz.querySelector('.finish');
  const $answerUl = $quiz.querySelector('.quiz-answer');
  const $explanation = $quiz.querySelector('#js-quiz-explanation');
  const $nextButton = $quiz.querySelector('#js-next-question');
  const $hintButton = $quiz.querySelector('#js-quiz-hint');
  const $feedbackOverlay = $quiz.querySelector('.click-event');
  const $image = $quiz.querySelector('#js-explanation-image');

  const showImage = (question) => {
    $image.style.display = question.image ? 'block' : 'none';
    if (question.image) {
      $image.src = question.image;
      $image.alt = question.question;
    }
  };

  const showExplanation = (question) => {
    $explanation.textContent = question.explanation;
    $explanation.classList.add('is-show');
    if (question.image) {
      $image.classList.add('is-show');
    }
  };

  const loadQuestion = () => {
    const currentQ = quizArray[state.currentIndex];
    $title.textContent = QUIZ_TITLE;
    $number.textContent = `${state.currentIndex + 1}/${quizArray.length}`;
    $questionContent.textContent = currentQ.question;
    showImage(currentQ);
    $explanation.classList.remove('is-show');
    $image.classList.remove('is-show');

    currentQ.answers.forEach((answerText, i) => {
      const btn = $buttons[i];
      btn.textContent = answerText;
      btn.removeAttribute('data-correct');
      if (answerText === currentQ.correct) {
        btn.setAttribute('data-correct', 'true');
      }
    });
  };

  const shuffleAnswers = () => shuffleChoices($answerUl);

  const showFinishScreen = () => {
    $finishScreen.classList.add('is-show');
    $scoreDisplay.textContent = state.score;
  };

  const handleAnswer = (button) => {
    const correct = button.dataset.correct === 'true';
    const currentQ = quizArray[state.currentIndex];

    showExplanation(currentQ);
    $feedbackOverlay.classList.remove('is-correct', 'is-incorrect');
    $feedbackOverlay.classList.add(correct ? 'is-correct' : 'is-incorrect');
    button.closest('.quiz-answer').classList.add(correct ? 'is-correct' : 'is-incorrect');
    if (correct) state.score++;

    $buttons.forEach((btn) => {
      btn.classList.add(btn.dataset.correct === 'true' ? 'is-correct' : 'is-incorrect');
      btn.setAttribute('disabled', true);
    });

    if (button.dataset.correct !== 'true') {
      button.classList.add('is-checked');
    }

    $nextButton.textContent = (state.currentIndex + 1 === quizArray.length) ? '結果を見る' : '次の問題へ';
    $nextButton.classList.remove('is-hidden');
  };

  const loadNextQuestion = () => {
    if (state.currentIndex + 1 === quizArray.length) {
      showFinishScreen();
      return;
    }
    state.currentIndex++;
    loadQuestion();

    $buttons.forEach((btn) => {
      btn.classList.remove('is-checked', 'is-correct', 'is-incorrect');
      btn.removeAttribute('disabled');
    });
    $answerUl.querySelectorAll('.quiz-answer')
      .forEach((ans) => ans.classList.remove('is-correct', 'is-incorrect'));
    $feedbackOverlay.classList.remove('is-correct', 'is-incorrect');
    $explanation.classList.remove('is-show');
    $nextButton.classList.add('is-hidden');
    $nextButton.textContent = '次の問題へ';
    shuffleAnswers();
  };

  $buttons.forEach(btn => btn.addEventListener('click', e => handleAnswer(e.currentTarget)));
  $hintButton.addEventListener('click', () => showExplanation(quizArray[state.currentIndex]));
  $nextButton.addEventListener('click', loadNextQuestion);

  loadQuestion();
};
