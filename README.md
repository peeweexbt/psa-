# PSA Pokemon Stock Agent

Real-time Pokémon card stock checker across global retailers, powered by Claude AI + web search.

---

## Project Structure

```
psa-stock-agent/
├── api/
│   └── search.js       ← Serverless function (proxies Anthropic API)
├── public/
│   └── index.html      ← Frontend website
├── vercel.json         ← Vercel routing config
├── package.json
└── README.md
```

## How it works

The frontend (`public/index.html`) sends search requests to `/api/search`.
The serverless function (`api/search.js`) adds your API key server-side and
forwards the request to Anthropic's API with web search enabled.
Your API key is never exposed to the browser.

## Local development

```bash
npm install -g vercel
vercel dev
```

Then open http://localhost:3000
