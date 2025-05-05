import { gameManager,   } from "./store";
import { startLogger } from "./logger";


startLogger();

setInterval(() => {

    // games.push({
    //     id: Math.random().toString(),
    //     "whitePlayer": "harkirat",
    //     "blackPlayer": "jaskirat",
    //     moves: []
    // })

    gameManager.addGame(Math.random().toString())

    // GameManager.getInstance().addGame({
    //     id: Math.random().toString(),
    //     "whitePlayer": "harkirat",
    //     "blackPlayer": "jaskirat",
    //     moves: []
    // })
}, 5000)
