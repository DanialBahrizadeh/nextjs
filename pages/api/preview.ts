import { NextApiHandler } from "next";

const handler: NextApiHandler = (req, res) => {
  const { redirect = "/news" } = req.query;
  res.setPreviewData({ user: "Vishwas" });
  res.redirect(redirect as string);
};

export default handler;
