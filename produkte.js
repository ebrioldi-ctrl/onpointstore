/*
 * KATALOGU I PËRBASHKËT — përdoret nga index.html dhe produktet.html.
 * Çmimet janë në lekë; null kur mungojnë.
 * cmimiOrientues: true shënon çmimet fillestare të propozuara me kërkesë të dyqanit.
 * Specifikat Hoco janë verifikuar te lidhja burimi e çdo produkti.
 * Ndryshoni të dhënat këtu; foto është rrugë relative lokale.
 * Mbajeni id të qëndrueshme: shporta identifikon produktin nga id.
 * Mos ripërdorni ID të shembujve të vjetër për produkte të tjera reale.
 * kategoria: karikues | kasa | syze | lodra | aksesore.
 * nenkategoria sipas kategorisë:
 * karikues: iphone | samsung; kasa: iphone | samsung;
 * syze: femra | meshkuj; lodra: goca | cuna; aksesore: adaptors | "".
 * Nënkategoria bosh te karikuesit përdoret për lidhës universalë.
 * Opsionale: nenkategorite është listë nënkategorish për të njëjtin produkt.
 * P.sh. Stitch ka nenkategoria: "", nenkategorite: ["goca", "cuna"]:
 * shfaqet në të dy filtrat, por ruan një ID dhe një hyrje në shportë.
 * demo: false për produkte reale; fotoProvizore: true kur mungon fotoja për publikim.
 * Opsionale: modeli (kodi Hoco), specifikat (listë), burimi (URL), stoku: null (pa konfirmuar).
 */
