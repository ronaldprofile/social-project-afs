const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 700,
  reset: true
});

scrollReveal.reveal(
  `#home .text, #home .image,
  #services .card,
  #social-networks .youtube,
  #social-networks .instagram,
  #social-networks .discord`,
  { interval: 100 }
);
