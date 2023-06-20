const questions = [
  {
    que: "Which of the following is a markup lanugage?",
    a: "HTML",
    b: "CSS",
    c: "Jacascript",
    d: "php",
    correct: "a",
  },
  {
    que: "what year was javascript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    que: "What does css stand for?",
    a: "Hyper text markup language",
    b: "cascding style sheet",
    c: "jason object notation",
    d: "helicopters terminals motorboats lamborginis",
    correct: "b",
  },
  {
    que: "c is which type of language?",
    a: "Hyper text markup language",
    b: "cascding style sheet",
    c: "object oriented programing language",
    d: "helicopters terminals motorboats lamborginis",
    correct: "c",
  },
  {
    que: "Why is css used for?",
    a: "styiling html",
    b: "converted high language to low laguage",
    c: "make a javascript",
    d: "helicopters terminals motorboats lamborginis",
    correct: "a",
  },
];

let index = 0;
let total = questions.length;
let right = 0;
wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");
const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  const data = questions[index];
  console.log(data);
  quesBox.innerText = `${index + 1}${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};
const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  console.log(ans, data.correct);
  if (ans == data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};
const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};
const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  document.getElementById("box").innerHTML = `
  <div style = "text-align:center">
  <h3> Thank you for playing the Quiz.</h3>
  <h2> ${right}/${total} are correct </h2>
  </div>
  `;
};
// initial call
loadQuestion();
