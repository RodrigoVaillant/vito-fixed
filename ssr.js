export default async function handler(req, res) {
  const { default: handler } = await import('../dist/server/index.js');
  return handler(req, res);
}
