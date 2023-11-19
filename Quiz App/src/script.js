const questions= [
    {
        question: "Who was Agnes Macphail?",
        answers:[
            {text:"The first MP,elected in 1921" , correct: true},
            {text:"canada's first female prime minister" , correct:false},
            {text:"PM Sir Robert Borden's wife" , correct:false},
            {text:"The first women appointed to the senate" , correct:false}
        ]

    },
    {
        question: "During the Second World War, thousands of Canadians were forcibly evacuated from the West Coast of Canada because of their ethnic origin. Who were these Canadians?",
        answers:[
            {text:"Japanese" , correct: true},
            {text:"Thai" , correct:false},
            {text:"Malaysian" , correct:false},
            {text:"Chinese" , correct:false}
        ]

    },
    {
        question: "Canada’s first Prime Minister was:",
        answers:[
            {text:"Sir Arthur Currie" , correct: false},
            {text:"Sir John A. Macdonald" , correct: true},
            {text:"Jacques Cartier" , correct:false},
            {text:"Louis Riel" , correct:false}
        ]
    },
    {
        question: "The Vimy monument is located in which country?",
        answers:[
            {text:"Poland" , correct: false},
            {text:"France" , correct: true},
            {text:"Belgium" , correct:false},
            {text:"The UK" , correct:false}
        ]
    },
    {
        question: "Who built the Canadian Pacific Railway?",
        answers:[
            {text:"European & Chinese Labour" , correct: true},
            {text:"Irish-Canadian" , correct: false},
            {text:"Americans" , correct:false},
            {text:"Enslaved Black People" , correct:false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score=0;

function startQuiz(){
    currentQuestionIndex =0;
    score=0;
    nextButton.innerHTML = "Next"
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex  + 1;
    questionElement.innerHTML =questionNo+ ". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct= answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
};

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
};

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}! `
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block"
}


startQuiz();