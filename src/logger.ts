import { games } from "./store";

// export function startLogger() {
//     setInterval(() => {
//         GameManager.getInstance().logState();
//     }, 4000)
// }

export function startLogger() {
    setInterval(() => {
        console.log(games)
    }, 5000)
}