
// export function startLogger() {
//     setInterval(() => {
//         GameManager.getInstance().logState();
//     }, 4000)
// }

import { gameManager, GameManager } from "./store"


export function startLogger() {
    setInterval(() => {
        console.log(gameManager.log())
    }, 5000)
}