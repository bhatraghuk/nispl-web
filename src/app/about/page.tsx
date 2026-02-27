'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/cta-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import PageWrapper from '@/components/page-wrapper'
import FadeIn from '@/components/animations/fade-in'

export default function About() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 px-4 py-1.5 bg-primary/10 text-primary border-primary/20">
                About Us
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                Building Technology That Works <br />— Today and Tomorrow.
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We are a digital engineering company focused on designing scalable systems that help businesses operate smarter, move faster, and grow sustainably.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Our Clients
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Long-Term Partnerships
              </h2>
              <p className="text-muted-foreground">
                We see ourselves not just as a service provider, but as a long-term digital partner.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
              {/* Client Logo Placeholders - Replace with actual client logos */}
              {[
                { name: 'FinCorp', alt: 'Financial Services Corporation' },
                { name: 'HealthTech', alt: 'Healthcare Technology Solutions' },
                { name: 'RetailPro', alt: 'Retail & E-commerce Platform' },
                { name: 'ManufactureX', alt: 'Manufacturing Excellence' },
                { name: 'EduLearn', alt: 'Education Learning Platform' },
                { name: 'LogiTrack', alt: 'Logistics & Supply Chain' },
                { name: 'DataFlow', alt: 'Data Analytics Company' },
                { name: 'CloudScale', alt: 'Cloud Infrastructure Provider' },
                { name: 'SecureNet', alt: 'Cybersecurity Firm' },
                { name: 'AutoDrive', alt: 'Automotive Technology' },
                { name: 'EnergyPlus', alt: 'Energy & Utilities' },
                { name: 'ConnectHub', alt: 'Telecommunications' },
              ].map((client, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-6 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1"
                >
                  <span className="text-lg font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Company Overview & Vision & Mission */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="left">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  What Drives Us
                </Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  We've Seen Enough
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    We've seen how businesses struggle when systems are built without long-term thinking. Quick solutions often lead to technical debt, operational inefficiencies, and growth limitations.
                  </p>
                  <p>
                    That's why we approach every engagement with:
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start">
                      <span className="text-primary font-semibold mr-2">Clear architecture planning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-semibold mr-2">Structured development processes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-semibold mr-2">Security and scalability in mind</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-semibold mr-2">A long-term partnership mindset</span>
                    </li>
                  </ul>
                  <p className="mt-6">
                    Our goal is not just to deliver a project — but to support sustainable digital growth.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="space-y-6">
                <Card className="h-full border-border/50 hover:border-primary/30 transition-colors duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl mb-4">Where We're Going</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      To be a global leader in AI-powered digital transformation, enabling businesses of all sizes to harness intelligent systems that drive sustainable growth and innovation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="h-full border-border/50 hover:border-primary/30 transition-colors duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl mb-4">What We Stand For</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      To deliver exceptional AI-powered solutions through technical excellence, strategic partnership, and relentless innovation, helping our clients achieve measurable business outcomes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Approach to Engineering */}
      <section className="py-24 lg:py-32 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Engineering Excellence
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Our Approach to Engineering
              </h2>
              <p className="text-lg text-muted-foreground">
                Every project we take on follows a disciplined framework:
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            <FadeIn direction="left" delay={0.1}>
              <Card className="h-full border-border/50 hover:border-primary/30 transition-colors duration-300">
                <CardHeader>
                  <div className="text-5xl font-bold text-primary/10 mb-4">01</div>
                  <CardTitle className="text-xl mb-2">Understand Before Building</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We invest time in understanding your workflows, bottlenecks, and objectives.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <Card className="h-full border-border/50 hover:border-primary/30 transition-colors duration-300">
                <CardHeader>
                  <div className="text-5xl font-bold text-primary/10 mb-4">02</div>
                  <CardTitle className="text-xl mb-2">Architect for Scale</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We design systems that can grow with your business — not limit it.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="left" delay={0.3}>
              <Card className="h-full border-border/50 hover:border-primary/30 transition-colors duration-300">
                <CardHeader>
                  <div className="text-5xl font-bold text-primary/10 mb-4">03</div>
                  <CardTitle className="text-xl mb-2">Build with Accountability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Clean code. Documented systems. Transparent communication.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="right" delay={0.4}>
              <Card className="h-full border-border/50 hover:border-primary/30 transition-colors duration-300">
                <CardHeader>
                  <div className="text-5xl font-bold text-primary/10 mb-4">04</div>
                  <CardTitle className="text-xl mb-2">Support Beyond Launch</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We remain available for improvements, upgrades, and ongoing optimization.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.5}>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-xl font-semibold text-foreground">
                Technology should evolve with your business — not hold it back.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Our Expertise & The Way We Work */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                What We Do & How We Do It
              </h2>
              <p className="text-lg text-muted-foreground">
                Clear expertise, transparent process — built for lasting partnerships.
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <FadeIn direction="left">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  What We Do
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Our Expertise
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We specialize in:
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    'Enterprise Web Platforms',
                    'Custom Web Applications',
                    'Mobile Application Development',
                    'AI & Machine Learning Systems',
                    'Workflow Automation',
                    'Data & Analytics Dashboards',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2.5 mr-4 flex-shrink-0" />
                      <span className="text-lg text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-base italic">
                  Our engineering stack is chosen carefully — not based on trends, but on reliability and scalability.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  Our Process
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  The Way We Work
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We value clarity and professionalism in every engagement.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    'Clear timelines',
                    'Defined milestones',
                    'Structured communication',
                    'Transparent deliverables',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2.5 mr-4 flex-shrink-0" />
                      <span className="text-lg text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-base italic">
                  We believe trust is built through consistency.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-accent/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Digital transformation doesn't need to be overwhelming.
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                With the right architecture and the right team, it becomes manageable — and measurable.
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to build secure, scalable systems? Let's talk.
              </p>
              <Link href="/contact">
                <Button size="xl" variant="glass" className="rounded-lg">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  )
}
