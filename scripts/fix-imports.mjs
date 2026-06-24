import fs from "fs";
import path from "path";



const replacements = [
  ['from "react router dom"', 'from "react-router-dom"'],
  ["from 'react router dom'", "from 'react-router-dom'"],
  ['from "lucide react"', 'from "lucide-react"'],
  ["from 'lucide react'", "from 'lucide-react'"],
  ['from "framer motion"', 'from "framer-motion"'],
  ["from 'framer motion'", "from 'framer-motion'"],
  ['use scroll to top', 'use-scroll-to-top'],
  ['use reveal', 'use-reveal'],
  ['use toast', 'use-toast'],
  ['supporticon uploads', 'supporticon-uploads'],
  ['business team.lottie', 'business-team.lottie'],
  ['wallet animation.lottie', 'wallet-animation.lottie'],
  ['@dotlottie/react player', '@dotlottie/react-player'],
  ['product demo.mp4', 'product_demo.mp4'],
  ['home imge.png', 'home-imge.png'],
  ['image zoom', 'image-zoom'],
  ['mental resilience.webp', 'mental-resilience.webp'],
  ['customer mindsets.webp', 'customer-mindsets.webp'],
  ['agent wellbeing.webp', 'agent-wellbeing.webp'],
  ['humans and ai.webp', 'humans-and-ai.webp'],
  ['fight distractions.webp', 'fightdistractions.webp'],
  ['fight-distractions.webp', 'fightdistractions.webp'],
  ['human intelligence.webp', 'humanintelligence.webp'],
  ['human-intelligence.webp', 'humanintelligence.webp'],
  ['aicopilot warrior.webp', 'aicopilotwarrior.webp'],
  ['aicopilot-warrior.webp', 'aicopilotwarrior.webp'],
  ['ai copilot warrior.webp', 'aicopilotwarrior.webp'],
  ['ai-copilot-warrior.webp', 'aicopilotwarrior.webp'],
  ['frontline heroes.webp', 'frontlineheroes.webp'],
  ['frontline-heroes.webp', 'frontlineheroes.webp'],
  ['future ai human.webp', 'futureaihuman.webp'],
  ['future-ai-human.webp', 'futureaihuman.webp'],
  ['tab=case studies', 'tab=case-studies'],
  ['id: "case studies"', 'id: "case-studies"'],
  ['activeTab === "case studies"', 'activeTab === "case-studies"'],
  ['/resources/case study/', '/resources/case-study/'],
];

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (fs.statSync(full).isDirectory()) {
      if (entry !== "node_modules" && entry !== "dist") walk(full, files);
    } else if (/\.(tsx?|jsx?)$/.test(entry)) {
      files.push(full);
    }
  }
  return files;
}

for (const file of walk("src")) {
  const originalContent = fs.readFileSync(file, "utf8");
  let content = originalContent;
  
  for (const [from, to] of replacements) {
    if (content.includes(from)) {
      content = content.split(from).join(to);
    }
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content, "utf8");
    console.log("Fixed:", file);
  }
}

