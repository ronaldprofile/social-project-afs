const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true
});

scrollReveal.reveal(
  `#home .text, #home .image,
  #services .card,
  #i-will-learn .card,
  #social-networks .youtube,
  #social-networks .instagram,
  #social-networks .discord,
  footer .brand, footer .list`,
  { interval: 100 }
);
