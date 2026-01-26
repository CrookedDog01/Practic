// ==================== Задание 1 ====================
const myName = "Алексей";
const programmingLanguage = "JavaScript";
const courseCreatorName = "Текст";
const reasonText = "мне нравится создавать современные веб-приложения";
const numberOfMonth = 6;

const task1Text = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. 
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен(а), что пройду данный курс до конца!`;

console.log("=== Задание 1 ===");
console.log(task1Text);

// ==================== Задание 2 ====================
let myInfoText = task1Text;
myInfoText = myInfoText.replaceAll("JavaScript", "JAVASCRIPT");

console.log("\n=== Задание 2 ===");
console.log(myInfoText);
console.log("Длина строки:", myInfoText.length);
console.log("Первый символ:", myInfoText[0]);
console.log("Последний символ:", myInfoText[myInfoText.length - 1]);

// ==================== Задание 3 ====================
console.log("\n=== Задание 3 ===");
const userNameTask3 = prompt("Как вас зовут?");
if (userNameTask3) {
  const formattedNameTask3 = userNameTask3.trim().toLowerCase();
  alert(`Вас зовут ${formattedNameTask3}`);
}

// ==================== Задание 4 ====================
console.log("\n=== Задание 4 ===");
const userNameTask4 = prompt("Как вас зовут?");
if (userNameTask4) {
  const userAgeTask4 = prompt("Сколько вам лет?");
  if (userAgeTask4) {
    const formattedNameTask4 = userNameTask4.trim().toLowerCase();
    const formattedAgeTask4 = parseInt(userAgeTask4.trim());
    
    if (!isNaN(formattedAgeTask4)) {
      alert(`Вас зовут ${formattedNameTask4} и вам ${formattedAgeTask4} лет`);
    } else {
      alert("Возраст должен быть числом!");
    }
  }
}

// ==================== Задание 5 ====================
console.log("\n=== Задание 5 ===");
const userStringTask5 = prompt("Введите текст для обрезки");
if (userStringTask5) {
  const startIndexTask5 = prompt("Введите индекс, с которого начать обрезку строки");
  const endIndexTask5 = prompt("Введите индекс, которым закончить обрезку строки");
  
  if (startIndexTask5 !== null && endIndexTask5 !== null) {
    const startNumTask5 = parseInt(startIndexTask5);
    const endNumTask5 = parseInt(endIndexTask5);
    
    if (!isNaN(startNumTask5) && !isNaN(endNumTask5)) {
      const trimmedStringTask5 = userStringTask5.trim();
      const resultTask5 = trimmedStringTask5.slice(startNumTask5, endNumTask5);
      alert(`Результат: ${resultTask5}`);
    } else {
      alert("Индексы должны быть числами!");
    }
  }
}

// ==================== Задание 6 ====================
console.log("\n=== Задание 6 ===");
const userTextTask6 = prompt("Введите текст");
if (userTextTask6) {
  const wordFromTextTask6 = prompt("Введите слово из текста");
  if (wordFromTextTask6) {
    const trimmedUserTextTask6 = userTextTask6.trim();
    const trimmedWordTask6 = wordFromTextTask6.trim();
    
    const indexOfWordTask6 = trimmedUserTextTask6.indexOf(trimmedWordTask6);
    if (indexOfWordTask6 !== -1) {
      const resultTask6 = trimmedUserTextTask6.slice(0, indexOfWordTask6);
      alert(`Результат: ${resultTask6}`);
    } else {
      alert("Слово не найдено в тексте!");
    }
  }
}