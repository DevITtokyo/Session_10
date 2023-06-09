let number1 = +prompt ("Nhập vào số nguyên thứ nhất");
        let number2 = +prompt ("Nhập vào số nguyên thứ hai");
        let operation = prompt ("Nhập vào phép tính muốn thực hiện");
        switch (operation) {
            case "+":
                alert (number1 + number2);
                break;
            case "-":
                alert (number1 - number2);
                break;
            case "*":
                alert (number1 * number2);
                break;
            case "/":
                alert (number1 / number2);
                break;
            default:
                alert (number1 % number2);
                break;
        }