let Krus = 0
let Kopp = 0
let Produkt = 0
input.onButtonPressed(Button.A, function () {
    Krus += 5
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    if (Kopp == 10) {
        for (let indeks = 0; indeks <= 255; indeks++) {
            radio.setTransmitPower(7)
            radio.setGroup(indeks)
            if (indeks == 80) {
                radio.sendString("ALT RETT")
            } else {
                radio.sendString("FEIL")
            }
        }
    }
})
radio.onReceivedString(function (receivedString) {
    for (let index = 0; index < 4; index++) {
        basic.showString(receivedString)
    }
})
input.onButtonPressed(Button.B, function () {
    Kopp += 1
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.clearScreen()
})
basic.forever(function () {
    Produkt = Kopp * Krus
    radio.setGroup(Produkt)
})
