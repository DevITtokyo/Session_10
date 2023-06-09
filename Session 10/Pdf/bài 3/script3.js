let number = +prompt ("Nhập vào 1 số nguyên có giá trị từ 0-9");
switch (number) {
    case 0:
        console.log(`${number} : Không`);
        break;
    case 1:
        console.log(`${number} : Một`);
        break;
    case 2:
        console.log(`${number} : Hai`);
        break;
    case 3:
        console.log(`${number} : Ba`);
        break;
    case 4:
        console.log(`${number} : Bốn`);
        break;
    case 5:
        console.log(`${number} : Năm`);
        break;
    case 6:
        console.log(`${number} : Sáu`);
        break;
    case 7:
        console.log(`${number} : Bảy`);
        break;
    case 8:
        console.log(`${number} : Tám`);
        break;
    case 9:
        console.log(`${number} : Chín`);
        break;
    default:
        alert ("Vui lòng nhập lại số từ 0 đến 9");
        break;
}