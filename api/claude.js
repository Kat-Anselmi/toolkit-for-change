export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  if (!req.body || !req.body.messages) return res.status(400).end();
if (req.body.messages && req.body.messages.length > 20) return res.status(429).json({error:"Too many messages"});
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify(req.body)
  });
  const data = await response.json();
  res.status(response.status).json(data);
}
