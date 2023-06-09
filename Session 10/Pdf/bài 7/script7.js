let month = +prompt ("Nhập vào tháng");
        let year = +prompt ('Nhập vào năm');
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                alert (`Tháng ${month} có 31 ngày`);
                break;
            case 4:
            case 6:
            case 9:
            case 11:
            alert (`Tháng ${month} có 31 ngày`);
                break;
            case 2:
                if (month==2 && year%2==0 && year%100!==0 ||month==2 && year%400==0) {
                    alert ('Tháng 2 có 29 ngày'); 
                } else {
                    alert ('Tháng 2 có 28 ngày');
                }
                break;
            default:
                alert ("Vui lòng nhập lại tháng");
                break;
        }