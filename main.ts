scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorLockedNorth, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.splash("You Died", "You tried to swim in the lava")
    game.over(false)
})
tiles.setCurrentTilemap(tilemap`層級3`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . 
    . . . . a a a a a a . . . . 
    . . . a 1 1 1 1 1 1 a . . . 
    . . . a 1 1 1 1 1 1 a . . . 
    . . . a 1 1 1 1 1 1 a . . . 
    . . . a 1 1 1 1 1 1 a . . . 
    . . . a 1 1 1 1 1 1 a . . . 
    . . . a 1 1 1 1 1 1 a . . . 
    . . . . a a a a a a . . . . 
    . . . . . . a a . . . . . . 
    . . . . . . a a . . . . . . 
    . . . . . . a a . . . . . . 
    . . . a a a a a a a a . . . 
    . . . . . . a a . . . . . . 
    . . . . . . a a . . . . . . 
    . . . . . a . . a . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 40, 40)
