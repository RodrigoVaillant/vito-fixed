export default async function handler(req, res) {
  try {
    const { default: h } = await import('../dist/server/index.js');
    return h(req, res);
  } catch (e) {
    res.status(500).send('<pre>' + e.stack + '</pre>');
  }
}
