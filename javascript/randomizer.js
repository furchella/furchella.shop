function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



window.onload = function() {
    const chance = Math.floor(Math.random() * 100)
    const lmd = Math.floor(Math.random() * 400)
    console.log(chance)
    if (chance === 69) {
        randNum = getRandomInt(1, 7)
        console.log(randNum)
        if (randNum === 1) {
            document.body.style.backgroundImage = "url('./assets/img/r1.png')"
            console.log('Image 1')
        }
        if (randNum === 2) {
            document.body.style.backgroundImage = "url('./assets/img/r2.png')"
            console.log('Image 2')
        }
        if (randNum === 3) {
            document.body.style.backgroundImage = "url('./assets/img/r3.png')"
            console.log('Image 2')
        }
        if (randNum === 4) {
            document.body.style.backgroundImage = "url('./assets/img/r4.png')"
            console.log('Image 3')
        }
        if (randNum === 5) {
            document.body.style.backgroundImage = "url('./assets/img/r5.png')"
            console.log('Image 4')
        }
        if (randNum === 6) {
            document.body.style.backgroundImage = "url('./assets/img/r6.png')"
            console.log('Image 6')
        }
        if (randNum === 7) {
            document.body.style.backgroundImage = "url('./assets/img/letmedoitforyou.png')"
            console.log('Image 7')
        }
    }
    console.log(lmd)
    if (lmd === 169) {
        let owoButton = document.getElementById("e-btn")
        owoButton.removeAttribute("hidden")
        setTimeout(function() {
            owoButton.href = "https://furchella.org/letmedoitforyou"
        }, 60000)
    }
}