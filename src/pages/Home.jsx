import { Helmet } from 'react-helmet-async'
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Isu Ifeanyichukwu Oko — Full-Stack Developer & UI/UX</title>
        <meta name='description' content='Portfolio, blog, and learning hub by Ify Wigatap (Wigatech Academy).'/>
        <meta property='og:title' content='Ify Wigatap — Portfolio'/>
        <meta property='og:image' content='/logo.jpg'/>
      </Helmet>
      <section className="section grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent brand-accent">
            Isu Ifeanyichukwu Oko — Full-Stack(MREN) Developer, UI/UX Designer &
            Digital Creator
          </h1>
          <p className="text-white text-lg">
            Based in Port Harcourt, Nigeria. I build fast, clean, modern web apps (React + Tailwind),
            and teach practical tech skills through Ify Wigatechz Academy.
          </p>
          <div className="flex gap-4">
            <a href="/projects" className="btn btn-primary">View Projects</a>
            <a href="/contact" className="btn btn-outline">Hire Me</a>
          </div>
        </div>
        <div className="card">
          <ul className="grid grid-cols-2 gap-4">
            <li className="p-4 rounded-xl border brand-border">
              <p className="text-3xl font-bold">20+</p><p className="text-gray text-sm">Projects</p>
            </li>
            <li className="p-4 rounded-xl border brand-border">
              <p className="text-3xl font-bold">React</p><p className="text-gray text-sm">Frontend</p>
            </li>
            <li className="p-4 rounded-xl border brand-border">
              <p className="text-3xl font-bold">UI/UX</p><p className="text-gray text-sm">Design</p>
            </li>
            <li className="p-4 rounded-xl border brand-border">
              <p className="text-3xl font-bold">Payments</p><p className="text-gray text-sm">Paystack</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
