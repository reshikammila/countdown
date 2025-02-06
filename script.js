const themeToggle = document.querySelector(".theme-toggle");
const body = document.querySelector("body");

themeToggle.addEventListener("click", (e) => {
  themeToggle.dataset.state === "dark"
    ? (themeToggle.dataset.state = "light") && (body.dataset.theme = "light")
    : (themeToggle.dataset.state = "dark") && (body.dataset.theme = "dark");
});

function leadZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

const targetDate = new Date('April 11, 2025 00:00:00').getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Calculate days, hours, minutes
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  // Format numbers
  const daysStr = leadZero(days);
  const hoursStr = leadZero(hours);
  const minutesStr = leadZero(minutes);

  // Convert to arrays
  const daysArr = ("" + daysStr).split("").map(Number);
  const hoursArr = ("" + hoursStr).split("").map(Number);
  const minutesArr = ("" + minutesStr).split("").map(Number);

  const tickerBoxes = document.querySelectorAll(".ticker__box");

  tickerBoxes.forEach((tickerBox, i) => {
    switch (i) {
      case 0:
        tickerBox.style.cssText = `--offset: -${daysArr[0] * 50}px`;
        break;

      case 1:
        tickerBox.style.cssText = `--offset: -${daysArr[1] * 50}px`;
        break;

      case 2:
        tickerBox.style.cssText = `--offset: -${hoursArr[0] * 50}px`;
        break;

      case 3:
        tickerBox.style.cssText = `--offset: -${hoursArr[1] * 50}px`;
        break;

      case 4:
        tickerBox.style.cssText = `--offset: -${minutesArr[0] * 50}px`;
        break;

      case 5:
        tickerBox.style.cssText = `--offset: -${minutesArr[1] * 50}px`;
        break;
    }
  });

  // If countdown is finished
  if (distance < 0) {
    tickerBoxes.forEach(tickerBox => {
      tickerBox.style.cssText = `--offset: 0px`;
    });
  }
}, 1000);