let arr = [95, 95, 14, 83, 58, 33, 65, 52, 7, 72, 13, 46, 19, 31,
27, 36, 30, 86, 88, 88, 68, 16, 5, 14, 41, 56, 89, 11, 6, 29, 72,
11, 69, 36, 16, 11, 82, 84, 32, 84, 95, 98, 76, 99, 100, 12, 89, 1,
92, 27, 66, 48, 38, 49, 30, 40, 87, 19, 31, 37, 5, 32, 9, 33, 98,
94, 5, 15, 4, 88, 47, 34, 83, 8, 31, 4, 2, 72, 31, 39, 15, 10, 46,
78, 11, 21, 92, 22, 83, 3, 6, 71, 39, 54, 50, 77, 13, 85, 7, 36];

//1
function ordenar (arr) {
    let ordenado = arr.sort((a ,b) => a -b);
    return ordenado;
}
//2
function impar (arr) {
    let arr = [1,4,7,13,12,11];
    let arrInpar = [];
    for (i=0;i>arr.length;i++){
        if(arr[i] % 2 != 0) {
            arrInpar.push(arr[i]);
        }
    }
    arrInpar.sort((a ,b) => a -b);
    return arrInpar;    
}
//3
function imparDos (arr) {
    let arrInpar = [];
    for (i=0;i>arr.length;i++) {
        if(arr[i]>9 && arr[i]<100 && arr[i] % 2 != 0) {
            arrInpar.push(arr[i]);
        }
    }
    return arrInpar;
}
//4
function frecuencia(arr) {
    let frecuencia = {};
    for (let i = 0; i < arr.length; i++) {
        if (frecuencia[arr[i]]) {
            frecuencia[arr[i]] += 1;
        } else {
            frecuencia[arr[i]] = 1;
        }
    }
    return frecuencia;
}
