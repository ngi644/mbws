function ledOff () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
input.onButtonPressed(Button.A, function () {
    if (MyID == Users[0]) {
        radio.sendString("" + (nextPersonID))
    }
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
        radio.sendString("" + (nextPersonID))
    } else {
        ledOff()
    }
})
let nextPersonID = ""
let MyID = ""
let Users: string[] = []
ledOff()
radio.setGroup(1)
Users = ["A", "B", "C"]
MyID = Users[0]
nextPersonID = Users[1]
basic.forever(function () {
	
})
