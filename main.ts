let i = 6
let j = 4
let w = 9
basic.forever(function () {
    for (let index = 0; index < 6; index++) {
        microIoT.microIoT_setIndexColor(0, 0xff0000)
        basic.showNumber(i)
        i += -1
    }
    microIoT.microIoT_setIndexColor(0, 0x000000)
    for (let index = 0; index < 4; index++) {
        microIoT.microIoT_setIndexColor(1, 0xffff00)
        basic.showNumber(j)
        microIoT.microIoT_setIndexColor(1, 0x000000)
        basic.pause(500)
        j += -1
    }
    for (let index = 0; index < 9; index++) {
        microIoT.microIoT_setIndexColor(2, 0x00ff00)
        basic.showNumber(w)
        w += -1
    }
    microIoT.microIoT_setIndexColor(2, 0x000000)
    i = 6
    j = 4
    w = 9
})
