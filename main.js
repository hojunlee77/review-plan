const main = document.querySelector("main");
const today = document.querySelector(".js-today");
const form = document.querySelector(".input-form");
const input = form.querySelector("input");

const oneDay = 86400000;
const date = Date.now();
const nowDate = new Date(date);

const dayOne = new Date(date + oneDay);
const dayTwo = new Date(date + oneDay * 3);
const dayThree = new Date(date + oneDay * 7);
const dayFour = new Date(date + oneDay * 15);
const dayFive = new Date(date + oneDay * 30);

const extractDate = (plan) => {
  const year = plan.getFullYear();
  const month = plan.getMonth() + 1;
  const date = plan.getDate();
  return `${year}년 ${month}월 ${date}일`;
};

const loadToday = () => {
  const todayYear = nowDate.getFullYear();
  const todayMonth = nowDate.getMonth() + 1;
  const todayDate = nowDate.getDate();
  today.innerText = `오늘: ${todayYear}년 ${todayMonth}월 ${todayDate}일`;
};

const createPlan = (contentText) => {
  const outputForm = document.createElement("form");
  const formTitle = document.createElement("h2");
  const formContent = document.createElement("h3");
  const ul = document.createElement("ul");
  const liOne = document.createElement("li");
  const liTwo = document.createElement("li");
  const liThree = document.createElement("li");
  const liFour = document.createElement("li");
  const liFive = document.createElement("li");
  const dateOne = document.createElement("span");
  const dateTwo = document.createElement("span");
  const dateThree = document.createElement("span");
  const dateFour = document.createElement("span");
  const dateFive = document.createElement("span");

  formTitle.innerText = "Your Review Plan";
  formContent.innerText = `"${contentText}"를 다음 날짜에 복습하세요 : `;
  dateOne.innerText = extractDate(dayOne);
  liOne.appendChild(dateOne);
  ul.appendChild(liOne);

  dateTwo.innerText = extractDate(dayTwo);
  liTwo.appendChild(dateTwo);
  ul.appendChild(liTwo);

  dateThree.innerText = extractDate(dayThree);
  liThree.appendChild(dateThree);
  ul.appendChild(liThree);

  dateFour.innerText = extractDate(dayFour);
  liFour.appendChild(dateFour);
  ul.appendChild(liFour);

  dateFive.innerText = extractDate(dayFive);
  liFive.appendChild(dateFive);
  ul.appendChild(liFive);

  outputForm.appendChild(formTitle);
  outputForm.appendChild(formContent);
  outputForm.appendChild(ul);
  main.appendChild(outputForm);
};

const handleSubmit = (event) => {
  event.preventDefault();
  const currentContent = input.value;
  input.value = "";
  createPlan(currentContent);
};

function init() {
  loadToday();
  form.addEventListener("submit", handleSubmit);
}

init();
