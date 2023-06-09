console.log(" Giá trị các số từ 0 đến -20 là: ");
for (let i = 0 ; i >= -20; i--) {
    console.log(i);
}

console.log("Các số lẻ từ 3 đến -29 là: ");
for (let oddNumber = 3; oddNumber >= -29; oddNumber--) {
    if (oddNumber%2!==0) {
        console.log(oddNumber);
    }
}

console.log('Các số chẵn từ 12 đến -14 là : ');
for (let evenNumber = 12; evenNumber >=-14; evenNumber--) {
    if (evenNumber%2==0) {
        console.log(evenNumber);
    }
}

console.log("Các số là bội của 3 từ 50 đến 20 là : ");
for (let number = 50; number >=20; number--){
    if (number%3==0) {
        console.log(number);
    }
}