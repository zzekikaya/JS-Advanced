let add = (function(){
    let sum = 0;
    return function calcSum(num) {
        sum += Number(num);
        calcSum.toString = () => sum;
        return calcSum;
    }
})();

// console.log('' + add(1));
console.log('' + add(1)(6)(-3));