window.ON_POINT_PRODUCTS = Object.freeze([
  {
    id: "kasa-iphone-13-pro-max", emri: "Kasë për iPhone 13 Pro Max", kategoria: "kasa", nenkategoria: "iphone",
    cmimi: 1000, foto: "kasa/iphone/iphone 13 pro max.jpeg",
    pershkrimi: "Për iPhone 13 Pro Max. Dizajni sipas fotos.", demo: false
  },
  {
    id: "kasa-iphone-16-pro-max", emri: "Kasë për iPhone 16 Pro Max", kategoria: "kasa", nenkategoria: "iphone",
    cmimi: 1000, foto: "kasa/iphone/Iphone 16 pro max.jpeg",
    pershkrimi: "Për iPhone 16 Pro Max. Dizajni sipas fotos.", demo: false
  },
  {
    id: "kasa-iphone-xs", emri: "Kasë për iPhone XS", kategoria: "kasa", nenkategoria: "iphone",
    cmimi: 1000, foto: "kasa/iphone/Iphone XS.jpeg",
    pershkrimi: "Për iPhone XS. Dizajni sipas fotos.", demo: false
  },
  {
    id: "kasa-iphone-11-monogram", emri: "Kasë për iPhone 11 — monogram", kategoria: "kasa", nenkategoria: "iphone",
    cmimi: 1000, foto: "kasa/iphone/louis vitton iphone 11.jpeg",
    pershkrimi: "Për iPhone 11, me motiv monogram. Dizajni sipas fotos.", demo: false
  },
  {
    id: "kasa-samsung-a15-4g", emri: "Kasë për Samsung A15 4G", kategoria: "kasa", nenkategoria: "samsung",
    cmimi: 1000, foto: "kasa/samsung/A15 4G.jpeg",
    pershkrimi: "Për Samsung A15 4G. Dizajni sipas fotos.", demo: false
  },
  {
    id: "kasa-samsung-a06", emri: "Kasë për Samsung A06", kategoria: "kasa", nenkategoria: "samsung",
    cmimi: 1000, foto: "kasa/samsung/Samsung A06.jpeg",
    pershkrimi: "Për Samsung A06. Dizajni sipas fotos.", demo: false
  },
  {
    id: "kasa-samsung-a25-5g", emri: "Kasë për Samsung A25 5G", kategoria: "kasa", nenkategoria: "samsung",
    cmimi: 1000, foto: "kasa/samsung/Samsung A25 5G.jpeg",
    pershkrimi: "Për Samsung A25 5G. Dizajni sipas fotos.", demo: false
  },
  {
    id: "kasa-samsung-s23-ultra", emri: "Kasë për Samsung S23 Ultra", kategoria: "kasa", nenkategoria: "samsung",
    cmimi: 1000, foto: "kasa/samsung/Samsung S23 Ultra.jpeg",
    pershkrimi: "Për Samsung S23 Ultra. Dizajni sipas fotos.", demo: false
  },
  {
    id: "syze-femra-celine", emri: "Syze për femra — Celine", kategoria: "syze", nenkategoria: "femra",
    cmimi: 2500, foto: "syze/femra/celine.jpg",
    pershkrimi: "Modeli Celine. Pamja sipas fotos.", demo: false
  },
  {
    id: "syze-femra-miu-miu", emri: "Syze për femra — Miu Miu", kategoria: "syze", nenkategoria: "femra",
    cmimi: 2500, foto: "syze/femra/miu miu.jpg",
    pershkrimi: "Modeli Miu Miu. Pamja sipas fotos.", demo: false
  },
  {
    id: "syze-femra-prada", emri: "Syze për femra — Prada", kategoria: "syze", nenkategoria: "femra",
    cmimi: 2500, foto: "syze/femra/Prada.jpeg",
    pershkrimi: "Modeli Prada. Pamja sipas fotos.", demo: false
  },
  {
    id: "syze-femra-versace", emri: "Syze për femra — Versace", kategoria: "syze", nenkategoria: "femra",
    cmimi: 2500, foto: "syze/femra/versace.jpg",
    pershkrimi: "Modeli Versace. Pamja sipas fotos.", demo: false
  },
  {
    id: "syze-meshkuj-dita", emri: "Syze për meshkuj — Dita", kategoria: "syze", nenkategoria: "meshkuj",
    cmimi: 2500, foto: "syze/meshkuj/Dita.jpeg",
    pershkrimi: "Modeli Dita. Pamja sipas fotos.", demo: false
  },
  {
    id: "syze-meshkuj-maybach", emri: "Syze për meshkuj — Maybach", kategoria: "syze", nenkategoria: "meshkuj",
    cmimi: 2500, foto: "syze/meshkuj/maybach.jpeg",
    pershkrimi: "Modeli Maybach. Pamja sipas fotos.", demo: false
  },
  {
    id: "syze-meshkuj-philipp-plein", emri: "Syze për meshkuj — Philipp Plein", kategoria: "syze", nenkategoria: "meshkuj",
    cmimi: 2500, foto: "syze/meshkuj/philipp plein.jpeg",
    pershkrimi: "Modeli Philipp Plein. Pamja sipas fotos.", demo: false
  },
  {
    id: "karikues-iphone-fishe-adaptor", emri: "Karikues për iPhone — fishë + adaptor", kategoria: "karikues", nenkategoria: "iphone",
    cmimi: 1200, foto: "karikus/iphone/Iphone fish + adaptor.jpg",
    pershkrimi: "Fishë dhe adaptor për iPhone, sipas fotos. Konfirmo pajtueshmërinë me modelin tënd.", demo: false
  },
  {
    id: "karikues-samsung-fishe-adaptor", emri: "Karikues për Samsung — fishë + adaptor", kategoria: "karikues", nenkategoria: "samsung",
    cmimi: 1200, foto: "karikus/Samsung fish + Adaptor/karikus samung.jpg",
    pershkrimi: "Fishë dhe adaptor për Samsung, sipas fotos. Konfirmo pajtueshmërinë me modelin tënd.", demo: false
  },
  {
    id: "loder-stitch-muzike-kercim", emri: "Lodër Stitch me muzikë dhe kërcim", kategoria: "lodra", nenkategoria: "", nenkategorite: ["goca", "cuna"],
    cmimi: 1800, foto: "lodra/stich me muzik me kercim.jpeg",
    pershkrimi: "Stitch me muzikë dhe kërcim, sipas fotos.", demo: false
  },
  {
    id: "hoco-upa32b-clever", emri: "Kabllo audio USB-C në 3.5 mm Hoco UPA32B Clever", kategoria: "aksesore", nenkategoria: "adaptors",
    modeli: "UPA32B", cmimi: 700, foto: "assets/products/hoco/hoco-upa32b-clever.jpg", stoku: null,
    pershkrimi: "Lidh pajisjen me USB-C me hyrjen AUX 3.5 mm të makinës ose altoparlantit.",
    specifikat: ["USB-C mashkull → 3.5 mm mashkull; çip DAC, audio Hi-Fi", "Gjatësi 1 m; lidhës 3.5 mm i veshur me ar", "Thurje najloni dhe trup prej aliazh alumini"],
    burimi: "https://hocotech.com/product/mobile-accessories/cables/type-c-aka-usb-c/cable-3-5mm-to-type-c-upa32b-clever-audio-conversion/", demo: false
  },
  {
    id: "hoco-ua27-lightning-hdtv", emri: "Kabllo Lightning në HDTV Hoco UA27", kategoria: "aksesore", nenkategoria: "adaptors",
    modeli: "UA27", cmimi: 700, foto: "assets/products/hoco/hoco-ua27-lightning-hdtv.jpg", stoku: null,
    pershkrimi: "Kabllo për shfaqjen e përmbajtjes nga pajisje me Lightning në televizor ose ekran HDTV.",
    specifikat: ["Lightning → HDTV; rezolucion 1080p në 60Hz", "Gjatësi 2 m", "Trup prej aliazh alumini dhe thurje najloni"],
    burimi: "https://hocotech.com/product/mobile-accessories/cables/lightning/cable-for-lightning-to-hdtv-ua27/", demo: false
  },
  {
    id: "hoco-ua37-rj45", emri: "Adaptor USB-C në RJ45 Hoco UA37", kategoria: "aksesore", nenkategoria: "adaptors",
    modeli: "UA37", cmimi: 700, foto: "assets/products/hoco/hoco-ua37-rj45.jpg", stoku: null,
    pershkrimi: "Përshtatës për lidhje interneti me kabllo Ethernet në pajisje USB-C që mbështesin OTG.",
    specifikat: ["USB-C mashkull → RJ45 femër; Ethernet 10/100/1000 Mbps", "Plug and play, pa drejtues; kërkon mbështetje OTG", "Kabllo 12 cm; alumin dhe najlon"],
    burimi: "https://hocotech.com/product/mobile-accessories/cables/adapters/adapter-type-c-to-rj45-ua37/", demo: false
  },
  {
    id: "hoco-hx53-treasure-waterproof", emri: "Qese ujëmbrojtëse telefoni Hoco HX53 Treasure", kategoria: "aksesore", nenkategoria: "",
    modeli: "HX53", cmimi: 1200, cmimiOrientues: true, foto: "assets/products/hoco/hoco-hx53-treasure-waterproof.avif", stoku: null,
    pershkrimi: "Qese mbrojtëse për plazh e pishinë, me dritare transparente për kamerat dhe kordelë për mbajtje.",
    specifikat: ["IPX8; për telefona deri në 7.2 inç","PU + TPU; 240 × 120 × 15 mm; kordelë e përfshirë","Pa kontroll me prekje nën ujë ose zhbllokim me gjurmë; testo rrjedhjet para çdo përdorimi"],
    burimi: "https://hocotech.com/product/mobile-accessories/waterproof-phone-bags/waterproof-phone-bag-hx53-treasure/", demo: false
  }
]);
