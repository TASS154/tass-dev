import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const shots = [
  {
    name: "atendia",
    url: "https://atendia-kappa.vercel.app/login",
    async ready(page) {
      await page.getByRole("button", { name: /demonstração/i }).click();
      await page.waitForURL("**/dashboard", { timeout: 60000 });
    },
  },
  { name: "akreis-prime", url: "https://akreis-prime.vercel.app" },
  { name: "palicone", url: "https://palicone-demo.vercel.app" },
  { name: "veloz", url: "https://temp-v4fe.vercel.app" },
  { name: "finance-ai", url: "https://finance-ai-dun-iota.vercel.app" },
  { name: "bot-advisor", url: "https://bot-advisor.vercel.app" },
];

const only = process.env.ONLY;
const selected = only ? shots.filter((shot) => shot.name === only) : shots;

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});

for (const shot of selected) {
  process.stdout.write(`Capturing ${shot.name}...\n`);
  try {
    await page.goto(shot.url, { waitUntil: "networkidle", timeout: 90000 });
    if (typeof shot.ready === "function") {
      await shot.ready(page);
    }
    await page.waitForTimeout(2000);
    const out = path.join(__dirname, "..", "public", "projects", `${shot.name}.png`);
    await page.screenshot({ path: out, type: "png", fullPage: false });
    process.stdout.write(`OK ${shot.name}\n`);
  } catch (err) {
    process.stdout.write(`FAIL ${shot.name}: ${err.message}\n`);
  }
}

await browser.close();
