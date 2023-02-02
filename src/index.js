// import _ from "lodash";
import './style.css';
// import theGame from "./modules/theGame.js";
import userScore from './modules/submitForm.js';
import showScore from './modules/showScore.js';
import getScore from './modules/refresh.js';

const nameInputField = document.querySelector('#your_name');
const scoreInputField = document.querySelector('#your_score');
const formSubmitBtn = document.querySelector('#addButton');
const refreshButton = document.getElementById('refresh_btn');

window.addEventListener('load', () => {
  showScore();
});

formSubmitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  userScore();
  nameInputField.value = '';
  scoreInputField.value = '';
});

refreshButton.addEventListener('click', (e) => {
  e.preventDefault();
  getScore();
  showScore();
});
