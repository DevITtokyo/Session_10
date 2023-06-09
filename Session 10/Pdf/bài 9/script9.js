const n = parseInt(prompt("Nhập vào 1 số nguyên"));
        for (let i=1; i<=n; i++) {
            if (n%i==0) {
                console.log(`Ước số của ${n} là :` +i);
            }
        }