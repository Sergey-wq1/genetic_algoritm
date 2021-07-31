 class general {
     constructor(bin, int) {
         this.bin = bin;
         this.int = int;
     }
 }

 function BIN_code(bin, int) {
     //создадим массив, в котром будет хрнить последовательность бинарных чисел И ОБЫЧНЫХ
     let BIN = [];
     for (let i = 0; i < 7; i++) {
         BIN[i] = new general(bin[i], int[i]);
     }
     return BIN;
 }

 export default BIN_code;