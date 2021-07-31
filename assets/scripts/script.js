import {
    Binar_values
} from './modules/Binar.js';
import coding_value from './modules/coding_value.js'
import get_schedule from './modules/draw.js';
import BIN_code from './modules/Bin.js';
import create_child from './modules/create_child.js';
import get_child from './modules/childs.js';
//переменные
let array_for_canvas = [], //для отрисовки первого графика
    arr_for_canvas4 = [], //отрисовка графика (оставшиеся родители + потомки)
    last_digits = [ //последние три числа в бинарном коде
        [0, 1, 1],
        [1, 0, 1],
        [0, 0, 0],
        [0, 1, 1],
        [1, 1, 1],
        [0, 1, 1],
        [0, 1, 1]
    ], // перменная хранит последние три числа бинарного кода
    Obj_LstDg = new Binar_values(last_digits),
    int_value = Obj_LstDg.GetDivision_array(),
    alfa = Obj_LstDg.GetAlfa(), //массив содержит элемента альфа
    beta = Obj_LstDg.GetBeta(), //массив содержит элемента бета
    float_digits = coding_value(int_value, alfa, beta), //массив содержащий числа, коорые были раскодированы
    BiN_ = Obj_LstDg.generalBin(), //бинарные
    general_code = BIN_code(BiN_, float_digits); //вместе
//отсоритруем по числам от меньшего к большему
general_code.sort(function (a, b) {
    return a.int - b.int;
});
let time_array = [...general_code]; //будем хранить значение
console.log(general_code)
//после нам необходимо обменяться генами, то есть берем  первый элемент
//его бинарный код и отдаем другим, чтобы появилось новое потомство
general_code.splice(5, general_code.length - 1); //вырежем плохих 
//вытаскиваем все бинарные коды в отдельные массивы
let [gc1, gc2] = [get_child(general_code, 0, 0), get_child(general_code, 2, 1)];
let child5 = [...get_child(general_code, 1, 0), ...get_child(general_code, 3, 1)],
    child6 = [...get_child(general_code, 1, 0), ...get_child(general_code, 3, 1)],
    child7 = [...get_child(general_code, 3, 0), ...get_child(general_code, 2, 0)], //создал трех потомков теперь перобразуем их в числа как и ва перудыщий раз
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

get_schedule(canvas_end, array_for_canvas); //изобразим графики