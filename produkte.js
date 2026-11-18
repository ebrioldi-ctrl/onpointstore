/*
 * KATALOGU I PËRBASHKËT — përdoret nga index.html dhe produktet.html.
 * Çmimet janë dhënë nga dyqani, në lekë; null kur mungojnë.
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
    id: "hoco-u137-line", emri: "Kabllo USB-C në USB-C Hoco U137 Line", kategoria: "karikues", nenkategoria: "",
    modeli: "U137", cmimi: 500, foto: "assets/products/hoco/hoco-u137-line.jpg", stoku: null,
    pershkrimi: "Kabllo për karikim të shpejtë dhe të dhëna, me ekran që tregon fuqinë e karikimit.",
    specifikat: ["USB-C → USB-C; PD deri 60W (20V/3A)", "Gjatësi 1.2 m; ekran digjital LED", "Thurje najloni dhe konektorë prej aliazh zinku"],
    burimi: "https://hocotech.com/product/mobile-accessories/cables/type-c-aka-usb-c/cable-type-c-to-type-c-u137-line-pd-60w-fast-charge/", demo: false
  },
  {
    id: "hoco-x114-energy", emri: "Kabllo USB-A në USB-C Hoco X114 Energy", kategoria: "karikues", nenkategoria: "",
    modeli: "X114", cmimi: 500, foto: "assets/products/hoco/hoco-x114-energy.jpg", stoku: null,
    pershkrimi: "Kabllo për karikimin e telefonave e tabletëve me USB-C dhe transferimin e të dhënave.",
    specifikat: ["USB-A → USB-C; rrymë deri 3A", "Gjatësi 1 m", "Mbështjellje dhe konektorë PVC"],
    burimi: "https://hocotech.com/product/mobile-accessories/cables/type-c-aka-usb-c/cable-usb-to-type-c-x114-energy/", demo: false
  },
  {
    id: "hoco-x102-fresh", emri: "Kabllo USB-C në Lightning Hoco X102 Fresh", kategoria: "karikues", nenkategoria: "iphone",
    modeli: "X102", cmimi: 500, foto: "assets/products/hoco/hoco-x102-fresh.jpg", stoku: null,
    pershkrimi: "Kabllo për karikim të shpejtë dhe të dhëna për iPhone e iPad me portë Lightning.",
    specifikat: ["USB-C → Lightning; PD deri 27W", "Gjatësi 1 m", "Thurje najloni dhe konektorë prej aliazh alumini"],
    burimi: "https://hocotech.com/product/mobile-accessories/cables/lightning/cable-type-c-to-lightning-x102-fresh-pd-27w-fast-charge/", demo: false
  },
  {
    id: "hoco-x113-beneficio", emri: "Kabllo USB-A në Micro-USB Hoco X113 Beneficio", kategoria: "karikues", nenkategoria: "",
    modeli: "X113", cmimi: 500, foto: "assets/products/hoco/hoco-x113-beneficio.jpg", stoku: null,
    pershkrimi: "Kabllo për karikim dhe të dhëna për telefona e pajisje me portë Micro-USB.",
    specifikat: ["USB-A → Micro-USB; rrymë deri 2.4A", "Gjatësi 1 m", "Thurje najloni dhe konektorë PVC"],
    burimi: "https://hocotech.com/product/mobile-accessories/cables/micro-usb/cable-usb-to-micro-usb-x113-beneficio/", demo: false
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
    id: "hoco-ua38c-led", emri: "Adaptor USB-A / USB-C me dritë LED Hoco UA38C", kategoria: "aksesore", nenkategoria: "adaptors",
    modeli: "UA38C", cmimi: 700, foto: "assets/products/hoco/hoco-ua38c-led.jpg", stoku: null,
    pershkrimi: "Dritë LED kompakte për ndriçim praktik, që furnizohet nga një karikues ose power bank.",
    specifikat: ["Lidhje USB-A / USB-C; kokë LED me shpërndarës drite", "Trup prej aliazh alumini dhe kabllo me najlon", "Peshë 21 g"],
    burimi: "https://hocotech.com/product/mobile-accessories/cables/adapters/cable-adapter-usb-a-type-c-to-led-light-ua38c/", demo: false
  },
  {
    id: "hoco-ua37-rj45", emri: "Adaptor USB-C në RJ45 Hoco UA37", kategoria: "aksesore", nenkategoria: "adaptors",
    modeli: "UA37", cmimi: 700, foto: "assets/products/hoco/hoco-ua37-rj45.jpg", stoku: null,
    pershkrimi: "Përshtatës për lidhje interneti me kabllo Ethernet në pajisje USB-C që mbështesin OTG.",
    specifikat: ["USB-C mashkull → RJ45 femër; Ethernet 10/100/1000 Mbps", "Plug and play, pa drejtues; kërkon mbështetje OTG", "Kabllo 12 cm; alumin dhe najlon"],
    burimi: "https://hocotech.com/product/mobile-accessories/cables/adapters/adapter-type-c-to-rj45-ua37/", demo: false
  },
  {
    id: "hoco-ua36d-lightning", emri: "Adaptor USB-C në Lightning Hoco UA36D", kategoria: "aksesore", nenkategoria: "adaptors",
    modeli: "UA36D", cmimi: 500, foto: "assets/products/hoco/hoco-ua36d-lightning.jpg", stoku: null,
    pershkrimi: "Përdor kabllon Lightning për karikim dhe të dhëna në një pajisje me portë USB-C.",
    specifikat: ["USB-C mashkull → Lightning femër; karikim deri 3A", "USB 2.0 deri 480 Mbps; tregues LED", "Nuk mbështet audio ose thirrje"],
    burimi: "https://hocotech.com/product/mobile-accessories/cables/adapters/adapter-type-c-to-ip-ua36d/", demo: false
  },
  {
    id: "hoco-e80-travel", emri: "Marrës Bluetooth AUX Hoco E80 Travel", kategoria: "aksesore", nenkategoria: "adaptors",
    modeli: "E80", cmimi: 600, foto: "assets/products/hoco/hoco-e80-travel.jpg", stoku: null,
    pershkrimi: "Shto lidhje pa tela për muzikë dhe thirrje në makinë ose altoparlant me hyrje AUX.",
    specifikat: ["Bluetooth 5.3; lidhës AUX 3.5 mm i heqshëm; distancë deri 10 m", "Bateri 250 mAh; deri 12 orë përdorim, karikim rreth 2 orë", "Ekran LED për nivelin e baterisë"],
    burimi: "https://hocotech.com/product/mobile-accessories/cables/adapters/car-aux-bt-receiver-e80-travel/", demo: false
  },
  {
    id: "hoco-z60-bloom", emri: "Karikues makine Hoco Z60 Bloom 48W", kategoria: "karikues", nenkategoria: "",
    modeli: "Z60", cmimi: 1000, foto: "assets/products/hoco/hoco-z60-bloom.jpg", stoku: null,
    pershkrimi: "Karikues makine me dy porta për karikim të shpejtë gjatë udhëtimit.",
    specifikat: ["USB-C deri 30W + USB-A deri 18W; gjithsej 48W", "Hyrje 12–24V; PD, PPS dhe QC3.0", "Varianti me kabllo USB-A → USB-C 1 m konfirmohet me dyqanin"],
    burimi: "https://hocotech.com/product/mobile-accessories/in-car/car-chargers/car-charger-z60-bloom-48w-cable-set/", demo: false
  }
]);
