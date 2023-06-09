// b0: khai báo và khởi tạo biến tổng =0
        // b1: tạo 1 vòng lặp vô hạn -> do..while (true))
        // b2: Nhập vào 1 số
        // b3: Kiểm tra số đó
            // 3.1: number >= 0 -> tính tổng total+=number
            // 3.2: number < 0 -> break
        // b4: In ra tổng
        let sum = 0;
        // vòng lặp vô hạn từ  do...while(true)
        do {
            let number = parseInt(prompt("Nhập vào 1 số "));
            // kiểm tra số number
            if (number >=0) {
                sum += number;
            } else {
                break;
            }
        } while (true);
        console.log("Tổng các số dương đã nhập là là:" +sum);