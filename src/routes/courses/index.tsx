import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Clock, Users } from 'lucide-react'
import { PageHero, SiteLayout } from '@/components/SiteLayout'
import { courses } from '@/data/site'

export const Route = createFileRoute('/courses/')({ component: Courses })
function Courses() { return <SiteLayout><PageHero eyebrow="Academic programmes" title="Learn the fundamentals. Build for what’s next." copy="Explore undergraduate and postgraduate programmes shaped around strong foundations, practical labs and industry-facing projects."/><section className="course-list section">{courses.map((course, i) => <Link key={course.slug} to="/courses/$courseId" params={{courseId:course.slug}} className="course-row"><span className="course-number">{String(i+1).padStart(2,'0')}</span><div><small>{course.degree}</small><h2>{course.name}</h2><p>{course.summary}</p><span className="course-meta"><span><Clock size={16}/>{course.duration}</span><span><Users size={16}/>{course.intake}</span></span></div><span className="round-arrow"><ArrowRight/></span></Link>)}</section></SiteLayout> }
