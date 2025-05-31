const numeros = [1,2,3,4,5,6]

const dobros = numeros.map(num => num * 2)
const values = numeros.filter(num => num % 2 === 0)
const soma = numeros.reduce((acumulator, num)=> acumulator + num, 0)
console.log(soma/numeros.length)
console.log(dobros.join(', '))
console.log(values.join(', '))
