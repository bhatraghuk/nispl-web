'use client'

import Link from 'next/link'
import { ArrowRight, Share2, CheckCircle2, Zap, Shield, Users, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/cta-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import PageWrapper from '@/components/page-wrapper'
import FadeIn from '@/components/animations/fade-in'

export default function SocialMedia() {
  const whatWeDeliver = [
    'Social Media Strategy & Planning',
    'Content Creation & Curation',
    'Community Management',
    'Analytics & Performance Tracking',
    'Paid Social Advertising',
    'Influencer Partnerships',
  ]

  const ourApproach = [
    {
      title: 'Platform Specific',
      description: 'Tailored strategies for each platform, not one-size-fits-all.',
    },
    {
      title: 'Content Focused',
      description: 'Engaging content that resonates with your target audience.',
    },
    {
      title: 'Data-Driven',
      description: 'Continuous optimization based on performance analytics.',
    },
  ]

  const whoItsFor = [
    {
      title: 'B2C Brands',
      description: 'Consumer brands looking to connect with customers on social platforms.',
    },
    {
      title: 'B2B Companies',
      description: 'Business-to-business organizations building thought leadership and presence.',
    },
    {
      title: 'E-commerce Stores',
      description: 'Online retailers driving traffic and sales through social media.',
    },
    {
      title: 'Service Businesses',
      description: 'Professional services establishing trust and credibility online.',
    },
  ]

  const whyItMatters = [
    {
      icon: Zap,
      title: 'Brand Visibility',
      description: 'Increase your reach and get discovered by new audiences.',
    },
    {
      icon: Shield,
      title: 'Audience Engagement',
      description: 'Build a community around your brand with consistent interaction.',
    },
    {
      icon: Users,
      title: 'Customer Trust',
      description: 'Social proof that validates your business and builds credibility.',
    },
    {
      icon: TrendingUp,
      title: 'Traffic & Leads',
      description: 'Drive qualified traffic and generate leads from social channels.',
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
                Social Media
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Strategic content and digital presence aligned with your brand goals. We help you build and manage social media presence that engages your audience and drives business results.
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
                How We Manage Social Media
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
              <Share2 className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Ready to Amplify Your Social Presence?
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Let's create a social strategy that drives engagement and growth.
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
