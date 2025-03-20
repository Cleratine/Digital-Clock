// Function to update the clock
function updateClock() {
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date()

  document.getElementById("date").innerHTML =
    dayNames[now.getDay()] +
    ' '+
    now.getDate() +
    ' ' +
    monthNames[now.getMonth()] +
    ' ' +
    [now.getFullYear()]


  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  document.getElementById(
    "clock"
  ).textContent = `${hours}:${minutes}:${seconds}`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call to display immediately

// Toggle Light/Dark Mode
const toggleButton = document.getElementById("toggleMode");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Change button text based on mode
  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "Light Mode";
  } else {
    toggleButton.textContent = " Dark Mode";
  }
});
