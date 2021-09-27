// Cоздать массив из 10 случайных чисел и написать несколько фунций

//метод Мэс.рандом

//заполнить с помощью цикла фор

let randomNumbers = []

for (let i = 0; i < 10; i++) {

    randomNumbers.push(Math.floor(Math.random() * 10) + 1);
}

function sortArray(arr) {
    arr.sort((a, b) => b - a);
}

console.log(1, [...randomNumbers]);



console.log(2, [randomNumbers])