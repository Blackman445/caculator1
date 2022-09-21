input.onButtonPressed(Button.A, function () {
    num1 += 1
    basic.showNumber(num1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(num1 + num2)
})
input.onButtonPressed(Button.B, function () {
    num2 = 1
    basic.showNumber(num2)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(0)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showNumber(num1 - num2)
})
let num2 = 0
let num1 = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
