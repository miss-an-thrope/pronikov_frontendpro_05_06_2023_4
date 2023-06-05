/* Using ONLY material given by last 3 lessons of course 
   P.S. Also used method .toFixed() for better visual result.
*/

/* Homework №4 */

//Templates
let templateRefreshPage = 'Повторіть спробу (оновіть сторінку (ctrl + f5)).';

//Task №1

let compareNum1 = prompt(
`Task №1
   Дано два різні числа. Визначити, яке з них більше, а яке менше.

Введіть перше число:
`);
let compareNum2 = prompt('Введіть друге число для порівняння:');
let findDiffPositive = Number(compareNum1) - Number(compareNum2); // find positive (>) difference 
let findDiffNegative = Number(compareNum2) - Number(compareNum1); // find negative (<) difference

if (compareNum1 === '' && compareNum2 === '') {
   alert(`Ви не ввели жодного значення. ${templateRefreshPage}`);
} else if (compareNum1 === null || compareNum2 === null) {
   alert(`При скасуванні хоча б однієї з операцій, ми не зможемо вирішити цей таск. ${templateRefreshPage}`);
} else if (compareNum1 === '') {
   alert(`Ви не ввели перше число. ${templateRefreshPage}`);
} else if (compareNum2 === '') {
   alert(`Ви не ввели друге число. ${templateRefreshPage}`);
// Another variant
//} else if (compareNum1 === '' || compareNum2 === '') {
//    alert('Ви не ввели, як мінімум, одне із значень. ${templateRefreshPage}');
} else if (Number.isNaN(Number(compareNum1)) || Number.isNaN(Number(compareNum2))) {
   alert(`Якщо Ви отримали це повідомлення, значить Ви некорректно ввели дані. ${templateRefreshPage}`);
} else if (Number(compareNum1) > Number(compareNum2)) {
   alert(`Число ${compareNum1} більше ніж число ${compareNum2} на ${findDiffPositive}.`);
} else if (Number(compareNum1) < Number(compareNum2)) {
   alert(`Число ${compareNum1} менше ніж число ${compareNum2} на ${findDiffNegative}.`);
} else if (Number(compareNum1) === Number(compareNum2)) {
   alert('В даному видадку ці значення рівні.');
}

// Task №2

let meter = 1;
let kilometer = meter * 1000;
let feet = meter * 305;

let giveKm = Number(prompt(
`Task №2

Відомі дві відстані. Одне у кілометрах, інше – у футах (1 фут = 0,305м). Яка відстань менша?

Введіть відстань у кілометрах:`)).toFixed(2);

let giveFt = Number(prompt('Введіть відстань у футах:')).toFixed(2);
let kmDistance = Number(Number(giveKm) * kilometer).toFixed(2);
let ftDistance = Number(Number(giveFt) * feet).toFixed(2);
let differDistance = Number(kmDistance) - Number(ftDistance).toFixed(2);

if (giveKm === '' && giveFt === '') {
   alert(`Ви не ввели жодного значення. ${templateRefreshPage}`);
} else if (giveKm === null || giveFt === null) {
   alert(`При скасуванні хоча б однієї з операцій ми не зможемо вирішити цей таск. ${templateRefreshPage}`);
} else if (giveKm === '') {
   alert(`Ви не ввели відстань у кілометрах. ${templateRefreshPage}`);
} else if (giveFt === '') {
   alert(`Ви не ввели відстань у футах. ${templateRefreshPage}`);
} else if (Number(giveKm) < 0 || Number(giveFt) < 0) {
   alert(`Ми не можемо вказувати від'ємні значення для любої відстані. ${templateRefreshPage}`);
} else if (kmDistance < ftDistance) {
   alert(
`${giveKm} км дорівнює ${kmDistance} м.
${giveFt} фт дорівнює ${ftDistance} м.
   Відстань у км менша за відстань у футах на ${differDistance} м.`);
} else if (ftDistance < kmDistance) {
   alert(
`${giveKm} км дорівнює ${kmDistance} м.
${giveFt} фт дорівнює ${ftDistance} м.
   Відстань у футах менша за відстань у кілометрах на ${differDistance} м.`);
} else if (kmDistance === ftDistance) {
   alert('В даному видадку ці значення рівні.');
} else {
   alert(`Якщо Ви отримали це повідомлення, значить Ви некорректно ввели дані. ${templateRefreshPage}`);
}

