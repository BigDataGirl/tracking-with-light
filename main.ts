basic.showIcon(IconNames.Heart)
Tinybit.RGB_Car_Program().clear()
Tinybit.RGB_Car_Program().show()
basic.forever(function () {
    if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 70)
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.Black) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 70)
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.Black)) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 70)
    } else {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
        Tinybit.Music_Car(Tinybit.enMusic.ringtone)
    }
})
basic.forever(function () {
    if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
        Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.Black) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
        Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.Black)) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
        Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Red))
    } else {
        Tinybit.RGB_Car_Big(Tinybit.enColor.White)
        Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.White))
    }
})
basic.forever(function () {
    if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        basic.showArrow(ArrowNames.South)
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.Black) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.Black)) {
        basic.showArrow(ArrowNames.SouthWest)
    } else {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
        basic.showIcon(IconNames.No)
    }
})
