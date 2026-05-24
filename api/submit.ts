import type { VercelRequest, VercelResponse } from "@vercel/node";

interface FormData {
  name: string;
  phone: string;
  year: string;
  model: string;
}

async function sendTelegram(data: FormData): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  const text = [
    "🔧 <b>Нова заявка — VITOCENTER</b>",
    "",
    `👤 Ім'я: ${data.name}`,
    `📞 Телефон: ${data.phone}`,
    `🚐 Модель: ${data.model}`,
    `📅 Рік: ${data.year}`,
  ].join("\n");

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
  });
}

async function sendKeycrm(data: FormData): Promise<void> {
  const apiKey = process.env.KEYCRM_API_KEY;
  if (!apiKey) return;

  const body: Record<string, unknown> = {
    full_name: data.name,
    phone: data.phone,
    comment: `${data.model}, ${data.year} р.`,
  };

  // Необов'язково: вкажіть ID воронки (pipeline) і джерела (source) у .env
  if (process.env.KEYCRM_PIPELINE_ID) body.pipeline_id = Number(process.env.KEYCRM_PIPELINE_ID);
  if (process.env.KEYCRM_SOURCE_ID) body.source_id = Number(process.env.KEYCRM_SOURCE_ID);

  await fetch("https://openapi.keycrm.app/v1/leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, phone, year, model } = req.body as FormData;

  if (!phone) {
    return res.status(400).json({ error: "Phone is required" });
  }

  await Promise.allSettled([
    sendTelegram({ name, phone, year, model }),
    sendKeycrm({ name, phone, year, model }),
  ]);

  return res.status(200).json({ ok: true });
}
