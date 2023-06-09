/*nhập vào 
    5000<= nhiên liệu <= 30000
    1<= phi hành gia <= 7
    độ cao = 50km -> 100 * phi hành gia
    độ cao tối đa
    số nhiên liệu còn lại */
    do {
        pilot =+prompt ("Nhập vào số phi hành gia");
        if (isNaN(pilot)) {
            alert("Vui lòng nhập giá trị phi hành gia trong khoảng 1-7");
        } else {
            break;
        }
    }while (true);
    // B2: Tính độ cao tối đa và số nhiên liệu cofn lại
    // B2.1:  1 lần tăng độ cao 50km thì cần bao nhiêu nhiên liệu
    let fuel50km = 100*pilot;
    // B2.2 tàu con thoi tăng độ cao được bao nhiêu lần
    let times = Math.floor (fuel/fuel50);
    // B2.3 Tính đọ cao tối đa
    let maxHight = times*50;
    // b2.4 Tính số nhiên liệu còn lại
    let fuelRemain = fuel %fuel50km;
    alert ("Độ cao tối đa:" +maxHeight+ "Số nhiên liệu còn lại:"+fuelRemain);
