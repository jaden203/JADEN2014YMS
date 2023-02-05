input.onButtonPressed(Button.A, function () {
    basic.showString(timeanddate.time(timeanddate.TimeFormat.HMMSSAMPM))
})
input.onButtonPressed(Button.AB, function () {
    basic.showString(timeanddate.time(timeanddate.TimeFormat.HMMSSAMPM))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + timeanddate.date(timeanddate.DateFormat.YYYY_MM_DD) + "-" + timeanddate.time(timeanddate.TimeFormat.HMMSSAMPM))
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.playTone(311, music.beat(BeatFraction.Quarter))
    타임스탬프 = timeanddate.dateTime()
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showString(타임스탬프)
})
let 타임스탬프 = ""
timeanddate.setTime(8, 0, 0, timeanddate.MornNight.PM)
timeanddate.setDate(2, 5, 2023)
music.setBuiltInSpeakerEnabled(true)
music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 1666, 2700, 188, 255, 159, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
basic.forever(function () {
	
})
