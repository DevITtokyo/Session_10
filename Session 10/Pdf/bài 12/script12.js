// let number = parseInt(prompt("Nhập vào 1 số"));
        // let reverse = 0;
        // while (number!==0) {
        //   let remainder = number%10;
        //     reverse= reverse*10 + remainder;
        //     number = Math.floor (number/10);
        // }
        // alert ("Số đào ngược là: "+reverse);

        /* input: abc...m vd:123456
            outpout: m...cba
            Giải pháp: tách từng chữ số: m,...,c,b,a
            vòng 1: 6
            vòng 2: 5
            vòng 3: 4
            vòng 4: 3
            .....
            -> sử dụng vòng lặp while (number>0)
            -> mỗi vòng tính:
                +number%10 -> tách ra số cuối 6
                +number = Math.floor (number/10) ->12345

        */

        // b1: Nhập vào số number
        // b2: Sử dụng vòng While với điều kiện number>0
        // b3: Tính toán:
            // 3.1: Lấy ra số hàng đvi -> number%10
            // 3.2: Tính lại giá trị number -> number=Math.floor (number/10)
            // 3.3 In ra chữ số hàng đơn vị -> document.write (đơn vị)

            let number = parseInt(prompt("Nhập vào 1 số nguyên"));
            // đặt biến hàng đơn vị cần tách
            let digit;
            let reverse = '';
            // lặp tới khi number = 0 thì dừng lại
            while (number>0) {
                // tách hàng đơn vị
                let digit = number%10;
                // trả về số còn lại
                number = Math.floor(number/10);
                // in ra số hàng đơn vị
                reverse+=digit;
            }
            document.write (`Số đảo ngược của là :` +reverse );