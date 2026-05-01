export default async function handler(req, res) {
  const { city } = req.query; 

  const fullUrl = new URL(req.url, `https://${req.headers.host}`);
  const cityName = city || fullUrl.searchParams.get('city');

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({error: "Gagal mengambil data cua"});
  }
}