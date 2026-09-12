import { Link } from '@tanstack/react-router'
import { ArrowRight, Menu, X, MapPin, Phone, Mail } from 'lucide-react'
import { useState } from 'react'

const nav = [{ label: 'Home', to: '/' }, { label: 'Courses', to: '/courses' }, { label: 'Admissions', to: '/admissions' }, { label: 'Contact', to: '/contact' }, { label: 'Directions', to: '/directions' }] as const

export function Brand() { return <Link to="/" className="brand" aria-label="Techno International New Town home"><span className="brand-mark">T</span><span><strong>TECHNO</strong><small>International New Town</small></span></Link> }

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return <div className="site-shell">
    <div className="utility"><span>Approved by AICTE · Affiliated to MAKAUT</span><span className="utility-links"><a href="tel:+913323243878"><Phone size={13}/> Enquire</a><a href="mailto:info@tint.edu.in"><Mail size={13}/> info@tint.edu.in</a></span></div>
    <header className="header"><Brand/><button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button><nav className={open ? 'nav open' : 'nav'}>{nav.map(item => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} activeProps={{ className: 'active' }}>{item.label}</Link>)}<Link to="/admissions" className="nav-apply">Apply now <ArrowRight size={16}/></Link></nav></header>
    <main>{children}</main>
    <footer className="footer"><div className="footer-main"><div><Brand/><p>An engineering and management institute in the heart of New Town, Kolkata—where practical learning meets industry opportunity.</p></div><div><h3>Explore</h3>{nav.slice(1).map(item => <Link key={item.to} to={item.to}>{item.label}</Link>)}</div><div><h3>Visit campus</h3><p><MapPin size={17}/> Block DG 1/1, Action Area 1<br/>New Town, Kolkata 700156</p><a href="mailto:info@tint.edu.in">info@tint.edu.in</a></div></div><div className="footer-bottom">© {new Date().getFullYear()} Techno International New Town <span>Made for curious minds.</span></div></footer>
  </div>
}

export function PageHero({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) { return <section className="page-hero"><div className="page-hero-inner"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{copy}</p></div></section> }
