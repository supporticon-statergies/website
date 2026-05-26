import fs from "fs";
import path from "path";

const targets = [
  "src/pages",
  "src/data",
  "src/components/CaseStudiesList.tsx",
  "src/components/CXLeadersForm.tsx",
  "src/components/FeaturedSection.tsx",
  "src/components/layout/SiteHeader.tsx",
  "src/components/layout/SiteFooter.tsx",
];

function collectFiles(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  const stat = fs.statSync(dir);
  if (stat.isFile()) {
    if (/\.(tsx|ts)$/.test(dir)) acc.push(dir);
    return acc;
  }
  for (const entry of fs.readdirSync(dir)) {
    collectFiles(path.join(dir, entry).replace(/\\/g, "/"), acc);
  }
  return acc;
}

const files = targets.flatMap((t) =>
  fs.existsSync(t) && fs.statSync(t).isFile() ? [t] : collectFiles(t)
);

function cleanContent(text) {
  return text
    .replace(/\s\u2014\s/g, ", ")
    .replace(/\u2014/g, ", ")
    .replace(/\u2013/g, " to ")
    .replace(/[\u2010\u2011\u2012\u2015]/g, " ")
    .replace(/  +/g, " ")
    .replace(/ ,/g, ",")
    .replace(/,  +/g, ", ")
    .replace(/ to  +/g, " to ");
}

for (const file of files) {
  const original = fs.readFileSync(file, "utf8");
  const updated = cleanContent(original);
  if (updated !== original) {
    fs.writeFileSync(file, updated, "utf8");
    console.log("Updated:", file);
  }
}

const indexPath = "index.html";
if (fs.existsSync(indexPath)) {
  let html = fs.readFileSync(indexPath, "utf8");
  const next = cleanContent(html);
  if (next !== html) {
    fs.writeFileSync(indexPath, next, "utf8");
    console.log("Updated:", indexPath);
  }
}
