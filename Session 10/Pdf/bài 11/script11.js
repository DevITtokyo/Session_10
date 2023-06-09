let n = parseInt(prompt('Nhập vào 1 số nguyên'));
let sum = 0;
if (n <=1) {
    alert('Số nhỏ hơn hoặc bằng 1 không phải là số hoàn hảo');
}
for (let i=2; i < n ; i++) {
    if (n%i==0) {
        sum+=i ;
        sum=n ;
        alert (`${n} là số hoàn hảo`);
        break;
    }else {
        alert (`${n} không phải là số hoàn hảo`);
        break;
    }
}