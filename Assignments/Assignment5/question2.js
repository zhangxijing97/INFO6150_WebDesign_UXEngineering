const form = document.getElementById("lifeForm");
const birthInput = document.getElementById("birthDate");
const deathInput = document.getElementById("deathDate");
const result = document.getElementById("result");
const error = document.getElementById("error");

form.addEventListener("submit", function (event) {

    event.preventDefault(); // prevent page refresh

    error.textContent = "";
    result.textContent = "";

    const birthValue = birthInput.value;
    const deathValue = deathInput.value;

    if (!birthValue) {
        error.textContent = "Birth date is required.";
        return;
    }

    const birthDate = new Date(birthValue);
    let endDate;

    if (deathValue) {
        endDate = new Date(deathValue);

        if (endDate < birthDate) {
            error.textContent = "Death date cannot be before birth date.";
            return;
        }
    } else {
        endDate = new Date(); // today
    }

    // Set both dates to midnight to avoid time-of-day errors
    birthDate.setHours(0,0,0,0);
    endDate.setHours(0,0,0,0);

    const diffMilliseconds = endDate - birthDate;

    const daysLived = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24));

    result.textContent = "Days lived: " + daysLived;
});