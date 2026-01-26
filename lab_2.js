// ==================== Задание 1 ====================
console.log("=== Задание 1 ===");

const existedUserLogin = "the_best_user";
const existedUserPassword = "12345678";

const userLogin = prompt("Введите логин")?.trim() || "";
const userPassword = prompt("Введите пароль")?.trim() || "";

if (userLogin === existedUserLogin && userPassword === existedUserPassword) {
  alert(`Добро пожаловать, ${userLogin}!`);
} else {
  alert("Логин и (или) Пароль введены неверно");
}

// ==================== Задание 2 ====================
console.log("\n=== Задание 2 ===");

// Правильные ответы
const correctAnswer1 = 4;   // 2 + 2
const correctAnswer2 = 4;   // 2 * 2
const correctAnswer3 = 1;   // 5 - 3 - 1
const correctAnswer4 = 12;  // 10 - 2 - 1 + 5
const correctAnswer5 = 6;   // 2 + 2 * 2

let correctAnswers = 0;
let incorrectAnswers = 0;

// Вопрос 1
const userAnswer1 = parseInt(prompt("Сколько будет 2 + 2?")?.trim() || "0");
if (userAnswer1 === correctAnswer1) {
  alert("Ответ верный");
  correctAnswers++;
} else {
  alert("Ответ неверный");
  incorrectAnswers++;
}

// Вопрос 2
const userAnswer2 = parseInt(prompt("Сколько будет 2 * 2?")?.trim() || "0");
if (userAnswer2 === correctAnswer2) {
  alert("Ответ верный");
  correctAnswers++;
} else {
  alert("Ответ неверный");
  incorrectAnswers++;
}

// Вопрос 3
const userAnswer3 = parseInt(prompt("У Дрети было 5 блоков. 3 из них сняли, 1 отдали другу. Сколько блоков у Дрети осталось?")?.trim() || "0");
if (userAnswer3 === correctAnswer3) {
  alert("Ответ верный");
  correctAnswers++;
} else {
  alert("Ответ неверный");
  incorrectAnswers++;
}

// Вопрос 4
const userAnswer4 = parseInt(prompt("У Мани было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Мане еще 5 конфет. Сколько в итоге конфет осталось у Мани?")?.trim() || "0");
if (userAnswer4 === correctAnswer4) {
  alert("Ответ верный");
  correctAnswers++;
} else {
  alert("Ответ неверный");
  incorrectAnswers++;
}

// Вопрос 5
const userAnswer5 = parseInt(prompt("Сколько будет 2 + 2 * 2?")?.trim() || "0");
if (userAnswer5 === correctAnswer5) {
  alert("Ответ верный");
  correctAnswers++;
} else {
  alert("Ответ неверный");
  incorrectAnswers++;
}

alert(`Конец теста! Правильных ответов - ${correctAnswers}; Неправильных ответов - ${incorrectAnswers}.`);

// ==================== Задание 3 ====================
console.log("\n=== Задание 3 ===");

// Вопрос 1
const answer1 = confirm("JavaScript появился в 1995 году?");
if (answer1) {
  alert("Верно");
} else {
  alert("Неверно. JavaScript появился в 1995 году.");
}

// Вопрос 2
const answer2 = confirm("Спецификация JavaScript называется ECMAScript?");
if (answer2) {
  alert("Верно");
} else {
  alert("Неверно. Спецификация JavaScript называется ECMAScript.");
}

// Вопрос 3
const answer3 = confirm("JavaScript был создан за 1 месяц?");
if (answer3) {
  alert("Верно");
} else {
  alert("Неверно. JavaScript был создан за 10 дней.");
}

// ==================== Задание 4 ====================
console.log("\n=== Задание 4 ===");

// Оригинальный цикл for
console.log("Оригинальный цикл for:");
for (let i = 0; i < 3; i += 1) {
  let newStudent = prompt('Введите имя нового студента!');
  newStudent = newStudent ? newStudent.trim() : '';
  if (newStudent) {
    alert(`Добро пожаловать, ${newStudent}!`);
  }
}

// Цикл while
console.log("Цикл while:");
let i = 0;
while (i < 3) {
  let newStudent = prompt('Введите имя нового студента!');
  newStudent = newStudent ? newStudent.trim() : '';
  if (newStudent) {
    alert(`Добро пожаловать, ${newStudent}!`);
  }
  i += 1;
}

// Цикл do while
console.log("Цикл do while:");
let j = 0;
do {
  let newStudent = prompt('Введите имя нового студента!');
  newStudent = newStudent ? newStudent.trim() : '';
  if (newStudent) {
    alert(`Добро пожаловать, ${newStudent}!`);
  }
  j += 1;
} while (j < 3);

// ==================== Задание 5 ====================
console.log("\n=== Задание 5 ===");

let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}

alert(`Сумма чисел от 0 до 100: ${sum}`);