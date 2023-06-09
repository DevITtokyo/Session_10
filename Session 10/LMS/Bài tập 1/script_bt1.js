let yourHeight = +prompt ("Nhập vào chiều cao của bạn");
let yourWeight = +prompt ("Nhập vào cân nặng của bạn");
let bmi = yourWeight/(yourHeight^2);
if (bmi<18) {
    alert ("Underweight")
} else if (18<=bmi && bmi<=25) {
    alert('Normal');
} else if (bmi> 25 && bmi<30 ) {
    alert('Overweight');
} else {
    alert('Obese');

}