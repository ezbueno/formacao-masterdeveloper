/*
const numero = [1, 2, 3, 4];
console.log(numero);

const e = numero[1];
console.log(e);

const c = {
    cor: "azul",
    ano: 2000
}

console.log(c.cor);

const carros = [
    {
        cor: "vermelho",
        ano: 2000
    },

    {
        cor: "branco",
        ano: 2020
    },

    {
        cor: "amarelo",
        ano: 1983
    }
]

console.log(carros[2].ano);


const letters = ["a", "b", "c"];
console.log(letters);
console.log(...letters);

const person = {
    name: "João",
    age: 20
}

const otherPerson = {
    ...person,
    hand: "right"
}

console.log(person);
console.log(otherPerson);
*/

/*
function print(msg) {
    console.log(msg);
}

print("Este é o print!");
*/

/*
const print2 = (msg) => {
    console.log(msg);
}
*/

//const print2 = (msg) => console.log(msg);
//print2("Este é o print2!");

//const print3 = () => console.log("Este é o print3!");
//print3();

//const mult = (a, b) => {return a * b};
//const mult = (a, b) => a * b;
//console.log(mult(2, 2));

/*
class Carro {
    constructor() {
        this.velAtual = 0;
    }

    acelerar(v) {
        this.velAtual += v;
    }

    velocidade() {
       return this.velAtual; 
    }
}

const carro = new Carro();
carro.acelerar(40);
carro.acelerar(10);
console.log(carro.velocidade());
*/
/*
function somar(a, b) {
    return a + b;
}
*/

/*
function multiplicar(a, b) {
    return a * b;
}
*/

/*
function processar(v1, v2, op) {
    return op(v1, v2);
}

const result1 = processar(2, 2, (a, b) => a + b);
console.log(result1);

const result2 = processar(4, 2, (a, b) => a * b);
console.log(result2);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros.map(v => v * 2));

console.log(numeros.filter(v => v % 2 === 0));
console.log(numeros.filter(v => v % 2 !== 0));
*/

const letras = ["A", "B", "C"];
const [letraA, letraB, letraC] = letras;
console.log(`letraA = ${letraA}, letraB = ${letraB}, letraC = ${letraC}`);

const newLetras = ["D", "E", "F"];
const [,, letraF] = newLetras;
console.log(`letraF = ${letraF}`);

const carro = {
    modelo: "Fusca",
    ano: 1983,
    motoristas: ["João", "Zé"]
}

const {modelo} = carro;
console.log(modelo);

const {ano, motoristas} = carro;
console.log(ano, motoristas);




