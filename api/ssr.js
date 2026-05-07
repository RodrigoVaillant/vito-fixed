export default async function handler(req, res) {
  try {
    const mod = await import('../dist/server/index.js');
    res.status(200).send('<pre>' + JSON.stringify(Object.keys(mod), null, 2) + '</pre>');
  } catch (e) {
    res.status(500).send('<pre>' + e.stack + '</pre>');
  }
}
