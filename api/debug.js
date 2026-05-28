module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return res.status(200).json({
      status: 'error',
      problem: 'ANTHROPIC_API_KEY is not set',
      fix: 'Go to Vercel project → Settings → Environment Variables and add ANTHROPIC_API_KEY'
    });
  }

  try {
    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 32,
        messages: [{ role: 'user', content: 'Say OK' }]
      })
    });

    const data = await upstream.json();

    if (!upstream.ok) {
      return res.status(200).json({
        status: 'error',
        problem: `Anthropic returned HTTP ${upstream.status}`,
        detail: data
      });
    }

    return res.status(200).json({
      status: 'ok',
      message: 'API key works and Anthropic is reachable',
      response: data.content?.[0]?.text
    });

  } catch (err) {
    return res.status(200).json({
      status: 'error',
      problem: 'Network error reaching Anthropic',
      detail: err.message
    });
  }
};
