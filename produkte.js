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
 * karikues: iphone | samsung | makine; kasa: iphone | samsung;
 * syze: femra | meshkuj; lodra: goca | cuna; aksesore: adaptors | usb | "".
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
    id: "hoco-z60-bloom", emri: "Karikues makine Hoco Z60 Bloom 48W", kategoria: "karikues", nenkategoria: "makine",
    modeli: "Z60", cmimi: 1000, foto: "assets/products/hoco/hoco-z60-bloom.jpg", stoku: null,
    pershkrimi: "Karikues makine me dy porta për karikim të shpejtë gjatë udhëtimit.",
    specifikat: ["USB-C deri 30W + USB-A deri 18W; gjithsej 48W", "Hyrje 12–24V; PD, PPS dhe QC3.0", "Varianti me kabllo USB-A → USB-C 1 m konfirmohet me dyqanin"],
    burimi: "https://hocotech.com/product/mobile-accessories/in-car/car-chargers/car-charger-z60-bloom-48w-cable-set/", demo: false
  },
  {
    id: "hoco-ud4-intelligent-32gb", emri: "Memorie USB Hoco UD4 Intelligent 32GB", kategoria: "aksesore", nenkategoria: "usb",
    modeli: "UD4", cmimi: 800, cmimiOrientues: true, foto: "assets/products/hoco/hoco-ud4-intelligent-32gb.jpg", stoku: null,
    pershkrimi: "Memorie USB kompakte me trup metalik për ruajtjen dhe transportimin e dokumenteve, fotove e muzikës.",
    specifikat: ["Kapacitet 32GB; lidhës USB-A, USB 2.0","Lexim 10–30 MB/s; shkrim 6–10 MB/s","Trup prej aliazh zinku; peshë 7 g"],
    burimi: "https://hocotech.com/product/mobile-accessories/flash-disks/usb-flash-disk-ud4-intelligent/", demo: false
  },
  {
    id: "hoco-ud5-wisdom-64gb", emri: "Memorie USB Hoco UD5 Wisdom 64GB", kategoria: "aksesore", nenkategoria: "usb",
    modeli: "UD5", cmimi: 1400, cmimiOrientues: true, foto: "assets/products/hoco/hoco-ud5-wisdom-64gb.jpg", stoku: null,
    pershkrimi: "Memorie USB 3.0 me trup metalik për transferimin praktik të skedarëve dhe kopjeve rezervë.",
    specifikat: ["Kapacitet 64GB; lidhës USB-A, USB 3.0","Lexim 20–90 MB/s; shkrim 15–80 MB/s","Trup prej aliazh zinku; peshë 18.5 g"],
    burimi: "https://hocotech.com/product/mobile-accessories/flash-disks/usb-flash-disk-ud5-zinc-alloy/", demo: false
  },
  {
    id: "hoco-ud6-intelligent-32gb", emri: "Memorie USB Hoco UD6 Intelligent 32GB", kategoria: "aksesore", nenkategoria: "usb",
    modeli: "UD6", cmimi: 700, cmimiOrientues: true, foto: "assets/products/hoco/hoco-ud6-intelligent-32gb.jpg", stoku: null,
    pershkrimi: "Memorie USB e lehtë për skedarët e përditshëm, me trup kompakt në ngjyrë të zezë mat.",
    specifikat: ["Kapacitet 32GB; lidhës USB-A, USB 2.0","Lexim 10–30 MB/s; shkrim 6–10 MB/s","Material ABS dhe pllakë PCB; peshë 7 g"],
    burimi: "https://hocotech.com/product/mobile-accessories/flash-disks/usb-flash-disk-ud6-intelligent-2-0/", demo: false
  },
  {
    id: "hoco-ud8-smart-64gb", emri: "Memorie USB-C Hoco UD8 Smart 64GB", kategoria: "aksesore", nenkategoria: "usb",
    modeli: "UD8", cmimi: 1800, cmimiOrientues: true, foto: "assets/products/hoco/hoco-ud8-smart-64gb.jpg", stoku: null,
    pershkrimi: "Memorie me lidhës USB-C për ruajtjen dhe transferimin e skedarëve në pajisje që mbështesin memorie USB-C.",
    specifikat: ["Kapacitet 64GB; varianti me lidhës USB-C, USB 3.0","Lexim 70–100 MB/s; shkrim 30–40 MB/s","Trup prej aliazh zinku; peshë 10 g"],
    burimi: "https://hocotech.com/product/mobile-accessories/flash-disks/usb-or-type-c-flash-drive-ud8-smart-3-0/", demo: false
  },
  {
    id: "hoco-ud9-insightful-64gb", emri: "Memorie USB Hoco UD9 Insightful 64GB", kategoria: "aksesore", nenkategoria: "usb",
    modeli: "UD9", cmimi: 1200, cmimiOrientues: true, foto: "assets/products/hoco/hoco-ud9-insightful-64gb.jpg", stoku: null,
    pershkrimi: "Memorie USB me përmasa të vogla, praktike për muzikë në makinë dhe skedarë të përditshëm.",
    specifikat: ["Kapacitet 64GB; lidhës USB-A, USB 2.0","Lexim 15–25 MB/s; shkrim 6–10 MB/s","Aliazh zinku dhe ABS; përmasa 26.3 × 12.2 × 4.4 mm, peshë 7 g"],
    burimi: "https://hocotech.com/product/mobile-accessories/flash-disks/usb-flash-drive-ud9-insightful-2-0/", demo: false
  },
  {
    id: "hoco-z54-prosperous", emri: "Karikues makine Hoco Z54 Prosperous 15.5W", kategoria: "karikues", nenkategoria: "makine",
    modeli: "Z54", cmimi: 600, cmimiOrientues: true, foto: "assets/products/hoco/hoco-z54-prosperous.jpg", stoku: null,
    pershkrimi: "Karikues kompakt me dy porta USB për karikimin e përditshëm gjatë udhëtimit.",
    specifikat: ["2 × USB-A, secila deri 12W; gjithsej 15.5W (5V/3.1A)","Hyrje 12–24V; trup alumini dhe unazë LED blu","Varianti vetëm karikues, pa kabllo USB"],
    burimi: "https://hocotech.com/product/mobile-accessories/in-car/car-chargers/car-charger-z54-prosperous-15-5w-cable-set/", demo: false
  },
  {
    id: "hoco-z58-rank", emri: "Karikues makine Hoco Z58 Rank 30W", kategoria: "karikues", nenkategoria: "makine",
    modeli: "Z58", cmimi: 900, cmimiOrientues: true, foto: "assets/products/hoco/hoco-z58-rank.jpg", stoku: null,
    pershkrimi: "Karikues me portë USB-C për karikim të shpejtë të telefonit në makinë.",
    specifikat: ["1 × USB-C deri 30W; PD3.0, PPS dhe QC3.0","Hyrje 12–24V; tregues LED dhe unazë alumini","Varianti vetëm karikues, pa kabllo USB"],
    burimi: "https://hocotech.com/product/mobile-accessories/in-car/car-chargers/car-charger-z58-rank-30w-cable-set/", demo: false
  },
  {
    id: "hoco-z57b-glorious", emri: "Karikues makine Hoco Z57B Glorious 63W", kategoria: "karikues", nenkategoria: "makine",
    modeli: "Z57B", cmimi: 1500, cmimiOrientues: true, foto: "assets/products/hoco/hoco-z57b-glorious.jpg", stoku: null,
    pershkrimi: "Karikues me dy porta dhe ekran digjital që tregon tensionin e baterisë së makinës.",
    specifikat: ["USB-C deri 45W + USB-A deri 18W; gjithsej 63W","Hyrje 12–24V; PD3.0, PPS, SFC2.0 dhe QC3.0","Ekran LED dhe trup alumini; pa kabllo USB"],
    burimi: "https://hocotech.com/product/mobile-accessories/in-car/car-chargers/car-charger-z57b-glorious-63w-cable-set/", demo: false
  },
  {
    id: "hoco-nz17-avant-garde", emri: "Karikues makine Hoco NZ17 Avant-garde 75W", kategoria: "karikues", nenkategoria: "makine",
    modeli: "NZ17", cmimi: 1800, cmimiOrientues: true, foto: "assets/products/hoco/hoco-nz17-avant-garde.jpg", stoku: null,
    pershkrimi: "Karikues me tri porta dhe ndriçim me tri ngjyra për disa pajisje gjatë udhëtimit.",
    specifikat: ["2 × USB-C (45W/30W) + 1 × USB-A deri 18W","Deri 75W me dy USB-C; deri 60W kur përdoren tri portat","Hyrje 12–24V; PD3.0 dhe PPS; pa kabllo USB"],
    burimi: "https://hocotech.com/product/mobile-accessories/in-car/car-chargers/car-charger-nz17-avant-garde-75w-cable-set/", demo: false
  },
  {
    id: "hoco-z59a-rank", emri: "Karikues makine Hoco Z59A Rank 96W", kategoria: "karikues", nenkategoria: "makine",
    modeli: "Z59A", cmimi: 2200, cmimiOrientues: true, foto: "assets/products/hoco/hoco-z59a-rank.jpg", stoku: null,
    pershkrimi: "Karikues me katër porta USB dhe prizë shtesë çakmaku për pajisjet e pasagjerëve.",
    specifikat: ["2 × USB-C 30W + 2 × USB-A 18W; gjithsej deri 96W","Hyrje 12–24V; PD3.0, PPS dhe QC3.0; kabllo ndërlidhëse 75 cm","Prizë çakmaku deri 120W në 12V ose 240W në 24V"],
    burimi: "https://hocotech.com/product/mobile-accessories/in-car/car-chargers/car-charger-z59a-rank-96w-1xcigarette-lighter-slot/", demo: false
  },
  {
    id: "hoco-hx53-treasure-waterproof", emri: "Qese ujëmbrojtëse telefoni Hoco HX53 Treasure", kategoria: "aksesore", nenkategoria: "",
    modeli: "HX53", cmimi: 1200, cmimiOrientues: true, foto: "assets/products/hoco/hoco-hx53-treasure-waterproof.avif", stoku: null,
    pershkrimi: "Qese mbrojtëse për plazh e pishinë, me dritare transparente për kamerat dhe kordelë për mbajtje.",
    specifikat: ["IPX8; për telefona deri në 7.2 inç","PU + TPU; 240 × 120 × 15 mm; kordelë e përfshirë","Pa kontroll me prekje nën ujë ose zhbllokim me gjurmë; testo rrjedhjet para çdo përdorimi"],
    burimi: "https://hocotech.com/product/mobile-accessories/waterproof-phone-bags/waterproof-phone-bag-hx53-treasure/", demo: false
  },
  {
    id: "hoco-hx52-waterproof", emri: "Qese ujëmbrojtëse transparente Hoco HX52", kategoria: "aksesore", nenkategoria: "",
    modeli: "HX52", cmimi: 1000, cmimiOrientues: true, foto: "assets/products/hoco/hoco-hx52-waterproof.avif", stoku: null,
    pershkrimi: "Mbështjellëse transparente për telefonin gjatë pushimeve, me kapëse plastike dhe kordelë për mbajtje.",
    specifikat: ["IPX8; për telefona deri në 7.2 inç","ABS + PVC; 222 × 125 × 21 mm; kordelë e përfshirë","Mbështet ekranin me prekje përmes mbështjellëses; testo rrjedhjet para çdo përdorimi"],
    burimi: "https://hocotech.com/product/mobile-accessories/waterproof-phone-bags/waterproof-phone-bag-hx52/", demo: false
  },
  {
    id: "hoco-clear-fantasy-waterproof", emri: "Qese ujëmbrojtëse telefoni Hoco Clear fantasy", kategoria: "aksesore", nenkategoria: "",
    modeli: "Clear fantasy", cmimi: 800, cmimiOrientues: true, foto: "assets/products/hoco/hoco-clear-fantasy-waterproof.jpg", stoku: null,
    pershkrimi: "Mbështjellëse transparente me mbyllje me kapëse, praktike për telefonin në plazh ose pishinë.",
    specifikat: ["TPU + ABS; përmasa 105 × 200 mm; peshë 56 g","Thellësi e deklaruar nga prodhuesi deri 20 m; testo rrjedhjet para çdo përdorimi","Ekrani me prekje nuk punon nën presionin e ujit; përputhshmëria varet nga përmasat e telefonit"],
    burimi: "https://hocotech.com/product/mobile-accessories/waterproof-phone-bags/waterproof-case-clear-fantasy-universal-swim-bag-depth-20m/", demo: false
  }
]);
