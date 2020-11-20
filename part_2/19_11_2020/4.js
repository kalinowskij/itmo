// Написать генератор случайных “русских слов”. Сформировать слово используя правила:
//     - определить длину слова случайно, но в диапазоне от 3 до 5 букв;
// - начинать слово с гласной или согласной (определить случайно);
// - чередовать гласные и согласные буквы в слове;
// - буквы выбираются случайно.


// Алфавит
let alphabet = ['а', 'е', 'ё', 'и', 'о', 'у', 'э', 'ю', 'я', 'б', 'в', 'г', 'д', 'ж', 'з',
    'й', 'к', 'л', 'м', 'н', 'п', 'р', 'с',
    'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ'];

// Функция определения случайных чисел
function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

// Получить случайную гласную букву
function getVowel(){
    return alphabet[randomInteger(0, 8)];
}

// Получить случайную согласную букву
function getConsonant(){
    return alphabet[randomInteger(9, 29)];
}

// Получит слово
function getWord(){
    let word = ""; // Строк для слова
    let wordLength = randomInteger(3, 5); // Длина слова
    let startSymbol = randomInteger(0, 1); // Первый символ, гласный или согласный
    // Цикл по количеству букв в слове
    for(let i = 0; i < wordLength; i++){
        if((i - startSymbol) % 2 === 0){
            word += getVowel();
        }else{
            word += getConsonant();
        }
    }
    return word;

}

console.log(getWord());
