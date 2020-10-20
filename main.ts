basic.forever(function () {
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= 4; j++) {
            if ((i + j) % 2 == 0) {
                led.plot(i, j)
            } else {
                led.unplot(j, i)
            }
        }
    }
})
