//get quiz questions
const div = document.querySelector("#quiz");
const btn = document.querySelector("#btn");
let questionArr =[];
let index= 0;
let totalQuestion = 0;
let result = 0;


function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}


const renderQuestion = (arr) => {
    if(index < questionArr.length){
      const answerArr = [
        ...arr[index].incorrectAnswers,
        arr[index].correctAnswer
      ]
      div.innerHTML+=`
      <h1 class="header">Q${index + 1}:${arr[index].question.text}</h1>
      <ul>
      ${shuffleArray(answerArr).map((items)=>
        `
        <li>
        <input type="radio" name="choice" id=${items} class="choice" value=${items}><label for=${items}>${items}</label>
        </li>
        `
      )}
      </ul>
      `
    }else{
      window.location ='result.html';
      localStorage.setItem(
        "result", 
        JSON.stringify({
          totalQuestion,
          result
        })
      )
    }
};


btn.addEventListener("click", () => {
  const choice = document.querySelectorAll(".choice");
  div.innerHTML = "";
  choice.forEach((item) => {
    if (item.checked) {
      if (item.nextSibling.innerHTML === questionArr[index].correctAnswer) {
        result += 10;
      }
    }
  });
  index += 1;
  renderQuestion(questionArr);
});


const getQuestions = async () => {
  try {
    const data = await fetch("https://the-trivia-api.com/v2/questions");
    const response = await data.json();
    console.log(response);
    questionArr = response;
    renderQuestion(response);
  } catch (error) {
    console.log("error===>", error);
  }
};

getQuestions();


















