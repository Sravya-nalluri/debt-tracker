export default async function handler(req, res) {
  const { sheetId } = req.query;

  const scriptUrl = `https://script.google.com/macros/s/AKfycbySEKnh5YnTOq3EAy7uYkIq41Sm2cuOUSuqcGMswjDigdPSFitvz_-mDK4HuMp6dvoL/exec?sheetId=${sheetId}&action=getAll`;

  try {
    const response = await fetch(scriptUrl);
    const data = await response.text();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).send(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}