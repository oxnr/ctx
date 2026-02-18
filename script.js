document.querySelectorAll(".card").forEach((card, index) => {
  card.style.transitionDelay = `${index * 100}ms`;
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".card").forEach((card) => observer.observe(card));
