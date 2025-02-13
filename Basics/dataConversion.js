let value="33a"
console.log(typeof(value))

let valueInNumber=Number(value)
console.log(typeof(valueInNumber))
console.log(valueInNumber)//Nan


value=null
valueInNumber=Number(value)
console.log(typeof(valueInNumber))
console.log(valueInNumber)//0

value=undefined
valueInNumber=Number(value)
console.log(typeof(valueInNumber))
console.log(valueInNumber)//Nan

//Number
//"33"=>33
//"33a"=>Nan
//null=>0
//undefined=>Nan

//Boolean
//""=>false
//0=>false
//1=>true
//" Hitesh"=>true


