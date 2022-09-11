export default function handler(req, res) {
  // params its the file name and its array of params
  const { params } = req.query;
  res.status(200).json(params);
}
