//функция рандома===========================================
function Random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let general = function (bin, int) { //соединим бин с обычными
    this.bin = bin;
    this.int = int;
}
// с помощью логарифмической формулы из банарных перекодируем в обычное представление
function coding_value(int_digits, al_fa, be_ta) { // новый массив, а второй массив содержащий числа преекодированные из бинарного
    let float_value = []; // новый массив
    for (let i = 0; i < 7; i++) {
        float_value[i] = Math.pow(-1, be_ta[i]) * Math.exp((Math.pow(-1, al_fa[i]) * int_digits[i]));
    }
    return float_value;
}

function BIN_code(bin, int) {
    //создадим массив, в котром будет хрнить последовательность бинарных чисел И ОБЫЧНЫХ
    let BIN = [];
    for (let i = 0; i < 7; i++) {
        BIN[i] = new general(bin[i], int[i]);
    }
    return BIN;
}
//функция для двоичных чисел, которые будут находиться в самом конце=============================================
let GetBinarryArray__end = function (digits) {
    this.digits = digits;
    let Alfa = [],
        Beta = [];
    //задаем функцию для нахождения массива состоящая из [., ., .] в конце формулы чисел (из 3)=======================================
    this.GetDivision_array = function () { //создадим новые перменные
        let int_CODE = [0, 0, 0, 0, 0, 0, 0],
            special_counter_forint_CODE = 0; //счетчик в цикле в массивке
        while (true) {
            let counter_IN_formula = 3; //перменная которую буду использовать для формулы
            for (let i = 0; i < 3; i++) {
                //формула, с помощью которой мы будем раскодировать бинарный код
                int_CODE[special_counter_forint_CODE] += digits[special_counter_forint_CODE][i] * Math.pow(2, counter_IN_formula - 1);
                counter_IN_formula--;
            }
            special_counter_forint_CODE++;
            if (special_counter_forint_CODE == int_CODE.length - 1) {
                break;
            }
        }
        return int_CODE;
    }
    //теперь необходимо найти первые два числа альфу и бету
    this.GetAlfa = function () {
        for (let i = 0; i < 7; i++) {
            Alfa[i] = Random(0, 1);
        }
        return Alfa;
    }
    this.GetBeta = function () {
        for (let i = 0; i < 7; i++) {
            Beta[i] = Random(0, 1);
        }
        return Beta;
    }
    this.generalBin = function () { //будем скомпоновывать
        let BeTa = this.GetBeta(), //вернем бету и альфу
            AlFa = this.GetAlfa(),
            gen = []; //просто массив в котором мы будет возвр знач-я
        for (let i = 0; i < 7; i++) {
            gen[i] = [AlFa[i], BeTa[i], ...digits[i]];
        }
        return gen;
    }
}

let last_digits = [
        [0, 1, 1],
        [1, 0, 1],
        [0, 0, 0],
        [0, 1, 1],
        [1, 1, 1],
        [0, 1, 1],
        [0, 1, 1]
    ], // перменная хранит последние три числа бинарного кода
    Obj_LstDg = new GetBinarryArray__end(last_digits),
    int_value = Obj_LstDg.GetDivision_array();
const alfa = Obj_LstDg.GetAlfa(), //массив содержит элемента альфа
    beta = Obj_LstDg.GetBeta(); //массив содержит элемента бета
let float_digits = coding_value(int_value, alfa, beta), //массив содержащий числа, коорые были раскодированы
    BiN_ = Obj_LstDg.generalBin(), //бинарные
    general_code = BIN_code(BiN_, float_digits); //вместе
//отсоритруем по числам от меньшего к большему
general_code.sort(function (a, b) {
    return a.int - b.int;
});
console.log(general_code);
//после нам необходимо обменяться генами, то есть берем  первый элемент
//его бинарный код и отдаем другим, чтобы появилось новое потомство
general_code.splice(5, general_code.length - 1); //вырежем плохих 
//вытаскиваем все бинарные коды в отдельные массивы
function create_child(copy) {
    let copy_one = [];
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            copy_one[i] = copy.slice(0, 2);
        } else if (i === 1) {
            copy_one[i] = copy.slice(2, 5);
        }
    }
    return copy_one;
}

let one = create_child(general_code[0].bin),
    three = create_child(general_code[1].bin),
    four = create_child(general_code[2].bin),
    five = create_child(general_code[3].bin),
    six = create_child(general_code[4].bin); //получаем первые 2 и последние 3
//в итоге создам три потомка
let child5 = [...one[0], ...six[1]],
    child6 = [...one[1], ...five[1]],
    child7 = [...three[0], ...four[1]], //создал трех потомков теперь перобразуем их в числа как и ва перудыщий раз
    array_for_child = [child5, child6, child7];

function transf_coding(m) {
    let set_ofNumbers = 0,
        count = 3,
        setofvalue = 0;
    for (let i = 2; i < m.length; i++) {
        set_ofNumbers += m[i] * Math.pow(2, count - 1);
        count--;
    }
    setofvalue = Math.pow(-1, m[1]) * Math.exp((Math.pow(-1, m[0]) * set_ofNumbers));
    return setofvalue;
}
let connect1 = transf_coding(child5),
    connect2 = transf_coding(child6),
    connect3 = transf_coding(child7),
    arr_for_connect = [connect1, connect2, connect3];
let general_array_end = [];
for (let i = 0; i < 3; i++) {
    general_array_end[i] = [array_for_child[i], arr_for_connect[i]]
}
general_array_end.sort(function (a, b) {
    return a.int - b.int;
});
console.log(general_array_end);