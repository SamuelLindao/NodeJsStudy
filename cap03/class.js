class testClass //ordem importa, precisa estar em ordem
{
    valueX = 0 //não é permitido const, nem let e nem var
    //constructor, muito util
    constructor(value) {
        this.valueX =value
    }
    printValueX()//não pode usar function
    {
        console.log(this.valueX)
    }
}

let test = new testClass(25)
test.printValueX()
test.valueX = 0;
test.printValueX()