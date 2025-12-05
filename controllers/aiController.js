import OpenAI from "openai";

export const recommendDish = async (req, res) => {
  try {
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const prompt = `Recommend popular dishes for a food delivery app. User preference: ${req.body.preference}`;

    const aiRes = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    res.json({ recommendation: aiRes.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ message: "AI suggestion failed" });
  }
};
