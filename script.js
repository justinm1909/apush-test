// Initialize quiz after everything loads
let retryCount = 0;
const MAX_RETRIES = 50; // 5 seconds max wait time

function initQuiz() {
    // Check if all question arrays are loaded
    if (typeof questions1 === 'undefined' || typeof questions2 === 'undefined' || 
        typeof questions3 === 'undefined' || typeof questions4 === 'undefined') {
        retryCount++;
        if (retryCount >= MAX_RETRIES) {
            console.error('Failed to load question arrays after maximum retries!');
            const questionText = document.getElementById("question-text");
            if (questionText) {
                questionText.innerText = "Error: Failed to load questions. Please refresh the page.";
            }
            return;
        }
        console.error('Question arrays not loaded! Retry', retryCount, {
            q1: typeof questions1,
            q2: typeof questions2,
            q3: typeof questions3,
            q4: typeof questions4
        });
        // Retry after a short delay
        setTimeout(initQuiz, 100);
        return;
    }
    
    retryCount = 0; // Reset on success

    // Merge all sets from the four question files
    const allQuestions = [
        ...questions1,
        ...questions2,
        ...questions3,
        ...questions4
    ];

    console.log('Total questions loaded:', allQuestions.length);

    // Element references
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");
    const feedback = document.getElementById("feedback");
    const nextBtn = document.getElementById("next-btn");
    const questionCounter = document.getElementById("question-counter");
    const backBtn = document.getElementById("back-btn");
    const restartBtn = document.getElementById("restart-btn");
    correctAnswers = 0;

    // Check if elements exist
    if (!questionText || !answerButtons || !feedback || !nextBtn || !questionCounter || !backBtn || !restartBtn) {
        console.error('DOM elements not found!', {
            questionText: !!questionText,
            answerButtons: !!answerButtons,
            feedback: !!feedback,
            nextBtn: !!nextBtn,
            questionCounter: !!questionCounter,
            backBtn: !!backBtn,
            restartBtn: !!restartBtn
        });
        return;
    }

    // Check if we have questions
    if (allQuestions.length === 0) {
        console.error('No questions available!');
        questionText.innerText = "Error: No questions loaded.";
        return;
    }

    // Shuffle questions for random order (Fisher-Yates shuffle)
    let shuffled = [...allQuestions];
    function shuffleQuestions() {
        shuffled = [...allQuestions];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
    }
    shuffleQuestions();
    let current = 0;

    // Prevent multiple event listeners
    let nextBtnHandler = null;
    
    // Store shuffled answer order for current question
    let currentShuffledAnswers = null;
    let currentCorrectIndex = 0;

    // Shuffle answer choices for a question
    function shuffleAnswers(question) {
        // Create array of answer indices
        let indices = question.answers.map((_, i) => i);
        
        // Shuffle indices using Fisher-Yates
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }
        
        // Create shuffled answers array
        let shuffledAnswers = indices.map(i => question.answers[i]);
        
        // Find where the correct answer moved to
        let newCorrectIndex = indices.indexOf(question.correct);
        
        return {
            answers: shuffledAnswers,
            correctIndex: newCorrectIndex
        };
    }

    // Load a question onto the screen
    function loadQuestion() {
        feedback.innerHTML = "";
        nextBtn.style.display = "none";
        answerButtons.innerHTML = "";

        // Update question counter
        questionCounter.innerText = `Question ${current + 1} of ${shuffled.length}`;

        // Update back button state
        backBtn.disabled = current === 0;

        let q = shuffled[current];
        questionText.innerText = q.q;

        // Shuffle the answer choices
        let shuffledData = shuffleAnswers(q);
        currentShuffledAnswers = shuffledData.answers;
        currentCorrectIndex = shuffledData.correctIndex;

        // Display shuffled answers
        currentShuffledAnswers.forEach((answer, index) => {
            let btn = document.createElement("button");
            btn.innerText = answer;
            btn.addEventListener("click", () => selectAnswer(btn, index));
            answerButtons.appendChild(btn);
        });
    }

    // Handle answer selection
    function selectAnswer(button, index) {
        let q = shuffled[current];

        // Disable all buttons
        Array.from(answerButtons.children).forEach(btn => btn.disabled = true);

        // Use the shuffled correct index
        if (index === currentCorrectIndex) {
            button.classList.add("correct");
            answersCorrect += 1;
            feedback.innerHTML = "<strong>Correct.</strong> " + q.explanation;
        } else {
            button.classList.add("wrong");
            answerButtons.children[currentCorrectIndex].classList.add("correct");
            feedback.innerHTML = "<strong>Incorrect.</strong> " + q.explanation;
        }

        nextBtn.style.display = "block";
    }

    // Advance to the next question
    nextBtnHandler = () => {
        current++;
        if (current >= shuffled.length) {
            questionText.innerText = "You finished the quiz!" + "you got a score of " + answersCorrect + "/" + allQuestions.length ;
            
            answerButtons.innerHTML = "";
            feedback.innerHTML = "";
            questionCounter.innerText = `Completed: ${shuffled.length} of ${shuffled.length} questions`;
            nextBtn.style.display = "none";
            backBtn.disabled = true;
            nextBtn.removeEventListener("click", nextBtnHandler);
        } else {
            loadQuestion();
        }
    };
    nextBtn.addEventListener("click", nextBtnHandler);

    // Go back to previous question
    backBtn.addEventListener("click", () => {
        if (current > 0) {
            current--;
            loadQuestion();
        }
    });

    // Restart quiz
    restartBtn.addEventListener("click", () => {
        // Reshuffle questions
        shuffleQuestions();
        current = 0;
        loadQuestion();
    });

    // Start quiz
    loadQuestion();
}

// Start initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initQuiz);
} else {
    // DOM is already loaded
    initQuiz();
}
