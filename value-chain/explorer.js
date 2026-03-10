(() => {
  const { layers, tools } = window.VC_DATA;
  const learn = window.VC_LEARN || {};
  const layerMap = Object.fromEntries(layers.map(l => [l.id, l]));

  const GH_ICON = '<svg class="gh-icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.1 0 0 .67-.21 2.2.82a7.56 7.56 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.09.16 1.9.08 2.1.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>';

  // ── State ──
  let activeLayer = null;
  let activeTool = null;
  let searchQuery = "";


  // ── DOM refs ──
  const flowNodes = document.querySelectorAll(".vc-node[data-layer]");
  const explorer = document.getElementById("explorer");
  if (!explorer) return;

  const searchInput = explorer.querySelector(".explorer__input");
  const colOpen = explorer.querySelector(".explorer__col--open .explorer__list");
  const colCommercial = explorer.querySelector(".explorer__col--commercial .explorer__list");
  const detail = explorer.querySelector(".explorer__detail");
  const resultArea = explorer.querySelector(".explorer__results");
  const prompt = explorer.querySelector(".explorer__prompt");

  // Layer learn section
  const layerLearn = document.getElementById("layer-learn");
  const layerLearnLabel = document.getElementById("layer-learn__label");
  const layerLearnDesc = document.getElementById("layer-learn__desc");
  const layerLearnContent = document.getElementById("layer-learn__content");
  const layerLearnAccordion = document.getElementById("layer-learn__accordion");
  const layerLearnPanel = document.getElementById("layer-learn__panel");
  const layerLearnToggle = layerLearnAccordion ? layerLearnAccordion.querySelector(".accordion__toggle") : null;

  // ── Helpers ──
  const isOpen = t => t.type === "open-source" || t.type === "open-weight";

  function getDomain(url) {
    if (!url) return null;
    try { return new URL(url).hostname.replace(/^www\./, ""); }
    catch { return null; }
  }

  function faviconUrl(url) {
    const domain = getDomain(url);
    if (!domain) return null;
    return "https://www.google.com/s2/favicons?domain=" + domain + "&sz=32";
  }

  function clearHighlights() {
    flowNodes.forEach(n => {
      n.classList.remove("is-active", "is-direct", "is-indirect");
    });
  }

  function highlightLayers(directIds, indirectIds) {
    clearHighlights();
    flowNodes.forEach(n => {
      const lid = n.dataset.layer;
      if (directIds.includes(lid)) n.classList.add("is-direct");
      else if (indirectIds.includes(lid)) n.classList.add("is-indirect");
    });
  }

  function toolsByLayer(layerId) {
    return tools.filter(t =>
      t.directLayers.includes(layerId) || t.indirectLayers.includes(layerId)
    );
  }

  function toolsBySearch(q) {
    const lower = q.toLowerCase();
    return tools.filter(t =>
      t.name.toLowerCase().includes(lower) ||
      t.desc.toLowerCase().includes(lower) ||
      (t.category && t.category.toLowerCase().includes(lower)) ||
      (t.details && t.details.toLowerCase().includes(lower)) ||
      (t.what && t.what.toLowerCase().includes(lower)) ||
      (t.impact && t.impact.toLowerCase().includes(lower)) ||
      (t.role && t.role.toLowerCase().includes(lower)) ||
      (t.layerDetails && Object.values(t.layerDetails).some(v => v.toLowerCase().includes(lower)))
    );
  }

  function appendDetailSection(container, title, copy) {
    if (!container || !copy) return;
    const section = document.createElement("div");
    section.className = "explorer__detail-section";

    const heading = document.createElement("div");
    heading.className = "explorer__detail-section-title";
    heading.textContent = title;

    const body = document.createElement("div");
    body.className = "explorer__detail-section-copy";
    body.textContent = copy;

    section.appendChild(heading);
    section.appendChild(body);
    container.appendChild(section);
  }

  function makeToolItem(tool) {
    const li = document.createElement("li");
    li.className = "explorer__item";
    li.dataset.toolId = tool.id;
    li.tabIndex = 0;
    li.setAttribute("role", "button");

    const left = document.createElement("span");
    left.className = "explorer__item-left";

    const fav = faviconUrl(tool.url);
    if (fav) {
      const img = document.createElement("img");
      img.className = "explorer__item-favicon";
      img.src = fav;
      img.alt = "";
      img.loading = "lazy";
      img.onerror = function() { this.style.display = "none"; };
      left.appendChild(img);
    }

    const name = document.createElement("span");
    name.className = "explorer__item-name";
    name.textContent = tool.name;
    left.appendChild(name);

    const meta = document.createElement("span");
    meta.className = "explorer__item-meta";
    const parts = [];
    if (tool.category) parts.push(tool.category);
    parts.push(tool.type);
    meta.textContent = parts.join(" · ");

    li.appendChild(left);
    li.appendChild(meta);

    li.addEventListener("click", () => selectTool(tool.id));
    li.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); selectTool(tool.id); }
    });

    return li;
  }

  function renderTools(list) {
    colOpen.innerHTML = "";
    colCommercial.innerHTML = "";

    const openTools = list.filter(isOpen);
    const commercialTools = list.filter(t => !isOpen(t));

    if (openTools.length === 0 && commercialTools.length === 0) {
      if (prompt) {
        prompt.style.display = "";
        prompt.textContent = searchQuery ? "No tools match your search." : "Select a layer above or search for a tool.";
      }
      resultArea.style.display = "none";
      return;
    }

    if (prompt) prompt.style.display = "none";
    resultArea.style.display = "";

    // Get subcategories for active layer
    const layer = activeLayer ? layerMap[activeLayer] : null;
    const subcats = layer && layer.subcategories ? layer.subcategories : null;

    if (subcats && activeLayer) {
      renderGroupedTools(colOpen, openTools, subcats);
      renderGroupedTools(colCommercial, commercialTools, subcats);
    } else {
      openTools.sort((a, b) => a.name.localeCompare(b.name)).forEach(t => colOpen.appendChild(makeToolItem(t)));
      commercialTools.sort((a, b) => a.name.localeCompare(b.name)).forEach(t => colCommercial.appendChild(makeToolItem(t)));
    }
  }

  function renderGroupedTools(container, toolList, subcats) {
    // Group tools by subcategory
    const groups = new Map();
    subcats.forEach(sc => groups.set(sc.id, []));
    const ungrouped = [];

    toolList.forEach(tool => {
      const toolSubcats = tool.subcategories || [];
      let placed = false;
      subcats.forEach(sc => {
        if (toolSubcats.includes(sc.id)) {
          groups.get(sc.id).push(tool);
          placed = true;
        }
      });
      if (!placed) ungrouped.push(tool);
    });

    subcats.forEach(sc => {
      const tools = groups.get(sc.id);
      // Add ungrouped tools to every subcategory
      const combined = [...tools, ...ungrouped];
      if (combined.length === 0) return;

      const label = document.createElement("li");
      label.className = "explorer__subcat-label";
      label.textContent = sc.label;
      container.appendChild(label);

      // De-duplicate (ungrouped tools that were also explicitly placed)
      const seen = new Set();
      combined.sort((a, b) => a.name.localeCompare(b.name)).forEach(t => {
        if (!seen.has(t.id)) {
          seen.add(t.id);
          container.appendChild(makeToolItem(t));
        }
      });
    });
  }

  function showDetail(tool) {
    detail.style.display = "";

    const nameEl = detail.querySelector(".explorer__detail-name");
    nameEl.innerHTML = "";
    const fav = faviconUrl(tool.url);
    if (fav) {
      const img = document.createElement("img");
      img.className = "explorer__detail-favicon";
      img.src = fav;
      img.alt = "";
      img.onerror = function() { this.style.display = "none"; };
      nameEl.appendChild(img);
    }
    nameEl.appendChild(document.createTextNode(tool.name));

    detail.querySelector(".explorer__detail-desc").textContent = tool.desc;

    const detailsEl = detail.querySelector(".explorer__detail-details");
    if (detailsEl) {
      detailsEl.innerHTML = "";
      appendDetailSection(detailsEl, "What It Is", tool.what || tool.desc);
      appendDetailSection(detailsEl, "Impact", tool.impact);
      appendDetailSection(detailsEl, "Role", tool.role);
      appendDetailSection(detailsEl, "Notes", tool.details);
      detailsEl.style.display = detailsEl.childElementCount ? "" : "none";
    }

    const metaParts = [tool.type];
    if (tool.category) metaParts.push(tool.category);
    detail.querySelector(".explorer__detail-meta").textContent = metaParts.join(" · ");

    const badgeContainer = detail.querySelector(".explorer__detail-layers");
    badgeContainer.innerHTML = "";
    tool.directLayers.forEach(lid => {
      const layer = layerMap[lid];
      if (!layer) return;
      const badge = document.createElement("span");
      badge.className = "explorer__layer-badge is-direct";
      badge.textContent = layer.index + " " + layer.label;
      badgeContainer.appendChild(badge);
    });
    tool.indirectLayers.forEach(lid => {
      const layer = layerMap[lid];
      if (!layer) return;
      const badge = document.createElement("span");
      badge.className = "explorer__layer-badge";
      badge.textContent = layer.index + " " + layer.label;
      badgeContainer.appendChild(badge);
    });

    const layerDetailsContainer = detail.querySelector(".explorer__detail-layer-details");
    if (layerDetailsContainer) {
      layerDetailsContainer.innerHTML = "";
      if (tool.layerDetails) {
        const title = document.createElement("div");
        title.className = "explorer__detail-section-title";
        title.textContent = "Role By Layer";
        layerDetailsContainer.appendChild(title);

        const allLayers = [...tool.directLayers, ...tool.indirectLayers];
        allLayers.forEach(lid => {
          const explanation = tool.layerDetails[lid];
          if (!explanation) return;
          const layer = layerMap[lid];
          if (!layer) return;
          const row = document.createElement("div");
          row.className = "explorer__layer-detail";
          const badge = document.createElement("span");
          badge.className = "explorer__layer-badge" + (tool.directLayers.includes(lid) ? " is-direct" : "");
          badge.textContent = layer.index;
          const text = document.createElement("span");
          text.textContent = explanation;
          row.appendChild(badge);
          row.appendChild(text);
          layerDetailsContainer.appendChild(row);
        });
        layerDetailsContainer.style.display = layerDetailsContainer.childElementCount > 1 ? "" : "none";
      } else {
        layerDetailsContainer.style.display = "none";
      }
    }

    const linksContainer = detail.querySelector(".explorer__detail-links");
    linksContainer.innerHTML = "";
    if (tool.url) {
      const a = document.createElement("a");
      a.href = tool.url;
      a.target = "_blank";
      a.rel = "noreferrer";
      a.textContent = getDomain(tool.url) || tool.url;
      linksContainer.appendChild(a);
    }
    if (tool.github) {
      const a = document.createElement("a");
      a.href = tool.github;
      a.target = "_blank";
      a.rel = "noreferrer";
      a.innerHTML = GH_ICON;
      const span = document.createElement("span");
      const ghPath = tool.github.replace("https://github.com/", "");
      span.textContent = ghPath;
      a.appendChild(span);
      linksContainer.appendChild(a);
    }
  }

  function hideDetail() {
    detail.style.display = "none";
    activeTool = null;
  }

  // ── Layer learn display ──
  function showLayerLearn(layerId) {
    if (!layerLearn || !learn[layerId]) {
      hideLayerLearn();
      return;
    }
    const data = learn[layerId];
    layerLearnLabel.textContent = data.index + " " + data.title;
    layerLearnDesc.textContent = data.subtitle;
    layerLearnContent.innerHTML = data.html;
    layerLearn.style.display = "";

    // Reset accordion state
    if (layerLearnAccordion && layerLearnPanel && layerLearnToggle) {
      layerLearnAccordion.classList.remove("is-open");
      layerLearnPanel.style.maxHeight = "0px";
      layerLearnToggle.setAttribute("aria-expanded", "false");
    }
  }

  function hideLayerLearn() {
    if (layerLearn) layerLearn.style.display = "none";
  }

  // Wire up layer-learn accordion toggle
  if (layerLearnToggle && layerLearnPanel && layerLearnAccordion) {
    layerLearnToggle.addEventListener("click", () => {
      const isOpenState = layerLearnAccordion.classList.contains("is-open");
      if (isOpenState) {
        layerLearnAccordion.classList.remove("is-open");
        layerLearnPanel.style.maxHeight = "0px";
        layerLearnToggle.setAttribute("aria-expanded", "false");
      } else {
        layerLearnAccordion.classList.add("is-open");
        layerLearnPanel.style.maxHeight = layerLearnPanel.scrollHeight + "px";
        layerLearnToggle.setAttribute("aria-expanded", "true");
      }
    });
  }

  // ── Actions ──
  function selectLayer(layerId) {
    hideDetail();
    activeTool = null;
    searchQuery = "";
    if (searchInput) searchInput.value = "";

    if (activeLayer === layerId) {
      activeLayer = null;
      clearHighlights();
      renderTools([]);
      hideLayerLearn();
      return;
    }

    activeLayer = layerId;
    clearHighlights();
    flowNodes.forEach(n => {
      if (n.dataset.layer === layerId) n.classList.add("is-active");
    });
    showLayerLearn(layerId);
    renderTools(toolsByLayer(layerId));
  }

  function selectTool(toolId) {
    const tool = tools.find(t => t.id === toolId);
    if (!tool) return;

    activeTool = toolId;
    highlightLayers(tool.directLayers, tool.indirectLayers);
    showDetail(tool);

    explorer.querySelectorAll(".explorer__item").forEach(el => {
      el.classList.toggle("is-active", el.dataset.toolId === toolId);
    });
  }

  function doSearch(q) {
    searchQuery = q;
    activeLayer = null;
    activeTool = null;
    hideDetail();
    clearHighlights();
    hideLayerLearn();

    if (!q.trim()) {
      renderTools([]);
      return;
    }

    renderTools(toolsBySearch(q));
  }

  // ── Event handlers ──
  flowNodes.forEach(node => {
    node.addEventListener("click", e => {
      e.preventDefault();
      selectLayer(node.dataset.layer);
    });
  });

  let debounceTimer;
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => doSearch(searchInput.value), 150);
    });
  }

  const backBtn = detail.querySelector(".explorer__back");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      hideDetail();
      clearHighlights();
      if (activeLayer) {
        flowNodes.forEach(n => {
          if (n.dataset.layer === activeLayer) n.classList.add("is-active");
        });
      }
    });
  }

  // ── Init ──
  hideDetail();
  hideLayerLearn();
  renderTools([]);

  const hash = window.location.hash.replace("#vc-", "");
  if (hash && layerMap[hash]) {
    selectLayer(hash);
  }
})();
