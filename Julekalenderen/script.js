// Get all the box elements
const boxes = document.querySelectorAll('.box');

// Function to display the question and options
function displayQuestionAndOptions(day) {
    // You can create an array of questions and options corresponding to each day
    const questionsAndOptions = [
        {
            question: "Vi begynner det hele med en oscar-nominert film fra 2007. Dette er en film om å finne seg selv og man gjøre med livet på denne kloden. Dette er en film jeg personlig trenger å se, men er ikke blitt vist på hector enda pga så og si alle andre uten om meg har sett den. Så siden flere er vekke denne lørdagskvelden, griper jeg denne muligheten.",
            options: ["Atonement", "Juno", "Into the wild"],
            correctAnswer: "Into the wild"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        // Add questions and options for each day
    ];

    const questionBox = document.querySelector('.question-box');
    const questionText = document.querySelector('.question-text');
    const optionsList = document.querySelector('.options-list');
    const userAttempts = [];

function displayQuestionAndOptions(day) {
        // Check if the user has already attempted this question
        if (userAttempts.includes(day)) {
            alert("You've already attempted this question.");
            return;
        }
    
        // Display the question and options for the selected day
        // ...
    }    

    function checkAnswer(day, selectedOption) {
        if (userAttempts.includes(day)) {
            alert("You've already attempted this question.");
            return;
        }
    
        const question = questions[day - 1];
        if (selectedOption === question.correctAnswer) {
            alert("Correct! You guessed it right!");
            // Display the movie image
            const image = new Image();
            image.src = question.image;
            document.body.appendChild(image);
        } else {
            alert("Oops! That's not the correct answer.");
        }
    
        // Update user attempts
        userAttempts.push(day);
    }

    

    // Display the question and options for the selected day
    questionText.textContent = questionsAndOptions[day - 1].question;

    optionsList.innerHTML = "";
    questionsAndOptions[day - 1].options.forEach((option) => {
        const optionElement = document.createElement('li');
        optionElement.textContent = option;
        optionsList.appendChild(optionElement);
    });    

    // Add event listener for option selection
    optionsList.addEventListener('click', (e) => {
        const selectedOption = e.target.textContent;
        if (selectedOption === questionsAndOptions[day - 1].correctAnswer) {
            // Handle correct answer
            alert("Correct! You guessed it right!");
        } else {
            // Handle incorrect answer
            alert("Oops! That's not the correct answer.");
        }
        // Hide the question box after the user has answered
        questionBox.style.display = "none";
    });

    // Show the question box
    questionBox.style.display = "block";
}   

// Add click event listeners to each box
boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        // Call the displayQuestionAndOptions function with the day number
        displayQuestionAndOptions(index + 1);
    });
});