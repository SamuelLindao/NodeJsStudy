const cidade = "Cidade"

for(const chars of cidade)
{
    if(chars !== cidade.charAt(cidade.length-1))
    {
        console.log(chars)
        continue
    }
    console.log(`${chars} - Last element`)

}