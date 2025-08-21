

const n1 = [1,2,3,4,5,7,8,9,0,12,23,34,45,63,33,32,22,21,76]

for (let i = 0; i < n1.length; i++) {
    const numero = n1[i];
    
    if (numero % 2 === 0) {
        console.log(`${numero} é par`);
    } else {
        console.log(`${numero} é ímpar`);
    }
}