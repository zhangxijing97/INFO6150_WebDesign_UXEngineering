"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });

let count = 0;
const button = document.getElementById("btn");
const display = document.getElementById("count");
button.addEventListener("click", () => {
    count++;
    display.textContent = count.toString();
});
//# sourceMappingURL=script.js.map