/*
Nhập vào 3 số từ bàn phím, sắp xếp theo thứ tự giảm dần và in ra
     sắp xếp giảm dần
     number 1, number 2, number 3
     b1: nhập vào 3 số
     b2:  sắp xếp 3 số
         chạy vòng lặp 2 lần for (i)
            b2.1:  so sánh number1 và các số number2 và number3
            b2.2:  number 1< number 2, number3 thì đổi giá trị cho nhau
    
 */
            let number1 =+prompt("Nhập vào số thứ nhất");
            let number2 =+prompt("Nhập vào số thứ hai");
            let number3 =+prompt("Nhập vào số thứ ba")
            let max = number1;
            let min = number1;
            if (max<number2) {
                max = number2;
            } 
            if (max < number3) {
                max = number3;
            }
            if (min>number2) {
                min=number2;
            }
            if (min>number3) {
                min=number3
            }
            console.log("Kết quả sau khi sắp xếp ");
            console.log(max)
            if (max!=number1 && min!==number1){
                console.log(number1);
            };
            if (max!=number2 && min!=number2) {
                console.log(number2);
            }
            if (max!=number3 && min!=number3) {
                console.log(number3);
            }
            console.log(min);