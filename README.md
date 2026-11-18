# ON POINT STORE

Dyqan statik me HTML, CSS dhe JavaScript, pa framework. Hap `index.html` në shfletues ose përdor Live Server në VS Code. Për testim me ruajtje të qëndrueshme të shportës, përdor të njëjtën adresë lokale në të dyja faqet.

## Çfarë duhet plotësuar para publikimit

1. **WhatsApp:** numri i dhënë nga dyqani është vendosur te `config.js`, fusha `whatsappNumber`, në format ndërkombëtar me prefiksin `355`, vetëm shifra. Nëse e ndryshon, përdor prefiksin ndërkombëtar, pa `+`, hapësira ose zero paraprirëse. Porosia përgatitet në mesazh dhe dërgohet vetëm nga klienti.
2. **Produktet:** katalogu te `produkte.js` ka 42 produkte: 8 kasa, 7 syze, 12 karikues/kabllo, 6 adaptorë, 5 memorie USB, 3 qese ujëmbrojtëse dhe Stitch. Çdo produkt ka `id`, `emri`, `kategoria`, `nenkategoria`, `cmimi`, `foto`, `pershkrimi`, `demo: false`. Çmimet janë numra në lekë; përdor `cmimi: null` kur mungon çmimi, që katalogu, shporta dhe mesazhi i porosisë të shfaqin “Pyet për çmimin”. Nëse një produkt në shportë nuk ka çmim, edhe totali kërkon konfirmim. Për produktet e reja, shto një hyrje dhe rrugën relative të fotos; krijimi i dosjes vetëm nuk e shton automatikisht produktin. Ruaj ID të qëndrueshme dhe mos ripërdor ID të një produkti tjetër. Stitch përdor edhe `nenkategorite: ["goca", "cuna"]` që të shfaqet në të dy filtrat si një produkt i vetëm.
3. **Kategoritë dhe nënkategoritë:** përdor vlerat në tabelën më poshtë. iPhone dhe Samsung te `kasa` janë kasa telefoni, jo telefona. Kasa dhe karikues për modele ose pajtueshmëri të ndryshme duhen hyrje të veçanta; verifiko veçanërisht lidhësin dhe fuqinë e karikuesve përpara publikimit.
4. Konfirmo disponueshmërinë, modelet, materialet dhe informacionin që do t'u japësh klientëve. Përshkrimet e 18 produkteve fillestare përdorin emrat e skedarëve dhe fotot e dhëna. Për 24 produktet Hoco, `modeli`, `specifikat` dhe `burimi` ruajnë kodin ose emrin e modelit, specifikat dhe lidhjen zyrtare të kontrolluar më 18 nëntor 2026. `stoku: null` shfaq “Stoku: pa konfirmuar”. `cmimiOrientues: true` shënon 13 çmimet fillestare të zgjedhura me kërkesë të dyqanit; kjo është metadata për mirëmbajtje dhe çmimi shfaqet normalisht në katalog. Kur mungon fotoja përdoret `assets/placeholder-product.svg` me `fotoProvizore: true`; për ta zëvendësuar, vendos rrugën e fotos reale dhe hiq këtë flamur. Dosja `assets/demo/` ruhet, por ilustrimet e saj nuk përdoren në katalogun aktual.
5. Plotëso informacionin real të kontaktit dhe kushtet e kthimeve që do t'u komunikosh klientëve. Transporti kushton 100 lekë brenda Durrësit dhe 300 lekë në pjesën tjetër të Shqipërisë; shfaqet te shporta në të dyja faqet dhe përfshihet në mesazhin WhatsApp. Totali aktual përfshin vetëm produktet; disponueshmëria dhe porosia konfirmohen nga dyqani në WhatsApp.
6. Provo një porosi me numrin real në telefonin tënd përpara publikimit. Faqja nuk është publikuar dhe asnjë porosi nuk dërgohet automatikisht.

| Kategoria (`kategoria`) | Nënkategoritë (`nenkategoria`) |
| --- | --- |
| Karikues (`karikues`) | `iphone`, `samsung`, `makine`, `""` për lidhës universalë |
| Kasa telefoni (`kasa`) | `iphone`, `samsung` |
| Syze (`syze`) | `femra`, `meshkuj` |
| Lodra (`lodra`) | `goca`, `cuna` |
| Aksesorë të tjerë telefoni (`aksesore`) | `adaptors`, `usb`, `""` (bosh; përfshin qeset ujëmbrojtëse) |

Çmimet e vendosura sipas udhëzimit të dyqanit:

