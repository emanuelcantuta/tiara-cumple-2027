import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  const { rating, favoritePart, message } = body;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Regalo Tiara <onboarding@resend.dev>',
      to: ['cantutaemanuel@gmail.com'],
      subject: `🎂 ¡Tiara respondió a su regalo! (${rating}/5 ⭐)`,
      html: `
        <div style="font-family: sans-serif; max-width: 550px; padding: 20px; border: 2px solid #ffd1dc; border-radius: 16px;">
          <h2 style="color: #e63946;">💌 Nueva respuesta de Tiara</h2>
          <p><strong>⭐ Calificación:</strong> ${rating} de 5</p>
          <p><strong>💖 Parte favorita:</strong> ${favoritePart}</p>
          <hr style="border: none; border-top: 1px dashed #ccc; margin: 16px 0;" />
          <p><strong>📝 Mensaje:</strong></p>
          <p style="white-space: pre-line; background: #fff9fb; padding: 15px; border-radius: 10px;">${message}</p>
        </div>
      `,
    });

    if (error) {
      return res.status(400).json({ error });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}