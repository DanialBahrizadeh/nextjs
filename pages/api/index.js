// same of exprese + the best practice name is handler
export default function handler(req, res) {
  res.status(200).json({ name: "Home API route" });
}
