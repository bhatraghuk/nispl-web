'use client'

import Link from 'next/link'
import { ArrowRight, Globe, CheckCircle2, Zap, Shield, Users, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/cta-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import PageWrapper from '@/components/page-wrapper'
import FadeIn from '@/components/animations/fade-in'

export default function WebsiteDevelopment() {
  const whatWeDeliver = [
    'Corporate & Business Websites',
    'E-commerce Platforms',
    'Headless CMS Implementations',
    'SEO-Optimized Architecture',
    'Progressive Web Apps (PWA)',
    'Custom Landing Pages',
  ]

  const ourApproach = [
    {
      title: 'Performance First',
      description: 'We build for speed, ensuring fast load times and smooth user experiences.',
    },
    {
      title: 'SEO Optimized',
      description: 'Built-in SEO best practices to help your site rank higher in search results.',
    },
    {
      title: 'Security Focused',
      description: 'Enterprise-grade security measures to protect your site and user data.',
    },
  ]

  const whoItsFor = [
    {
      title: 'Growing Businesses',
      description: 'Established companies looking to establish or upgrade their digital presence.',
    },
    {
      title: 'E-commerce Brands',
      description: 'Retailers ready to sell online with scalable, secure platforms.',
    },
    {
      title: 'Service Providers',
      description: 'Professional services firms showcasing their expertise and attracting clients.',
    },
    {
      title: 'Startups',
      description: 'New ventures needing a strong digital foundation from day one.',
    },
  ]

  const whyItMatters = [
    {
      icon: Zap,
      title: 'Fast Loading',
      description: 'Every second counts. We optimize for speed to reduce bounce rates and improve conversions.',
    },
    {
      icon: Shield,
      title: 'Secure by Design',
      description: 'Built with security protocols to protect your business and customer data.',
    },
    {
      icon: Users,
      title: 'User-Centered',
      description: 'Designed for your users, ensuring intuitive navigation and engaging experiences.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Growth',
      description: 'Architecture that grows with your business, handling increased traffic and features.',
    },
  ]

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto">
              <Link href="/services" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
                <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                Back to Services
              </Link>
              <Badge className="mb-6 px-4 py-1.5 bg-primary/10 text-primary border-primary/20">
                Service
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                Website Development
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                High-performance websites built for clarity, speed, and security. We craft digital experiences that engage visitors and convert them into customers.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Our Offerings
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                What We Deliver
              </h2>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {whatWeDeliver.map((item, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/30 transition-colors duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 lg:py-32 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Our Approach
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                How We Build Your Website
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {ourApproach.map((item, index) => (
              <FadeIn key={index} direction="up" delay={index * 0.1}>
                <Card className="h-full border-border/50 hover:border-primary/30 transition-colors duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Target Audience
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Who It's For
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whoItsFor.map((item, index) => (
              <FadeIn key={index} direction="up" delay={index * 0.1}>
                <Card className="h-full border-border/50 hover:border-primary/30 transition-colors duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-24 lg:py-32 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Benefits
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Why It Matters
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyItMatters.map((item, index) => (
              <FadeIn key={index} direction="up" delay={index * 0.1}>
                <Card key={index} className="text-center hover:glow-effect transition-all duration-300 border-border/50 hover:border-primary/30 h-full">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-accent/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <Globe className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Ready to Build Your Website?
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Let's create a digital presence that drives real business results.
              </p>
              <Link href="/contact">
                <Button size="xl" variant="glass" className="rounded-lg">
                  Start Your Project
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
