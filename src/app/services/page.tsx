'use client'

import Link from 'next/link'
import { ArrowRight, Globe, Cpu, Smartphone, Brain, Palette, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/cta-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import PageWrapper from '@/components/page-wrapper'
import FadeIn from '@/components/animations/fade-in'
import StaggeredChildren from '@/components/animations/staggered-children'

export default function Services() {
  const services = [
    {
      id: 'website-development',
      icon: Globe,
      title: 'Website Development',
      description: 'High-performance websites built for clarity, speed, and security.',
      features: [
        'Corporate & Business Websites',
        'E-commerce Platforms',
        'SEO-Optimized Architecture',
        'Progressive Web Apps (PWA)',
      ],
      link: '/services/web-development',
    },
    {
      id: 'web-application',
      icon: Cpu,
      title: 'Web Application Development',
      description: 'Custom platforms that centralize operations and improve workflow efficiency.',
      features: [
        'SaaS Platform Development',
        'Enterprise Dashboards',
        'Customer & Admin Portals',
        'Real-Time Collaboration Tools',
      ],
      link: '/services/web-application',
    },
    {
      id: 'mobile-application',
      icon: Smartphone,
      title: 'Mobile Application Development',
      description: 'Reliable mobile systems integrated with enterprise infrastructure.',
      features: [
        'iOS & Android Native Apps',
        'Cross-Platform Solutions',
        'Mobile Backend Integration',
        'App Store Optimization',
      ],
      link: '/services/mobile-application',
    },
    {
      id: 'ai-ml',
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Practical AI solutions designed to improve decision-making and automation.',
      features: [
        'Predictive Analytics & Forecasting',
        'Natural Language Processing (NLP)',
        'Computer Vision Systems',
        'AI-Powered Automation',
      ],
      link: '/services/ai-ml',
    },
    {
      id: 'branding',
      icon: Palette,
      title: 'Branding',
      description: 'Clear and structured brand identity systems that build recognition and trust.',
      features: [
        'Brand Strategy & Positioning',
        'Logo & Visual Identity Design',
        'Brand Guidelines & Systems',
        'Digital & Print Brand Assets',
      ],
      link: '/services/branding',
    },
    {
      id: 'social-media',
      icon: Share2,
      title: 'Social Media',
      description: 'Strategic content and digital presence aligned with your brand goals.',
      features: [
        'Social Media Strategy & Planning',
        'Content Creation & Curation',
        'Community Management',
        'Analytics & Performance Tracking',
      ],
      link: '/services/social-media',
    },
  ]

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 px-4 py-1.5 bg-primary/10 text-primary border-primary/20">
                Our Services
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                Solutions Designed for Growth and Stability.
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                From scalable digital platforms to intelligent automation and brand development, we provide end-to-end services that help businesses operate efficiently and grow with confidence.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Overview Grid */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StaggeredChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="group hover:glow-effect transition-all duration-300 border-border/50 hover:border-primary/30 h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground text-base mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={service.link}>
                    <Button variant="ghost" className="group w-full justify-between p-0 h-auto text-base">
                      Learn More
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </StaggeredChildren>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-24 lg:py-32 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Every business has different needs.
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                We structure our services to support where you are — and where you plan to go next.
              </p>
              <Link href="/contact">
                <Button size="xl" variant="glass" className="rounded-lg">
                  Schedule a Consultation
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
