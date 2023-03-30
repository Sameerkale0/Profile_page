const icons = document.querySelectorAll(".icon");
const person = document.querySelector(".person");
icons.forEach((icon) => {
  icon.addEventListener("mouseover", (event) => {
    const information = document.querySelector(".info");

    if (event.target.classList.contains("person")) {
      information.innerHTML = "Mark Zuckerberg";
    } else if (event.target.classList.contains("mail")) {
      information.innerHTML = "MZ@xyz.com";
    } else if (event.target.classList.contains("call")) {
      information.innerHTML = "123456790";
    } else if (event.target.classList.contains("location")) {
      information.innerHTML = "Silicon Valley, USA";
    } else if (event.target.classList.contains("calendar")) {
      information.innerHTML = "14-05-1984";
    } else if (event.target.classList.contains("logo")) {
      information.innerHTML =
        "https://www.linkedin.com/in/mark-zuckerberg-618bba58/";
    }
    console.log("icons");
  });
});
