(() => {
  "use strict";

  const products = window.ON_POINT_PRODUCTS || [];
  const productById = new Map(products.map(product => [product.id, product]));
  // Përziej një kopje vetëm gjatë hapjes së faqes, që kërkimi të mos ndërrojë rendin.
  const shuffledProducts = [...products];
  for (let index = shuffledProducts.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledProducts[index], shuffledProducts[randomIndex]] = [shuffledProducts[randomIndex], shuffledProducts[index]];
  }
  const categories = [
    {
      id: "karikues", name: "Karikues", icon: "charger", allLabel: "Të gjithë karikuesit",
      description: "Zgjidh kabllo dhe karikues sipas lidhësit dhe pajisjes tënde.",
      preview: {
        image: "hover cover/karikusa.jpg", alt: "Karikues dhe kabllo për telefon",
        title: "Karikues për çdo ditë.", description: "Zbulo karikues për iPhone dhe Samsung.", button: "Shiko karikuesit"
      },
      subcategories: [
        { id: "iphone", name: "Për iPhone", title: "Karikues për iPhone" },
        { id: "samsung", name: "Për Samsung", title: "Karikues për Samsung" }
      ]
    },
    {
      id: "kasa", name: "Kasa telefoni", icon: "phone", allLabel: "Të gjitha kasat",
      description: "Zgjidh një kasë sipas modelit të telefonit tënd.",
      preview: {
        title: "Zbulo kasat e telefonit.", description: "Për iPhone apo Samsung? Gjej kasën për modelin tënd.", button: "Zbulo kasat"
      },
      subcategories: [
        { id: "iphone", name: "Për iPhone", title: "Kasa për iPhone" },
        { id: "samsung", name: "Për Samsung", title: "Kasa për Samsung" }
      ]
    },
    {
      id: "syze", name: "Syze", icon: "glasses", allLabel: "Të gjitha syzet",
      description: "Eksploro syzet për femra dhe meshkuj.",
      preview: {
        image: "hover cover/syzet.jpg", alt: "Koleksion syzesh dielli",
        title: "Syze për stilin tënd.", description: "Eksploro koleksionet për femra dhe meshkuj.", button: "Shiko syzet"
      },
      subcategories: [
        { id: "femra", name: "Femra", title: "Syze për femra" },
        { id: "meshkuj", name: "Meshkuj", title: "Syze për meshkuj" }
      ]
    },
    {
      id: "lodra", name: "Lodra", icon: "toy", allLabel: "Të gjitha lodrat",
      description: "Eksploro koleksionet e lodrave për goca dhe çuna.",
      preview: {
        image: "hover cover/lodrat.jpg", alt: "Koleksion lodrash",
        title: "Pak lojë. Shumë gëzim.", description: "Zbulo lodrat për goca dhe çuna.", button: "Shiko lodrat"
      },
      subcategories: [
        { id: "goca", name: "Goca", title: "Lodra për goca" },
        { id: "cuna", name: "Çuna", title: "Lodra për çuna" }
      ]
    },
    {
      id: "aksesore", name: "Aksesorë të tjerë telefoni", icon: "headphones", allLabel: "Të gjithë aksesorët",
      description: "Zbulo adaptorë, çanta mbrojtëse nga uji dhe aksesorë të tjerë telefoni.",
      subcategories: [
        { id: "adaptors", name: "Adaptors", title: "Adaptors" }
      ],
      preview: {
        image: "hover cover/akesortetjertelefoni.jpg", alt: "Aksesorë dhe pajisje për telefon",
        title: "Detaje që të duhen.", description: "Eksploro aksesorët për telefonin tënd.", button: "Shiko aksesorët"
      }
    }
  ];
  const categoryById = id => categories.find(category => category.id === id);
  const categoryName = id => categoryById(id)?.name || "Produkte";
  const productSubcategories = product => [...new Set([
    product.nenkategoria,
    ...(Array.isArray(product.nenkategorite) ? product.nenkategorite : [])
  ].filter(Boolean))];
  const CART_KEY = "onpoint-cart-v1";
  const MAX_QUANTITY = 99;
  const numberFormat = new Intl.NumberFormat("sq-AL");
  const hasPrice = value => Number.isFinite(value) && value >= 0;
  const money = value => hasPrice(value) ? `${numberFormat.format(value)} lekë` : "Pyet për çmimin";
  const linePrice = (product, quantity) => hasPrice(product.cmimi) ? product.cmimi * quantity : null;
  const productImageAlt = product => `${product.fotoProvizore ? "Imazh provizor: " : product.demo ? "Ilustrim demo: " : ""}${product.emri}`;
  const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character]));
  const normalize = value => String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  const $ = selector => document.querySelector(selector);
  const isHome = document.body.dataset.page === "home";
  const list = $("#lista-produkteve");
  const search = $("#search");
  const cartDialog = $("#cart-dialog");
  let storageAvailable = true;
  let toastTimer;
  let previousOverflow = "";

  const icons = {
    search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4.5 4.5"/>',
    arrow: '<path d="M5 12h14m-5-5 5 5-5 5"/>',
    bag: '<path d="M5 7h14l1 14H4L5 7Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    charger: '<path d="M8 3v5m8-5v5M6 8h12v5a6 6 0 0 1-6 6v3m-6-12V8m12 2V8"/>',
    phone: '<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 5h4m-3 14h2"/>',
    glasses: '<circle cx="6" cy="14" r="4"/><circle cx="18" cy="14" r="4"/><path d="M10 14h4M2 13l2-7h3m15 7-2-7h-3"/>',
    toy: '<path d="m4 11 2-5h12l2 5M3 11h18v7H3zM7 18v2m10-2v2M7 14h1m8 0h1"/>',
    headphones: '<path d="M4 14v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="12" width="4" height="8" rx="2"/><rect x="17" y="12" width="4" height="8" rx="2"/>',
    chat: '<path d="M21 11.5a9 9 0 0 1-9 9 10 10 0 0 1-4-.8L3 21l1.3-4.7A9 9 0 1 1 21 11.5Z"/><path d="M8 9h8m-8 4h5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>'
  };
  function icon(name) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.bag}</svg>`;
  }
  document.querySelectorAll("[data-icon]").forEach(element => { element.innerHTML = icon(element.dataset.icon); });
  document.querySelectorAll("[data-year]").forEach(element => { element.textContent = new Date().getFullYear(); });
  const hasDemoProducts = products.some(product => product.demo);
  document.querySelectorAll(".demo-note").forEach(element => { element.hidden = !hasDemoProducts; });
  document.querySelectorAll("[data-catalog-status]").forEach(element => {
    element.textContent = hasDemoProducts ? "Version i parë · Katalog demo" : "Aksesorë për çdo ditë";
  });

  function readFilters() {
    const params = new URLSearchParams(window.location.search);
    return {
      category: (params.get("kategoria") || "").trim().toLowerCase(),
      // Pranon edhe lidhjet e vjetra me marka; lidhjet e reja përdorin nenkategoria.
      subcategory: (params.get("nenkategoria") || params.get("marka") || "").trim().toLowerCase(),
      query: (params.get("q") || "").trim().slice(0, 200)
    };
  }
  let filters = readFilters();
  search.value = filters.query;
  search.maxLength = 200;

  function catalogURL(category = filters.category, subcategory = filters.subcategory, query = filters.query) {
    const params = new URLSearchParams();
    if (category) params.set("kategoria", category);
    if (subcategory) params.set("nenkategoria", subcategory);
    if (query) params.set("q", query);
    return `produktet.html${params.size ? `?${params}` : ""}`;
  }

  function filterLink(label, category, subcategory, active) {
    return `<a class="filter-chip${active ? " is-active" : ""}" href="${escapeHTML(catalogURL(category, subcategory))}"${active ? ' aria-current="page"' : ""}>${escapeHTML(label)}</a>`;
  }

  function renderCategoryNavigation() {
    const nav = $(".category-nav");
    if (!nav) return;
    const heading = nav.querySelector(".nav-heading").outerHTML;
    const footnote = nav.querySelector(".nav-footnote").outerHTML;
    nav.innerHTML = heading + categories.map(category => {
      const hasChildren = category.subcategories.length > 0;
      const canExpand = hasChildren || Boolean(category.preview);
      const submenuId = category.id === "kasa" ? "case-nav-links" : `${category.id}-nav-links`;
      return `<div class="category-group" data-category-group="${category.id}"><div class="category-row" id="${category.id}-row"><a class="category-link" id="kategoria-${category.id}" href="${escapeHTML(catalogURL(category.id, "", ""))}"><span data-icon="${category.icon}" aria-hidden="true">${icon(category.icon)}</span><span>${escapeHTML(category.name)}</span>${canExpand ? "" : '<span class="chevron" aria-hidden="true">›</span>'}</a>${canExpand ? `<button class="category-toggle" id="toggle-${category.id}" data-category-toggle="${category.id}" type="button" aria-label="Shfaq ${hasChildren ? "nënkategoritë" : "foton"}: ${escapeHTML(category.name)}" aria-expanded="false" aria-controls="category-preview${hasChildren ? ` ${submenuId}` : ""}${category.id === "kasa" ? " nenkategorite-kasa" : ""}">⌄</button>` : ""}</div>${hasChildren ? `<div class="case-nav-links category-submenu" id="${submenuId}" data-category-submenu hidden>${category.subcategories.map(subcategory => `<a href="${escapeHTML(catalogURL(category.id, subcategory.id, ""))}">${escapeHTML(subcategory.title)} <span aria-hidden="true">↗</span></a>`).join("")}</div>` : ""}</div>`;
    }).join("") + footnote;
  }

  function renderCatalog() {
    const words = normalize(filters.query).split(/\s+/).filter(Boolean);
    const selectedCategory = categoryById(filters.category);
    const selectedSubcategory = selectedCategory?.subcategories.find(subcategory => subcategory.id === filters.subcategory);
    const catalogProducts = filters.category ? products : shuffledProducts;
    const results = catalogProducts.filter(product => {
      const matchesCategory = !filters.category || product.kategoria === filters.category;
      const productChildren = productSubcategories(product);
      const matchesSubcategory = !filters.subcategory || (selectedSubcategory && product.kategoria === filters.category && productChildren.includes(filters.subcategory));
      const subcategoryTitles = categoryById(product.kategoria)?.subcategories.filter(item => productChildren.includes(item.id)).map(item => item.title).join(" ") || "";
      const haystack = normalize(`${product.emri} ${product.modeli || ""} ${product.pershkrimi || ""} ${(product.specifikat || []).join(" ")} ${categoryName(product.kategoria)} ${subcategoryTitles}`);
      return matchesCategory && matchesSubcategory && words.every(word => haystack.includes(word));
    });
    $("#category-filters").innerHTML = filterLink("Të gjitha", "", "", !filters.category && !filters.subcategory) + categories.map(category => filterLink(category.name, category.id, "", filters.category === category.id)).join("");
    const subcategoryFilters = $("#subcategory-filters");
    subcategoryFilters.hidden = !selectedCategory?.subcategories.length;
    subcategoryFilters.setAttribute("aria-label", `Filtro sipas nënkategorisë: ${selectedCategory?.name || "Produktet"}`);
    subcategoryFilters.innerHTML = selectedCategory?.subcategories.length
      ? filterLink(selectedCategory.allLabel, filters.category, "", !filters.subcategory) + selectedCategory.subcategories.map(subcategory => filterLink(subcategory.name, filters.category, subcategory.id, filters.subcategory === subcategory.id)).join("")
      : "";
    $("#result-count").textContent = `${results.length} ${results.length === 1 ? "produkt" : "produkte"}`;
    let title = "Të gjitha produktet";
    if (filters.category) title = categoryName(filters.category);
    if (filters.category && !selectedCategory) title = "Kategori e panjohur";
    if (selectedSubcategory) title = selectedSubcategory.title;
    if (isHome) $("#catalog-title").textContent = filters.query ? "Rezultatet e kërkimit" : "Në fokus, për ty";
    else {
      $("#catalog-title").textContent = title;
      $("#breadcrumb-current").textContent = title;
      $("#catalog-description").textContent = selectedCategory?.description || "Gjej detajin që të përshtatet.";
      document.title = `${title} | ON POINT STORE`;
      $("#active-search").hidden = !filters.query;
      $("#search-description").textContent = `Kërkimi: “${filters.query}”`;
    }
    if (!results.length) {
      list.innerHTML = `<div class="empty-state">${icon("search")}<h3>Nuk u gjet asnjë produkt.</h3><p>Provo një fjalë tjetër ose hiq filtrat për të parë katalogun.</p><a class="button button-red" href="produktet.html">Pastro filtrat</a></div>`;
      return;
    }
    list.innerHTML = results.map(product => `<article class="product-card" data-product-id="${escapeHTML(product.id)}">
      <div class="product-image"><img src="${escapeHTML(product.foto)}" alt="${escapeHTML(productImageAlt(product))}" width="600" height="600" loading="lazy">${product.fotoProvizore ? '<span class="product-tag">FOTO PROVIZORE</span>' : product.demo ? '<span class="product-tag">DEMO</span>' : ""}</div>
      <div class="product-body"><span class="product-category">${escapeHTML(categoryName(product.kategoria))}</span><h3>${escapeHTML(product.emri)}</h3><p class="product-description${product.specifikat?.length ? " has-specifications" : ""}">${escapeHTML(product.pershkrimi || "")}</p>${product.specifikat?.length ? `<ul class="product-specifications">${product.specifikat.map(specification => `<li>${escapeHTML(specification)}</li>`).join("")}</ul>` : ""}${product.stoku === null ? '<p class="product-stock">Stoku: pa konfirmuar</p>' : ""}<div class="product-bottom"><strong class="product-price">${money(product.cmimi)}</strong><button class="add-to-cart" type="button" data-add="${escapeHTML(product.id)}" aria-label="Shto në shportë: ${escapeHTML(product.emri)}"><span>Shto në shportë</span>${icon("plus")}</button></div></div>
    </article>`).join("");
  }

  function updateSearch() {
    filters.query = search.value.trim().slice(0, 200);
    const url = new URL(window.location.href);
    if (filters.query) url.searchParams.set("q", filters.query);
    else url.searchParams.delete("q");
    // file:// dhe serverë lokalë të ndryshëm mbeten të përdorshëm.
    try { window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`); } catch { /* Kërkimi vazhdon edhe pa History API. */ }
    renderCatalog();
  }
  search.addEventListener("input", updateSearch);
  $(".kerkimi").addEventListener("submit", event => {
    event.preventDefault();
    filters.query = search.value.trim().slice(0, 200);
    window.location.href = catalogURL();
  });
  $("#clear-search")?.addEventListener("click", () => { search.value = ""; updateSearch(); search.focus(); });
  window.addEventListener("popstate", () => { filters = readFilters(); search.value = filters.query; renderCatalog(); });

  const banner = $(".banner");
  const bannerDefaults = banner ? {
    title: $("#banner-title").innerHTML,
    description: $("#banner-description").textContent,
    button: $("#banner-cta").innerHTML,
    href: $("#banner-cta").getAttribute("href"),
    label: banner.getAttribute("aria-label")
  } : null;

  function showCategoryPreview(id) {
    if (!banner) return;
    const category = categoryById(id);
    const preview = category?.preview;
    const image = $("#category-banner-image");
    banner.classList.toggle("is-case-active", id === "kasa");
    banner.classList.toggle("has-category-image", Boolean(preview?.image));
    banner.dataset.categoryPreview = id || "";
    banner.setAttribute("aria-label", category ? `Zbulo: ${category.name}` : bannerDefaults.label);
    $("#nenkategorite-kasa").hidden = id !== "kasa";
    if (preview) {
      $("#banner-title").textContent = preview.title;
      $("#banner-description").textContent = preview.description;
      $("#banner-cta").innerHTML = `${escapeHTML(preview.button)} <span aria-hidden="true">↗</span>`;
      $("#banner-cta").href = catalogURL(category.id, "", "");
    } else {
      $("#banner-title").innerHTML = bannerDefaults.title;
      $("#banner-description").textContent = bannerDefaults.description;
      $("#banner-cta").innerHTML = bannerDefaults.button;
      $("#banner-cta").setAttribute("href", bannerDefaults.href);
    }
    image.hidden = !preview?.image;
    if (preview?.image) {
      image.alt = preview.alt;
      image.src = preview.image;
    } else {
      image.removeAttribute("src");
      image.alt = "";
    }
  }
  $("#category-banner-image")?.addEventListener("error", () => {
    $("#category-banner-image").hidden = true;
    banner.classList.remove("has-category-image");
  });
  function setCategoryExpanded(id, open) {
    document.querySelectorAll("[data-category-group]").forEach(group => {
      const expanded = open && group.dataset.categoryGroup === id;
      group.classList.toggle("is-expanded", expanded);
      const toggle = group.querySelector("[data-category-toggle]");
      const submenu = group.querySelector("[data-category-submenu]");
      if (!toggle) return;
      if (submenu) submenu.hidden = !expanded;
      toggle.setAttribute("aria-expanded", String(expanded));
      toggle.setAttribute("aria-label", `${expanded ? "Fshih" : "Shfaq"} ${submenu ? "nënkategoritë" : "foton"}: ${categoryName(group.dataset.categoryGroup)}`);
    });
    showCategoryPreview(open ? id : "");
  }
  renderCategoryNavigation();
  document.querySelectorAll("[data-category-toggle]").forEach(toggle => {
    const id = toggle.dataset.categoryToggle;
    const row = $(`#${id}-row`);
    row.addEventListener("pointerenter", () => { if (window.matchMedia("(hover: hover)").matches) setCategoryExpanded(id, true); });
    row.querySelector("a").addEventListener("focus", () => setCategoryExpanded(id, true));
    toggle.addEventListener("click", () => setCategoryExpanded(id, toggle.getAttribute("aria-expanded") !== "true"));
  });

  function sanitizeCart(value) {
    if (!Array.isArray(value)) return [];
    const quantities = new Map();
    value.forEach(item => {
      if (!item || !productById.has(item.id) || !Number.isInteger(item.quantity) || item.quantity < 1) return;
      quantities.set(item.id, Math.min(MAX_QUANTITY, (quantities.get(item.id) || 0) + item.quantity));
    });
    return [...quantities].map(([id, quantity]) => ({ id, quantity }));
  }
  function readCart() {
    try { return sanitizeCart(JSON.parse(window.localStorage.getItem(CART_KEY) || "[]")); }
    catch { return []; }
  }
  let cart = readCart();

  function announce(message) {
    const toast = $("#toast");
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.hidden = false;
    toastTimer = window.setTimeout(() => { toast.hidden = true; }, 3500);
  }
  function saveCart() {
    try { window.localStorage.setItem(CART_KEY, JSON.stringify(cart)); }
    catch {
      storageAvailable = false;
      announce("Shporta funksionon, por shfletuesi nuk lejon ruajtjen pas rifreskimit.");
    }
  }
  const cartCount = () => cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = () => cart.some(item => !hasPrice(productById.get(item.id).cmimi))
    ? null
    : cart.reduce((sum, item) => sum + linePrice(productById.get(item.id), item.quantity), 0);
  function orderMessage() {
    const lines = ["Përshëndetje ON POINT STORE!", "Dëshiroj të porosis:", ""];
    if (cart.some(item => productById.get(item.id).demo)) lines.push("POROSI DEMO — produktet dhe çmimet janë shembuj.", "");
    cart.forEach((item, index) => {
      const product = productById.get(item.id);
      const priceDetails = hasPrice(product.cmimi)
        ? `${item.quantity} × ${money(product.cmimi)} = ${money(linePrice(product, item.quantity))}`
        : `${item.quantity} copë · Pyet për çmimin`;
      lines.push(`${index + 1}. ${product.emri}${product.demo ? " [DEMO]" : ""}`, `   ${priceDetails}`);
    });
    lines.push("", `Totali i produkteve: ${money(cartTotal())}`, "Transporti: Durrës 100L · Pjesa tjetër e Shqipërisë 300L.", "Disponueshmëria për t’u konfirmuar.", "", "Ju lutem më konfirmoni porosinë dhe detajet e dërgesës.");
    return lines.join("\n");
  }
  function renderCart(focusTarget) {
    $("#cart-count").textContent = cartCount();
    $("#cart-title-count").textContent = `(${cartCount()})`;
    document.querySelectorAll(".cart-trigger").forEach(button => { button.setAttribute("aria-label", `Shporta, ${cartCount()} produkte`); });
    $("#cart-summary").hidden = cart.length === 0;
    if (!cart.length) {
      $("#cart-items").innerHTML = `<div class="cart-empty">${icon("bag")}<h3>Shporta jote është bosh.</h3><p>Gjej diçka që të pëlqen dhe shtoje këtu.</p><button class="button button-red" type="button" data-continue-shopping>Vazhdo blerjet ${icon("arrow")}</button></div>`;
      $("#whatsapp-order").hidden = true;
      $("#whatsapp-order").removeAttribute("href");
    } else {
      // Ndryshimi me tastierë ruan DOM-in: blur ndodh përpara klikimit pasues.
      // Kështu klikimi te Hiq ose + nuk humbet kur fusha e sasisë lë fokusin.
      if (focusTarget?.kind === "input") {
        const item = cart.find(entry => entry.id === focusTarget.id);
        const row = [...$("#cart-items").children].find(element => element.dataset.cartId === focusTarget.id);
        if (item && row) {
          row.querySelector(".cart-line-total").textContent = money(linePrice(productById.get(item.id), item.quantity));
          row.querySelector('[data-quantity="decrease"]').disabled = item.quantity === 1;
          row.querySelector('[data-quantity="increase"]').disabled = item.quantity === MAX_QUANTITY;
        }
      } else $("#cart-items").innerHTML = cart.map(item => {
        const product = productById.get(item.id);
        return `<article class="cart-item" data-cart-id="${escapeHTML(item.id)}"><img src="${escapeHTML(product.foto)}" alt="${escapeHTML(productImageAlt(product))}" width="90" height="90"><div class="cart-item-info"><h3>${escapeHTML(product.emri)}</h3><span class="cart-item-price">${money(product.cmimi)}${hasPrice(product.cmimi) ? " / copë" : ""}${product.demo ? " · DEMO" : ""}</span><div class="cart-item-actions"><div class="quantity-control"><button type="button" data-quantity="decrease" data-id="${escapeHTML(item.id)}" aria-label="Ul sasinë: ${escapeHTML(product.emri)}"${item.quantity === 1 ? " disabled" : ""}>−</button><input type="number" min="1" max="${MAX_QUANTITY}" step="1" inputmode="numeric" value="${item.quantity}" data-quantity-input="${escapeHTML(item.id)}" aria-label="Sasia: ${escapeHTML(product.emri)}"><button type="button" data-quantity="increase" data-id="${escapeHTML(item.id)}" aria-label="Rrit sasinë: ${escapeHTML(product.emri)}"${item.quantity === MAX_QUANTITY ? " disabled" : ""}>+</button></div><button class="remove-item" type="button" data-remove="${escapeHTML(item.id)}" aria-label="Hiq nga shporta: ${escapeHTML(product.emri)}">Hiq</button></div></div><strong class="cart-line-total">${money(linePrice(product, item.quantity))}</strong></article>`;
      }).join("");
      $("#cart-total").textContent = money(cartTotal());
      const message = orderMessage();
      $("#order-message").textContent = message;
      // Numri lexohet vetëm nga config.js. Nuk përdoret numër rezervë.
      const configuredNumber = String(window.ON_POINT_CONFIG?.whatsappNumber || "").trim();
      const validNumber = /^[1-9]\d{6,14}$/.test(configuredNumber);
      const whatsapp = $("#whatsapp-order");
      whatsapp.hidden = !validNumber;
      if (validNumber) whatsapp.href = `https://wa.me/${configuredNumber}?text=${encodeURIComponent(message)}`;
      else whatsapp.removeAttribute("href");
      $("#checkout-note").hidden = validNumber;
      $("#checkout-note").textContent = "Numri i WhatsApp të dyqanit nuk është vendosur ende. Porositja nuk mund të dërgohet për momentin. Mesazhin mund ta shikosh më poshtë.";
    }
    if (focusTarget && focusTarget.kind !== "input" && cartDialog.open) {
      const candidates = $("#cart-items").querySelectorAll("button, input");
      const target = [...candidates].find(element => focusTarget.kind === "input" ? element.dataset.quantityInput === focusTarget.id : element.dataset.id === focusTarget.id && element.dataset.quantity === focusTarget.kind);
      (target && !target.disabled ? target : $("#close-cart")).focus();
    }
  }

  function closeCart() { cartDialog.close(); }
  document.querySelectorAll("[data-open-cart]").forEach(button => button.addEventListener("click", () => {
    if (cartDialog.open) return;
    renderCart();
    previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    cartDialog.showModal();
  }));
  $("#close-cart").addEventListener("click", closeCart);
  cartDialog.addEventListener("close", () => { document.documentElement.style.overflow = previousOverflow; });
  cartDialog.addEventListener("click", event => {
    if (event.target !== cartDialog) return;
    const bounds = cartDialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeCart();
  });
  list.addEventListener("click", event => {
    const button = event.target.closest("[data-add]");
    if (!button) return;
    const product = productById.get(button.dataset.add);
    if (!product) return;
    const item = cart.find(entry => entry.id === product.id);
    if (item?.quantity >= MAX_QUANTITY) { announce(`Sasia maksimale është ${MAX_QUANTITY} copë për produkt.`); return; }
    if (item) item.quantity += 1;
    else cart.push({ id: product.id, quantity: 1 });
    saveCart();
    renderCart();
    if (storageAvailable) announce(`${product.emri} u shtua në shportë.`);
  });
  $("#cart-items").addEventListener("click", event => {
    if (event.target.closest("[data-continue-shopping]")) { closeCart(); return; }
    const remove = event.target.closest("[data-remove]");
    if (remove) {
      cart = cart.filter(item => item.id !== remove.dataset.remove);
      saveCart(); renderCart(); $("#close-cart").focus(); return;
    }
    const button = event.target.closest("[data-quantity]");
    if (!button) return;
    const item = cart.find(entry => entry.id === button.dataset.id);
    if (!item) return;
    item.quantity = Math.max(1, Math.min(MAX_QUANTITY, item.quantity + (button.dataset.quantity === "increase" ? 1 : -1)));
    saveCart(); renderCart({ id: item.id, kind: button.dataset.quantity });
  });
  $("#cart-items").addEventListener("change", event => {
    const input = event.target.closest("[data-quantity-input]");
    if (!input) return;
    const item = cart.find(entry => entry.id === input.dataset.quantityInput);
    if (!item) return;
    const quantity = Number(input.value);
    if (!Number.isInteger(quantity) || quantity < 1 || quantity > MAX_QUANTITY) {
      input.value = item.quantity;
      input.setCustomValidity(`Vendos një numër të plotë nga 1 deri në ${MAX_QUANTITY}.`);
      input.reportValidity();
      input.addEventListener("input", () => input.setCustomValidity(""), { once: true });
      return;
    }
    item.quantity = quantity;
    saveCart(); renderCart({ id: item.id, kind: "input" });
  });
  window.addEventListener("storage", event => {
    if (event.key !== CART_KEY && event.key !== null) return;
    cart = readCart();
    renderCart();
  });

  renderCatalog();
  renderCart();
})();
