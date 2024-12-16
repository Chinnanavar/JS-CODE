const accountId = 144553
let accountEmail = "yash123#gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2

accountEmail = "abc@123gamil.com"
accountPassword = "2121"
accountCity = "vadodara"

console.log(accountId);

/* Prefer not t use var
becasue of issue in block scope and function scope
*/
console.table([accountEmail, accountId, accountPassword, accountCity,accountState])