(() => {
  document.documentElement.classList.add("js");

  const to = window.location.pathname.split("/").pop() || "index.html";

  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    const href = new URL(link.href).pathname.split("/").pop() || "index.html";
    if (to === href || (to === "" && href === "index.html")) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });

  const navToggle = document.querySelector(".nav-toggle");
  const mobileNav = document.getElementById("site-nav");
  const closeNav = () => {
    if (!mobileNav || !navToggle) return;
    mobileNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
    const label = navToggle.querySelector("span") || navToggle;
    label.textContent = "Menu";
  };

  if (navToggle && mobileNav) {
    const updateToggleLabel = (open) => {
      const label = navToggle.querySelector("span") || navToggle;
      navToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      label.textContent = open ? "Close" : "Menu";
    };

    navToggle.addEventListener("click", () => {
      const open = mobileNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
      updateToggleLabel(open);
    });

    mobileNav.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", closeNav);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) {
        updateToggleLabel(false);
        closeNav();
      }
    });

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        updateToggleLabel(false);
        closeNav();
      }
    });
  }

  // Scroll reveal for sections
  const revealElements = document.querySelectorAll("[data-reveal]");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05 }
  );
  // Observe after layout settles; also check if already in viewport
  requestAnimationFrame(() => {
    revealElements.forEach((el) => {
      revealObserver.observe(el);
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("is-visible");
      }
    });
  });

  // Staggered card reveal
  const cards = document.querySelectorAll(".micro-card, .info-card");
  cards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 80}ms`;
  });
  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          cardObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05 }
  );
  requestAnimationFrame(() => {
    cards.forEach((card) => {
      cardObserver.observe(card);
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        card.classList.add("is-visible");
      }
    });
  });

  // Accordions
  const accordions = document.querySelectorAll(".accordion");
  const normalize = (target) => {
    return target && target.dataset && target.dataset.group ? target.dataset.group : null;
  };

  const closeAccordion = (accordion, panel, toggle) => {
    accordion.classList.remove("is-open");
    panel.style.maxHeight = "0px";
    toggle.setAttribute("aria-expanded", "false");
    panel.setAttribute("aria-hidden", "true");
  };

  const openAccordion = (accordion, panel, toggle) => {
    accordion.classList.add("is-open");
    panel.style.maxHeight = `${panel.scrollHeight}px`;
    toggle.setAttribute("aria-expanded", "true");
    panel.setAttribute("aria-hidden", "false");
  };

  accordions.forEach((accordion) => {
    const toggle = accordion.querySelector(".accordion__toggle");
    const panel = accordion.querySelector(".accordion__panel");

    if (!toggle || !panel) return;

    const group = normalize(accordion);
    panel.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");
    panel.style.maxHeight = "0px";

    toggle.addEventListener("click", () => {
      const isOpen = accordion.classList.contains("is-open");

      if (group) {
        const peers = document.querySelectorAll(`.accordion[data-group="${group}"]`);
        peers.forEach((peer) => {
          if (peer === accordion) return;
          const peerPanel = peer.querySelector(".accordion__panel");
          const peerToggle = peer.querySelector(".accordion__toggle");
          if (peerPanel && peerToggle) {
            closeAccordion(peer, peerPanel, peerToggle);
          }
        });
      }

      if (isOpen) {
        closeAccordion(accordion, panel, toggle);
      } else {
        openAccordion(accordion, panel, toggle);
        // Unlock scroll on subpage when accordion opens
        if (document.body.classList.contains("subpage")) {
          document.body.classList.add("has-expanded");
        }
      }
    });
  });
})();
