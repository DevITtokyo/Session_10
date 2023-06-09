let n = parseInt(prompt("Nhập vào 1 số nguyên"));
        let count;
        count = 0;
        if (n<2) {
            alert("Không phải số nguyên tố");
        } else {
            for (let i = 2; i < n; i++) {
                if (n % i == 0) {
                    count++;
                }
            }
            if (count == 0) {
                alert("Số nguyên tố");

            } else {
                alert("Không phải số nguyên tố");
            }
        }