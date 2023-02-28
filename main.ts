controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 200, 0)
})
let mySprite2: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    2 2 . . . . . . . . . . . . . . 
    2 4 2 2 2 . . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 . . . . . . . 
    2 4 4 4 4 4 4 4 4 2 2 2 . . . . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    2 4 4 4 4 4 4 4 4 4 4 4 4 4 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    2 4 2 2 2 2 2 2 2 1 1 1 1 1 1 . 
    2 2 . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
game.onUpdateInterval(2000, function () {
    mySprite2 = sprites.create(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . 1 . . 1 . . . . . 1 
        1 . . . . . . 1 1 . . . . . . 1 
        1 . . . 1 . . . . . . 1 . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . 1 1 1 1 1 1 . . . . 1 
        1 . . . 1 1 . . . . 1 1 . . . 1 
        1 . . 1 1 . . . . . . 1 1 . . 1 
        1 . 1 1 . . . . . . . . 1 1 . 1 
        1 . 1 . . . . . . . . . . 1 . 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, SpriteKind.Enemy)
    mySprite2.x = 0
})
