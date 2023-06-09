/*
Viết chương trình lặp lại các số nguyên từ 1 đến 100. Nhưng đối với
bội số của ba in "Fizz" thay vì số và đối với bội số của năm in
"Buzz". Đối với bội số của cả ba và năm in ra "FizzBuzz". 
 */
for (i=1; i <=100; i++) {
    let checkFizz = false;
    if (i%3==0) {
        checkFizz = true;
    }
    let checkBuzz = false;
    if (i%5==0) {
        checkBuzz = true;
    }
    if (checkFizz && !checkFizz) {
        console.log("Fizz");
    } else if (!checkFizz && checkBuzz) {
        console.log("Buzz");
    } else if (checkFizz && checkBuzz){
        console.log("FixBuzz");
    }
}