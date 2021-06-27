const submit = document.querySelector("#button");

submit.addEventListener("click", () => {
  console.log("i have been clicked");

  const question = document.getElementById("question").value;
  const answer = document.getElementById("answer-display");
  const display = document.getElementById("question-display");
  let randomNumber = Math.floor(Math.random() * 8);
  let eightBall;

  if (question === "") {
    display.style.animation = "fadeIn 3s ease";
    display.textContent = `Ask a Question`;
  } else {
    display.textContent = question + "?";
    eightBall = `${randomNumber}`;

    switch (eightBall) {
      case "0":
        answer.classList.add("fade-in");
        answer.textContent = `Concentrate and ask again`;
        answer.addEventListener("animationend", function () {
          answer.classList.remove("fade-in");
        });
        break;
      case "1":
        answer.classList.add("fade-in");
        answer.textContent = `As I see it, yes`;
        answer.addEventListener("animationend", function () {
          answer.classList.remove("fade-in");
        });
        break;
      case "2":
        answer.classList.add("fade-in");
        answer.textContent = `It is certain`;
        answer.addEventListener("animationend", function () {
          answer.classList.remove("fade-in");
        });
        break;
      case "3":
        answer.classList.add("fade-in");
        answer.textContent = `It is decidedly so`;
        answer.addEventListener("animationend", function () {
          answer.classList.remove("fade-in");
        });
        break;
      case "4":
        answer.classList.add("fade-in");
        answer.textContent = `Reply hazy try again`;
        answer.addEventListener("animationend", function () {
          answer.classList.remove("fade-in");
        });
        break;
      case "5":
        answer.classList.add("fade-in");
        answer.textContent = `Cannot predict now`;
        answer.addEventListener("animationend", function () {
          answer.classList.remove("fade-in");
        });
        break;
      case "6":
        answer.classList.add("fade-in");
        answer.textContent = `Do not count on it`;
        answer.addEventListener("animationend", function () {
          answer.classList.remove("fade-in");
        });
        break;
      case "7":
        answer.classList.add("fade-in");
        answer.textContent = `My sources say no`;
        answer.addEventListener("animationend", function () {
          answer.classList.remove("fade-in");
        });
        break;
      case "8":
        answer.classList.add("fade-in");
        answer.textContent = `Signs point to yes`;
        answer.addEventListener("animationend", function () {
          answer.classList.remove("fade-in");
        });
        break;
    }
    console.log(`The eight ball answered: ${eightBall}`);
  }
});

// if (eightBall == 0) {
//   answer.classList.add("fade-in");
//   answer.textContent = `Concentrate and ask again`;
//   answer.style.removeProperty("fade-in");
// } else if (eightBall == 2) {
//   answer.classList.add("fade-in");
//   answer.textContent = `Concentrate and ask again`;
//   answer.style.removeProperty("fade-in");
// } else if (eightBall == 3) {
//   answer.classList.add("fade-in");
//   answer.textContent = `Concentrate and ask again`;
//   answer.style.removeProperty("fade-in");
// } else if (eightBall == 4) {
//   answer.classList.add("fade-in");
//   answer.textContent = `Concentrate and ask again`;
//   answer.style.removeProperty("fade-in");
// } else if (eightBall == 5) {
//   answer.classList.add("fade-in");
//   answer.textContent = `Concentrate and ask again`;
//   answer.style.removeProperty("fade-in");
// } else if (eightBall == 6) {
//   answer.classList.add("fade-in");
//   answer.textContent = `Concentrate and ask again`;
//   answer.style.removeProperty("fade-in");
// } else if (eightBall == 7) {
//   answer.classList.add("fade-in");
//   answer.textContent = `Concentrate and ask again`;
//   answer.style.removeProperty("fade-in");
// } else if (eightBall == 8) {
//   answer.classList.add("fade-in");
//   answer.textContent = `Concentrate and ask again`;
//   answer.style.removeProperty("fade-in");
// }