//Task №3

let devideFirst = prompt(
`Task №3

   Визначити, чи є число a дільником числа b? І навпаки. (Дати дві відповіді)

   Введіть перше число:`);
let devideSecond = prompt('Введіть друге число:');

if (devideFirst === '' && devideSecond === '') {
   alert(`Ви не ввели жодного значення. ${templateRefreshPage}`);
} else if (devideFirst === null || devideSecond === null) {
   alert(`При скасуванні хоча б однієї з операцій ми не зможемо вирішити цей таск. ${templateRefreshPage}`);
} else if (devideFirst === '') {
   alert(`Ви не ввели перше число. ${templateRefreshPage}`);
} else if (devideSecond === '') {
   alert(`Ви не ввели друге число. ${templateRefreshPage}`);
} else if (Number.isNaN(Number(devideFirst)) || Number.isNaN(Number(devideSecond))) {
   alert (`Якщо Ви отримали це повідомлення, значить Ви некорректно ввели дані. ${templateRefreshPage}`);
} else if (!Number.isInteger(Number(devideFirst)) || !Number.isInteger(Number(devideSecond)))  {
   alert (`Число має бути подільним, тобто цілим. ${templateRefreshPage}`);
} else if (Number(devideFirst) < 0 || Number(devideSecond) < 0) {
   alert(`Ми не можемо вказувати від'ємні значення при перевірці подільності чисел. ${templateRefreshPage}`);
} else if (Number(devideFirst) % Number(devideSecond) === 0) {
   if (Number(devideSecond) % Number(devideFirst) === 0) {
      alert('В даному випадку Ви вказали одне й те саме число, звичайно, воно може бути дільником самого себе.');
   } else if (Number(devideSecond) % Number(devideFirst) !== 0) {
      alert(`Число (${devideSecond}) являється дільником числа (${devideFirst}), але не навпаки.`);
   }
} else if (Number(devideFirst) % Number(devideSecond) !== 0) {
   if (Number(devideSecond) % Number(devideFirst) === 0) {
      alert(`Число (${devideSecond}) не являється дільником числа (${devideFirst}), але число (${devideFirst}), навпаки, являється дільником числа (${devideSecond}).`);
   } else if (Number(devideSecond) % Number(devideFirst) !== 0) {
      alert(`В даному випадку жодне число не являється дільником для одне одного.`);
   }
}

// Task №4

let evenNum = prompt(
`Task №4

Дано число. Визначити, чи закінчується воно парною цифрою чи непарною? Вивести останню цифру.

Введіть число для перевірки парності/непарності:`);
let findLastNumeral = Math.abs(Number(evenNum)) % 10;

if (evenNum === '') {
   alert(`Ви не ввели жодного значення. ${templateRefreshPage}`);
} else if (evenNum === null) {
   alert(`При скасуванні операції ми не зможемо вирішити цей таск. ${templateRefreshPage}`);
} else if (Number(evenNum) < 0) {
   alert(`Для перевірки чи являється число парним/непарним необхідно, щоб воно не було від'ємним. ${templateRefreshPage}`);
} else if (Number.isNaN(Number(evenNum))) {
   alert(`Якщо Ви отримали це повідомлення, значить Ви некорректно ввели дані. ${templateRefreshPage}`);
} else if (Number(evenNum) % 1 !== 0) {
   alert(`Парним називається таке число, яке можна поділити на 2 без остачі, тоді як непарне число ділиться на два з остачею.

Іншими словами, парне число має бути цілим, а не дробовим. ${templateRefreshPage}`);
} else if (Number(evenNum) % 2 === 0) {
   alert(`Остання цифра Вашого числа: ${findLastNumeral}. Це парне число.`);
} else if (Number(evenNum) % 2 !== 0) {
   alert(`Остання цифра Вашого числа: ${findLastNumeral}. Це непарне число.`);
}