| Produktet | Çmimi për produkt |
| --- | --- |
| Çdo kasë | 1 000 lekë |
| Çdo palë syze | 2 500 lekë |
| Secili karikues (fishë + adaptor) | 1 200 lekë |
| Stitch me muzikë dhe kërcim | 1 800 lekë |
| Hoco U137, X114, X102, X113, UA36D | 500 lekë |
| Hoco UPA32B, UA27, UA38C, UA37 | 700 lekë |
| Hoco E80 Travel | 600 lekë |
| Hoco Z60 Bloom | 1 000 lekë |

Fotot lidhen nga `kasa/`, `syze/`, `karikus/` dhe `lodra/`. Të 24 produktet Hoco përdorin fotot zyrtare të shkarkuara nga faqet e tyre te `hocotech.com`, të ruajtura lokalisht në `assets/products/hoco/` në përmasa 800 × 800 px. HX52 dhe HX53 ruajnë formatin origjinal AVIF; fotot e tjera janë JPG. Fusha `burimi` e secilit produkt lidh faqen zyrtare përkatëse. Fotot nuk varen nga lidhje të jashtme gjatë shfaqjes së katalogut. Te `aksesore/adaptors` gjenden UPA32B, UA27, UA38C, UA37, UA36D dhe E80. X102 përdor nënkategorinë `iphone`; kabllot e tjera të karikimit nuk kufizohen te një markë telefoni. Z60 është zhvendosur te `karikues/makine`, me të njëjtën ID dhe çmim 1 000 lekë. Z60 ofrohet nga prodhuesi edhe si set me kabllo USB-A → USB-C 1 m; varianti i dyqanit mbetet për t'u konfirmuar. Faqja UA38C ka mospërputhje në kodin brenda tekstit dhe gjatësinë, prandaj është përdorur kodi i titullit/URL-së dhe është lënë jashtë gjatësia e paqartë.

