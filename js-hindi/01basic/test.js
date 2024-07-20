
let accountEmail = "hc@gmail.com"
let accountPassword = "121212"
let $accountCity;
let accountpay = "gpay";
let accountState = "Tripura";
const accountId = "8546"

/**
 * notes:
 *Prefer not  to use a var
 because of issue in block scope and functional scope
 */
console.log([accountEmail, accountId, accountPassword, accountState, accountpay]);
console.table( [accountId, accountEmail, accountPassword, $accountCity, accountpay]);

const a = "sunil";
console.log(a);



