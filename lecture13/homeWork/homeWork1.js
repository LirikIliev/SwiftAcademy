function maxNum(input) {

    let maxNumber1 = 0;
    let maxNumber2 = 0;
    let inputL = input.length;


    // Вариант 1 с "For of" цикъл!

    for (let number of input) {

        if (number > maxNumber1) {
            maxNumber1 = number
        };
    };

    console.log(maxNumber1);


    // Вариант 2 с "While" цикъл!

    let index = 0;

    while (index < inputL) {

        if (input[index] > maxNumber2) {
            maxNumber2 = input[index]
        };
        index++;
    }
    console.log(maxNumber2);

    // Вариант 3, чрез функция в библиотеката на "Math."

    console.log(Math.max.apply(Math, input));

    // Вариант 4, чрез сортиране по големина, от голямо към малко. 

    let sortedArr = input.sort((a, b) => {
         return b - a
    });
    console.log(sortedArr[0]);// в този вариант, печата само 1 стойност, след като е сортирано, тоест, само най-голямото число!

    console.log(sortedArr.shift());//Изрязваме и печатаме само 1 стойност, тоест, най-голямото число!

}

maxNum([2, 4, 6, 3, 2, -123, 34, 0, 8, 245, 1, 1, 234, 234234, 111, 456456456])