# PSA Pokemon Stock Agent

Real-time Pokémon card stock checker across global retailers, powered by Claude AI + web search.

## Deploy to Vercel (5 minutes)

### Step 1 — Get your Anthropic API key
1. Go to https://console.anthropic.com
2. Sign in (or create a free account)
3. Click **API Keys** in the left sidebar
4. Click **Create Key**, give it a name, and copy the key (starts with `sk-ant-...`)

### Step 2 — Push to GitHub
1. Create a new repo at https://github.com/new (can be private)
2. Upload this entire folder, or run:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

### Step 3 — Deploy on Vercel
1. Go to https://vercel.com and sign in with GitHub
2. Click **Add New → Project**
3. Import your GitHub repo
4. Click **Deploy** (no build settings needed)

### Step 4 — Add your API key
1. In your Vercel project dashboard, go to **Settings → Environment Variables**
2. Add a new variable:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** your key from Step 1
3. Click **Save**
4. Go to **Deployments** and click **Redeploy** (to pick up the new env var)

### Done!
Your site is live at `https://your-project.vercel.app` 🎉

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
