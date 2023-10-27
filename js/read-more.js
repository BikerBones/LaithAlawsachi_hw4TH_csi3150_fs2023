document.addEventListener("DOMContentLoaded", function () {
  const readMoreButtons = document.querySelectorAll(".read-more-button");

  readMoreButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      const additionalInfo = event.target.nextElementSibling;

      if (
        additionalInfo.style.display === "none" ||
        additionalInfo.style.display === ""
      ) {
        additionalInfo.style.display = "block";
      } else {
        additionalInfo.style.display = "none";
      }
    });
  });
});
