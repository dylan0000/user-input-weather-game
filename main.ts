let weather_guy: Sprite = null
let weather = game.askForString("what is your weather prediction? ")
game.splash("prediction" + weather)
let weather_effects = Math.randomRange(0, 2)
game.splash(weather_effects)
if (weather_effects == 0) {
    effects.blizzard.startScreenEffect()
    weather_guy = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 1 . . . . . . . 
. . . . . . 1 f f 1 . . . . . . 
. . . . . 1 f f f f 1 . . . . . 
. . . . 1 f f f f f f 1 . . . . 
. . . 1 f f f f f f f f 1 . . . 
. . . 2 2 f 1 f f 1 f 2 2 . . . 
. . . 2 2 2 2 f f 2 2 2 2 . . . 
. . . 2 2 2 2 f f 2 2 2 2 . . . 
. . 2 2 2 2 2 f f 2 2 2 2 2 . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
`, SpriteKind.Player)
} else if (weather_effects == 1) {
    effects.clouds.startScreenEffect()
    weather_guy = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 1 . . . . . . . 
. . . . . . 1 f f 1 . . . . . . 
. . . . . 1 f f f f 1 . . . . . 
. . . . 1 f f f f f f 1 . . . . 
. . . 1 f f 1 f f 1 f f 1 . . . 
. . . 1 f f f f f f f f 1 . . . 
. . . 1 f f f f f f f f 1 . . . 
. . . 1 f f f f f f f f 1 . . . 
. . 1 f f f f f f f f f f 1 . . 
. . 1 f f f f f f f f f f 1 . . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
`, SpriteKind.Player)
} else if (weather_effects == 2) {
    effects.starField.startScreenEffect()
    weather_guy = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 1 . . . . . . . 
. . . . . . 1 f f 1 . . . . . . 
. . . . . 1 f f f f 1 . . . . . 
. . . . 1 f f f f f f 1 . . . . 
. . . 1 f f f f f f f f 1 . . . 
. . . 1 f f 1 f f 1 f f 1 . . . 
. . . 1 f f f f f f f f 1 . . . 
. . . 1 f f f f f f f f 1 . . . 
. . 1 f f f f f f f f f f 1 . . 
. . 1 f f f f f f f f f f 1 . . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
`, SpriteKind.Player)
} else {
    game.splash("type a different weather", "pick star/cloud/snow")
    game.reset()
}
