"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLogger = void 0;
const store_1 = require("./store");
// export function startLogger() {
//     setInterval(() => {
//         GameManager.getInstance().logState();
//     }, 4000)
// }
function startLogger() {
    setInterval(() => {
        console.log(store_1.games);
    }, 5000);
}
exports.startLogger = startLogger;
