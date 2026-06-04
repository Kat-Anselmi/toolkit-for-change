module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  res.status(200).json({
    working: true,
    hasKey: !!process.env.ANTHROPIC_API_KEY,
    body: req.body
  });
};