// Task №5

let twoDigitNum = prompt(
`Task №5
Дано двозначне число.
Визначити, яка з його цифр більша: перша чи друга?

Введіть любе двузначне число:`);

let firstDigit = Math.floor((Number(twoDigitNum) % 100)/10);
let secondDigit = Number(twoDigitNum) % 10;

if (twoDigitNum === '') {
   alert(`Ви не ввели жодного значення. ${templateRefreshPage}`);
} else if (twoDigitNum === null) {
   alert(`При скасуванні операції ми не зможемо вирішити цей таск. ${templateRefreshPage}`);
} else if (Number.isNaN(Number(twoDigitNum))) {
   alert(`Якщо Ви отримали це повідомлення, значить Ви некорректно ввели дані. ${templateRefreshPage}`)
} else if (Number(twoDigitNum) < 0) {
   alert(`Число не має бути від'ємним. ${templateRefreshPage}`);
} else if (Number(twoDigitNum) % 1 !== 0) {
   alert(`Число не має бути дробовим, а цілим. ${templateRefreshPage}`);
} else if (Number(twoDigitNum) < 10 || Number(twoDigitNum) > 99) {
   alert(`Двузначне число \u2013 це числа від 10 до 99. ${templateRefreshPage}`);
} else if (firstDigit === 0) {
   alert(`Число не повинно починатися з нуля. ${templateRefreshPage}`);
} else if (firstDigit === secondDigit) {
   alert (`В даному випадку цифри числа (${Number(twoDigitNum)}) рівні.`)
} else if (firstDigit > secondDigit) {
   alert(`З Вашого числа (${Number(twoDigitNum)}), цифра (${firstDigit}) більша за цифру (${secondDigit}).`);
} else if (firstDigit < secondDigit) {
   alert(`З Вашого числа (${Number(twoDigitNum)}), цифра (${firstDigit}) менша за цифру (${secondDigit}).`);
}

// Task №6

let threeDigitNum1 = prompt(
   `Task №6
   Дано тризначне число.
      Визначити чи є парною сума його цифр.
      Визначити, чи кратна сума цифр п'яти.
      Визначити чи є добуток його цифр більше 100.

   Введіть любе тризначне число:`);

let firstDigitNum1 = Math.floor((Number(threeDigitNum1) % 1000)/100);
let secondDigitNum1 = Math.floor((Number(threeDigitNum1) % 100)/10);
let thirdDigitNum1 = Number(threeDigitNum1) % 10;

let threeDigitSum = firstDigitNum1 + secondDigitNum1 + thirdDigitNum1;
let sumLastDigit = threeDigitSum % 10;
let threeDigitProduct = firstDigitNum1 * secondDigitNum1 * thirdDigitNum1;

let answerTemplate = `Число (${Number(threeDigitNum1)}) розкладається на: (${firstDigitNum1}), (${secondDigitNum1}) та (${thirdDigitNum1}).

Сума цих цифр дорівнює (${threeDigitSum}). Остання цифра: (${sumLastDigit}), тому це число`;

