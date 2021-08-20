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
  #questions .question,
  #social-networks .youtube,
  #social-networks .instagram,
  #social-networks .discord,
  footer .brand, footer .list`,
  { interval: 100 }
);

/** Questions and answers */

const buttonShowAnswer = document.querySelectorAll(".open-answer");

buttonShowAnswer.forEach(button => {
  button.addEventListener("click", event => {
    const questionId = event.target.dataset.question;

    const questionIcon = document.querySelector(
      `button .icon[data-question="${questionId}"]`
    );

    const questionItem = document.querySelector(
      `.response[data-question="${questionId}"]`
    );

    questionItem.classList.toggle("active");
    questionIcon.classList.toggle("animate-icon");
  });
});
