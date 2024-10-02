interface Game {
    id: string;
    whitePlayer: string;
    blackPlayer: string;
    moves: string[];
}

export class GameManager {
    games: Game[] = [];
    constructor() {
        this.games = []
    }

    addMove(gameId: string, move: string) {
        console.log(`Adding move ${move} to game ${gameId}`)
        const game = this.games.find(game => game.id === gameId);
        game?.moves.push(move)
    }

    addGame(gameId: string) {
        const game = {
            id: gameId,
            whitePlayer: "harkirat",
            blackPlayer: "jaskirat",
            moves: []
        }
        this.games.push(game)
    }

    log() {
        console.log(this.games)
    }
}

export const gameManager = new GameManager()


// export class GameManager {
//     private static instance: GameManager; // Create a static instance of the class
//     private games: Game[] = [];

//     private constructor() {
//         // Private constructor ensures that a new instance cannot be created from outside
//     }

//     public static getInstance(): GameManager {
//         if (!GameManager.instance) {
//             GameManager.instance = new GameManager();
//         }
//         return GameManager.instance;
//     }

//     public addGame(game: Game) {
//         this.games.push(game);
//     }

//     public getGames() {
//         return this.games;
//     }

//     public addMove(gameId: string, move: string) {
//         const game = this.games.find(game => game.id === gameId);
//         if (game) {
//             game.moves.push(move);
//         }
//     }

//     public logState() {
//         console.log(this.games);
//     }
// }
