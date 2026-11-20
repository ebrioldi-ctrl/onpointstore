import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, "produkte.js"), "utf8"), context, { timeout: 1000 });
const products = context.window.ON_POINT_PRODUCTS;
const errors = [];
const checkedFiles = new Set();
const ids = new Set();

function checkFile(relativePath) {
  if (typeof relativePath !== "string" || !relativePath || path.isAbsolute(relativePath) || relativePath.split(/[\\/]/).includes("..")) {
    errors.push(`Rrugë skedari e pavlefshme: ${relativePath}`);
    return;
  }
  if (checkedFiles.has(relativePath)) return;
  checkedFiles.add(relativePath);
  let directory = root;
  for (const segment of relativePath.split("/")) {
    if (!fs.existsSync(directory) || !fs.statSync(directory).isDirectory() || !fs.readdirSync(directory).includes(segment)) {
      errors.push(`Mungon skedari ose nuk përputhen shkronjat e emrit: ${relativePath}`);
      return;
    }
    directory = path.join(directory, segment);
  }
  if (!fs.statSync(directory).isFile() || fs.statSync(directory).size === 0) errors.push(`Skedar bosh ose i pavlefshëm: ${relativePath}`);
}

if (!Array.isArray(products) || !products.length) throw new Error("Katalogu është bosh ose i pavlefshëm.");
for (const product of products) {
  if (!product.id || ids.has(product.id)) errors.push(`ID e munguar ose e përsëritur: ${product.id}`);
  ids.add(product.id);
  if (!product.emri || !product.kategoria) errors.push(`Mungon emri ose kategoria: ${product.id}`);
  if (product.cmimi !== null && (!Number.isFinite(product.cmimi) || product.cmimi < 0)) errors.push(`Çmim i pavlefshëm: ${product.id}`);
  checkFile(product.foto);
  const photos = product.fotot || [product.foto];
  if (!Array.isArray(photos) || photos.length < 1 || photos.length > 2 || photos[0] !== product.foto) errors.push(`Galeri e pavlefshme: ${product.id}`);
  else photos.forEach(checkFile);
  if (product.fotoPaketimi && photos.length !== 2) errors.push(`Mungon fotoja e paketimit: ${product.id}`);
  if (product.burimi?.startsWith("https://hoco.al/")) {
    if (!Number.isFinite(product.cmimiBurim) || product.cmimi !== product.cmimiBurim + 200 || product.shtesaCmimit !== 200) errors.push(`Çmimi duhet të jetë hoco.al + 200 lekë: ${product.id}`);
    if (photos.length === 2 && photos.every(photo => typeof photo === "string" && fs.existsSync(path.join(root, photo)))) {
      const hashes = photos.map(photo => createHash("sha256").update(fs.readFileSync(path.join(root, photo))).digest("hex"));
      if (hashes[0] === hashes[1]) errors.push(`Dy fotot janë të njëjta: ${product.id}`);
    }
  }
}

for (const page of ["index.html", "produktet.html", "produkti.html"]) {
  checkFile(page);
  const html = fs.readFileSync(path.join(root, page), "utf8");
  for (const match of html.matchAll(/<(?:img|script)\b[^>]*\bsrc="([^"]+)"/g)) checkFile(match[1]);
}
checkFile("style.css");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
for (const match of app.matchAll(/\bimage:\s*"([^"]+)"/g)) checkFile(match[1]);
const css = fs.readFileSync(path.join(root, "style.css"), "utf8");
for (const match of css.matchAll(/url\(["']?([^"'()]+)["']?\)/g)) {
  if (!/^(https?:|data:)/.test(match[1])) checkFile(match[1]);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  const imported = products.filter(product => product.burimi?.startsWith("https://hoco.al/")).length;
  console.log(`Katalogu u kontrollua: ${products.length} produkte (${imported} nga hoco.al), ${checkedFiles.size} skedarë lokalë. Nuk mungon asnjë foto.`);
}
