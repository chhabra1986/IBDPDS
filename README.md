# IB Digital Society Paper Generator

Practice Paper 1 (SL/HL) and Paper 2 (SL & HL) for IB DP Digital Society (first assessment 2024).
All questions, sources and data are original and fictional, written to the structure in the DS guide.

- `index.html`, `app.js` — the site (no build step)
- `data/p1.js` — Paper 1 structured questions (P1Q) and HL Section B extended questions (HLB)
- `data/p2.js` — Paper 2 source sets (background + Sources A–D + 4 questions)
- `api/mark.js` — server-side marking for "Upload for feedback"

## Deploy on Vercel
1. Import this repo into Vercel (Framework: Other, no build command).
2. Settings → Environment Variables:
   - `CODECRAFT_API_KEY` — your Gemini API key (Google AI Studio)
   - `CODECRAFT_BASE_URL` — `https://generativelanguage.googleapis.com/v1beta/openai`
   - `CODECRAFT_MODEL` — `gemini-3.8-flash`
3. Redeploy.

Application prepared by Satnam Singh Chhabra · satnam.15apr@gmail.com · +91 97184 80001
