let browser = prompt ("Nhập vào kiểu trình duyệt muốn sử dụng ví dụ như Edge, Chrome,..")
switch (browser) {
    case 'Edge':
        alert ("You're got the Edge!");
        break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert("Okay we support these browsers too");
        break;
    default:
        alert("We hope that this page looks ok!")
        break;
}