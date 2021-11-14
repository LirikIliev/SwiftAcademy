function namesFroArray(input) {

    // Вариант 1 за решение на тази задача!
    let arrL = input.length;
    let evenNames = [];
    let oddNames = [];

    for (let i = 0; i < arrL; i++) {

        if (i % 2 === 0) {
            evenNames.push(input[i])
        }
        else {
            oddNames.push(input[i])
        }
    };

    let joinedEvenNames = evenNames.join(", ");
    let joinedOddNames = oddNames.join(", ")

    console.log(joinedEvenNames);
    console.log(joinedOddNames);

    //Вариант 2 за решение на тази задача

    let arrNames = function arrNames() {
        let evevNamesFromArr = [];
        let oddNamesFromArr = [];

        for (let j = 0; j < input.length; j += 2) {
            evevNamesFromArr.push(input[j]);
        };

        for (let k = 1; k < input.length; k += 2) {
            oddNamesFromArr.push(input[k]);
        };
        console.log(evevNamesFromArr.join(", "));
        console.log(oddNamesFromArr.join(", "));
    };
    let print = arrNames();


    // Вариант 3 за решение на тази задача, While +JSON. 

    let counter = 0;
    let evnNameees = [];
    let OdddNamess = [];
    while (counter < input.length) {

        if (counter % 2 === 0) {
            evnNameees.push(input[counter]);
            counter++;
        }
        else {
            OdddNamess.push(input[counter]);
            counter++;
        }
    };
    
    console.log(JSON.stringify(evnNameees));
    console.log(JSON.stringify(OdddNamess));

}
namesFroArray(["Gosho", "Tosho", "Pesho", "Ivan", "Stoqn", "Dragan", "Kiril"])
