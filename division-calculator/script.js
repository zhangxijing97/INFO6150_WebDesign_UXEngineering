const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const divideBtn = document.getElementById("divideBtn");
const resultEl = document.getElementById("result");

divideBtn.addEventListener("click", () => {
  const n1 = parseFloat(num1.value);
  const n2 = parseFloat(num2.value);

  if (n1 === 0 && n2 === 0) {
    resultEl.textContent = "0 / 0 is undefined.";
    return;
  }

  if (n2 === 0) {
    resultEl.textContent = "Cannot divide by zero.";
    return;
  }

  const result = n1 / n2;
  resultEl.textContent = result;
});