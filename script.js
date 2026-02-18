const cards = document.querySelectorAll(".card");

cards.forEach((card, i) => {
  card.style.transitionDelay = `${i * 80}ms`;
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.15 }
);

cards.forEach((card) => observer.observe(card));
