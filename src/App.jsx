import { Outlet, NavLink } from 'react-router-dom'
import { useState } from 'react'

function MobileMenu(){
  const [open, setOpen] = useState(false)
  return (
    <div className="md:hidden">
      {/* Menu open button */}
      <button
        aria-label="Open Menu"
        onClick={()=>setOpen(true)}
        className="p-2 rounded-xl border brand-border hover:bg-slate-900"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex"
          style={{
            backgroundImage: 'url("/Bg-tech.jpeg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        >
          {/* Overlay on top of image */}
          <div className="absolute inset-0 bg-black/60" onClick={()=>setOpen(false)}></div>

          {/* Slide-in panel */}
          <div className="relative z-10 w-72 h-full border-l brand-border shadow-soft p-5 flex flex-col gap-4 text-white">
            {/* Close button */}
            <div className="flex items-center justify-between mb-2">
              <button
                aria-label="Close Menu"
                onClick={()=>setOpen(false)}
                className="p-2 rounded-xl hover:bg-white/10"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col text-lg">
              <NavLink onClick={()=>setOpen(false)} className="py-2 hover:text-blue-300" to="/about">About</NavLink>
              <NavLink onClick={()=>setOpen(false)} className="py-2 hover:text-blue-300" to="/projects">Projects</NavLink>
              <NavLink onClick={()=>setOpen(false)} className="py-2 hover:text-blue-300" to="/services">Services</NavLink>
              <NavLink onClick={()=>setOpen(false)} className="py-2 hover:text-blue-300" to="/blog">Blog</NavLink>
              <NavLink onClick={()=>setOpen(false)} className="py-2 hover:text-blue-300" to="/learn">Learn</NavLink>
              <NavLink onClick={()=>setOpen(false)} className="py-2 hover:text-blue-300" to="/enroll">Enroll</NavLink>
              <NavLink onClick={()=>setOpen(false)} className="py-2 hover:text-blue-300" to="/pricing">Pricing</NavLink>
              <NavLink onClick={()=>setOpen(false)} className="py-2 hover:text-blue-300" to="/testimonials">Testimonials</NavLink>
              <NavLink onClick={()=>setOpen(false)} className="py-2 hover:text-blue-300" to="/resume">Resume</NavLink>
              <NavLink onClick={()=>setOpen(false)} className="py-2 hover:text-blue-300" to="/contact">Contact</NavLink>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}


export default function App() {
  return (
    <div className="min-h-screen text-slate-100" style={{ backgroundImage: "url('/big techz.jpeg')", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
      <header className="sticky top-0 backdrop-blur bg-dark/80 border-b border-line/10 z-50">
        <nav className="section py-4">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="text-xl font-semibold flex items-center gap-2">
              <img src="/Ifylogo.png" alt="IfyWigaTechz Academy Logo" className="h-10 w-10 rounded-sm object-contain" />
              <span className="text-primary">IFYWIGATECHZ GLOBAL SERVICES</span>
            </NavLink>

            <div className="hidden md:flex items-center gap-6 brand-link">
              <NavLink className="hover:text-primary" to="/about">About</NavLink>
              <NavLink className="hover:text-primary" to="/projects">Projects</NavLink>
              <NavLink className="hover:text-primary" to="/services">Services</NavLink>
              <NavLink className="hover:text-primary" to="/blog">Blog</NavLink>
              <NavLink className="hover:text-primary" to="/learn">Learn</NavLink>
              <NavLink className="hover:text-primary" to="/enroll">Enroll</NavLink>
              <NavLink className="hover:text-primary" to="/pricing">Pricing</NavLink>
              <NavLink className="hover:text-primary" to="/testimonials">Testimonials</NavLink>
              <NavLink className="hover:text-primary" to="/resume">Resume</NavLink>
              <NavLink className="hover:text-primary" to="/contact">Contact</NavLink>
            </div>
            <MobileMenu />
          </div>
        </nav>
      </header>

      <main><Outlet /></main>

      <a href="https://wa.me/2348113722088" target="_blank" rel="noreferrer"
        className="fixed bottom-5 right-5 btn btn-primary shadow-soft">Chat on WhatsApp</a>

      <footer className="section text-sm text-white">
        <div className="border-t border-line pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} Isu Ifeanyichukwu Oko. All rights reserved.</p>
          <p><a className="brand-link" href="/privacy">Privacy</a> • <a className="brand-link" href="/terms">Terms</a></p>
        </div>
      </footer>
    </div>
  )
}
