// let n = parseInt(prompt("Nhập vào 1 số nguyên"));
        // console.log(`Các số nguyên tố từ 1 đến ${n} là:`);
        // if (n>1) {
        //     for (let i = 2; i < n; i++) {
        //         let checkPrime = true;
        //         for (let index = 2; index <= Math.sqrt(i); i++) {
        //             if (i%index==0) {
        //                 checkPrime==false;
        //                 break;
        //             }
        //         }
        //        if (checkPrime) {
        //         console.log(i);
        //        }
        //     }
        // } else {
        //     alert ("Không có số nguyên tố nào");
        // }


        // in ra các số nguyên tố từ 1 - n
        // b1: Nhập vào số n
        // b2: duyệt các số từ 1-n -> for (index)
            //  b3: đặt cờ checkPrime = true (số nguyên tố)
            // b4: kiểm tra index xem có phải số nguyên tố hay k
                // 4.1: duyệt từ 2 -> sqrt(index) (i)
                    // 4.1.1:  index%1=0 -> checkPrime = false ( k phải số nguyên tố) -> break
                    // b5: nếu checkPrime == true -> in ra số nguyên tố
                    
                    let number = parseInt (prompt("Nhập vào 1 số"));
                    // duyệt từ 1 đến n
                    for (let index = 2; index <number; index++) {
                        // kiểm tra index có phải số nguyên tố hay k
                        let checkPrime = true;
                        // khai báo cờ để phân biệt số nguyên tố, cờ = true tương ứng với số nguyên tố 
                        alert(`${number} là số nguyên tố`);
                        for (let i = 2; i <= Math.sqrt(index); i++) {
                            if (index%i==0) {
                                checkPrime = false;
                                break;
                            } 
                            if (checkPrime == true) {
                                console.log(index);
                            }
                        }
                    }