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
    const choiceArray = Array.from(container.children);
    for (let i = choiceArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [choiceArray[i], choiceArray[j]] = [choiceArray[j], choiceArray[i]];
    }
    choiceArray.forEach(choice => container.appendChild(choice));
  };

  const QUIZ_TITLE = QUIZ_CONTENT.title;
  const QUIZ_DATA = [...QUIZ_CONTENT.data];
  const quizArray = shuffleArray(QUIZ_DATA);
  const state = { currentIndex: 0, score: 0 };

  const $quiz = document.querySelector('.quiz');
  if (!$quiz) return;
  const $title = $quiz.querySelector('#js-quiz-title');
  const $number = $quiz.querySelector('#js-question-number');
  const $progressBar = $quiz.querySelector('#js-quiz-progress'); 
  const $questionContent = $quiz.querySelector('#js-question-content');
  const $image = $quiz.querySelector('#js-question-img');
  const $modal = $quiz.querySelector('#js-question-modal');
  const $modalImg = $quiz.querySelector('#js-question-modal-img');
  const $buttons = $quiz.querySelectorAll('.js-quiz-button');
  const $answerUl = $quiz.querySelector('.quiz-answer');
  const $TorF = $quiz.querySelector('.click-event');
  const $hintButton = $quiz.querySelector('#js-quiz-hint-button');
  const $hint = $quiz.querySelector('#js-quiz-hint-text');
  const $explanation = $quiz.querySelector('#js-quiz-explanation');
  const $nextButton = $quiz.querySelector('#js-next-question');
  const $finishScreen = $quiz.querySelector('.finish');
  const $score = $quiz.querySelector('#js-score');
  const $reloadButton = $quiz.querySelector('#js-reload');
  

  //サブ関数
  const shuffleAnswers = () => shuffleChoices($answerUl);

  const showImage = (question) => {
    if (question.image) {
      $image.style.display = 'block';
      $image.src = question.image;
    } else {
      $image.style.display = 'none';
      $image.src = '';
    }
  };


  const showExplanation = (question) => {
    $explanation.textContent = question.explanation;
    $explanation.classList.add('is-show');
  };

  const updateProgressBar = () => {
    const progress = ((state.currentIndex + 1) / quizArray.length) * 100;
    $progressBar.style.width = `${progress}%`;
  };

  //メイン関数
  const loadQuestion = () => { //init
    const currentQ = quizArray[state.currentIndex];
    $title.textContent = QUIZ_TITLE;
    $number.textContent = `${state.currentIndex + 1}/${quizArray.length}`;
    $questionContent.textContent = currentQ.question;

    currentQ.answers.forEach((answerText, i) => {
      const btn = $buttons[i];
      btn.textContent = answerText; //各ボタンに選択肢のテキストを表示
      if (answerText === currentQ.correct) { //この選択肢が正解なら…
        btn.setAttribute('data-correct', 'true'); //data-correct 属性を true に設定
      }
    });

    if (currentQ.hint && currentQ.hint.trim() !== '') {
      $hintButton.style.display = 'flex';
    } else {
      $hintButton.style.display = 'none';
    }

    updateProgressBar(); // ★問題読み込み時に進行バーも更新！
    showImage(currentQ);
    shuffleAnswers();

  };

  const handleAnswer = (button) => { //クリックした時
    const correct = button.dataset.correct === 'true';
    const currentQ = quizArray[state.currentIndex];
    $TorF.classList.add(correct ? 'is-correct' : 'is-incorrect');
    showExplanation(currentQ);
    if (correct) state.score++;
    $buttons.forEach((btn) => { //$buttonを一個ずつ取り出す→その一つをbtnとする
      btn.classList.add(btn.dataset.correct === 'true' ? 'is-correct' : 'is-incorrect');
      btn.setAttribute('disabled', true); //btnにdisabledをHTML上で追加　element.setAttribute('属性名', '値');
    });
    if (button.dataset.correct !== 'true') { //クリックしたボタンに対してのみ
      button.classList.add('is-checked');
    }
    $nextButton.textContent = (state.currentIndex + 1 === quizArray.length) ? '結果を見る' : '次の問題へ';
    $nextButton.classList.add('is-show');
  };

  const loadNextQuestion = () => { //次へボタンを押した時
    if (state.currentIndex + 1 === quizArray.length) { //全問終わってる時
      showFinishScreen();
      return; //終わった時はこれ以上動かさない
    }
    
    state.currentIndex++;
    $buttons.forEach((btn) => {
      btn.classList.remove('is-checked', 'is-correct', 'is-incorrect');
      btn.removeAttribute('disabled');
      btn.removeAttribute('data-correct'); //「正解フラグ」をリセット
    });
    $hint.classList.remove('is-show');
    $explanation.classList.remove('is-show');
    $TorF.classList.remove('is-correct', 'is-incorrect');
    $nextButton.classList.remove('is-show');
    loadQuestion();

  };

  const showFinishScreen = () => { //全問終わった時
    $finishScreen.classList.add('is-show');
    $score.textContent = state.score;
  };


  //ボタン押すと起こるイベント
  $image.addEventListener('click', () => {
    const currentQ = quizArray[state.currentIndex]; // 現在の問題を取得
    if (currentQ.image) {
      $modal.classList.add('is-show');
      $modalImg.src = currentQ.image;
      $modalImg.alt = currentQ.question;
    }
  });
  
  
  $modal.addEventListener('click', () => {
    $modal.classList.remove('is-show');
  });

  $buttons.forEach(btn => btn.addEventListener('click', e => handleAnswer(e.currentTarget)));

  $hintButton.addEventListener('click', () => {
    const currentQ = quizArray[state.currentIndex];
    if ($hint.classList.contains('is-show')) {
      $hint.classList.remove('is-show');
      $image.classList.remove('is-show');
    } else {
      $hint.textContent = currentQ.hint;
      $hint.classList.add('is-show');
    }
  });  

  $nextButton.addEventListener('click', loadNextQuestion);

  $reloadButton.addEventListener('click', () => {
    location.reload();
  });

  //init
  loadQuestion();
};

