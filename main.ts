makerbit.onIrButton(IrButton.Number_3, IrButtonAction.Pressed, function () {
    soundExpression.spring.playUntilDone()
})
makerbit.onIrButton(IrButton.Number_8, IrButtonAction.Pressed, function () {
    music.playMelody("B - - - - - - - ", 120)
})
makerbit.onIrButton(IrButton.Hash, IrButtonAction.Pressed, function () {
    music.playMelody("E - - - - - - - ", 120)
})
makerbit.onIrButton(IrButton.Number_0, IrButtonAction.Pressed, function () {
    music.playMelody("F - - - - - - - ", 120)
})
makerbit.onIrButton(IrButton.Number_1, IrButtonAction.Pressed, function () {
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
})
makerbit.onIrButton(IrButton.Number_4, IrButtonAction.Pressed, function () {
    music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
})
makerbit.onIrButton(IrButton.Number_5, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
makerbit.onIrButton(IrButton.Number_6, IrButtonAction.Pressed, function () {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
})
makerbit.onIrButton(IrButton.Left, IrButtonAction.Pressed, function () {
    basic.showArrow(ArrowNames.West)
})
makerbit.onIrButton(IrButton.Number_7, IrButtonAction.Pressed, function () {
    music.playMelody("C5 - - - - - - - ", 120)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    basic.showArrow(ArrowNames.South)
})
makerbit.onIrButton(IrButton.Star, IrButtonAction.Pressed, function () {
    music.playMelody("G - - - - - - - ", 120)
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    basic.showArrow(ArrowNames.North)
})
makerbit.onIrButton(IrButton.Number_2, IrButtonAction.Pressed, function () {
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
makerbit.onIrButton(IrButton.Ok, IrButtonAction.Pressed, function () {
    basic.clearScreen()
    music.stopMelody(MelodyStopOptions.All)
})
makerbit.onIrButton(IrButton.Number_9, IrButtonAction.Pressed, function () {
    music.playMelody("A - - - - - - - ", 120)
})
makerbit.connectIrReceiver(DigitalPin.P0, IrProtocol.Keyestudio)
serial.writeString("Hello")
