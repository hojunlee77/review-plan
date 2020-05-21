const main = document.querySelector("main");
const today = document.querySelector(".js-today");
const form = document.querySelector(".input-form");
const input = form.querySelector("input");
const outputForm = document.querySelector(".output-form");
const outputList = outputForm.querySelector("ul");
const outputContent = outputForm.querySelector("h3");

const oneDay = 86400000;
const date = Date.now();
const nowDate = new Date(date);

const dayOne = new Date(date + oneDay);
const dayTwo = new Date(date + oneDay * 3);
const dayThree = new Date(date + oneDay * 7);
const dayFour = new Date(date + oneDay * 15);

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

const handleBtn = (event) => {
  event.preventDefault();
  const btn = event.target;
  const target = btn.parentNode;
  outputList.removeChild(target);
};

const makeDate = (dateSec) => {
  const li = document.createElement("li");
  const date = document.createElement("span");
  const btn = document.createElement("button");

  btn.innerText = "❌";
  btn.addEventListener("click", handleBtn);
  date.innerText = extractDate(dateSec);

  li.appendChild(date);
  li.appendChild(btn);

  return li;
};

const createPlan = (contentText) => {
  outputContent.innerText = `"${contentText}" 를 다음 날짜에 복습하세요 : `;

  listFirstDate = makeDate(dayOne);
  listSecondDate = makeDate(dayTwo);
  listThridDate = makeDate(dayThree);
  listFourthDate = makeDate(dayFour);

  outputList.appendChild(listFirstDate);
  outputList.appendChild(listSecondDate);
  outputList.appendChild(listThridDate);
  outputList.appendChild(listFourthDate);

  outputForm.className = "show";
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
