let count: number = 0;

const button = document.getElementById("btn") as HTMLButtonElement;
const display = document.getElementById("count") as HTMLParagraphElement;

button.addEventListener("click", () => {
  count++;
  display.textContent = count.toString();
});