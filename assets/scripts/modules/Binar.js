import Random from './random.js'
export class Binar_values {
    constructor(digits) {
        this.digits = digits;
    }
    //задаем функцию для нахождения массива состоящая из [., ., .] в конце формулы чисел (из 3)=======================================
    GetDivision_array() { //создадим новые перменные
        let int_CODE = [0, 0, 0, 0, 0, 0, 0];
        let dig = this.digits; //скопируем массив
        function rec(special_counter_forint_CODE) {
            let counter_IN_formula = 3; //переменная которую буду использовать для формулы
            if (special_counter_forint_CODE == int_CODE.length - 1) {
                return int_CODE;
            } else if (special_counter_forint_CODE < int_CODE.length) {
                for (let i = 0; i < 3; i++) {
                    //формула, с помощью которой мы будем раскодировать бинарный код
                    int_CODE[special_counter_forint_CODE] += dig[special_counter_forint_CODE][i] * Math.pow(2, counter_IN_formula - 1);
                    counter_IN_formula--;
                }
                return rec(special_counter_forint_CODE + 1);
            }
        }
        let int_code = rec(0)
        return int_code;
    }
    //теперь необходимо найти первые два числа альфу и бету
    GetAlfa() {
        let Alfa = [];
        for (let i = 0; i < 7; i++) {
            Alfa[i] = Random(0, 1);
        }
        return Alfa;
    }
    GetBeta() {
        let Beta = [];
        for (let i = 0; i < 7; i++) {
            Beta[i] = Random(0, 1);
        }
        return Beta;
    }
    generalBin() { //будем скомпоновывать
        let BeTa = this.GetBeta(), //вернем бету и альфу
            AlFa = this.GetAlfa(),
            gen = []; //просто массив в котором мы будет возвр знач-я
        for (let i = 0; i < 7; i++) {
            gen[i] = [AlFa[i], BeTa[i], ...this.digits[i]];
        }
        return gen;
    }
}