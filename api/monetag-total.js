export default async function handler(req, res) {
  const SUPABASE_URL = "https://laponfeqxxspxcasxecg.supabase.co";
  const KEY = "sb_publishable_TBu_vM0xOlQsLX4aQvMmrQ_Nsp9Fv00";
  const r = await fetch(SUPABASE_URL + "/rest/v1/naset_monetag_real?select=amount", {
    headers: { "apikey": KEY, "Authorization": "Bearer " + KEY }
  });
  const data = await r.json();
  let total = 0;
  for (const x of (Array.isArray(data) ? data : [])) total += parseFloat(x.amount || 0);
  return res.status(200).json({ total });
}
