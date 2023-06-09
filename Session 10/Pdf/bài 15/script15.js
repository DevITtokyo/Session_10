/* 
        Nhập vào số tiền gửi ngân hàng ban đầu, lãi suất năm, số tháng gửi.
        Tính số tiền lãi và tiền nhận được sau thời gian gửi biết tính lãi theo
        lãi nhập gốc

        input: amonut, rate, months
        output: lastesAmount, intersest

        b1: Nhập vào số tiền gửi (amount), lãi xuất năm (rate), số tháng gử (month)
        b2: tính lãi suất tháng rateMonth = rate/12
        b3; tổng số tiền lãi interset = 0
        b4: duyệt các tháng gửi -> tính số tiền lãi hàng tháng -> for
            b4.1: tính lãi : interestMonth = rateMonth * amount
            b2.2: Lãi nhập gốc : amount = amount + interestMonth
            b4.3: cộng dồn số tiền lãi : interest += interestMonth
        b5:  In ra tiền nhận được và tổng lãi suất sau khi gửi kết thúc
            tiền lãi nhận được sau khi kết thúc gửi : amount
            tiền lãi hận được sau khi kết thúc gửi: interest
*/

let amount = +prompt("Nhập vào số tiền gửi");
        let rate = +prompt("Nhập vào lãi xuất năm");
        let months = +prompt ("Nhập vào số tháng gửi");
        let rateMonth = rate/12;
        let interest = 0;
        for (let i = 1; i<=months; i++){
            let interestMonth = rateMonth * amount / 100;
            amount = amount + interestMonth;
            interest += interestMonth;
        }
        console.log("Tiền nhận được sau khi gửi là:" +amount);
        console.log('Số tiền lãi nhận được sau khi kết thúc gửi là :' +interest);
