const accountId=14453
//accountId=2
console.log(accountId)//to print values on developer console
let accountEmail="arvind@gmail.com"//has block scope 
var password="12345"//never use var (no block scope)
/*If you declare an object or array with const, you cannot
 reassign the entire object/array, but you can still modify the values
  inside it (e.g., you can add or remove elements from an array).*/
accountcity="Jaipur"//rubbish dont use (but know that even this is used)
let accountState;//if u only declare and no value is added it will print undefined

accountEmail="xyz@gmail.com"
password="689"
accountcity="Bengaluru"

console.table([accountId,accountEmail,password,accountcity,accountState])
