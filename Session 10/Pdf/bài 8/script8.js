const n = parseInt(prompt ("Nhập vào 1 số nguyên n : ")) ;
let sum = 0
        console.log(`Các số chẵn từ 1 đến ${n} là: `);  
        for (let i =1 ; i<=n; i++) {
            if (i%2==0) {
                sum +=n;
                console.log(i);
            }
        }
        console.log('Tổng của số chẵn là: ' +sum);