import fs from "fs";
import path from "path";

const files = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (/\.(tsx|ts|html)$/.test(entry)) files.push(full);
  }

  
}

["src/pages", "src/data", "src/components/CaseStudiesList.tsx", "src/components/CXLeadersForm.tsx", "src/components/FeaturedSection.tsx", "src/components/layout", "index.html"].forEach((p) => {
  if (!fs.existsSync(p)) return;
  if (fs.statSync(p).isFile()) files.push(p);
  else walk(p);
});

const replacements = [
  ["one-size-fits-all", "one size fits all"],
  ["knowledge-transfer", "knowledge transfer"],
  ["point-of-contact", "point of contact"],
  ["customer-centricity", "customer centricity"],
  ["AI-powered", "AI powered"],
  ["AI-assisted", "AI assisted"],
  ["data-driven", "data driven"],
  ["follow-ups", "follow ups"],
  ["follow-up", "follow up"],
  ["one-click", "one click"],
  ["role-based", "role based"],
  ["self-service", "self service"],
  ["auto-reply", "auto reply"],
  ["best-source", "best source"],
  ["read-only", "read only"],
  ["email-based", "email based"],
  ["ticket-finding", "ticket finding"],
  ["people-first", "people first"],
  ["time-bound", "time bound"],
  ["go-live", "go live"],
  ["at-risk", "at risk"],
  ["up-to-date", "up to date"],
  ["re-write", "re write"],
  ["plug-ins", "plug ins"],
  ["plug-in", "plug in"],
  ["Co-Pilot", "Co Pilot"],
  ["Auto-Pilot", "Auto Pilot"],
  ["Human-AI", "Human AI"],
  ["Human–AI", "Human AI"],
  ["24/7", "24/7"],
];

for (const file of files) {
  let content = fs.readFileSync(file, "utf8");
  let changed = false;
  for (const [from, to] of replacements) {
    if (content.includes(from)) {
      content = content.split(from).join(to);
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(file, content, "utf8");
    console.log("Updated:", file);
  }
}
