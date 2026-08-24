let score = 0;
const totalQuestions = 5;

function checkAnswer(quizItem) {
    const radioName = 'q' + quizItem.dataset.quiz;
    const selected = document.querySelector(`input[name="${radioName}"]:checked`);
    const answerDiv = quizItem.querySelector('.answer');
    const correctAnswer = answerDiv.dataset.answer;

    answerDiv.classList.remove('show', 'correct', 'wrong');

    if (!selected) {
        alert('กรุณาเลือกคำตอบก่อนครับ!');
        return false;
    }

    if (selected.value === correctAnswer) {
        answerDiv.classList.add('show', 'correct');
        return true;
    } else {
        answerDiv.classList.add('show', 'wrong');
        return false;
    }
}

function updateScore() {
    let correct = 0;
    document.querySelectorAll('.quiz-item').forEach(item => {
        const answerDiv = item.querySelector('.answer');
        if (answerDiv.classList.contains('correct')) {
            correct++;
        }
    });
    score = correct;
    document.getElementById('scoreDisplay').textContent = score;
}

document.querySelectorAll('.check-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const quizItem = this.closest('.quiz-item');
        checkAnswer(quizItem);
        updateScore();
    });
});

document.getElementById('checkAllBtn').addEventListener('click', function() {
    document.querySelectorAll('.quiz-item').forEach(item => {
        checkAnswer(item);
    });
    updateScore();
});

document.getElementById('resetAllBtn').addEventListener('click', function() {
    document.querySelectorAll('.quiz-item').forEach(item => {
        const radioName = 'q' + item.dataset.quiz;
        document.querySelectorAll(`input[name="${radioName}"]`).forEach(input => {
            input.checked = false;
        });
        const answerDiv = item.querySelector('.answer');
        answerDiv.classList.remove('show', 'correct', 'wrong');
    });
    score = 0;
    document.getElementById('scoreDisplay').textContent = '0';
});

console.log('📝 ยินดีต้อนรับสู่หน้าแบบทดสอบ!');