13 çmimet e mëposhtme janë propozime fillestare në lekë, të vendosura me kërkesë të dyqanit më 18 nëntor 2026. Janë rrumbullakosur sipas modelit, kapacitetit dhe fuqisë, me kontroll orientues të ofertave publike, si [Hoco UD9 te Redline](https://redline.com.al/products/hoco-usb-ud9) dhe [karikuesit Hoco te QTO](https://qto.al/product-category/accessories/cables-adapters/).

| Produkti i ri | Çmimi orientues |
| --- | --- |
| Hoco UD4 Intelligent 32GB | 800 lekë |
| Hoco UD5 Wisdom 64GB | 1 400 lekë |
| Hoco UD6 Intelligent 32GB | 700 lekë |
| Hoco UD8 Smart USB-C 64GB | 1 800 lekë |
| Hoco UD9 Insightful 64GB | 1 200 lekë |
| Hoco Z54 Prosperous 15.5W | 600 lekë |
| Hoco Z58 Rank 30W | 900 lekë |
| Hoco Z57B Glorious 63W | 1 500 lekë |
| Hoco NZ17 Avant-garde 75W | 1 800 lekë |
| Hoco Z59A Rank 96W | 2 200 lekë |
| Hoco HX53 Treasure | 1 200 lekë |
| Hoco HX52 | 1 000 lekë |
| Hoco Clear fantasy | 800 lekë |

USB-të janë variante të zgjedhura me kapacitetin dhe lidhësin në emër; UD8 është varianti USB-C, jo USB-A dhe USB-C njëkohësisht. Z54, Z58, Z57B dhe NZ17 janë variante vetëm karikues, pa kabllo USB. NZ17 arrin 75W me dy USB-C dhe 60W me tri portat. HX52, HX53 dhe Clear fantasy janë tre modele të ndryshme te aksesorët pa nënkategori; përmasat dhe kufizimet e përdorimit të tyre jepen te specifikat. Të gjitha lidhjet e dhëna nga dyqani u hapën, pas riprovimit të disa kërkesave që fillimisht skaduan.

## Si funksionon

- Të dyja faqet lexojnë të njëjtën listë te `produkte.js` dhe të njëjtin kod te `app.js`.
- Pamja “Të gjitha produktet” i përzien produktet rastësisht sa herë hapet ose rifreskohet faqja. Kërkimi ruan rendin gjatë së njëjtës hapje; kategoritë përdorin rendin e katalogut.
- Lidhja për kasat iPhone: `produktet.html?kategoria=kasa&nenkategoria=iphone`. Filtrat lexohen me `URLSearchParams`; kërkimi përdor `q` dhe nuk dallon shkronjat e mëdha ose thekset.
- Lidhja për adaptorët: `produktet.html?kategoria=aksesore&nenkategoria=adaptors`. Kërkimi përfshin edhe kodin Hoco dhe specifikat.
- USB-të: `produktet.html?kategoria=aksesore&nenkategoria=usb`; karikuesit e makinës: `produktet.html?kategoria=karikues&nenkategoria=makine`. Qeset ujëmbrojtëse shfaqen te të gjithë aksesorët, pa nënkategori.
- Në ballinë, kategoritë me nënkategori kanë buton me shigjetë për t'i hapur/mbyllur me prekje. Në kompjuter mund të përdoret edhe hover/fokusi. Katalogu ofron filtrat për nënkategoritë e kategorisë së zgjedhur.
- Fotot e kategorive merren nga dosja `hover cover/`; lidhjet për secilën janë te fusha `preview.image` e kategorive në `app.js`. Hover-i, fokusi me tastierë ose butoni me shigjetë ndërrojnë foton, titullin dhe lidhjen e bannerit. Kasa telefoni përdor `banner-kasa.png`. Fotot mbushin gjithë bannerin me shkrimin sipër dhe hije për lexueshmëri, në kompjuter dhe celular. Pozicionet e secilës foto rregullohen te selektorët `data-category-preview` në `style.css`, që produktet të mbeten sa më të dukshme gjatë përshtatjes së figurës.
- Shporta ruhet në `localStorage` me çelësin `onpoint-cart-v1`, me ID dhe sasi 1–99. Çmimi dhe totali merren nga katalogu aktual. Mos përdor ID të vjetra për produkte të tjera.
- WhatsApp merr një mesazh të koduar me produktet, sasitë, çmimet dhe totalin. Klienti duhet ta dërgojë vetë mesazhin dhe të konfirmojë porosinë me dyqanin.
- Nëse shfletuesi bllokon ruajtjen lokale, shporta punon gjatë vizitës dhe shfaq një njoftim për kufizimin.

Hyrja në llogari, pagesat me kartë dhe paneli i administrimit mbeten për një fazë tjetër.

## Verifikimi i versionit të parë

U provuan me shfletues real ballina → kasa → iPhone/Samsung → shporta, hover dhe prekje, kërkimi, filtrat pa rezultate, sasitë/heqja/totalet dhe ruajtja pas rifreskimit e kalimit mes faqeve. U kontrolluan edhe të dhëna të dëmtuara në localStorage, kufijtë e sasisë dhe pamjet 360, 390 e 1440 px. Nuk u gjetën gabime JavaScript, foto që mungojnë ose dalje horizontale nga ekrani.

Lidhja dhe mesazhi i WhatsApp kontrollohen lokalisht, pa dërguar mesazh. Numri i dyqanit tani është vendosur në `config.js`. Dyqani duhet të kryejë vetë provën e marrjes së një porosie përpara publikimit.

## Verifikimi i produkteve Hoco

Më 18 nëntor 2026 kaluan 53 kontrolle në Chrome: kalimi nga ballina te Adaptors, 6 adaptorët dhe 5 produktet e reja te Karikues, filtrat ekzistues iPhone/Samsung, kërkimi sipas kodit/specifikave, imazhet lokale dhe të 33 specifikat. U provuan shtimi i 11 produkteve në shportë (6 900 lekë), ndryshimi i sasisë dhe ruajtja pas rifreskimit. Çmimet `null`, të munguara, bosh ose jo numerike shfaqën “Pyet për çmimin” edhe në shportë dhe mesazhin e porosisë, pa total të pjesshëm. Pamjet 360, 390 dhe 1440 px nuk patën dalje horizontale; nuk pati gabime JavaScript ose imazhe që mungojnë. Mesazhet WhatsApp vetëm u kontrolluan, pa u dërguar.

Zgjerimi me 13 artikuj u verifikua në Chrome: 42 produkte me ID unike, 5 USB te filtri përkatës, 6 karikues makine (5 të rinj dhe Z60), 3 qese ujëmbrojtëse te 14 aksesorët pa nënkategori të re. Të 42 fotot u ngarkuan, përfshirë AVIF. U kontrolluan menuja nga ballina, filtrat ekzistues, kërkimi, ruajtja e rendit gjatë kërkimit, shporta me 13 artikuj dhe total 15 900 lekë, mesazhi i porosisë dhe ruajtja pas rifreskimit. Pamjet 360 dhe 390 px nuk patën dalje horizontale ose gabime JavaScript.
