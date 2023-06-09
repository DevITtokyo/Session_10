let number1 = +prompt ("Nhập vào số nguyên thứ nhất");
        let number2 = +prompt ("Nhập vào số nguyên thứ hai");
        let number3 = +prompt ("Nhập vào số nguyên thứ ba");
        let min = number1;
        if (min > number2) {
            min = number2
        }
        if (min > number3) {
            min = number3
        }
        let max = number1;
        if (max < number2) {
            max = number2
        }
        if (max < number3) {
            max = number3
        }
        document.write("Giá trị nhỏ nhất là : "+min+ '<br>');
        document.write("Giá trị lớn nhất là : "+max);