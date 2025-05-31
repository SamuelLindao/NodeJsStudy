let cidade = "Cidade"

for(const chars of cidade)
{
    if(chars !== cidade.charAt(cidade.length-1))
    {
        console.log(chars)
        continue
    }
    console.log(`${chars} - Last element`)

}
console.log(`Char at 2 == ${cidade.charAt(2)}`)

cidade = cidade.replace("dad", "samuel")
console.log(cidade)