// If the user gets one recommendation and wants more, this function gives them two more recommendations if they input a "1". If they input a "2" the game resets. This allows the user to find something they want if they don't like their original recommendation.
function anotherRecommendation () {
    game.showLongText("One recommendation wasn't good enough for you? For two more recs type 1, to restart type 2", DialogLayout.Full)
    secondInput = game.askForNumber("1 is another rec and 2 resets game", 1)
    if (secondInput == 1) {
        while (amountClicks <= 2) {
            userRecommendation(userChoice)
        }
    } else if (secondInput == 2) {
        game.reset()
    } else {
        game.showLongText("1 OR 2 only! try again ", DialogLayout.Center)
        game.reset()
    }
}
// This function determines if the player wants even more outputs. They input a value to get more outputs from their original input, or they input a value to restart. This loops all of the rest of the recommendations in the original category if the user selects "1".
function evenMore () {
    game.showLongText("You still want more? Type 1... Again OR Type 2 to restart", DialogLayout.Full)
    secondInput = game.askForNumber("1 is another rec and 2 resets game", 1)
    if (secondInput == 1) {
        while (amountClicks <= 12) {
            userRecommendation(userChoice)
        }
        game.showLongText("Was that enough for you?", DialogLayout.Full)
        effects.smiles.startScreenEffect(5000)
        pause(100)
        game.reset()
    } else if (secondInput == 2) {
        game.reset()
    } else {
        game.showLongText("1 OR 2 only! try again ", DialogLayout.Center)
        game.reset()
    }
}
// This sets up the base of the game. It gets all of the background, text, and sprites needed for the app to look good and make the user understand the functions or what to input.
function initialize () {
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69fffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    game.setDialogTextColor(8)
    game.setDialogFrame(img`
        ..................................................................
        ....33.......33...........dddd............dddd............aaa.....
        ...a533.....393....ddddddd1111d....ddddddd1111d....3333...a35a....
        ...a553aaa339993.dd1111dd111111dddd1111dd111111dd.39393aaa3553aa..
        ..a355555a3999993d11911111111111dd11911111111111d339993a555555553.
        .a555555333399933119991111111111111999111111111113999993a55555533.
        .a355555333393931111911111115511111191111111551111399933a3555533..
        .aa355555a1333311111111111115511111111111111551111339331a55555a...
        ...a55355a1111111111111111111111111111111111111111133311a55335a...
        ...a5aaaaa1111191111111111111111111111111111111111111111aaa33aa...
        ...aa3311115511111111111111111111111111111111111119111111113333...
        ..3339331115511111111111111111111111111111111111111111551133393...
        ..39999331111111111111111111111111111111111111111111115511399993..
        ..339999311111111111111111111111111111111111111111111111113399993.
        ..399993311111111111111111111111111111111111111111111111113999933.
        ...339331191111111111111111111111111111111111111111111119113393...
        ....3311111111111111111111111111111111111111111111111111111133....
        ...dd11111111111111111111111111111111111111111111111111111111dd...
        ...d1111111111111111111111111111111111111111111111111111111111d...
        ..d111111111111111111111111111111111111111111111111111111111911d..
        .d1111551111111111111111111111111111111111111111111111111119991d..
        .d1111551111111111111111111111111111111111111111111111111111911d..
        .d1111111111111111111111111111111111111111111111111111111111111d..
        .d111111111111111111111111111111111111111111111111111111111111dd..
        ..d11111111111111111111111111111111111111111111111111111111111dd..
        ..dd11111111111111111111111111111111111111111111111111111111111d..
        ..dd111111111111111111111111111111111111111111111111111111111111d.
        ..d1111111111111111111111111111111111111111111111111111111111111d.
        ..d1191111111111111111111111111111111111111111111111111111551111d.
        ..d1999111111111111111111111111111111111111111111111111111551111d.
        ..d119111111111111111111111111111111111111111111111111111111111d..
        ...d1111111111111111111111111111111111111111111111111111111111d...
        ...dd11111111111111111111111111111111111111111111111111111111dd...
        ...dd11111111111111111111111111111111111111111111111111111111dd...
        ...d1111111111111111111111111111111111111111111111111111111111d...
        ..d111111111111111111111111111111111111111111111111111111111911d..
        .d1111551111111111111111111111111111111111111111111111111119991d..
        .d1111551111111111111111111111111111111111111111111111111111911d..
        .d1111111111111111111111111111111111111111111111111111111111111d..
        .d111111111111111111111111111111111111111111111111111111111111dd..
        ..d11111111111111111111111111111111111111111111111111111111111dd..
        ..dd11111111111111111111111111111111111111111111111111111111111d..
        ..dd111111111111111111111111111111111111111111111111111111111111d.
        ..d1111111111111111111111111111111111111111111111111111111111111d.
        ..d1191111111111111111111111111111111111111111111111111111551111d.
        ..d1999111111111111111111111111111111111111111111111111111551111d.
        ..d119111111111111111111111111111111111111111111111111111111111d..
        ...d1111111111111111111111111111111111111111111111111111111111d...
        ...dd11111111111111111111111111111111111111111111111111111111dd...
        ....3311111111111111111111111111111111111111111111111111111133....
        ...393311911111111111111111111111111111111111111111111191133933...
        .339999311111111111111111111111111111111111111111111111113399993..
        .399993311111111111111111111111111111111111111111111111113999933..
        ..39999311551111111111111111111111111111111111111111111113399993..
        ...3933311551111111111111111111111111111111111111111155111339333..
        ...3333111111119111111111111111111111111111111111111155111133aa...
        ...aa33aaa1111111111111111111111111111111111111111911111aaaaa5a...
        ...a53355a1133311111111111111111111111111111111111111111a55355a...
        ...a55555a1339331111551111111111111155111111111111133331a555553aa.
        ..3355553a339993111155111111191111115511111119111139393333555553a.
        .33555555a399999311111111111999111111111111199911339993333555555a.
        .355555555a399933d11111111111911dd11111111111911d3999993a555553a..
        ..aa3553aaa39393.dd111111dd1111dddd111111dd1111dd.399933aaa355a...
        ....a53a...3333....d1111ddddddd....d1111ddddddd....393.....335a...
        .....aaa............dddd............dddd...........33.......33....
        ..................................................................
        `)
    game.showLongText("Lost all meaning in the world?", DialogLayout.Bottom)
    game.showLongText("Find something to do!", DialogLayout.Bottom)
    hungry = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . 1 1 f 1 . . . . . . 
        . . . . . . 1 f f 1 . . . . . . 
        . . . . 1 1 f f f 1 . . . . . . 
        . . . . 1 f f 1 f 1 . . . . . . 
        . . . . 1 f 1 1 f 1 . . . . . . 
        . . . . 1 1 1 1 f 1 . . . . . . 
        . . . . . . . 1 f 1 . . . . . . 
        . . . . . . . 1 f 1 . . . . . . 
        . . . . . . . 1 f 1 . . . . . . 
        . . . . . . . 1 f 1 . . . . . . 
        . . . . . . . 1 f 1 . . . . . . 
        . . . . . . 1 1 f 1 1 . . . . . 
        . . . . . 1 f f f f f 1 . . . . 
        . . . . . . 1 1 1 1 1 . . . . . 
        `, SpriteKind.Player)
    hungry.setPosition(42, 30)
    movie = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . 1 1 1 1 1 1 1 1 . . . . . 
        . . . 1 f f f f f f 1 1 . . . . 
        . . 1 1 f 1 1 1 1 f f 1 . . . . 
        . . 1 f f 1 . . 1 1 f 1 . . . . 
        . . 1 f 1 1 . . . 1 f 1 . . . . 
        . . 1 1 1 . . . 1 f f 1 . . . . 
        . . . . . . . 1 1 f 1 . . . . . 
        . . . . . . 1 1 f f 1 . . . . . 
        . . . . . 1 1 f f 1 . . . . . . 
        . . . . 1 1 f f 1 . . . . . . . 
        . . . . 1 f f 1 1 1 1 1 1 . . . 
        . . . . 1 f f f f f f f 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    movie.setPosition(116, 45)
    book = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 f f f f f f f f f 1 . . 
        . . . 1 1 1 1 1 1 1 1 f f 1 . . 
        . . . . . . . . 1 1 f f 1 1 . . 
        . . . . . . . 1 1 f f 1 1 . . . 
        . . . . . . 1 1 f f 1 1 . . . . 
        . . . . . . 1 f f f f 1 1 1 . . 
        . . . . . . 1 1 1 1 f f f 1 . . 
        . . . . . . . . . 1 1 1 f 1 . . 
        . . . 1 1 1 . . . . . 1 f 1 . . 
        . . . 1 f 1 1 . . . . 1 f 1 . . 
        . . . 1 f f 1 1 . 1 1 1 f 1 . . 
        . . . 1 1 f f 1 1 1 f f f 1 . . 
        . . . . 1 1 f f f f f 1 1 1 . . 
        . . . . . . 1 1 1 1 1 1 . . . . 
        `, SpriteKind.Player)
    book.setPosition(42, 83)
    activtiy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . 1 1 1 . . . 1 1 1 . . . . 
        . . . 1 f 1 . . . 1 f 1 . . . . 
        . . . 1 f 1 . . . 1 f 1 . . . . 
        . . . 1 f 1 . . . 1 f 1 . . . . 
        . . . 1 f 1 . . . 1 f 1 . . . . 
        . . . 1 f 1 . . . 1 f 1 . . . . 
        . . . 1 f 1 1 1 1 1 f 1 1 . . . 
        . . . 1 f f f f f f f f 1 . . . 
        . . . 1 1 1 1 1 1 1 f 1 1 . . . 
        . . . . . . . . . 1 f 1 . . . . 
        . . . . . . . . . 1 f 1 . . . . 
        . . . . . . . . . 1 f 1 . . . . 
        . . . . . . . . . 1 f 1 . . . . 
        . . . . . . . . . 1 f 1 . . . . 
        . . . . . . . . . 1 1 1 . . . . 
        `, SpriteKind.Player)
    activtiy.setPosition(116, 100)
    hungry.sayText("Want to eat?", 2000, false)
    book.sayText("Want to read?", 2000, false)
    movie.sayText("Want to watch?", 2000, false)
    activtiy.sayText("Want to go?", 2000, false)
}
// This function is what converts the input to the output. It takes the category (user input) that the player chose, and then based on that value gives an outcome that relates.
function userRecommendation (num: number) {
    if (num == 1) {
        game.showLongText("You should eat: " + hungryList.removeAt(randint(0, hungryList.length - 1)), DialogLayout.Full)
        amountClicks += 1
    } else if (num == 2) {
        game.showLongText("You should watch: " + movieList.removeAt(randint(0, movieList.length - 1)), DialogLayout.Full)
        amountClicks += 1
    } else if (num == 3) {
        game.showLongText("You should read: " + bookLists.removeAt(randint(0, bookLists.length - 1)), DialogLayout.Full)
        amountClicks += 1
    } else if (num == 4) {
        game.showLongText("You should: " + activityList.removeAt(randint(0, activityList.length - 1)), DialogLayout.Full)
        amountClicks += 1
    } else {
        game.showLongText("Please only Choose from 1-4", DialogLayout.Center)
        game.reset()
    }
}
function userInput () {
    hungry.destroy()
    movie.destroy()
    book.destroy()
    activtiy.destroy()
    hungryList = [
    "carrots and hummus",
    "goldfish crackers",
    "sushi",
    "pickles",
    "mac and cheese",
    "Shrimp tempura",
    "waffles",
    "matzah ball soup",
    "chicken katsu curry",
    "birrieria tacos",
    "cashews",
    "tiramisu",
    "French onion soup",
    "steak tartare",
    "McDonald's",
    "spinach"
    ]
    movieList = [
    "Broke Back Mountain",
    "2001:A Space Odyssey",
    "Children of the Corn",
    "Ratouille",
    "Matrix",
    "Strangers",
    "Twilight",
    "Mean Girls",
    "Eclipse",
    "Breaking Dawn Part 1",
    "Breaking Dawn Part 2",
    "Hotel Transylvania",
    "Pulp Fiction",
    "Avenger's Infinity War",
    "Wall-E",
    "Harry Potter and the Sorcerer's Stone"
    ]
    bookLists = [
    "Song of Achille's by Madeline Miller",
    "Demon Slayer by Anon",
    "Ender's Game by Orson Scott Card",
    "Gone Girl by Gillian Flynn",
    "The Maddest Obsession by Danielle Lori",
    "Daisy Jones and the Six by Taylor Jenkins Reid",
    "Snow Crash by Neil Stephenson",
    "Shadowhunters by Cassandra Clare",
    "The Goldfinch by Donna Tartt",
    "Remarried Empress by Anon",
    "The Color Purple by Alice Walker",
    "Ready Player One by Ernest Cline",
    "The School for Good and Evil by Soman Chainani",
    "The Selection by Keira Cass",
    "Little Women by Louisa May Alcott"
    ]
    activityList = [
    "bowling",
    "gymnastics",
    "Dungeons and Dragons",
    "walk",
    "hang with friends",
    "knit",
    "roller-skate",
    "Have a dance party with your younger cousin from your mom's side",
    "build lego set 10279",
    "go on a road trip",
    "change your name and go to another country off the grid",
    "get married",
    "play Barbie's",
    "host a Gatsby themed dinner party with friends",
    "mini golf"
    ]
    userChoice = game.askForNumber("", 1)
    amountClicks = 0
}
// Calls all of the functions. Allows the code to run.
let activityList: string[] = []
let bookLists: string[] = []
let movieList: string[] = []
let hungryList: string[] = []
let activtiy: Sprite = null
let book: Sprite = null
let movie: Sprite = null
let hungry: Sprite = null
let amountClicks = 0
let secondInput = 0
let userChoice = 0
initialize()
pause(2000)
userInput()
userRecommendation(userChoice)
anotherRecommendation()
evenMore()
