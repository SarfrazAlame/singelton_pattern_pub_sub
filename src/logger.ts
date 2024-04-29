import { gameManager } from "./store"

export function startLogger() {
    setInterval(() => {
        console.log(gameManager.addLog())
    }, 5000)
}