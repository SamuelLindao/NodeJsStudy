
const productsD = []
const products = new Array()

for(i = 0; i < 25; i++)
{
    products[i] = Math.random() * 1000
}

for (i = 0; i < products.length; i++)
{
    console.log(i + "\t"+ products[i])
}