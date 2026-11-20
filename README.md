# ON POINT STORE

Dyqan statik me HTML, CSS dhe JavaScript, pa framework. Hap `index.html` në shfletues ose përdor Live Server në VS Code. Ballina, katalogu te `produktet.html` dhe detajet te `produkti.html?id=...` lexojnë të njëjtin katalog. Për testim me ruajtje të qëndrueshme të shportës, përdor të njëjtën adresë lokale në të tria faqet.

## Çfarë duhet plotësuar para publikimit

1. **WhatsApp:** numri i dhënë nga dyqani është vendosur te `config.js`, fusha `whatsappNumber`, në format ndërkombëtar me prefiksin `355`, vetëm shifra. Nëse e ndryshon, përdor prefiksin ndërkombëtar, pa `+`, hapësira ose zero paraprirëse. Porosia përgatitet në mesazh dhe dërgohet vetëm nga klienti.
2. **Produktet:** katalogu te `produkte.js` ka 79 produkte: 19 ekzistues dhe 60 të shtuar nga faqja shqiptare `hoco.al`. Ndarja sipas kategorive jepet në tabelën më poshtë. Çdo produkt ka `id`, `emri`, `kategoria`, `nenkategoria`, `cmimi`, `foto`, `pershkrimi`, `demo: false`. `fotot` ruan galerinë kur ka disa pamje; `modeli` dhe `specifikat` ruajnë modelin dhe të dhënat teknike. Çmimet janë numra në lekë; përdor `cmimi: null` kur mungon çmimi, që katalogu, shporta dhe mesazhi i porosisë të shfaqin “Pyet për çmimin”. Nëse një produkt në shportë nuk ka çmim, edhe totali kërkon konfirmim. Për produktet e reja, shto një hyrje dhe rrugët relative të fotove; krijimi i dosjes vetëm nuk e shton automatikisht produktin. Ruaj ID të qëndrueshme dhe mos ripërdor ID të një produkti tjetër. Stitch përdor edhe `nenkategorite: ["goca", "cuna"]` që të shfaqet në të dy filtrat si një produkt i vetëm.
3. **Kategoritë dhe nënkategoritë:** përdor vlerat në tabelën më poshtë. iPhone dhe Samsung te `kasa` janë kasa telefoni, jo telefona. Kasa dhe karikues për modele ose pajtueshmëri të ndryshme duhen hyrje të veçanta; verifiko veçanërisht lidhësin dhe fuqinë e karikuesve përpara publikimit.
4. Konfirmo disponueshmërinë, modelet, materialet dhe informacionin që do t'u japësh klientëve. Përshkrimet e 18 produkteve fillestare përdorin emrat e skedarëve dhe fotot e dhëna. Produkti ekzistues HX53 ruan burimin global të kontrolluar më 18 nëntor 2026 dhe çmimin orientues 1 200 lekë (`cmimiOrientues: true`). Për 60 produktet e reja, `burimi` lidh faqen përkatëse te `hoco.al` dhe `dataBurimit` është `2026-11-19`. Specifikat dhe përshkrimet e tyre përdorin të dhënat e faqes shqiptare. Disponueshmëria e dyqanit konfirmohet në WhatsApp.
5. Plotëso informacionin real të kontaktit dhe kushtet e kthimeve që do t'u komunikosh klientëve. Transporti kushton 100 lekë brenda Durrësit dhe 300 lekë në pjesën tjetër të Shqipërisë; shfaqet te shporta në të dyja faqet dhe përfshihet në mesazhin WhatsApp. Totali aktual përfshin vetëm produktet; disponueshmëria dhe porosia konfirmohen nga dyqani në WhatsApp.
6. Provo një porosi me numrin real në telefonin tënd përpara publikimit të ndryshimeve. Asnjë porosi nuk dërgohet automatikisht. Ndryshimet lokale dhe fotot duhen përfshirë në commit dhe push në GitHub që të merren nga publikimi i Netlify.

| Kategoria (`kategoria`) | Produkte | Nënkategoritë (`nenkategoria`) |
| --- | --- | --- |
| Karikues (`karikues`) | 16 | `iphone`, `samsung`, `type-c`, `micro-usb`, `makine` |
| Kasa telefoni (`kasa`) | 8 | `iphone`, `samsung` |
| Syze (`syze`) | 7 | `femra`, `meshkuj` |
| Lodra (`lodra`) | 1 | `goca`, `cuna` |
| Aksesorë të tjerë telefoni (`aksesore`) | 30 | `adaptors`, `mbajtese`, `""` për HX53 |
| Audio (`audio`) | 8 | `kufje`, `bokse` |
| Pajisje (`pajisje`) | 9 | `maus`, `ora`, `rrjeti`, `makine` |

Çmimet e produkteve ekzistuese, sipas udhëzimit të dyqanit:

| Produktet | Çmimi për produkt |
| --- | --- |
| Çdo kasë | 1 000 lekë |
| Çdo palë syze | 2 500 lekë |
| Secili karikues (fishë + adaptor) | 1 200 lekë |
| Stitch me muzikë dhe kërcim | 1 800 lekë |
| Hoco HX53 Treasure (orientues) | 1 200 lekë |

