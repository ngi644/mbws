function ledOff () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
input.onButtonPressed(Button.A, function () {
    radio.sendString("B")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    if (receivedString == MyID) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(500)
        radio.sendString("C")
    } else {
        ledOff()
    }
})
let MyID = ""
ledOff()
radio.setGroup(1)
MyID = "A"
basic.forever(function () {
	
})
