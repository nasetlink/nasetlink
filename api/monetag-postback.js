export default async function handler(req, res) {
  const SUPABASE_URL = "https://laponfeqxxspxcasxecg.supabase.co";
  const KEY = "sb_publishable_TBu_vM0xOlQsLX4aQvMmrQ_Nsp9Fv00";
  const payout = parseFloat(req.query.payout || req.query.amount || 0);
  if (payout > 0) {
    await fetch(SUPABASE_URL + "/rest/v1/naset_monetag_real", {
      method: "POST",
      headers: { "apikey": KEY, "Authorization": "Bearer " + KEY, "Content-Type": "application/json", "Prefer": "return=minimal" },
      body: JSON.stringify({ amount: payout })
    });
  }
  return res.status(200).json({ ok: true });
}
