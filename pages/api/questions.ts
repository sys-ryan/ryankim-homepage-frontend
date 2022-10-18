import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  // name: string;
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === "POST") {
    console.log(JSON.stringify(req.body));
    const response = await fetch(`${process.env.backendBaseUrl}/questions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
      }),
    });

    if (!response.ok) {
      res.status(500).json({ message: "Error: Question could not be saved." });
      return;
    }

    res.status(201).end();
  }
}
