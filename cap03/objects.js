const cars = []
cars.push({modelo: "Sandero", preco: 450})
cars.push({modelo: "Valor", preco: 42})
const args = process.argv.slice(2);
for(const car of cars) {
    if(args.includes('modelos'))
        console.log(car.modelo)
    else
        console.log(car.preco)
}

console.log("Desestruturação")
for(const car of cars)
{
    const{modelo, preco} = carro
    console.log(`${modelo}, ${preco}`)
}