let a = +prompt ("Nhập vào giá trị cạnh thứ nhất");
        let b = +prompt ("Nhập vào giá trị cạnh thứ hai");
        let c = +prompt ("Nhập vào giá trị cạnh thứ ba");
        if ( a + b > c && 
             a + c > b &&
             c + b > a ) {
            let checkCan = false;
            if (a == b || b == c ||c == a ) {
                checkCan = true;
                alert ('Đây là tam giác cân');
            } 
            let checkVuong = false;
            if (a**2 == b**2 + c**2 ||
                    b**2 == a**2 + c**2 ||
                    c**2 == a**2 + b**2 ){
                    checkVuong = true;
                    alert ('Đây là tam giác vuông');
                } 
            if (a == b && c**2 == a**2 + b**2 || 
                b == c && a**2 == b**2 + c**2 ||
                c == a && b**2 == a**2 + c**2
                ) {
                    alert ('Đây là tam giác vuông cân');
            } 
            let checkDeu = false
            if (a==b==c){
                checkDeu = true
                alert ('Đây là tam giác đều');
            }
            if (checkCan) {
                if (checkVuong) {
                    
                } else {
                    alert ('Đây là tam giác vuông cân');
                }
            }
        } else {
                alert ("Đây không phải là 1 tam giác");
        }