if (threeDigitNum1 === '') {
   alert(`Ви не ввели жодного значення. ${templateRefreshPage}`);
} else if (threeDigitNum1 === null) {
   alert(`При скасуванні операції ми не зможемо вирішити цей таск. ${templateRefreshPage}`);
} else if (Number.isNaN(Number(threeDigitNum1))) {
   alert(`Якщо Ви отримали це повідомлення, значить Ви некорректно ввели дані. ${templateRefreshPage}`)
} else if (Number(threeDigitNum1) < 0) {
   alert(`Число не має бути від'ємним. ${templateRefreshPage}`);
} else if (Number(threeDigitNum1) % 1 !== 0) {
   alert(`Число не має бути дробовим, а цілим. ${templateRefreshPage}`);
} else if (Number(threeDigitNum1) < 100 || Number(threeDigitNum1) > 999) {
   alert(`Тризначне число \u2013 це числа від 100 до 999. ${templateRefreshPage}`);
} else if (firstDigitNum1 === 0) {
   alert(`Число не повинно починатися з нуля. ${templateRefreshPage}`);
// Hardcore code mode: ON.
} else if (threeDigitSum % 2 === 0) {
   if (threeDigitSum % 5 === 0) {
      if (threeDigitProduct > 100){
         alert(`${answerTemplate} парне та кратне п'яти.

Добуток цих цифр дорівнює (${threeDigitProduct}). Дане число більше за 100.`);
      } else if (threeDigitProduct < 100){
         alert(`${answerTemplate} парне та кратне п'яти.

Добуток цих цифр дорівнює (${threeDigitProduct}). Дане число менше за 100.`);
      }
   } else if (threeDigitSum % 5 !== 0){
      if (threeDigitProduct > 100){
         alert(`${answerTemplate} парне, але не кратне п'яти.

Добуток цих цифр дорівнює (${threeDigitProduct}). Дане число більше за 100.`);
      } else if (threeDigitProduct < 100){
         alert(`${answerTemplate} парне, але не кратне п'яти.

Добуток цих цифр дорівнює (${threeDigitProduct}). Дане число менше за 100.`);
      }
   }
} else if (threeDigitSum % 2 !== 0) {
   if (threeDigitSum % 5 === 0) {
      if (threeDigitProduct > 100){
         alert(`${answerTemplate} непарне та кратне п'яти.

Добуток цих цифр дорівнює ${threeDigitProduct}. Дане число більше за 100.`);
      } else if (threeDigitProduct < 100){
         alert(`${answerTemplate} непарне та кратне п'яти.

Добуток цих цифр дорівнює ${threeDigitProduct}. Дане число менше за 100.`);
      }
   } else if (threeDigitSum % 5 !== 0){
      if (threeDigitProduct > 100){
         alert(`${answerTemplate} непарне та не кратне п'яти.

Добуток цих цифр дорівнює ${threeDigitProduct}. Дане число більше за 100.`);
      } else if (threeDigitProduct < 100){
         alert(`${answerTemplate} непарне та не кратне п'яти.

Добуток цих цифр дорівнює ${threeDigitProduct}. Дане число мешне за 100.`);         
      }
   }
}

//Task №7

let threeDigitNum2 = prompt(`Task №7
   Дано тризначне число.
      Чи правда, що всі цифри однакові?
      Чи є серед цифр цифри однакові?
   
   Введіть любе тризначне число:`);

let firstDigitNum2 = Math.floor((Number(threeDigitNum2) % 1000)/100);
let secondDigitNum2 = Math.floor((Number(threeDigitNum2) % 100)/10);
let thirdDigitNum2 = Number(threeDigitNum2) % 10;

let answerTemplate2 = `Число (${Number(threeDigitNum2)}) розкладається на: (${firstDigitNum2}), (${secondDigitNum2}) та (${thirdDigitNum2}).`;

