const secretNumber = Math.ceil(Math.random() * 10);
let tries = 0;

function guessNum(num) {
  if (tries >= 5) alert('Попытки закончились :( Загаданное число было ' + secretNumber);
  if (num === secretNumber) {
    alert('Вы угадали');
    tries = 5;
  } else {
    tries += 1;
    alert('Неверно, попробуйте еще раз.');
  }
}
