const cards = document.querySelectorAll(".card-hello img")

cards.forEach((card, index) => {

  // Example: Add a click event to each card
  card.addEventListener('click', () => {
    event.currentTarget.classList.toggle("tapped");
  });
});
