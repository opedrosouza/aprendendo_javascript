// Um convertor de dólares para reais

let valorDoDolar = 5;
let dolarParaConverter = prompt("Qual o valor em dólar que você quer converter?");
let valorConvertido    = dolarParaConverter * valorDoDolar;
alert(`O valor convertido é ${valorConvertido} reais.`); // interpolação de variáveis com template string
console.log("O valor convertido é " + valorConvertido + " reais."); // concatenação de strings com o operador +