export default function Pricing(){
  const tiers = [
    { name: "Professional Portfolio Website", price: "₦90k–₦100k", features: ["1–3 pages", "Responsive design", "Basic SEO", "1 round of revisions"] },
    { name: "Landing Pages Website", price: "₦100k–₦150k", features: ["1–4 pages", "Responsive design", "Basic SEO", "1 round of revisions"] },
    { name: "Construction Website", price: "₦180k–₦250k", features: ["1–5 pages", "Responsive design", "Basic SEO", "1 round of revisions"] },
    { name: "Real Estate Website", price: "₦250k–₦280k", features: ["1–7 pages", "Responsive design", "Basic SEO", "1 round of revisions"] },
    { name: "Business/E-Commerce Website", price: "₦250k–₦400k", features: ["5–14 pages", "Contact/Lead forms", "SEO setup", "2–3 revisions"] },
    { name: "Web App (Serverless)", price: "Custom Quote", features: ["Auth, API endpoints", "Admin panel", "Paystack integration", "Ongoing support"] },
    { name: "Banking Web App (Serverless, DataBase management)", price: "Custom Quote", features: ["Auth, API endpoints", "Admin panel", "Paystack integration", "Ongoing support"] },

  ]
  return (
    <section className="section">
      <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent brand-accent">Pricing</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((t,i)=>(
          <div key={i} className="card">
            <h3 className="text-xl font-semibold">{t.name}</h3>
            <p className="text-primary text-lg mt-1">{t.price}</p>
            <ul className="mt-4 list-disc list-inside text-gray space-y-2">
              {t.features.map((f,ix)=><li key={ix}>{f}</li>)}
            </ul>
            <a href="/enroll" className="btn btn-primary mt-4">Get Started</a>
          </div>
        ))}
      </div>
    </section>
  )
}
