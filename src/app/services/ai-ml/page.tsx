'use client'

import Link from 'next/link'
import { ArrowRight, Brain, CheckCircle2, Zap, Shield, Users, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/cta-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import PageWrapper from '@/components/page-wrapper'
import FadeIn from '@/components/animations/fade-in'

export default function AIMachineLearning() {
  const whatWeDeliver = [
    'Predictive Analytics & Forecasting',
    'Natural Language Processing (NLP)',
    'Computer Vision Systems',
    'AI-Powered Automation',
    'Recommendation Engines',
    'Chatbots & Virtual Assistants',
  ]

  const ourApproach = [
    {
      title: 'Practical Solutions',
      description: 'We build AI that solves real business problems, not just for technology\'s sake.',
    },
    {
      title: 'Data-Driven',
      description: 'AI models trained on your data, ensuring relevance and accuracy.',
    },
    {
      title: 'Scalable Intelligence',
      description: 'Systems that grow with your data and business needs.',
    },
  ]

  const whoItsFor = [
    {
      title: 'Data-Driven Companies',
      description: 'Organizations with rich data looking to extract actionable insights.',
    },
    {
      title: 'Operational Leaders',
      description: 'Businesses wanting to automate repetitive tasks and improve efficiency.',
    },
    {
      title: 'Innovation Teams',
      description: 'Companies exploring AI as a competitive advantage.',
    },
    {
      title: 'Service Providers',
      description: 'Businesses offering AI-powered features to their customers.',
    },
  ]

  const whyItMatters = [
    {
      icon: Zap,
      title: 'Automated Intelligence',
      description: 'Let AI handle routine tasks while your team focuses on strategic work.',
    },
    {
      icon: Shield,
      title: 'Accurate Predictions',
      description: 'Make better decisions with AI-powered forecasting and insights.',
    },
    {
      icon: Users,
      title: 'Enhanced Experience',
      description: 'Deliver personalized experiences that delight your users.',
    },
    {
      icon: TrendingUp,
      title: 'Competitive Edge',
      description: 'Stay ahead with AI capabilities that differentiate your business.',
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
                AI & Machine Learning
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Practical AI solutions designed to improve decision-making and automation. We build custom AI systems from predictive analytics to natural language processing that help you unlock new possibilities.
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
                How We Implement AI
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
              <Brain className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Ready to Harness AI?
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Let's explore how AI can transform your business operations.
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
