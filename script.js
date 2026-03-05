(() => {
  if (/\/index\.html$/.test(window.location.pathname)) {
    const canonicalPath = window.location.pathname.replace(/index\.html$/, "");
    window.location.replace(`${canonicalPath}${window.location.search}${window.location.hash}`);
    return;
  }

  document.documentElement.classList.add("js");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const normalizePath = (pathname) => {
    const withoutIndex = pathname.replace(/\/index\.html$/, "/");
    const trimmed = withoutIndex !== "/" ? withoutIndex.replace(/\/$/, "") : withoutIndex;
    if (trimmed === "/") return "index";
    const segment = trimmed.split("/").pop();
    return segment || "index";
  };

  const to = normalizePath(window.location.pathname);

  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    const href = normalizePath(new URL(link.href).pathname);
    if (to === href) {
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

  const heroKeyword = document.querySelector(".hero-keyword[data-keywords]");
  if (heroKeyword) {
    const words = (heroKeyword.dataset.keywords || "")
      .split(",")
      .map((word) => word.trim())
      .filter(Boolean);

    if (words.length > 0) {
      heroKeyword.style.setProperty("--keyword-width", `${Math.max(...words.map((word) => word.length))}ch`);
      heroKeyword.innerHTML = words
        .map((word, index) => `<span class="hero-keyword__word${index === 0 ? " is-active" : ""}">${word}</span>`)
        .join("");
      heroKeyword.setAttribute("aria-label", words[0]);

      if (!prefersReducedMotion.matches && words.length > 1) {
        let activeIndex = 0;
        window.setInterval(() => {
          const wordNodes = heroKeyword.querySelectorAll(".hero-keyword__word");
          if (!wordNodes.length) return;
          wordNodes[activeIndex].classList.remove("is-active");
          activeIndex = (activeIndex + 1) % wordNodes.length;
          wordNodes[activeIndex].classList.add("is-active");
          heroKeyword.setAttribute("aria-label", words[activeIndex]);
        }, 2200);
      }
    }
  }

  const heroSignal = document.querySelector(".hero-signal");
  const buildRecaman = (length) => {
    const seen = new Set([0]);
    const sequence = [0];

    for (let step = 1; step < length; step += 1) {
      const previous = sequence[sequence.length - 1];
      let next = previous - step;

      if (next <= 0 || seen.has(next)) {
        next = previous + step;
      }

      sequence.push(next);
      seen.add(next);
    }

    return sequence;
  };

  if (heroSignal) {
    const renderHeroSignal = () => {
      const width = Math.max(360, Math.round(heroSignal.clientWidth || 1200));
      const height = Math.max(240, Math.round(heroSignal.clientHeight || 460));
      heroSignal.setAttribute("viewBox", `0 0 ${width} ${height}`);

      const layers = [
        {
          length: 24,
          baseline: height * 0.8,
          offsetX: width * 0.05,
          usableWidth: width * 0.9,
          strokeWidth: 1.1,
          opacity: 0.58,
          dash: "",
          gradientId: "hero-gradient-main",
        },
        {
          length: 17,
          baseline: height * 0.56,
          offsetX: width * 0.36,
          usableWidth: width * 0.42,
          strokeWidth: 0.95,
          opacity: 0.24,
          dash: "9 12",
          gradientId: "hero-gradient-soft",
        },
        {
          length: 13,
          baseline: height * 0.34,
          offsetX: width * 0.6,
          usableWidth: width * 0.2,
          strokeWidth: 0.8,
          opacity: 0.15,
          dash: "5 10",
          gradientId: "hero-gradient-soft",
        },
      ];

      const defs = `
        <defs>
          <linearGradient id="hero-gradient-main" x1="0" y1="0" x2="${width}" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#ebe8e2" stop-opacity="0.04"></stop>
            <stop offset="38%" stop-color="#ebe8e2" stop-opacity="0.62"></stop>
            <stop offset="100%" stop-color="#ebe8e2" stop-opacity="0.04"></stop>
          </linearGradient>
          <linearGradient id="hero-gradient-soft" x1="0" y1="0" x2="${width}" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#ebe8e2" stop-opacity="0"></stop>
            <stop offset="50%" stop-color="#ebe8e2" stop-opacity="0.28"></stop>
            <stop offset="100%" stop-color="#ebe8e2" stop-opacity="0"></stop>
          </linearGradient>
        </defs>
      `;

      const paths = layers
        .map((layer, index) => {
          const sequence = buildRecaman(layer.length);
          const maxValue = Math.max(...sequence) || 1;
          const scale = layer.usableWidth / maxValue;
          let path = "";

          for (let step = 1; step < sequence.length; step += 1) {
            const start = layer.offsetX + sequence[step - 1] * scale;
            const end = layer.offsetX + sequence[step] * scale;
            const radius = Math.abs(end - start) / 2;

            if (!radius) continue;

            path += `M ${start.toFixed(2)} ${layer.baseline.toFixed(2)} A ${radius.toFixed(2)} ${radius.toFixed(2)} 0 0 ${
              step % 2
            } ${end.toFixed(2)} ${layer.baseline.toFixed(2)} `;
          }

          const dashAttr = layer.dash ? ` stroke-dasharray="${layer.dash}"` : "";
          return `<path class="hero-signal__path" d="${path}" stroke="url(#${layer.gradientId})" stroke-width="${layer.strokeWidth}" opacity="${layer.opacity}"${dashAttr} style="animation-delay: ${index * -5}s"></path>`;
        })
        .join("");

      const baseline = `<path class="hero-signal__path" d="M 0 ${(height * 0.93).toFixed(2)} L ${width} ${(height * 0.93).toFixed(
        2
      )}" stroke="#ebe8e2" stroke-opacity="0.08" stroke-width="1" opacity="0.45" stroke-dasharray="3 14" style="animation-delay: -2s"></path>`;

      heroSignal.innerHTML = defs + paths + baseline;
    };

    let resizeFrame = 0;
    const queueHeroSignalRender = () => {
      window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(renderHeroSignal);
    };

    queueHeroSignalRender();
    window.addEventListener("resize", queueHeroSignalRender);
  }

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
      }
    });
  });
})();