## Importimi nga Hoco Shqipëri

60 produktet e reja kanë ID me prefiksin `hoco-al-`. Çmimi i shitjes është **çmimi aktiv i faqes shqiptare + 200 lekë** për secilin produkt. Kur burimi ka ulje, llogaritja përdor çmimin aktiv me ulje. `cmimiBurim` ruan çmimin bazë, `shtesaCmimit: 200` ruan shtesën dhe `cmimi` është shuma e tyre. Në WooCommerce Store API, `prices.price` ndahet me `10 ** currency_minor_unit`; për monedhën ALL të kontrolluar njësia e vogël është 0. Këto janë të dhënat e marra më 19 nëntor 2026; çmimet e katalogut mirëmbahen te `produkte.js`.

U përfshinë 21 produktet e dukshme në të dyja faqet e [Adaptors](https://hoco.al/shop/?product_cat=adaptors&filter=1), tre mausët GM14, GM21 dhe GM24, si dhe kabllot, karikuesit e makinës, bokset, kufjet, orët dhe mbajtëset e përzgjedhura. Dy tripodët K101/K22 janë te `aksesore/mbajtese`; pajisjet Wi-Fi HI35/HI37 janë te `pajisje/rrjeti`; kompresori ZP18 është te `pajisje/makine`. Kategorizimi ndjek përdorimin e produktit.

Të dhënat e importit dhe shënimet e kontrollit ruhen te `data/hoco-batches/`: `adaptors-mice.json`, `explicit.json`, `selected.json` dhe skedarët shoqërues të burimeve/kontrollit. Produktet e padukshme në listën e kërkuar, hyrjet pa çmim ose pa foto dhe kontrolluesi GA1 që ndodhet në kategorinë Maus nuk u importuan. Për UPA14/UPA16 nuk deklarohet gjatësia, sepse atributi i burimit dhe fotot e paketimit kanë të dhëna të ndryshme; atributi i palidhur “4K” te Bluetooth UA18 është lënë jashtë.

Fotot ekzistuese lidhen nga `kasa/`, `syze/`, `karikus/` dhe `lodra/`; HX53 ruan foton ekzistuese AVIF te `assets/products/hoco/`. Fotot e 60 produkteve të reja ruhen lokalisht te `assets/products/hoco-al/`. `foto` është pamja kryesore dhe `fotot` ruan pamjen e produktit të ndjekur nga fotoja e fundit e paketimit, kur kjo gjendet në burim. `fotoPaketimi: true` shënon paketimin e verifikuar vizualisht. Kur nuk ka paketim, pamja e dytë ruan një foto tjetër të produktit dhe etiketohet “Foto 2”; përjashtimet dokumentohen në skedarët e kontrollit. LS35 ka vetëm një foto të disponueshme nga burimi dhe HX53 ruan foton e vetme ekzistuese. Fotot e faqes shërbehen nga projekti lokal.

Më 19 nëntor 2026 u hoqën, sipas kërkesës së dyqanit, hyrjet e mëparshme globale U137, X114, X102, X113, Z60, Z54, Z58, Z57B, NZ17, Z59A, UD8, UA38C, Clear fantasy, E80, UD9, UD5, UA36D, UD4, HX52, UD6, UPA32B, UA27 dhe UA37. Më pas u shtuan 60 hyrje me ID të reja dhe me të dhëna nga faqja shqiptare; ID-të e vjetra të hequra nuk ripërdoren për variantet e reja.

## Si funksionon

- Të tria faqet lexojnë të njëjtën listë te `produkte.js` dhe të njëjtin kod te `app.js`.
- Klikimi mbi foton ose emrin në katalog hap `produkti.html?id=<id>`, ku shfaqen përshkrimi, modeli, specifikat, galeria, çmimi dhe zgjedhja e sasisë. URL-ja përdor një skedar HTML statik dhe parametrin `id`; nuk kërkon rrugë dinamike në server. Një ID që mungon shfaq “Produkti nuk u gjet” me lidhje për te katalogu.
- Galeria ndërrohet me shigjeta ose miniaturat poshtë fotos. Butoni “Shto në shportë” në faqen e produktit përdor sasinë e zgjedhur.
- Pamja “Të gjitha produktet” i përzien produktet rastësisht sa herë hapet ose rifreskohet faqja. Kërkimi ruan rendin gjatë së njëjtës hapje; kategoritë përdorin rendin e katalogut.
- Lidhja për kasat iPhone: `produktet.html?kategoria=kasa&nenkategoria=iphone`. Filtrat lexohen me `URLSearchParams`; kërkimi përdor `q` dhe nuk dallon shkronjat e mëdha ose thekset.
- Lidhja për aksesorët: `produktet.html?kategoria=aksesore`. Kërkimi përfshin edhe kodin Hoco dhe specifikat.
- Lidhjet për kategoritë e reja: `produktet.html?kategoria=audio` dhe `produktet.html?kategoria=pajisje`. Filtrat ofrojnë kufje/bokse dhe mausë/orë/rrjet/pajisje makine sipas kategorisë.
- Qesja ujëmbrojtëse HX53 shfaqet te të gjithë aksesorët, pa nënkategori.
- Në ballinë, kategoritë me nënkategori kanë buton me shigjetë për t'i hapur/mbyllur me prekje. Në kompjuter mund të përdoret edhe hover/fokusi. Katalogu ofron filtrat për nënkategoritë e kategorisë së zgjedhur.
- Fotot e kategorive merren nga dosja `hover cover/`; lidhjet për secilën janë te fusha `preview.image` e kategorive në `app.js`. Hover-i, fokusi me tastierë ose butoni me shigjetë ndërrojnë foton, titullin dhe lidhjen e bannerit. Kasa telefoni përdor `banner-kasa.png`. Fotot mbushin gjithë bannerin me shkrimin sipër dhe hije për lexueshmëri, në kompjuter dhe celular. Pozicionet e secilës foto rregullohen te selektorët `data-category-preview` në `style.css`, që produktet të mbeten sa më të dukshme gjatë përshtatjes së figurës.
- Shporta ruhet në `localStorage` me çelësin `onpoint-cart-v1`, me ID dhe sasi 1–99. Çmimi dhe totali merren nga katalogu aktual. Mos përdor ID të vjetra për produkte të tjera.
- WhatsApp merr një mesazh të koduar me produktet, sasitë, çmimet dhe totalin. Klienti duhet ta dërgojë vetë mesazhin dhe të konfirmojë porosinë me dyqanin.
- Nëse shfletuesi bllokon ruajtjen lokale, shporta punon gjatë vizitës dhe shfaq një njoftim për kufizimin.

Hyrja në llogari, pagesat me kartë dhe paneli i administrimit mbeten për një fazë tjetër.

## Kontrolli para publikimit

Ekzekuto `node scripts/check-catalog.mjs`. Kontrolli verifikon ID-të, çmimet e importuara nga hoco.al me shtesën 200 lekë, galeritë me jo më shumë se dy foto dhe praninë e skedarëve lokalë me emrat e saktë. Dy foto identike të një produkti të ri refuzohen. LS35 përfshihet me një foto, sipas konfirmimit të dyqanit.

`netlify.toml` publikon dosjen e projektit dhe ekzekuton këtë kontroll gjatë build-it. Nëse në GitHub mungon një foto që kërkon katalogu, kontrolli ndalon publikimin e atij versioni. Skedarët e rinj HTML, të dhënat dhe dosja e fotove duhen përfshirë në commit dhe push.

## Verifikimi i versionit të parë

U provuan me shfletues real ballina → kasa → iPhone/Samsung → shporta, hover dhe prekje, kërkimi, filtrat pa rezultate, sasitë/heqja/totalet dhe ruajtja pas rifreskimit e kalimit mes faqeve. U kontrolluan edhe të dhëna të dëmtuara në localStorage, kufijtë e sasisë dhe pamjet 360, 390 e 1440 px. Nuk u gjetën gabime JavaScript, foto që mungojnë ose dalje horizontale nga ekrani.

Lidhja dhe mesazhi i WhatsApp kontrollohen lokalisht, pa dërguar mesazh. Numri i dyqanit tani është vendosur në `config.js`. Dyqani duhet të kryejë vetë provën e marrjes së një porosie përpara publikimit.

## Verifikimi historik i produkteve Hoco

Kontrollet më poshtë dokumentojnë versionet përpara heqjes së 23 produkteve më 19 nëntor 2026; numrat dhe produktet e përmendura në to nuk përshkruajnë katalogun aktual.

Më 18 nëntor 2026 kaluan 53 kontrolle në Chrome: kalimi nga ballina te Adaptors, 6 adaptorët dhe 5 produktet e reja te Karikues, filtrat ekzistues iPhone/Samsung, kërkimi sipas kodit/specifikave, imazhet lokale dhe të 33 specifikat. U provuan shtimi i 11 produkteve në shportë (6 900 lekë), ndryshimi i sasisë dhe ruajtja pas rifreskimit. Çmimet `null`, të munguara, bosh ose jo numerike shfaqën “Pyet për çmimin” edhe në shportë dhe mesazhin e porosisë, pa total të pjesshëm. Pamjet 360, 390 dhe 1440 px nuk patën dalje horizontale; nuk pati gabime JavaScript ose imazhe që mungojnë. Mesazhet WhatsApp vetëm u kontrolluan, pa u dërguar.

Zgjerimi me 13 artikuj u verifikua në Chrome: 42 produkte me ID unike, 5 USB te filtri përkatës, 6 karikues makine (5 të rinj dhe Z60), 3 qese ujëmbrojtëse te 14 aksesorët pa nënkategori të re. Të 42 fotot u ngarkuan, përfshirë AVIF. U kontrolluan menuja nga ballina, filtrat ekzistues, kërkimi, ruajtja e rendit gjatë kërkimit, shporta me 13 artikuj dhe total 15 900 lekë, mesazhi i porosisë dhe ruajtja pas rifreskimit. Pamjet 360 dhe 390 px nuk patën dalje horizontale ose gabime JavaScript.
