document.addEventListener("DOMContentLoaded", function () {
  const makeFilter = document.getElementById("make-filter");
  const yearFilter = document.getElementById("year-filter");
  const priceFilter = document.getElementById("price-filter");
  const filterButton = document.getElementById("filter-button");
  const carListings = document.getElementById("car-listings");

  filterButton.addEventListener("click", applyFilters);

  function applyFilters() {
    const selectedMake = makeFilter.value.trim();
    const selectedYear = yearFilter.value.trim();
    const selectedPrice = priceFilter.value.trim();
    const carCards = document.querySelectorAll(".car-card");

    const matchingCars = Array.from(carCards).filter((card) => {
      const carMake = card.querySelector("h2").textContent.trim();
      const carYearParagraph = card.querySelector("p");

      const carYear = carYearParagraph.textContent.trim();
      const hasYear = carYear.includes("Year: " + selectedYear);

      const carPrice = parseInt(
        card
          .querySelector("p:nth-of-type(3)")
          .textContent.trim()
          .replace(/\D/g, "")
      );

      return (
        (selectedMake === "All Makes" ||
          carMake.toLowerCase() === selectedMake.toLowerCase()) &&
        (selectedYear === "All Years" || hasYear) &&
        (selectedPrice === "All Prices" || checkPrice(selectedPrice, carPrice))
      );
    });

    function checkPrice(selectedPrice, carPrice) {
      if (selectedPrice === "15000") {
        return carPrice <= 15000;
      } else if (selectedPrice === "20000") {
        return carPrice <= 20000;
      } else if (selectedPrice === "25000") {
        return carPrice <= 25000;
      } else if (selectedPrice === "30000") {
        return carPrice <= 30000;
      }
      return true;
    }

    if (matchingCars.length === 0) {
      carListings.innerHTML =
        "No cars match the selected criteria. Please try again.";
    } else {
      carListings.innerHTML = "";
      matchingCars.forEach((car) => {
        carListings.appendChild(car.cloneNode(true));
      });
    }

    // Read More button functionality
    const readMoreButtons = document.querySelectorAll(".read-more-button");
    readMoreButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const additionalInfo =
          this.parentElement.querySelector(".additional-info");
        additionalInfo.style.display =
          additionalInfo.style.display === "none" ? "block" : "none";
      });
    });
  }
});