if (threeDigitNum2 === '') {
   alert(`Ви не ввели жодного значення. ${templateRefreshPage}`);
} else if (threeDigitNum2 === null) {
   alert(`При скасуванні операції ми не зможемо вирішити цей таск. ${templateRefreshPage}`);
} else if (Number.isNaN(Number(threeDigitNum2))) {
   alert(`Якщо Ви отримали це повідомлення, значить Ви некорректно ввели дані. ${templateRefreshPage}`)
} else if (Number(threeDigitNum2) < 0) {
   alert(`Число не має бути від'ємним. ${templateRefreshPage}`);
} else if (Number(threeDigitNum2) % 1 !== 0) {
   alert(`Число має бути не дробовим, а цілим. ${templateRefreshPage}`);
} else if (Number(threeDigitNum2) < 100 || Number(threeDigitNum2) > 999) {
   alert(`Тризначне число \u2013 це числа від 100 до 999. ${templateRefreshPage}`);
} else if(firstDigitNum2 === secondDigitNum2 && firstDigitNum2 === thirdDigitNum2) {
   alert(`${answerTemplate2}
   Звичайно усі цифри однакові.`);
}  else if(firstDigitNum2 !== secondDigitNum2 && firstDigitNum2 !== thirdDigitNum2) {
   if(secondDigitNum2 === thirdDigitNum2) {
      alert(`${answerTemplate2}
      Перше число (${firstDigitNum2}) не однакове з другим та третім, але друге число (${secondDigitNum2}) дорівнює третьому числу (${thirdDigitNum2}).`);
   } else if (secondDigitNum2 !== thirdDigitNum2) {
      alert(`${answerTemplate2}
      В даному випадку усі числа різні.`);
   }
} else if (firstDigitNum2 !== secondDigitNum2 && firstDigitNum2 === thirdDigitNum2) {
   alert(`Число ${Number(threeDigitNum2)} розкладається на: ${firstDigitNum2}, ${secondDigitNum2} та ${thirdDigitNum2}.
      Перше число (${firstDigitNum2}) не однакове з другим (${secondDigitNum2}), але дорівнює третьому числу (${thirdDigitNum2}).`);
} else if (firstDigitNum2 === secondDigitNum2 && firstDigitNum2 !== thirdDigitNum2) {
   alert(`Число ${Number(threeDigitNum2)} розкладається на: ${firstDigitNum2}, ${secondDigitNum2} та ${thirdDigitNum2}.
      Перше число (${firstDigitNum2}) однакове з другим (${secondDigitNum2}), але не дорівнює третьому числу (${thirdDigitNum2}).`);
}

// Task №8

let sixDigitNum = prompt(
`Task №8
   Визначити, чи є задане шестизначне число дзеркальним? (123321, 147741)

Введіть перше шестизначне число:`, '123321');

//Copy: Using ONLY material given by 3 last lessons of course :)
let firstSixDigit = Math.floor((Number(sixDigitNum) % 1000000)/100000);
let secondSixDigit = Math.floor((Number(sixDigitNum) % 100000)/10000);
let thirdSixDigit = Math.floor((Number(sixDigitNum) % 10000)/1000);
let forthSixDigit = Math.floor((Number(sixDigitNum) % 1000)/100);
let fifthSixDigit = Math.floor((Number(sixDigitNum) % 100)/10);
let sixthSixDigit = Number(sixDigitNum) % 10;
let reverseSixDigit = Number(`${sixthSixDigit}${fifthSixDigit}${forthSixDigit}${thirdSixDigit}${secondSixDigit}${firstSixDigit}`);

if (sixDigitNum === '') {
   alert(`Ви не ввели жодного значення. ${templateRefreshPage}`);
} else if (sixDigitNum === null) {
   alert(`При скасуванні операції ми не зможемо вирішити цей таск. ${templateRefreshPage}`);
} else if (Number.isNaN(Number(sixDigitNum))) {
   alert(`Якщо Ви отримали це повідомлення, значить Ви некорректно ввели дані. ${templateRefreshPage}`);
} else if (Number(sixDigitNum) < 0) {
   alert(`Число не має бути від'ємним. ${templateRefreshPage}`);
} else if (Number(sixDigitNum) % 1 !== 0) {
   alert(`Число має бути не дробовим, а цілим. ${templateRefreshPage}`);
} else if (Number(sixDigitNum) < 100000 || Number(sixDigitNum) > 999999) {
   alert(`Шестизначне число \u2013 це числа від 100000 до 999999. ${templateRefreshPage}`);
} else if (Number(sixDigitNum) === reverseSixDigit) {
   alert('Дане число дзеркальне.');
} else if (Number(sixDigitNum) !== reverseSixDigit) {
   alert('Дане число не являється дзеркальним.');
}