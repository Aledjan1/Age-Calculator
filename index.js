const age = document.querySelector("#age");
const calculateBtn = document.querySelector(".calculate-btn");
const months = document.querySelector(".months");
const weeks = document.querySelector(".weeks");
const days = document.querySelector(".days");
const hours = document.querySelector(".hours");

calculateBtn.addEventListener("click", function() {
    if(age.value === "" || age.value < 0) {
        alert("Please enter a valid age");
        months.textContent = "---";
        weeks.textContent = "---";
        days.textContent = "---";
        hours.textContent = "---";
        return;
    } 
    const result = Number(age.value);
    months.textContent = (result * 12).toLocaleString("en-GB");
    weeks.textContent = (result * 52).toLocaleString("en-GB");
    days.textContent = (result * 365).toLocaleString("en-GB");
    hours.textContent = (result * 8760).toLocaleString("en-GB");
});
