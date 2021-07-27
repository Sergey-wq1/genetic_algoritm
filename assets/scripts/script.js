//переменные
let array_for_canvas = [], //для отрисовки первого графика
    arr_for_canvas4 = [], //отрисовка графика (оставшиеся родители + потомки)
    last_digits = [], //последние три числа в бинарном коде
    alfa = [],
    beta = []; //первые два числа 
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

last_digits = [
    [0, 1, 1],
    [1, 0, 1],
    [0, 0, 0],
    [0, 1, 1],
    [1, 1, 1],
    [0, 1, 1],
    [0, 1, 1]
]; // перменная хранит последние три числа бинарного кода
let Obj_LstDg = new Binar_values(last_digits),
    int_value = Obj_LstDg.GetDivision_array();
alfa = Obj_LstDg.GetAlfa(); //массив содержит элемента альфа
beta = Obj_LstDg.GetBeta(); //массив содержит элемента бета
let float_digits = coding_value(int_value, alfa, beta), //массив содержащий числа, коорые были раскодированы
    BiN_ = Obj_LstDg.generalBin(), //бинарные
    general_code = BIN_code(BiN_, float_digits); //вместе
//отсоритруем по числам от меньшего к большему
general_code.sort(function (a, b) {
    return a.int - b.int;
});
time_array = [...general_code]; //будем хранить значение

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
let general_array_end_float = [general_array_end[0][1], general_array_end[1][1], general_array_end[2][1]];
//реализуем графики
general_array_end_float.sort(function (a, b) {
    return a - b;
});
time_array.forEach(function (elem, i) {
    array_for_canvas[i] = elem.int;
})
arr_for_canvas4 = [...array_for_canvas];
arr_for_canvas4.splice(4, arr_for_canvas4.length - 1);
let canvas_end = [...arr_for_canvas4, ...general_array_end_float];
canvas_end.sort(function (a, b) {
    return a - b;
});