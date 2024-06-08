//get quiz questions




const div = document.querySelector("#quiz");
const renderQuestion = (arr) => {
    arr.map((item) => {
        
      div.innerHTML += `
      <h1>${item.question.text}</h1>
      <ul>
      <li>${item.incorrectAnswers}</li>
      </ul>
      `
      console.log(item);
    });
};

const getQuestions = async () => {
  try {
    const data = await fetch("https://the-trivia-api.com/v2/questions");
    const response = await data.json();
    console.log(response);
    renderQuestion(response);
  } catch (error) {
    console.log("error===>", error);
  }
};

getQuestions();


















