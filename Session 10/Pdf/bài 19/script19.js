let firstNumber ;
let secondNumber;
let digit;
    for (let i= 100; i<=999; i++ ) {
        firstNumber = Math.floor(i/100)%10;
        secondNumber = Math.floor (i /10)%10;
        digit = i%10;
        if (Math.pow(firstNumber,3)+Math.pow(secondNumber,3)+Math.pow(digit,3)==i)  {
                console.log("số Armstrong:" + i);
        } 
        }