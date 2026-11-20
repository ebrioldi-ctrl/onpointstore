/*
 * KATALOGU I PËRBASHKËT — përdoret nga index.html dhe produktet.html.
 * Çmimet janë në lekë; null kur mungojnë.
 * cmimiOrientues: true shënon çmimet fillestare të propozuara me kërkesë të dyqanit.
 * Specifikat Hoco janë verifikuar te lidhja burimi e çdo produkti.
 * Ndryshoni të dhënat këtu; foto është rrugë relative lokale.
 * Mbajeni id të qëndrueshme: shporta identifikon produktin nga id.
 * Mos ripërdorni ID të shembujve të vjetër për produkte të tjera reale.
 * Produktet nga hoco.al përdorin çmimin aktual të burimit + 200 lekë.
 * fotot: deri në dy foto lokale, produkti dhe paketimi kur burimi e ofron.
 * kategoria: karikues | kasa | syze | lodra | aksesore | audio | pajisje.
 * nenkategoria sipas kategorisë:
 * karikues: iphone | samsung | type-c | micro-usb | makine; kasa: iphone | samsung;
 * syze: femra | meshkuj; lodra: goca | cuna; aksesore: adaptors | mbajtese | "";
 * audio: kufje | bokse; pajisje: maus | ora | rrjeti | makine.
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
    id: "hoco-hx53-treasure-waterproof", emri: "Qese ujëmbrojtëse telefoni Hoco HX53 Treasure", kategoria: "aksesore", nenkategoria: "",
    modeli: "HX53", cmimi: 1200, cmimiOrientues: true, foto: "assets/products/hoco/hoco-hx53-treasure-waterproof.avif", stoku: null,
    pershkrimi: "Qese mbrojtëse për plazh e pishinë, me dritare transparente për kamerat dhe kordelë për mbajtje.",
    specifikat: ["IPX8; për telefona deri në 7.2 inç","PU + TPU; 240 × 120 × 15 mm; kordelë e përfshirë","Pa kontroll me prekje nën ujë ose zhbllokim me gjurmë; testo rrjedhjet para çdo përdorimi"],
    burimi: "https://hocotech.com/product/mobile-accessories/waterproof-phone-bags/waterproof-phone-bag-hx53-treasure/", demo: false
  },
  {
    "id": "hoco-al-kabllo-karikimi-per-iphone-x102-fresh",
    "emri": "Kabllo Karikimi për iPhone X102 Fresh",
    "kategoria": "karikues",
    "nenkategoria": "iphone",
    "modeli": "X102",
    "cmimi": 600,
    "cmimiBurim": 400,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/kabllo-karikimi-per-iphone-x102-fresh-1.jpg",
    "fotot": [
      "assets/products/hoco-al/kabllo-karikimi-per-iphone-x102-fresh-1.jpg",
      "assets/products/hoco-al/kabllo-karikimi-per-iphone-x102-fresh-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Kabllo 1 m për karikim dhe transferim të dhënash në pajisje iPhone me portë Lightning. Ka mbështjellje me thurje najloni.",
    "specifikat": [
      "Ngjyra: E zezë",
      "Gjatësia: 100 cm",
      "Pesha: 23 g",
      "Materiali: Thurje najloni",
      "Lidhja: USB-A → Lightning",
      "Karikim deri në 2.4A; transferim të dhënash deri në 480 Mbps"
    ],
    "burimi": "https://hoco.al/product/kabllo-karikimi-per-iphone-x102-fresh/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-kabllo-karikimi-per-iphone-x89-wind",
    "emri": "Kabllo Karikimi për iPhone X89 Wind",
    "kategoria": "karikues",
    "nenkategoria": "iphone",
    "modeli": "X89",
    "cmimi": 500,
    "cmimiBurim": 300,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/kabllo-karikimi-per-iphone-x89-wind-1.jpg",
    "fotot": [
      "assets/products/hoco-al/kabllo-karikimi-per-iphone-x89-wind-1.jpg",
      "assets/products/hoco-al/kabllo-karikimi-per-iphone-x89-wind-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Kabllo X89 Wind për karikimin dhe lidhjen e pajisjeve me portë Lightning. Gjatësia 1 m është praktike për përdorim të përditshëm.",
    "specifikat": [
      "Ngjyra: E zezë, E kuqe",
      "Gjatësia: 100 cm",
      "Pesha: 26 g",
      "Materiali: Thurje",
      "Portë Lightning për iPhone"
    ],
    "burimi": "https://hoco.al/product/kabllo-karikimi-per-iphone-x89-wind/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-kabllo-karikimi-per-micro-usb-x87-magic-silicone",
    "emri": "Kabllo Karikimi për Micro-USB X87 Magic silicone",
    "kategoria": "karikues",
    "nenkategoria": "micro-usb",
    "modeli": "X87",
    "cmimi": 700,
    "cmimiBurim": 500,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/kabllo-karikimi-per-micro-usb-x87-magic-silicone-1.jpg",
    "fotot": [
      "assets/products/hoco-al/kabllo-karikimi-per-micro-usb-x87-magic-silicone-1.jpg",
      "assets/products/hoco-al/kabllo-karikimi-per-micro-usb-x87-magic-silicone-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Kabllo USB-A në Micro-USB, me mbështjellje silikoni dhe gjatësi 1 m, për karikimin dhe lidhjen e pajisjeve të përputhshme.",
    "specifikat": [
      "Ngjyra: E kuqe, E bardhë",
      "Gjatësia: 100 cm",
      "Pesha: 24 g",
      "Materiali: Silikon",
      "Lidhja: USB-A → Micro-USB"
    ],
    "burimi": "https://hoco.al/product/kabllo-karikimi-per-micro-usb-x87-magic-silicone/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-kabllo-karikimi-usb-a-to-micro-usb-1m-x20-flash",
    "emri": "Kabllo Karikimi USB-A to Micro-USB 1m X20 Flash",
    "kategoria": "karikues",
    "nenkategoria": "micro-usb",
    "modeli": "X20",
    "cmimi": 600,
    "cmimiBurim": 400,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/kabllo-karikimi-usb-a-to-micro-usb-1m-x20-flash-1.jpg",
    "fotot": [
      "assets/products/hoco-al/kabllo-karikimi-usb-a-to-micro-usb-1m-x20-flash-1.jpg",
      "assets/products/hoco-al/kabllo-karikimi-usb-a-to-micro-usb-1m-x20-flash-2.jpg"
    ],
    "fotoPaketimi": false,
    "pershkrimi": "Kabllo X20 Flash me lidhje USB-A në Micro-USB për karikim dhe transferim të dhënash. Ka gjatësi 1 m dhe mbështjellje PVC.",
    "specifikat": [
      "Ngjyra: E zezë, E bardhë",
      "Gjatësia: 100 cm",
      "Pesha: 24 g",
      "Materiali: PVC",
      "Lidhja: USB-A → Micro-USB"
    ],
    "burimi": "https://hoco.al/product/kabllo-karikimi-usb-a-to-micro-usb-1m-x20-flash/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-kabllo-karikimi-usb-a-to-micro-usb-x1-rapid",
    "emri": "Kabllo Karikimi USB-A to Micro-USB X1 Rapid",
    "kategoria": "karikues",
    "nenkategoria": "micro-usb",
    "modeli": "X1",
    "cmimi": 600,
    "cmimiBurim": 400,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/kabllo-karikimi-usb-a-to-micro-usb-x1-rapid-1.webp",
    "fotot": [
      "assets/products/hoco-al/kabllo-karikimi-usb-a-to-micro-usb-x1-rapid-1.webp",
      "assets/products/hoco-al/kabllo-karikimi-usb-a-to-micro-usb-x1-rapid-2.jpg"
    ],
    "fotoPaketimi": false,
    "pershkrimi": "Kabllo X1 Rapid për pajisje me portë Micro-USB. Lidhja USB-A dhe gjatësia 1 m përshtaten për karikim dhe transferim të dhënash.",
    "specifikat": [
      "Ngjyra: E bardhë",
      "Gjatësia: 100 cm",
      "Materiali: PVC",
      "Lidhja: USB-A → Micro-USB"
    ],
    "burimi": "https://hoco.al/product/kabllo-karikimi-usb-a-to-micro-usb-x1-rapid/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-kabllo-karikimi-per-type-c-x90-cool-silicone",
    "emri": "Kabllo Karikimi për Type-C X90 Cool silicone",
    "kategoria": "karikues",
    "nenkategoria": "type-c",
    "modeli": "X90",
    "cmimi": 700,
    "cmimiBurim": 500,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/kabllo-karikimi-per-type-c-x90-cool-silicone-1.jpg",
    "fotot": [
      "assets/products/hoco-al/kabllo-karikimi-per-type-c-x90-cool-silicone-1.jpg",
      "assets/products/hoco-al/kabllo-karikimi-per-type-c-x90-cool-silicone-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Kabllo silikoni 1 m me lidhje USB-A në USB-C, për karikimin dhe lidhjen e pajisjeve me portë Type-C.",
    "specifikat": [
      "Ngjyra: E zezë, E bardhë",
      "Gjatësia: 100 cm",
      "Pesha: 24 g",
      "Materiali: Silikon",
      "Lidhja: USB-A → USB-C"
    ],
    "burimi": "https://hoco.al/product/kabllo-karikimi-per-type-c-x90-cool-silicone/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-kabllo-karikimi-type-c-x102-fresh",
    "emri": "Kabllo Karikimi Type-C X102 Fresh",
    "kategoria": "karikues",
    "nenkategoria": "type-c",
    "modeli": "X102",
    "cmimi": 600,
    "cmimiBurim": 400,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/kabllo-karikimi-type-c-x102-fresh-1.jpg",
    "fotot": [
      "assets/products/hoco-al/kabllo-karikimi-type-c-x102-fresh-1.jpg",
      "assets/products/hoco-al/kabllo-karikimi-type-c-x102-fresh-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Kabllo X102 Fresh me lidhje USB-A në USB-C dhe gjatësi 1 m. Shërben për karikim dhe transferim të dhënash në pajisje Type-C.",
    "specifikat": [
      "Ngjyra: E zezë",
      "Gjatësia: 100 cm",
      "Pesha: 23 g",
      "Materiali: Thurje najloni",
      "Lidhja: USB-A → USB-C",
      "Transferim të dhënash deri në 480 Mbps"
    ],
    "burimi": "https://hoco.al/product/kabllo-karikimi-type-c-x102-fresh/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-kabllo-karikimi-per-iphone-fast-charge-x73",
    "emri": "Kabllo Karikimi për iPhone Fast Charge X73",
    "kategoria": "karikues",
    "nenkategoria": "iphone",
    "modeli": "X73",
    "cmimi": 700,
    "cmimiBurim": 500,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/kabllo-karikimi-per-iphone-fast-charge-x73-1.jpg",
    "fotot": [
      "assets/products/hoco-al/kabllo-karikimi-per-iphone-fast-charge-x73-1.jpg",
      "assets/products/hoco-al/kabllo-karikimi-per-iphone-fast-charge-x73-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Kabllo USB-C në Lightning për karikimin e shpejtë të pajisjeve iPhone të përputhshme. Mbështet fuqi deri në 20W dhe ka gjatësi 1 m.",
    "specifikat": [
      "Ngjyra: E zezë, E bardhë",
      "Gjatësia: 100 cm",
      "Pesha: 24 g",
      "Materiali: PVC",
      "Karikim i shpejtë: Po",
      "Fuqia: 20W",
      "Lidhja: USB-C → Lightning"
    ],
    "burimi": "https://hoco.al/product/kabllo-karikimi-per-iphone-fast-charge-x73/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-kabllo-karikimi-per-iphone-pd-x86-spear",
    "emri": "Kabllo Karikimi për iPhone PD X86 Spear",
    "kategoria": "karikues",
    "nenkategoria": "iphone",
    "modeli": "X86",
    "cmimi": 900,
    "cmimiBurim": 700,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/kabllo-karikimi-per-iphone-pd-x86-spear-1.jpg",
    "fotot": [
      "assets/products/hoco-al/kabllo-karikimi-per-iphone-pd-x86-spear-1.jpg",
      "assets/products/hoco-al/kabllo-karikimi-per-iphone-pd-x86-spear-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Kabllo silikoni USB-C në Lightning për karikim PD dhe transferim të dhënash. Gjatësia 1 m e bën praktike për përdorim të përditshëm.",
    "specifikat": [
      "Ngjyra: E zezë, E kuqe, E bardhë",
      "Gjatësia: 100 cm",
      "Pesha: 24 g",
      "Materiali: Silikon",
      "Karikim i shpejtë: Po",
      "Lidhja: USB-C → Lightning",
      "Transferim të dhënash deri në 480 Mbps"
    ],
    "burimi": "https://hoco.al/product/kabllo-karikimi-per-iphone-pd-x86-spear/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-kabllo-karikimi-type-c-fast-charging-60w-x89-wind",
    "emri": "Kabllo Karikimi Type-C Fast Charging 60W X89 Wind",
    "kategoria": "karikues",
    "nenkategoria": "type-c",
    "modeli": "X89",
    "cmimi": 800,
    "cmimiBurim": 600,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/kabllo-karikimi-type-c-fast-charging-60w-x89-wind-1.jpg",
    "fotot": [
      "assets/products/hoco-al/kabllo-karikimi-type-c-fast-charging-60w-x89-wind-1.jpg",
      "assets/products/hoco-al/kabllo-karikimi-type-c-fast-charging-60w-x89-wind-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Kabllo USB-C në USB-C për karikim deri në 60W dhe transferim të dhënash. Ka gjatësi 1 m dhe mbështjellje me thurje.",
    "specifikat": [
      "Ngjyra: E zezë, E kuqe",
      "Gjatësia: 100 cm",
      "Pesha: 26 g",
      "Materiali: Thurje",
      "Karikim i shpejtë: Po",
      "Fuqia: 60W",
      "Lidhja: USB-C → USB-C",
      "Transferim të dhënash deri në 480 Mbps"
    ],
    "burimi": "https://hoco.al/product/kabllo-karikimi-type-c-fast-charging-60w-x89-wind/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-kabllo-karikimi-type-c-pd-60w-x90-cool",
    "emri": "Kabllo Karikimi Type-C PD 60W X90 Cool",
    "kategoria": "karikues",
    "nenkategoria": "type-c",
    "modeli": "X90",
    "cmimi": 800,
    "cmimiBurim": 600,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/kabllo-karikimi-type-c-pd-60w-x90-cool-1.jpg",
    "fotot": [
      "assets/products/hoco-al/kabllo-karikimi-type-c-pd-60w-x90-cool-1.jpg",
      "assets/products/hoco-al/kabllo-karikimi-type-c-pd-60w-x90-cool-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Kabllo silikoni USB-C në USB-C me mbështetje PD deri në 60W. Ka gjatësi 1 m për karikimin e pajisjeve të përputhshme.",
    "specifikat": [
      "Ngjyra: E zezë, E bardhë",
      "Gjatësia: 100 cm",
      "Pesha: 24 g",
      "Materiali: Silikon",
      "Karikim i shpejtë: Po",
      "Fuqia: 60W",
      "Lidhja: USB-C → USB-C"
    ],
    "burimi": "https://hoco.al/product/kabllo-karikimi-type-c-pd-60w-x90-cool/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-boks-me-bluetooth-bs45-deep-sound-sports",
    "emri": "Boks Me Bluetooth BS45 Deep Sound Sports",
    "kategoria": "audio",
    "nenkategoria": "bokse",
    "modeli": "BS45",
    "cmimi": 2000,
    "cmimiBurim": 1800,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/boks-me-bluetooth-bs45-deep-sound-sports-1.jpg",
    "fotot": [
      "assets/products/hoco-al/boks-me-bluetooth-bs45-deep-sound-sports-1.jpg",
      "assets/products/hoco-al/boks-me-bluetooth-bs45-deep-sound-sports-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Boks Bluetooth portativ me fuqi 5W dhe bateri 500 mAh. Ofron lidhje Bluetooth, radio FM, kartë TF dhe çiftim TWS.",
    "specifikat": [
      "Bluetooth: 5.0",
      "Koha e përdorimit: 2 orë",
      "Koha e karikimit: 1.5 orë",
      "Distanca: 10 m",
      "Bateria: 500 mAh",
      "Mënyrat e lidhjes: Bluetooth, FM, Kartë TF, TWS",
      "Fuqia: 5W",
      "Ngjyra: E zezë, Blu, Gri, E kuqe",
      "Pesha: 242 g"
    ],
    "burimi": "https://hoco.al/product/boks-me-bluetooth-bs45-deep-sound-sports/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-boks-me-bluetooth-bs49-dazzling-sound-desktop",
    "emri": "Boks Me Bluetooth BS49 Dazzling Sound Desktop",
    "kategoria": "audio",
    "nenkategoria": "bokse",
    "modeli": "BS49",
    "cmimi": 4200,
    "cmimiBurim": 4000,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/boks-me-bluetooth-bs49-dazzling-sound-desktop-1.jpg",
    "fotot": [
      "assets/products/hoco-al/boks-me-bluetooth-bs49-dazzling-sound-desktop-1.jpg",
      "assets/products/hoco-al/boks-me-bluetooth-bs49-dazzling-sound-desktop-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Boks Bluetooth për tavolinë me fuqi 10W dhe bateri 1800 mAh. Mbështet AUX, USB, kartë TF, radio FM dhe TWS.",
    "specifikat": [
      "Bluetooth: 5.1",
      "Koha e përdorimit: 2.5 orë",
      "Distanca: 10 m",
      "Koha e karikimit: 2 orë",
      "Bateria: 1800 mAh",
      "Mënyrat e lidhjes: AUX, Bluetooth, USB, FM, Kartë TF, TWS",
      "Fuqia: 10W",
      "Ngjyra: E zezë, Gri metalike",
      "Pesha: 735 g"
    ],
    "burimi": "https://hoco.al/product/boks-me-bluetooth-bs49-dazzling-sound-desktop/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-boks-me-bluetooth-me-mikrofon-bs46-mature-outdoor",
    "emri": "Boks Me Bluetooth Me Mikrofon BS46 Mature Outdoor",
    "kategoria": "audio",
    "nenkategoria": "bokse",
    "modeli": "BS46",
    "cmimi": 6200,
    "cmimiBurim": 6000,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/boks-me-bluetooth-me-mikrofon-bs46-mature-outdoor-1.jpg",
    "fotot": [
      "assets/products/hoco-al/boks-me-bluetooth-me-mikrofon-bs46-mature-outdoor-1.jpg",
      "assets/products/hoco-al/boks-me-bluetooth-me-mikrofon-bs46-mature-outdoor-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Boks Bluetooth me mikrofon për përdorim jashtë shtëpisë. Ka fuqi 10W, bateri 1800 mAh dhe disa mënyra lidhjeje për muzikën.",
    "specifikat": [
      "Bluetooth: 5.0",
      "Koha e përdorimit: 3 orë",
      "Koha e karikimit: 2.5 orë",
      "Distanca: 10 m",
      "Bateria: 1800 mAh",
      "Mënyrat e lidhjes: AUX, Bluetooth, FM, Kartë TF, TWS, USB",
      "Fuqia: 10W",
      "Ngjyra: E zezë",
      "Pesha: 1.9 kg"
    ],
    "burimi": "https://hoco.al/product/boks-me-bluetooth-me-mikrofon-bs46-mature-outdoor/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-adaptor-makine-dual-port-z27-staunch",
    "emri": "Adaptor Makine Dual Port Z27 Staunch",
    "kategoria": "karikues",
    "nenkategoria": "makine",
    "modeli": "Z27",
    "cmimi": 1200,
    "cmimiBurim": 1000,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/adaptor-makine-dual-port-z27-staunch-1.jpg",
    "fotot": [
      "assets/products/hoco-al/adaptor-makine-dual-port-z27-staunch-1.jpg",
      "assets/products/hoco-al/adaptor-makine-dual-port-z27-staunch-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Adaptor karikimi për makinë me dy dalje USB-A. Trupi kompakt ka unazë metalike dhe peshon 18 g.",
    "specifikat": [
      "Ngjyra: E bardhë",
      "Numri i daljeve: 2",
      "Daljet: 2xUSB-A",
      "Materiali: PC dhe unazë metalike",
      "Pesha: 18 g"
    ],
    "burimi": "https://hoco.al/product/adaptor-makine-dual-port-z27-staunch/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-adaptor-makine-fast-charge-z47-transparent",
    "emri": "Adaptor Makine Fast Charge Z47 Transparent",
    "kategoria": "karikues",
    "nenkategoria": "makine",
    "modeli": "Z47",
    "cmimi": 1700,
    "cmimiBurim": 1500,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/adaptor-makine-fast-charge-z47-transparent-1.jpg",
    "fotot": [
      "assets/products/hoco-al/adaptor-makine-fast-charge-z47-transparent-1.jpg",
      "assets/products/hoco-al/adaptor-makine-fast-charge-z47-transparent-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Adaptor makine me trup transparent, dy dalje USB-A dhe mbështetje për karikim të shpejtë. Fuqia e deklaruar në hoco.al është 20W.",
    "specifikat": [
      "Ngjyra: E zezë, Blu safir",
      "Numri i daljeve: 2",
      "Daljet: USB-A + USB-A",
      "Karikim i shpejtë: Po",
      "Fuqia: 20W",
      "Materiali: PC + ABS",
      "Pesha: 17 g"
    ],
    "burimi": "https://hoco.al/product/adaptor-makine-fast-charge-z47-transparent/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-adaptor-makine-fast-charge-z47a-transparent",
    "emri": "Adaptor Makine Fast Charge Z47A Transparent",
    "kategoria": "karikues",
    "nenkategoria": "makine",
    "modeli": "Z47A",
    "cmimi": 2200,
    "cmimiBurim": 2000,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/adaptor-makine-fast-charge-z47a-transparent-1.jpg",
    "fotot": [
      "assets/products/hoco-al/adaptor-makine-fast-charge-z47a-transparent-1.jpg",
      "assets/products/hoco-al/adaptor-makine-fast-charge-z47a-transparent-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Adaptor makine me një dalje USB-A dhe një USB-C. Mbështet karikim të shpejtë deri në 30W dhe ka trup transparent.",
    "specifikat": [
      "Ngjyra: E zezë, Blu safir",
      "Numri i daljeve: 2",
      "Daljet: USB-A + USB-C",
      "Karikim i shpejtë: Po",
      "Fuqia: 30W",
      "Materiali: PC + ABS",
      "Pesha: 17 g"
    ],
    "burimi": "https://hoco.al/product/adaptor-makine-fast-charge-z47a-transparent/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-hoco-zp18-kompresor-ajri-portativ-me-ekran-digjital",
    "emri": "HOCO ZP18 Kompresor Ajri Portativ me Ekran Digjital",
    "kategoria": "pajisje",
    "nenkategoria": "makine",
    "modeli": "ZP18",
    "cmimi": 5700,
    "cmimiBurim": 5500,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/hoco-zp18-kompresor-ajri-portativ-me-ekran-digjital-1.jpg",
    "fotot": [
      "assets/products/hoco-al/hoco-zp18-kompresor-ajri-portativ-me-ekran-digjital-1.jpg",
      "assets/products/hoco-al/hoco-zp18-kompresor-ajri-portativ-me-ekran-digjital-2.jpg"
    ],
    "fotoPaketimi": false,
    "pershkrimi": "Kompresor ajri portativ për goma makine, motori e biçiklete. Ekrani digjital, ndalimi automatik dhe drita LED ndihmojnë gjatë përdorimit.",
    "specifikat": [
      "Ekran digjital për monitorimin e presionit",
      "Përcaktim i presionit të dëshiruar me ndalim automatik",
      "Dritë LED për përdorim në errësirë",
      "Përdorim për goma makine, motori, biçiklete dhe produkte të përshtatshme"
    ],
    "burimi": "https://hoco.al/product/hoco-zp18-kompresor-ajri-portativ-me-ekran-digjital/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-adaptor-audio-type-c-2-ne-1-ls19",
    "emri": "Adaptor Audio Type-C 2 në 1 LS19",
    "kategoria": "aksesore",
    "nenkategoria": "adaptors",
    "modeli": "LS19",
    "cmimi": 1200,
    "cmimiBurim": 1000,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/adaptor-audio-type-c-2-ne-1-ls19-1.jpg",
    "fotot": [
      "assets/products/hoco-al/adaptor-audio-type-c-2-ne-1-ls19-1.jpg",
      "assets/products/hoco-al/adaptor-audio-type-c-2-ne-1-ls19-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Adaptor USB-C me dy dalje për kufje AUX 3.5 mm dhe karikim njëkohësisht.",
    "specifikat": [
      "USB-C → USB-C dhe AUX 3.5 mm femër",
      "Përdorim audio dhe karikim në të njëjtën kohë",
      "Peshë 10 g; ngjyrë e zezë"
    ],
    "burimi": "https://hoco.al/product/adaptor-audio-type-c-2-ne-1-ls19/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-adaptor-audio-type-c-to-3-5mm-ls35",
    "emri": "Adaptor Audio Type-C to 3.5mm LS35",
    "kategoria": "aksesore",
    "nenkategoria": "adaptors",
    "modeli": "LS35",
    "cmimi": 700,
    "cmimiBurim": 500,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/adaptor-audio-type-c-to-3-5mm-ls35-1.webp",
    "fotot": [
      "assets/products/hoco-al/adaptor-audio-type-c-to-3-5mm-ls35-1.webp"
    ],
    "fotoPaketimi": false,
    "pershkrimi": "Adaptor kompakt që lidh kufje ose altoparlantë me hyrje 3.5 mm me pajisje USB-C.",
    "specifikat": [
      "USB-C → AUX 3.5 mm femër",
      "Gjatësi 8.2 cm; peshë 3 g",
      "Material ABS; ngjyrë e bardhë"
    ],
    "burimi": "https://hoco.al/product/adaptor-audio-type-c-to-3-5mm-ls35/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-adaptor-audio-type-c-to-3-5mm-ls36-fresh",
    "emri": "Adaptor Audio Type-C to 3.5mm LS36 Fresh",
    "kategoria": "aksesore",
    "nenkategoria": "adaptors",
    "modeli": "LS36 Fresh",
    "cmimi": 700,
    "cmimiBurim": 500,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/adaptor-audio-type-c-to-3-5mm-ls36-fresh-1.jpg",
    "fotot": [
      "assets/products/hoco-al/adaptor-audio-type-c-to-3-5mm-ls36-fresh-1.jpg",
      "assets/products/hoco-al/adaptor-audio-type-c-to-3-5mm-ls36-fresh-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Adaptor USB-C për të përdorur kufje me lidhje AUX 3.5 mm në telefon ose pajisje të përshtatshme.",
    "specifikat": [
      "USB-C → AUX 3.5 mm femër",
      "Gjatësi 12 cm; peshë 6 g",
      "Metal dhe mbështjellje e thurur; ngjyrë e zezë"
    ],
    "burimi": "https://hoco.al/product/adaptor-audio-type-c-to-3-5mm-ls36-fresh/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-adaptor-bluetooth-usb-ua18",
    "emri": "Adaptor Bluetooth USB UA18",
    "kategoria": "aksesore",
    "nenkategoria": "adaptors",
    "modeli": "UA18",
    "cmimi": 900,
    "cmimiBurim": 700,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/adaptor-bluetooth-usb-ua18-1.jpg",
    "fotot": [
      "assets/products/hoco-al/adaptor-bluetooth-usb-ua18-1.jpg",
      "assets/products/hoco-al/adaptor-bluetooth-usb-ua18-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Adaptor USB që shton lidhje Bluetooth për kufje, altoparlantë, tastiera dhe mausë në kompjuter.",
    "specifikat": [
      "Bluetooth 5.0; distancë deri në 10 m",
      "Lidhje USB për kompjuter",
      "Material plastik; peshë 2 g; ngjyrë e zezë"
    ],
    "burimi": "https://hoco.al/product/adaptor-bluetooth-usb-ua18/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-adaptor-type-c-male-to-usb-a-female-ua17",
    "emri": "Adaptor Type-C Male to USB-A Female UA17",
    "kategoria": "aksesore",
    "nenkategoria": "adaptors",
    "modeli": "UA17 USB-C / USB-A",
    "cmimi": 700,
    "cmimiBurim": 500,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/adaptor-type-c-male-to-usb-a-female-ua17-1.jpg",
    "fotot": [
      "assets/products/hoco-al/adaptor-type-c-male-to-usb-a-female-ua17-1.jpg",
      "assets/products/hoco-al/adaptor-type-c-male-to-usb-a-female-ua17-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Përshtatës kompakt për të lidhur aksesorë USB-A me pajisje që kanë portë USB-C.",
    "specifikat": [
      "USB-C mashkull → USB-A femër",
      "Mbështet karikim dhe transferim të dhënash",
      "Trup PVC; ngjyrë e zezë"
    ],
    "burimi": "https://hoco.al/product/adaptor-type-c-male-to-usb-a-female-ua17/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-adaptor-type-c-to-hdmi-ua19-easy-flow",
    "emri": "Adaptor Type-C to HDMI UA19 Easy flow",
    "kategoria": "aksesore",
    "nenkategoria": "adaptors",
    "modeli": "UA19 Easy Flow",
    "cmimi": 2200,
    "cmimiBurim": 2000,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/adaptor-type-c-to-hdmi-ua19-easy-flow-1.jpg",
    "fotot": [
      "assets/products/hoco-al/adaptor-type-c-to-hdmi-ua19-easy-flow-1.jpg",
      "assets/products/hoco-al/adaptor-type-c-to-hdmi-ua19-easy-flow-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Adaptor për shfaqjen e videos nga një pajisje USB-C në monitor, televizor ose projektor me HDMI.",
    "specifikat": [
      "USB-C → HDMI; rezolucion deri në 4K",
      "Trup prej aliazh zinku; peshë 20 g",
      "Ngjyrë gri metalike"
    ],
    "burimi": "https://hoco.al/product/adaptor-type-c-to-hdmi-ua19-easy-flow/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-adaptor-usb-a-male-to-type-c-female-ua17",
    "emri": "Adaptor USB-A Male to Type-C Female UA17",
    "kategoria": "aksesore",
    "nenkategoria": "adaptors",
    "modeli": "UA17 USB-A / USB-C",
    "cmimi": 700,
    "cmimiBurim": 500,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/adaptor-usb-a-male-to-type-c-female-ua17-1.jpg",
    "fotot": [
      "assets/products/hoco-al/adaptor-usb-a-male-to-type-c-female-ua17-1.jpg",
      "assets/products/hoco-al/adaptor-usb-a-male-to-type-c-female-ua17-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Përshtatës i vogël që lidh kabllo dhe aksesorë USB-C me një portë USB-A.",
    "specifikat": [
      "USB-A mashkull → USB-C femër",
      "Për karikim dhe transferim të dhënash",
      "Peshë 3 g; ngjyrë e zezë"
    ],
    "burimi": "https://hoco.al/product/adaptor-usb-a-male-to-type-c-female-ua17/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-hoco-hi35-wifi-4-repeater-300mbps",
    "emri": "HOCO HI35 WiFi 4 Repeater 300Mbps",
    "kategoria": "pajisje",
    "nenkategoria": "rrjeti",
    "modeli": "HI35",
    "cmimi": 2700,
    "cmimiBurim": 2500,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/hoco-hi35-wifi-4-repeater-300mbps-1.jpg",
    "fotot": [
      "assets/products/hoco-al/hoco-hi35-wifi-4-repeater-300mbps-1.jpg",
      "assets/products/hoco-al/hoco-hi35-wifi-4-repeater-300mbps-2.jpg"
    ],
    "fotoPaketimi": false,
    "pershkrimi": "Zgjerues Wi-Fi për të përmirësuar mbulimin e rrjetit pa tela në shtëpi ose zyrë.",
    "specifikat": [
      "Wi-Fi 4 në 2.4 GHz; shpejtësi deri 300 Mbps",
      "4 antena të jashtme",
      "Modalitete Repeater dhe Access Point",
      "1 portë Ethernet; siguri WPA/WPA2"
    ],
    "burimi": "https://hoco.al/product/hoco-hi35-wifi-4-repeater-300mbps/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-hoco-hi37-adapter-usb-wi-fi-4-me-antene-te-jashtme-pershkrimi",
    "emri": "HOCO HI37 Adapter USB Wi-Fi 4 me Antenë të Jashtme",
    "kategoria": "pajisje",
    "nenkategoria": "rrjeti",
    "modeli": "HI37",
    "cmimi": 1700,
    "cmimiBurim": 1500,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/hoco-hi37-adapter-usb-wi-fi-4-me-antene-te-jashtme-pershkrimi-1.jpg",
    "fotot": [
      "assets/products/hoco-al/hoco-hi37-adapter-usb-wi-fi-4-me-antene-te-jashtme-pershkrimi-1.jpg",
      "assets/products/hoco-al/hoco-hi37-adapter-usb-wi-fi-4-me-antene-te-jashtme-pershkrimi-2.jpg"
    ],
    "fotoPaketimi": false,
    "pershkrimi": "Adaptor USB Wi-Fi me antenë të jashtme për lidhje pa tela në kompjuterë desktop dhe laptopë.",
    "specifikat": [
      "Wi-Fi 4 në 2.4 GHz; shpejtësi deri 150 Mbps",
      "USB 2.0; chipset RTL8188GU",
      "Antenë 3 dBi që rrotullohet deri në 90°",
      "Mbështetje për Windows dhe Linux; peshë 8.5 g"
    ],
    "burimi": "https://hoco.al/product/hoco-hi37-adapter-usb-wi-fi-4-me-antene-te-jashtme-pershkrimi/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-hoco-k101-prestigio-tripod-multifunksional-95-cm-me-bluetooth-remote",
    "emri": "HOCO K101 Prestigio Tripod Multifunksional 95 cm me Bluetooth Remote",
    "kategoria": "aksesore",
    "nenkategoria": "mbajtese",
    "modeli": "K101 Prestigio",
    "cmimi": 2700,
    "cmimiBurim": 2500,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/hoco-k101-prestigio-tripod-multifunksional-95-cm-me-bluetooth-remote-1.jpg",
    "fotot": [
      "assets/products/hoco-al/hoco-k101-prestigio-tripod-multifunksional-95-cm-me-bluetooth-remote-1.jpg",
      "assets/products/hoco-al/hoco-k101-prestigio-tripod-multifunksional-95-cm-me-bluetooth-remote-2.webp"
    ],
    "fotoPaketimi": false,
    "pershkrimi": "Tripod dhe shkop selfie portativ me telekomandë Bluetooth për fotografi, video dhe transmetime nga telefoni.",
    "specifikat": [
      "Lartësi maksimale 95 cm",
      "Telekomandë Bluetooth 5.2; bateri 55 mAh",
      "Vidë universale 1/4″",
      "Material ABS dhe aliazh alumini; peshë 170 g"
    ],
    "burimi": "https://hoco.al/product/hoco-k101-prestigio-tripod-multifunksional-95-cm-me-bluetooth-remote/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-hoco-k22-handy-tripod-selfie-stick-1-75-m-me-bluetooth-remote",
    "emri": "HOCO K22 Handy Tripod & Selfie Stick 1.75 m me Bluetooth Remote",
    "kategoria": "aksesore",
    "nenkategoria": "mbajtese",
    "modeli": "K22 Handy",
    "cmimi": 4200,
    "cmimiBurim": 4000,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/hoco-k22-handy-tripod-selfie-stick-1-75-m-me-bluetooth-remote-1.jpg",
    "fotot": [
      "assets/products/hoco-al/hoco-k22-handy-tripod-selfie-stick-1-75-m-me-bluetooth-remote-1.jpg",
      "assets/products/hoco-al/hoco-k22-handy-tripod-selfie-stick-1-75-m-me-bluetooth-remote-2.jpg"
    ],
    "fotoPaketimi": false,
    "pershkrimi": "Tripod i palosshëm dhe shkop selfie për telefon me lartësi të rregullueshme dhe telekomandë të shkëputshme.",
    "specifikat": [
      "Lartësi maksimale 1.75 m; strukturë me 4 këmbë",
      "Për telefona 4.5–7 inç; kapëse 62–90 mm",
      "Telekomandë Bluetooth 5.2; distancë deri 10 m",
      "Aliazh alumini dhe ABS; peshë 450 g"
    ],
    "burimi": "https://hoco.al/product/hoco-k22-handy-tripod-selfie-stick-1-75-m-me-bluetooth-remote/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-kabllo-adaptor-aux-to-aux-female-upa20",
    "emri": "Kabllo Adaptor AUX To AUX (Female) UPA20",
    "kategoria": "aksesore",
    "nenkategoria": "adaptors",
    "modeli": "UPA20",
    "cmimi": 700,
    "cmimiBurim": 500,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/kabllo-adaptor-aux-to-aux-female-upa20-1.jpg",
    "fotot": [
      "assets/products/hoco-al/kabllo-adaptor-aux-to-aux-female-upa20-1.jpg",
      "assets/products/hoco-al/kabllo-adaptor-aux-to-aux-female-upa20-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Kabllo zgjatuese AUX që shton gjatësi mes pajisjes audio dhe kufjeve ose altoparlantit.",
    "specifikat": [
      "AUX 3.5 mm mashkull → AUX 3.5 mm femër",
      "Gjatësi 100 cm; peshë 21 g",
      "Material TPE dhe najlon; ngjyrë gri metalike"
    ],
    "burimi": "https://hoco.al/product/kabllo-adaptor-aux-to-aux-female-upa20/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-kabllo-adaptor-aux-to-aux-upa11",
    "emri": "Kabllo Adaptor AUX To AUX UPA11",
    "kategoria": "aksesore",
    "nenkategoria": "adaptors",
    "modeli": "UPA11",
    "cmimi": 600,
    "cmimiBurim": 400,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/kabllo-adaptor-aux-to-aux-upa11-1.jpg",
    "fotot": [
      "assets/products/hoco-al/kabllo-adaptor-aux-to-aux-upa11-1.jpg",
      "assets/products/hoco-al/kabllo-adaptor-aux-to-aux-upa11-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Kabllo AUX për të lidhur pajisje me dalje audio 3.5 mm me altoparlantë ose sisteme audio.",
    "specifikat": [
      "AUX 3.5 mm → AUX 3.5 mm",
      "Gjatësi 100 cm; peshë 10 g",
      "Material TPE; ngjyra e zezë ose e kuqe"
    ],
    "burimi": "https://hoco.al/product/kabllo-adaptor-aux-to-aux-upa11/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-kabllo-adaptor-aux-to-aux-upa14",
    "emri": "Kabllo Adaptor AUX To AUX UPA14",
    "kategoria": "aksesore",
    "nenkategoria": "adaptors",
    "modeli": "UPA14",
    "cmimi": 700,
    "cmimiBurim": 500,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/kabllo-adaptor-aux-to-aux-upa14-1.jpg",
    "fotot": [
      "assets/products/hoco-al/kabllo-adaptor-aux-to-aux-upa14-1.jpg",
      "assets/products/hoco-al/kabllo-adaptor-aux-to-aux-upa14-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Kabllo audio AUX me lidhës të përkulur për përdorim në makinë, shtëpi ose me pajisje portative.",
    "specifikat": [
      "AUX 3.5 mm → AUX 3.5 mm",
      "Material TPE; peshë 10 g",
      "Ngjyra e zezë ose gri"
    ],
    "burimi": "https://hoco.al/product/kabllo-adaptor-aux-to-aux-upa14/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-kabllo-adaptor-aux-to-aux-upa16",
    "emri": "Kabllo Adaptor AUX To AUX UPA16",
    "kategoria": "aksesore",
    "nenkategoria": "adaptors",
    "modeli": "UPA16",
    "cmimi": 700,
    "cmimiBurim": 500,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/kabllo-adaptor-aux-to-aux-upa16-1.jpg",
    "fotot": [
      "assets/products/hoco-al/kabllo-adaptor-aux-to-aux-upa16-1.jpg",
      "assets/products/hoco-al/kabllo-adaptor-aux-to-aux-upa16-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Kabllo audio AUX për lidhjen e telefonave, kompjuterëve dhe pajisjeve të tjera me hyrje 3.5 mm.",
    "specifikat": [
      "AUX 3.5 mm → AUX 3.5 mm",
      "Material TPE; peshë 12 g",
      "Ngjyra e kuqe, e bardhë ose e verdhë"
    ],
    "burimi": "https://hoco.al/product/kabllo-adaptor-aux-to-aux-upa16/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-kabllo-adaptor-aux-to-aux-upa24",
    "emri": "Kabllo Adaptor AUX To AUX UPA24",
    "kategoria": "aksesore",
    "nenkategoria": "adaptors",
    "modeli": "UPA24",
    "cmimi": 500,
    "cmimiBurim": 300,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/kabllo-adaptor-aux-to-aux-upa24-1.webp",
    "fotot": [
      "assets/products/hoco-al/kabllo-adaptor-aux-to-aux-upa24-1.webp",
      "assets/products/hoco-al/kabllo-adaptor-aux-to-aux-upa24-2.webp"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Kabllo AUX me mbështjellje të thurur për lidhje audio mes pajisjeve me portë 3.5 mm.",
    "specifikat": [
      "AUX 3.5 mm → AUX 3.5 mm",
      "Gjatësi 100 cm; peshë 16 g",
      "Thurje najloni; ngjyra e zezë ose e kuqe"
    ],
    "burimi": "https://hoco.al/product/kabllo-adaptor-aux-to-aux-upa24/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-kabllo-adaptor-aux-to-iphone-upa25-transparent",
    "emri": "Kabllo Adaptor AUX To iPhone UPA25 Transparent",
    "kategoria": "aksesore",
    "nenkategoria": "adaptors",
    "modeli": "UPA25 Transparent Lightning",
    "cmimi": 1100,
    "cmimiBurim": 900,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/kabllo-adaptor-aux-to-iphone-upa25-transparent-1.jpg",
    "fotot": [
      "assets/products/hoco-al/kabllo-adaptor-aux-to-iphone-upa25-transparent-1.jpg",
      "assets/products/hoco-al/kabllo-adaptor-aux-to-iphone-upa25-transparent-2.webp"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Kabllo audio me lidhës transparent që lidh pajisjet me Lightning me sistem audio AUX 3.5 mm.",
    "specifikat": [
      "Lightning → AUX 3.5 mm",
      "Gjatësi 100 cm; peshë 23 g",
      "Material TPE dhe najlon; ngjyra e zezë ose blu"
    ],
    "burimi": "https://hoco.al/product/kabllo-adaptor-aux-to-iphone-upa25-transparent/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-kabllo-adaptor-aux-to-iphone-upa26-fresh",
    "emri": "Kabllo Adaptor AUX To iPhone UPA26 Fresh",
    "kategoria": "aksesore",
    "nenkategoria": "adaptors",
    "modeli": "UPA26 Fresh Lightning",
    "cmimi": 1200,
    "cmimiBurim": 1000,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/kabllo-adaptor-aux-to-iphone-upa26-fresh-1.jpg",
    "fotot": [
      "assets/products/hoco-al/kabllo-adaptor-aux-to-iphone-upa26-fresh-1.jpg",
      "assets/products/hoco-al/kabllo-adaptor-aux-to-iphone-upa26-fresh-2.webp"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Kabllo audio e thurur për të lidhur një pajisje Lightning me hyrje AUX në makinë ose altoparlant.",
    "specifikat": [
      "Lightning → AUX 3.5 mm",
      "Gjatësi 100 cm; peshë 18 g",
      "Metal dhe thurje najloni; ngjyrë gri metalike"
    ],
    "burimi": "https://hoco.al/product/kabllo-adaptor-aux-to-iphone-upa26-fresh/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-kabllo-adaptor-aux-to-usb-c-upa19",
    "emri": "Kabllo Adaptor AUX To USB-C UPA19",
    "kategoria": "aksesore",
    "nenkategoria": "adaptors",
    "modeli": "UPA19 USB-C",
    "cmimi": 1000,
    "cmimiBurim": 800,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/kabllo-adaptor-aux-to-usb-c-upa19-1.jpg",
    "fotot": [
      "assets/products/hoco-al/kabllo-adaptor-aux-to-usb-c-upa19-1.jpg",
      "assets/products/hoco-al/kabllo-adaptor-aux-to-usb-c-upa19-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Kabllo audio që lidh një pajisje USB-C me sistem makine, altoparlant ose hyrje tjetër AUX 3.5 mm.",
    "specifikat": [
      "USB-C → AUX 3.5 mm",
      "Gjatësi 100 cm; peshë 14 g",
      "Material TPE dhe najlon; ngjyra e zezë ose e bardhë"
    ],
    "burimi": "https://hoco.al/product/kabllo-adaptor-aux-to-usb-c-upa19/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-kabllo-adaptor-aux-to-usb-c-upa25-transparent",
    "emri": "Kabllo Adaptor AUX To USB-C UPA25 Transparent",
    "kategoria": "aksesore",
    "nenkategoria": "adaptors",
    "modeli": "UPA25 Transparent USB-C",
    "cmimi": 1100,
    "cmimiBurim": 900,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/kabllo-adaptor-aux-to-usb-c-upa25-transparent-1.jpg",
    "fotot": [
      "assets/products/hoco-al/kabllo-adaptor-aux-to-usb-c-upa25-transparent-1.jpg",
      "assets/products/hoco-al/kabllo-adaptor-aux-to-usb-c-upa25-transparent-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Kabllo audio me konektor transparent për lidhjen e pajisjeve USB-C me hyrje AUX 3.5 mm.",
    "specifikat": [
      "USB-C → AUX 3.5 mm",
      "Gjatësi 100 cm; peshë 23 g",
      "Material TPE dhe najlon; ngjyra e zezë ose blu"
    ],
    "burimi": "https://hoco.al/product/kabllo-adaptor-aux-to-usb-c-upa25-transparent/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-kabllo-adaptor-aux-to-usb-c-upa26-fresh",
    "emri": "Kabllo Adaptor AUX To USB-C UPA26 Fresh",
    "kategoria": "aksesore",
    "nenkategoria": "adaptors",
    "modeli": "UPA26 Fresh USB-C",
    "cmimi": 1000,
    "cmimiBurim": 800,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/kabllo-adaptor-aux-to-usb-c-upa26-fresh-1.jpg",
    "fotot": [
      "assets/products/hoco-al/kabllo-adaptor-aux-to-usb-c-upa26-fresh-1.jpg",
      "assets/products/hoco-al/kabllo-adaptor-aux-to-usb-c-upa26-fresh-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Kabllo audio e thurur për të dëgjuar nga një pajisje USB-C në sistem audio me hyrje AUX.",
    "specifikat": [
      "USB-C → AUX 3.5 mm",
      "Gjatësi 100 cm; peshë 18 g",
      "Metal dhe thurje najloni; ngjyrë gri metalike"
    ],
    "burimi": "https://hoco.al/product/kabllo-adaptor-aux-to-usb-c-upa26-fresh/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-gm14-maus-wireless-2-4g-platinum",
    "emri": "GM14 Maus wireless 2.4G Platinum",
    "kategoria": "pajisje",
    "nenkategoria": "maus",
    "modeli": "GM14 Platinum",
    "cmimi": 1600,
    "cmimiBurim": 1400,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/gm14-maus-wireless-2-4g-platinum-1.jpg",
    "fotot": [
      "assets/products/hoco-al/gm14-maus-wireless-2-4g-platinum-1.jpg",
      "assets/products/hoco-al/gm14-maus-wireless-2-4g-platinum-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Maus pa tela me lidhje 2.4 GHz dhe formë kompakte për punë të përditshme në kompjuter.",
    "specifikat": [
      "Lidhje pa tela 2.4 GHz",
      "Ndjeshmëri 1200 DPI; butona 3D",
      "Material ABS; ngjyra e zezë ose e bardhë"
    ],
    "burimi": "https://hoco.al/product/gm14-maus-wireless-2-4g-platinum/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-gm21-maus-biznesi-wireless-2-4g-platinum",
    "emri": "GM21 Maus biznesi wireless 2.4G Platinum",
    "kategoria": "pajisje",
    "nenkategoria": "maus",
    "modeli": "GM21 Platinum",
    "cmimi": 1600,
    "cmimiBurim": 1400,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/gm21-maus-biznesi-wireless-2-4g-platinum-1.jpg",
    "fotot": [
      "assets/products/hoco-al/gm21-maus-biznesi-wireless-2-4g-platinum-1.jpg",
      "assets/products/hoco-al/gm21-maus-biznesi-wireless-2-4g-platinum-2.jpg"
    ],
    "fotoPaketimi": false,
    "pershkrimi": "Maus pa tela me ndjeshmëri të rregullueshme dhe trup të përshtatur për përdorim në zyrë.",
    "specifikat": [
      "Lidhje pa tela 2.4 GHz",
      "Ndjeshmëri 1000 / 1200 / 1600 DPI; butona 4D",
      "Material ABS dhe xhel silice; ngjyra e zezë ose e bardhë"
    ],
    "burimi": "https://hoco.al/product/gm21-maus-biznesi-wireless-2-4g-platinum/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-gm24-maus-biznesi-me-6-butona-modalitet-i-dyfishte",
    "emri": "GM24 Maus biznesi me 6 butona, modalitet i dyfishtë",
    "kategoria": "pajisje",
    "nenkategoria": "maus",
    "modeli": "GM24",
    "cmimi": 1400,
    "cmimiBurim": 1200,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/gm24-maus-biznesi-me-6-butona-modalitet-i-dyfishte-1.jpg",
    "fotot": [
      "assets/products/hoco-al/gm24-maus-biznesi-me-6-butona-modalitet-i-dyfishte-1.jpg",
      "assets/products/hoco-al/gm24-maus-biznesi-me-6-butona-modalitet-i-dyfishte-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Maus me gjashtë butona dhe dy mënyra lidhjeje pa tela për përdorim në kompjuter.",
    "specifikat": [
      "Lidhje 2.4 GHz dhe Bluetooth",
      "Ndjeshmëri 800 / 1200 / 1600 DPI",
      "6 butona; trup ABS; ngjyrë e zezë"
    ],
    "burimi": "https://hoco.al/product/gm24-maus-biznesi-me-6-butona-modalitet-i-dyfishte/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-kufje-me-kabllo-dhe-mikrofon-m97-enjoy",
    "emri": "Kufje Me Kabllo dhe Mikrofon M97 Enjoy",
    "kategoria": "audio",
    "nenkategoria": "kufje",
    "modeli": "M97 Enjoy",
    "cmimi": 600,
    "cmimiBurim": 400,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/kufje-me-kabllo-dhe-mikrofon-m97-enjoy-1.jpg",
    "fotot": [
      "assets/products/hoco-al/kufje-me-kabllo-dhe-mikrofon-m97-enjoy-1.jpg",
      "assets/products/hoco-al/kufje-me-kabllo-dhe-mikrofon-m97-enjoy-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Kufje të lehta me mikrofon dhe lidhës AUX 3.5 mm për muzikë dhe biseda.",
    "specifikat": [
      "Lidhja: Me kabllo",
      "Lidhësi: AUX (3.5mm)",
      "Vendosja: Brenda veshit",
      "Gjatësia e kabllit: 120 cm",
      "Materiali: ABS + TPE",
      "Pesha: 12 g",
      "Ngjyrat e listuara: E zezë, E bardhë"
    ],
    "burimi": "https://hoco.al/product/kufje-me-kabllo-dhe-mikrofon-m97-enjoy/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-kufje-bluetooth-wireless-w41-charm",
    "emri": "Kufje Bluetooth Wireless W41 Charm",
    "kategoria": "audio",
    "nenkategoria": "kufje",
    "modeli": "W41 Charm",
    "cmimi": 1800,
    "cmimiBurim": 1600,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/kufje-bluetooth-wireless-w41-charm-1.jpg",
    "fotot": [
      "assets/products/hoco-al/kufje-bluetooth-wireless-w41-charm-1.jpg",
      "assets/products/hoco-al/kufje-bluetooth-wireless-w41-charm-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Kufje pa kabllo që palosen për t’u marrë me vete, me lidhje Bluetooth dhe kontrolle në trup.",
    "specifikat": [
      "Lidhja: Pa kabllo",
      "Vendosja: Mbi vesh",
      "Koha e përdorimit: 7 orë",
      "Koha e karikimit: 2 orë",
      "Koha në gatishmëri: 120 orë",
      "Kapaciteti: 200 mAh",
      "Versioni Bluetooth: 5.3",
      "Ngjyrat e listuara: E zezë, Blu, Rozë, E kuqe",
      "Pesha: 157 g"
    ],
    "burimi": "https://hoco.al/product/kufje-bluetooth-wireless-w41-charm/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-kufje-gaming-me-kabllo-usb7-1-w109-rich",
    "emri": "Kufje Gaming Me Kabllo + USB7.1 W109 Rich",
    "kategoria": "audio",
    "nenkategoria": "kufje",
    "modeli": "W109 Rich USB 7.1",
    "cmimi": 2700,
    "cmimiBurim": 2500,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/kufje-gaming-me-kabllo-usb7-1-w109-rich-1.jpg",
    "fotot": [
      "assets/products/hoco-al/kufje-gaming-me-kabllo-usb7-1-w109-rich-1.jpg",
      "assets/products/hoco-al/kufje-gaming-me-kabllo-usb7-1-w109-rich-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Kufje gaming me lidhje USB-A, mikrofon dhe kabllo dy metra për përdorim në kompjuter.",
    "specifikat": [
      "Audio gaming USB 7.1",
      "Lidhja: Me kabllo",
      "Lidhësi: USB-A",
      "Vendosja: Rreth veshit",
      "Gjatësia e kabllit: 200 cm",
      "Pesha: 315 g",
      "Ngjyrat e listuara: E zezë"
    ],
    "burimi": "https://hoco.al/product/kufje-gaming-me-kabllo-usb7-1-w109-rich/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-kufje-bluetooth-true-wireless-stereo-ew11-melody",
    "emri": "Kufje Bluetooth True Wireless Stereo EW11 Melody",
    "kategoria": "audio",
    "nenkategoria": "kufje",
    "modeli": "EW11 Melody",
    "cmimi": 3700,
    "cmimiBurim": 3500,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/kufje-bluetooth-true-wireless-stereo-ew11-melody-1.jpg",
    "fotot": [
      "assets/products/hoco-al/kufje-bluetooth-true-wireless-stereo-ew11-melody-1.jpg",
      "assets/products/hoco-al/kufje-bluetooth-true-wireless-stereo-ew11-melody-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Kufje TWS brenda veshit me ekran në kutinë e karikimit dhe lidhje Bluetooth.",
    "specifikat": [
      "Lidhja: Pa kabllo",
      "Vendosja: Brenda veshit",
      "Koha e përdorimit: 5 orë",
      "Koha në gatishmëri: 200 orë",
      "Kapaciteti: 300 mAh",
      "Versioni Bluetooth: 5.1",
      "Pesha: 35 g",
      "Ngjyrat e listuara: E zezë"
    ],
    "burimi": "https://hoco.al/product/kufje-bluetooth-true-wireless-stereo-ew11-melody/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-kufje-bluetooth-wireless-w35-hoco",
    "emri": "Kufje Bluetooth Wireless W35 Hoco",
    "kategoria": "audio",
    "nenkategoria": "kufje",
    "modeli": "W35",
    "cmimi": 4200,
    "cmimiBurim": 4000,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/kufje-bluetooth-wireless-w35-hoco-1.webp",
    "fotot": [
      "assets/products/hoco-al/kufje-bluetooth-wireless-w35-hoco-1.webp",
      "assets/products/hoco-al/kufje-bluetooth-wireless-w35-hoco-2.webp"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Kufje Bluetooth me mbulesa rreth veshëve dhe mikrofon të integruar për muzikë dhe thirrje.",
    "specifikat": [
      "Lidhja: Pa kabllo",
      "Vendosja: Rreth veshit",
      "Koha e karikimit: 2 orë",
      "Koha në gatishmëri: 200 orë",
      "Kapaciteti: 400 mAh",
      "Ngjyrat e listuara: E zezë, E bardhë",
      "Pesha: 193 g"
    ],
    "burimi": "https://hoco.al/product/kufje-bluetooth-wireless-w35-hoco/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-y24-amoled-smart-sports-watchcall-version",
    "emri": "Y24 AMOLED Smart sports watch(call version)",
    "kategoria": "pajisje",
    "nenkategoria": "ora",
    "modeli": "Y24 AMOLED",
    "cmimi": 6200,
    "cmimiBurim": 6000,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/y24-amoled-smart-sports-watchcall-version-1.jpg",
    "fotot": [
      "assets/products/hoco-al/y24-amoled-smart-sports-watchcall-version-1.jpg",
      "assets/products/hoco-al/y24-amoled-smart-sports-watchcall-version-2.jpg"
    ],
    "fotoPaketimi": false,
    "pershkrimi": "Orë inteligjente sportive me ekran AMOLED dhe funksion thirrjesh, në variantin e zi të listuar.",
    "specifikat": [
      "Ekran AMOLED",
      "Version me funksion thirrjesh",
      "Ngjyra e listuar: E zezë"
    ],
    "burimi": "https://hoco.al/product/y24-amoled-smart-sports-watchcall-version/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-y20-ore-inteligjente-sportive-me-thirrje",
    "emri": "Y20 Orë inteligjente sportive (me thirrje)",
    "kategoria": "pajisje",
    "nenkategoria": "ora",
    "modeli": "Y20",
    "cmimi": 6700,
    "cmimiBurim": 6500,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/y20-ore-inteligjente-sportive-me-thirrje-1.jpg",
    "fotot": [
      "assets/products/hoco-al/y20-ore-inteligjente-sportive-me-thirrje-1.jpg",
      "assets/products/hoco-al/y20-ore-inteligjente-sportive-me-thirrje-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Orë sportive me thirrje Bluetooth, numërim hapash dhe njoftime nga telefoni.",
    "specifikat": [
      "Lidhja: Bluetooth",
      "Versioni Bluetooth: 5.1",
      "Kapaciteti: 300 mAh",
      "Koha e përdorimit: 5-10 ditë",
      "Kujtesa: RAM128KB +ROM128MB",
      "Ngjyrat e listuara: E zezë, Argjend"
    ],
    "burimi": "https://hoco.al/product/y20-ore-inteligjente-sportive-me-thirrje/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-y9-ore-inteligjente-sportive-me-thirrje",
    "emri": "Y9 Orë inteligjente sportive (me thirrje)",
    "kategoria": "pajisje",
    "nenkategoria": "ora",
    "modeli": "Y9",
    "cmimi": 8200,
    "cmimiBurim": 8000,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/y9-ore-inteligjente-sportive-me-thirrje-1.jpg",
    "fotot": [
      "assets/products/hoco-al/y9-ore-inteligjente-sportive-me-thirrje-1.jpg",
      "assets/products/hoco-al/y9-ore-inteligjente-sportive-me-thirrje-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Orë inteligjente me thirrje dhe njoftime, për të ndjekur hapat, distancën dhe aktivitetin e përditshëm.",
    "specifikat": [
      "Lidhja: Bluetooth",
      "Versioni Bluetooth: 4",
      "Kapaciteti: 300 mAh",
      "Koha e përdorimit: 3-7 ditë",
      "Kujtesa: RAM128 MB",
      "Ngjyrat e listuara: E zezë"
    ],
    "burimi": "https://hoco.al/product/y9-ore-inteligjente-sportive-me-thirrje/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-mbajtese-celulari-per-makine-magnetike-ca79-ligue",
    "emri": "Mbajtëse Celulari Për Makinë Magnetike CA79 Ligue",
    "kategoria": "aksesore",
    "nenkategoria": "mbajtese",
    "modeli": "CA79 Ligue",
    "cmimi": 900,
    "cmimiBurim": 700,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/mbajtese-celulari-per-makine-magnetike-ca79-ligue-1.jpg",
    "fotot": [
      "assets/products/hoco-al/mbajtese-celulari-per-makine-magnetike-ca79-ligue-1.jpg",
      "assets/products/hoco-al/mbajtese-celulari-per-makine-magnetike-ca79-ligue-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Mbajtëse magnetike kompakte për vendosje në kroskotin e makinës.",
    "specifikat": [
      "Vendosja: Në Kroskot",
      "Pajtueshmëria: 4.5-7 inç",
      "Materiali: ABS + silikon",
      "Ngjyrat e listuara: E zezë",
      "Pesha: 22 g"
    ],
    "burimi": "https://hoco.al/product/mbajtese-celulari-per-makine-magnetike-ca79-ligue/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-mbajtese-celulari-per-makine-magnetike-ca81",
    "emri": "Mbajtëse Celulari Për Makinë Magnetike CA81",
    "kategoria": "aksesore",
    "nenkategoria": "mbajtese",
    "modeli": "CA81 Ligue",
    "cmimi": 1000,
    "cmimiBurim": 800,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/mbajtese-celulari-per-makine-magnetike-ca81-1.jpg",
    "fotot": [
      "assets/products/hoco-al/mbajtese-celulari-per-makine-magnetike-ca81-1.jpg",
      "assets/products/hoco-al/mbajtese-celulari-per-makine-magnetike-ca81-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Mbajtëse magnetike që fiksohet në grilën e ajrimit të makinës.",
    "specifikat": [
      "Vendosja: Në Ventilator",
      "Pajtueshmëria: 4.5-7 inç",
      "Materiali: ABS + silikon",
      "Ngjyrat e listuara: E zezë",
      "Pesha: 26 g"
    ],
    "burimi": "https://hoco.al/product/mbajtese-celulari-per-makine-magnetike-ca81/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-mbajtese-celulari-per-makine-magnetike-ca74",
    "emri": "Mbajtëse Celulari Për Makinë Magnetike CA74",
    "kategoria": "aksesore",
    "nenkategoria": "mbajtese",
    "modeli": "CA74 Universe",
    "cmimi": 1100,
    "cmimiBurim": 900,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/mbajtese-celulari-per-makine-magnetike-ca74-1.jpg",
    "fotot": [
      "assets/products/hoco-al/mbajtese-celulari-per-makine-magnetike-ca74-1.jpg",
      "assets/products/hoco-al/mbajtese-celulari-per-makine-magnetike-ca74-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Mbajtëse magnetike për grilën e ajrimit, me trup metalik dhe mbështetje të rregullueshme.",
    "specifikat": [
      "Vendosja: Në Ventilator",
      "Pajtueshmëria: 4.5-7 inç",
      "Materiali: ABS + silikon + aliazh alumini + Magnet",
      "Ngjyrat e listuara: Gri metalike, Argjend",
      "Pesha: 34 g"
    ],
    "burimi": "https://hoco.al/product/mbajtese-celulari-per-makine-magnetike-ca74/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-mbajtese-celulari-per-makine-ne-ventilator-h18",
    "emri": "Mbajtëse Celulari Për Makinë Në Ventilator H18",
    "kategoria": "aksesore",
    "nenkategoria": "mbajtese",
    "modeli": "H18 Mighty",
    "cmimi": 1100,
    "cmimiBurim": 900,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/mbajtese-celulari-per-makine-ne-ventilator-h18-1.jpg",
    "fotot": [
      "assets/products/hoco-al/mbajtese-celulari-per-makine-ne-ventilator-h18-1.jpg",
      "assets/products/hoco-al/mbajtese-celulari-per-makine-ne-ventilator-h18-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Mbajtëse për grilën e ajrimit me krahë që mbajnë telefonin dhe mekanizëm hapjeje me shtypje.",
    "specifikat": [
      "Vendosja: Në Ventilator",
      "Pajtueshmëria: 4.7-7 inç",
      "Materiali: ABS + silikon",
      "Ngjyrat e listuara: E zezë",
      "Pesha: 77 g"
    ],
    "burimi": "https://hoco.al/product/mbajtese-celulari-per-makine-ne-ventilator-h18/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-mbajtese-celulari-per-makine-ne-kroskot-ca83",
    "emri": "Mbajtëse Celulari Për Makinë Në Kroskot CA83",
    "kategoria": "aksesore",
    "nenkategoria": "mbajtese",
    "modeli": "CA83 David",
    "cmimi": 1400,
    "cmimiBurim": 1200,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/mbajtese-celulari-per-makine-ne-kroskot-ca83-1.jpg",
    "fotot": [
      "assets/products/hoco-al/mbajtese-celulari-per-makine-ne-kroskot-ca83-1.jpg",
      "assets/products/hoco-al/mbajtese-celulari-per-makine-ne-kroskot-ca83-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Mbajtëse për kroskot me krah të zgjatshëm dhe hapje me një buton për vendosjen e telefonit.",
    "specifikat": [
      "Vendosja: Në Kroskot",
      "Pajtueshmëria: 4.5-7 inç",
      "Materiali: ABS + silikon",
      "Ngjyrat e listuara: E zezë",
      "Pesha: 170 g"
    ],
    "burimi": "https://hoco.al/product/mbajtese-celulari-per-makine-ne-kroskot-ca83/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-mbajtese-celulari-per-makine-ne-ventilator-ca86",
    "emri": "Mbajtëse Celulari Për Makinë Në Ventilator CA86",
    "kategoria": "aksesore",
    "nenkategoria": "mbajtese",
    "modeli": "CA86 Davy",
    "cmimi": 1400,
    "cmimiBurim": 1200,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/mbajtese-celulari-per-makine-ne-ventilator-ca86-1.jpg",
    "fotot": [
      "assets/products/hoco-al/mbajtese-celulari-per-makine-ne-ventilator-ca86-1.jpg",
      "assets/products/hoco-al/mbajtese-celulari-per-makine-ne-ventilator-ca86-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Mbajtëse për grilën e ajrimit me kapëse anësore dhe buton për lirimin e telefonit.",
    "specifikat": [
      "Vendosja: Në Ventilator",
      "Pajtueshmëria: 4.5-7 inç",
      "Materiali: ABS + silikon",
      "Ngjyrat e listuara: E zezë",
      "Pesha: 87 g"
    ],
    "burimi": "https://hoco.al/product/mbajtese-celulari-per-makine-ne-ventilator-ca86/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-mbajtese-celulari-per-makine-ne-ventilator-ca103",
    "emri": "Mbajtëse Celulari Për Makinë Në Ventilator CA103",
    "kategoria": "aksesore",
    "nenkategoria": "mbajtese",
    "modeli": "CA103",
    "cmimi": 1400,
    "cmimiBurim": 1200,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/mbajtese-celulari-per-makine-ne-ventilator-ca103-1.jpg",
    "fotot": [
      "assets/products/hoco-al/mbajtese-celulari-per-makine-ne-ventilator-ca103-1.jpg",
      "assets/products/hoco-al/mbajtese-celulari-per-makine-ne-ventilator-ca103-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Mbajtëse me mekanizëm graviteti për grilën e ajrimit, për pozicionim horizontal ose vertikal të telefonit.",
    "specifikat": [
      "Mekanizëm graviteti; përdorim horizontal dhe vertikal",
      "Vendosja: Në Ventilator",
      "Pajtueshmëria: 4.5-7 inç",
      "Materiali: ABS + silikon",
      "Ngjyrat e listuara: E zezë",
      "Pesha: 70 g"
    ],
    "burimi": "https://hoco.al/product/mbajtese-celulari-per-makine-ne-ventilator-ca103/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-mbajtese-celulari-per-makine-ne-kroskot-h5",
    "emri": "Mbajtëse Celulari Për Makinë Në Kroskot H5",
    "kategoria": "aksesore",
    "nenkategoria": "mbajtese",
    "modeli": "H5 Integrity",
    "cmimi": 1600,
    "cmimiBurim": 1400,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/mbajtese-celulari-per-makine-ne-kroskot-h5-1.jpg",
    "fotot": [
      "assets/products/hoco-al/mbajtese-celulari-per-makine-ne-kroskot-h5-1.jpg",
      "assets/products/hoco-al/mbajtese-celulari-per-makine-ne-kroskot-h5-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Mbajtëse me kupë thithëse dhe krah të rregullueshëm, për vendosje në kroskot ose xham.",
    "specifikat": [
      "Vendosja: Në Kroskot",
      "Pajtueshmëria: 4.5-7 inç",
      "Materiali: ABS + xhel silice",
      "Ngjyrat e listuara: E zezë",
      "Pesha: 131 g"
    ],
    "burimi": "https://hoco.al/product/mbajtese-celulari-per-makine-ne-kroskot-h5/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-mbajtese-celulari-per-makine-ne-xham-h10-general",
    "emri": "Mbajtëse Celulari Për Makinë Në Xham H10 General",
    "kategoria": "aksesore",
    "nenkategoria": "mbajtese",
    "modeli": "H10 General",
    "cmimi": 1700,
    "cmimiBurim": 1500,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/mbajtese-celulari-per-makine-ne-xham-h10-general-1.jpg",
    "fotot": [
      "assets/products/hoco-al/mbajtese-celulari-per-makine-ne-xham-h10-general-1.jpg",
      "assets/products/hoco-al/mbajtese-celulari-per-makine-ne-xham-h10-general-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Mbajtëse për xhamin e makinës me kupë thithëse dhe krah të rregullueshëm.",
    "specifikat": [
      "Vendosja: Në Xham",
      "Pajtueshmëria: 4.7-7 inç",
      "Materiali: ABS + PU + xhel silice",
      "Ngjyrat e listuara: E zezë",
      "Pesha: 134 g"
    ],
    "burimi": "https://hoco.al/product/mbajtese-celulari-per-makine-ne-xham-h10-general/",
    "dataBurimit": "2026-11-19",
    "demo": false
  },
  {
    "id": "hoco-al-mbajtese-celulari-per-makine-ne-kroskot-h15-fair",
    "emri": "Mbajtëse Celulari Për Makinë Në Kroskot H15 Fair",
    "kategoria": "aksesore",
    "nenkategoria": "mbajtese",
    "modeli": "H15 Fair",
    "cmimi": 1800,
    "cmimiBurim": 1600,
    "shtesaCmimit": 200,
    "foto": "assets/products/hoco-al/mbajtese-celulari-per-makine-ne-kroskot-h15-fair-1.jpg",
    "fotot": [
      "assets/products/hoco-al/mbajtese-celulari-per-makine-ne-kroskot-h15-fair-1.jpg",
      "assets/products/hoco-al/mbajtese-celulari-per-makine-ne-kroskot-h15-fair-2.jpg"
    ],
    "fotoPaketimi": true,
    "pershkrimi": "Mbajtëse për kroskot me kapëse dhe mekanizëm hapjeje me shtypje për telefonin.",
    "specifikat": [
      "Vendosja: Në Kroskot",
      "Pajtueshmëria: 4.5-7 inç",
      "Materiali: ABS + PU + silikon",
      "Ngjyrat e listuara: E zezë",
      "Pesha: 182 g"
    ],
    "burimi": "https://hoco.al/product/mbajtese-celulari-per-makine-ne-kroskot-h15-fair/",
    "dataBurimit": "2026-11-19",
    "demo": false
  }
]);
