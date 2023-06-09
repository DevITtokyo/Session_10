let scoreHtml = +prompt ("Nhập vào điểm HTML");
        let scoreCss = +prompt ("Nhập vào điểm CSS");
        let scoreJc = +prompt ("Nhập vào điểm Javascript");
        let average = (scoreHtml + scoreCss + scoreJc) / 3;
       if (average < 5) {
        document.write("Xếp loại : Yếu")
       } else if (5<=average && average<6) {
        document.write("Xếp loại : Kém")
    } else if (6<=average && average<7) {
        document.write("Xếp loại : Trung bình")
    } else if (7<=average && average<8) {
        document.write("Xếp loại : Khá")
    } else if (8<=average && average<9) {
        document.write("Xếp loại : Giỏi")
    } else {
        document.write("Xếp loại : Xuất sắc")
    }