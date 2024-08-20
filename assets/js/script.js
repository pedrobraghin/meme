const title = document.getElementById("title");
const video = document.getElementsByTagName("video")[0];

function formatTime(time) {
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  hours = hours.toString().padStart(2, "0");

  return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

function checkIfIsTheTime(time) {
  const hours = time.getHours();
  const minutes = time.getMinutes();

  return hours === 0 && minutes === 0;
}

function handleCheckTime() {
  const time = new Date();

  if (checkIfIsTheTime(time)) {
    if (!video.classList.contains("show")) {
      video.classList.add("show");
      video.play();
    }
  } else {
    title.textContent = "Não é hora ainda";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    const time = new Date();

    if (checkIfIsTheTime(time)) {
      title.textContent = "Horário oficial do óleo de macado";
      video.classList.add("show");
      video.play();
    } else {
      title.textContent = formatTime(time);
      video.classList.remove("show");
    }
  }, 1000);
});
