/* Nhập vào 3 số, in ra dấu + hoặc - của tích 3 số */
let number1 = parseInt(prompt("Nhập vào số thứ nhất"));
        let number2 = parseInt(prompt("Nhập vào số thứ hai"));
        let number3 = parseInt(prompt("Nhập vào số thứ ba"));
        let result = number1*number2*number3;
        if (result<0) {
            console.log("Dấu của tích 3 số là -");
        } else if (result >0 ) {
            console.log("Dấu của tích 3 số là +");
        } else {
            console.log("Dấu của tích 3 số là 0");
        }
