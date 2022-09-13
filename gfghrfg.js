var Array = [1,9];
// var filterArr = Array.filter(checkFun);
// function checkFun(Array){
// 	return Array200;
// }
// console.log(filterArr);

var newArr = Array.map(myfunc);
function myfunc(num){
    return Math.sqrt(num);
}
console.log(newArr);