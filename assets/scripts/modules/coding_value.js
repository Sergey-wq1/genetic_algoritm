function coding_value(int_digits, al_fa, be_ta) { // новый массив, а второй массив содержащий числа преекодированные из бинарного
    let float_value = []; // новый массив
    for (let i = 0; i < 7; i++) {
        float_value[i] = Math.pow(-1, be_ta[i]) * Math.exp((Math.pow(-1, al_fa[i]) * int_digits[i]));
    }
    return float_value;
}

export default coding_value;