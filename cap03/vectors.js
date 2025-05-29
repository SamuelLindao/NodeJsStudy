
const productsD = []
const products = new Array()

for(i = 0; i < 25; i++)
{
    products.push(Math.random() * 1000)
}

for (i = 0; i < products.length; i++)
{
    console.log(i + "\t"+ products[i])
}

products.slice(0,-1)//Pega de 0 a 3
products.slice(-2) //Pega os 2 ultimos elementos

products.shift()//remove o primeiro
products.pop() //remove o ultimo