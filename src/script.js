//Получение элементов
const textElement = document.getElementById('text');
const btn = document.getElementById('btn');

function voice(){
  //Остановка речи
  window.speechSynthesis.cancel();

  //Чтение текста
  const text = textElement.value;
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}

//Привязка функции к кнопке
btn.onclick = voice;
