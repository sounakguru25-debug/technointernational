import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, BookOpen, BriefcaseBusiness, Building2, GraduationCap, MoveRight, Quote } from 'lucide-react'
import { SiteLayout } from '@/components/SiteLayout'
import { courses } from '@/data/site'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return <SiteLayout>
    <section className="hero">
      <div className="hero-image"><img src="/images/campus-hero.jpg" alt="Students walking through a green university campus"/><div className="hero-scrim"/></div>
      <div className="hero-copy"><p className="eyebrow light">Admissions 2026 open</p><h1>Ideas begin here.<br/><em>Impact goes everywhere.</em></h1><p>Build the skill, confidence and connections to shape tomorrow—from a vibrant technology campus in New Town, Kolkata.</p><div className="hero-actions"><Link to="/admissions" className="button gold">Start your application <ArrowRight size={18}/></Link><Link to="/courses" className="text-link light">Explore programmes <MoveRight size={18}/></Link></div></div>
      <div className="hero-note"><span>EST.</span><strong>2005</strong><small>Two decades of technical education</small></div>
    </section>
    <section className="quick-links"><Link to="/courses"><BookOpen/><span><small>Study at TINT</small>Find your programme</span><ArrowRight/></Link><Link to="/admissions"><GraduationCap/><span><small>Join us</small>Admissions guide</span><ArrowRight/></Link><Link to="/contact"><BriefcaseBusiness/><span><small>Talk to us</small>Enquiry & support</span><ArrowRight/></Link><Link to="/directions"><Building2/><span><small>Come over</small>Visit the campus</span><ArrowRight/></Link></section>
    <section className="intro section"><div><p className="eyebrow">A learning community</p><h2>Engineering education with Kolkata energy.</h2></div><div><p>Techno International New Town brings classroom fundamentals, hands-on laboratories and an active campus culture together. Students learn with faculty mentors, build in teams and prepare for work that keeps changing.</p><Link to="/courses" className="text-link">Discover academics <MoveRight size={18}/></Link></div></section>
    <section className="programmes section"><div className="section-head"><div><p className="eyebrow">Programmes</p><h2>Choose what you’ll build next.</h2></div><Link to="/courses" className="text-link">View all courses <ArrowRight size={18}/></Link></div><div className="programme-grid">{courses.slice(0, 5).map((course, i) => <Link key={course.slug} to="/courses/$courseId" params={{courseId: course.slug}} className={`programme-card card-${i+1}`}><small>{course.degree} · {course.duration}</small><h3>{course.name}</h3><p>{course.summary}</p><span>Course details <ArrowRight size={18}/></span></Link>)}</div></section>
    <section className="campus-story section"><div className="campus-photo"><img src="/images/lab.jpg" alt="Students working together in a technology lab"/><span className="photo-label">LEARN · MAKE · TEST</span></div><div className="campus-copy"><p className="eyebrow">Beyond the syllabus</p><h2>A campus built around doing.</h2><p>Technical clubs, project showcases, placement preparation and cultural festivals make learning a full-campus experience—not simply a timetable.</p><div className="stats"><span><strong>8</strong> featured programmes</span><span><strong>20+</strong> years in education</span><span><strong>1</strong> connected New Town campus</span></div><Link to="/contact" className="button navy">Plan a campus visit <ArrowRight size={18}/></Link></div></section>
    <section className="quote-section"><Quote/><blockquote>“The best engineering education teaches you how to keep learning long after the answer sheet is submitted.”</blockquote><p>THE TINT APPROACH</p></section>
    <section className="cta-band"><div><p className="eyebrow light">Your next chapter</p><h2>Ready to find your place?</h2></div><div><Link to="/admissions" className="button gold">Apply for admission <ArrowRight size={18}/></Link><Link to="/directions" className="text-link light">Get directions <ArrowRight size={18}/></Link></div></section>
  </SiteLayout>
}
