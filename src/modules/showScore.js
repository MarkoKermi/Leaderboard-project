import getScore from './refresh.js';

const container = document.querySelector('.score_container');

const showScore = async () => {
  const data = await getScore();
  container.innerHTML = '';
  data.forEach((item) => {
    const renderData = `
    <tr>
    <td>${item.user}</td>
    <td>${item.score}</td>
    </tr>`;
    container.insertAdjacentHTML('beforeend', renderData);
  });
};

export default showScore;
