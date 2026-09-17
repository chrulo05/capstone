// Find all three navigation buttons.
const navigationButtons = document.querySelectorAll(".nav-button");

// Find all three website sections.
const contentSections = document.querySelectorAll(".content-section");

// Run this code whenever one of the buttons is clicked.
navigationButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Remove "active" from every button.
    navigationButtons.forEach(function (currentButton) {
      currentButton.classList.remove("active");
    });

    // Hide every section.
    contentSections.forEach(function (section) {
      section.classList.remove("active");
    });

    // Make the clicked button active.
    button.classList.add("active");

    // Read the section ID from the button's data-section value.
    const sectionId = button.dataset.section;

    // Display the matching section.
    document.getElementById(sectionId).classList.add("active");
  });
});