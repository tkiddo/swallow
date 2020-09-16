const { ipcRenderer } = require('electron');
const startBtn = document.querySelector('#start-btn');
const linkInput = document.querySelector('#link');

ipcRenderer.on('request-done', (e, res) => {
  console.log(JSON.parse(res));
});

startBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const url =
    'https://club.jd.com/comment/productPageComments.action?callback=fetchJSON_comment98&productId=50647371545&score=0&sortType=5&page=0&pageSize=10&isShadowSku=0&fold=1';
  ipcRenderer.send('send-request', url);
});