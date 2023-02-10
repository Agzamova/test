// Задача 1
let cities = ['Москва', 'Санкт-Петербург', 'Воронеж']

function getMessage(arr) {
    console.log(arr.join(', ') + '.'); 
}

getMessage(cities)

// Задача 2
function roundNum(num) {
    let str = String(Math.ceil(num))
    let lastDig = str.slice(-1)
    let firstSyms = str.slice(0, -1)
    let result
    if (lastDig === '1' || lastDig === '2') {
        lastDig = '0'
        result = firstSyms + lastDig
    } else if (lastDig === '3' || lastDig === '4' || lastDig === '6' || lastDig === '7') {
        lastDig = '5'
        result = firstSyms + lastDig
    } else if (lastDig === '8'|| lastDig === '9') {
        lastDig = '0'
        result = (+firstSyms + 1) + lastDig
    }
    console.log(+result);
}

roundNum(41.7)

// Задача 3 падежи
function getCase(num) {
    let cases = [2, 0, 1, 1, 1, 2]
    let word = ['компьютер', 'компьютера', 'компьютеров']
    return num + ' ' + word[(num % 100 > 4 && num % 100 < 20) ? 2 : cases[(num % 10 < 5) ? num % 10 : 5]]
}

console.log(getCase(21)); 

// Задача 4
function primeNum(num) {
    if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return 'составное число'
            }
        }
        return 'простое число'
    } else {
        return 'число должно быть больше 1'
    }
}

console.log(primeNum(1151))

// Задача 5
let arr1 = [7, 17, 1, 9, 1, 17, 56, 56, 23]
let arr2 = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]

function getRepeated(arr1, arr2) {
    let a = []
    for (let i = 0; i < arr1.length; i++) {
        for (let k = i + 1; k < arr1.length; k++) {
            if (arr1[i] === arr1[k]) {
                a.push(arr1[i])
            }            
        }
    }

    let b = []
    for (let x = 0; x < arr2.length; x++) {
        for (let y = x + 1; y < arr2.length; y++) {
            if (arr2[x] === arr2[y]) {
                b.push(arr2[x])
            }
        }
    }

    let result = []

    function createArr(a, b) {
        for (let el of a) {
            for (let elem of b) {
                if (el === elem) {
                    result.push(el)
                }
            }
        }
    }

    createArr(a,b)

    let set = new Set(result)
    console.log(set);
}

getRepeated(arr1, arr2)

// Задача 6
function setSpaces(a, digits) {
    return ' '.repeat(digits - a.toString().length);
}

function getTable(num) {
    let digits = (num * num).toString().length
    let table = ''
    for (let i = 0; i <= num; i++) {
        if (i === 0) {
            table += ' '
        } else {
            table += ' ' + setSpaces(i, digits) + i
        }
    }
    table += ' \n'

    for (let i = 1; i <= num; i++) {
        table += i
        
        for (let k = 1; k <= num; k++) {
            table += ' ' + setSpaces(i * k, digits) + (i * k)
        }
        table += ' \n'     
    }  
    console.log(table);
}

getTable(5)