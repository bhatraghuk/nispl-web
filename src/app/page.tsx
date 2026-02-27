'use client'

import Link from 'next/link'
import { ArrowRight, Cpu, Brain, Code2, Smartphone, Globe, Zap, Shield, Users, TrendingUp, Award, CheckCircle2, ChevronRight, HeartPulse, Building2, Truck, GraduationCap, ShoppingBag, Search, Layout, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/cta-button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import PageWrapper from '@/components/page-wrapper'
import FadeIn from '@/components/animations/fade-in'
import StaggeredChildren from '@/components/animations/staggered-children'
import Counter from '@/components/animations/counter'
import ParticleBackground from '@/components/particle-background'

export default function Home() {
  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'High-performance corporate and product websites built with clarity, speed, and security in mind.',
    },
    {
      icon: Cpu,
      title: 'Web Application Development',
      description: 'Custom platforms, dashboards, portals, and SaaS systems designed to handle real-world complexity.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Application Development',
      description: 'User-friendly mobile applications built for performance and seamless backend integration.',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning Solutions',
      description: 'Practical AI systems — from automation and analytics to predictive models — designed to improve decision-making and efficiency.',
    },
  ]

  const approaches = [
    {
      icon: Search,
      title: 'Understand Your Business',
      description: 'We start by understanding your operations, constraints, and goals.',
    },
    {
      icon: Layout,
      title: 'Design with Clarity',
      description: 'Architecture first. Clean structure. Scalable foundation.',
    },
    {
      icon: Shield,
      title: 'Build with Discipline',
      description: 'Secure coding standards. Clean integrations. Documented systems.',
    },
    {
      icon: Rocket,
      title: 'Deploy with Confidence',
      description: 'Stable rollouts, testing, and ongoing support.',
    },
  ]

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Honest Relationships',
      description: 'Transparency builds trust. We communicate openly, set clear expectations, and deliver on our promises.',
    },
    {
      icon: TrendingUp,
      title: 'Reliable Delivery',
      description: 'Consistent performance you can count on. We meet deadlines, hit milestones, and exceed expectations.',
    },
    {
      icon: Shield,
      title: 'Clear Communication',
      description: 'No surprises. Regular updates, honest feedback, and straightforward conversations throughout your project.',
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'We never compromise on quality. Every line of code, every design choice, every feature matters.',
    },
    {
      icon: Zap,
      title: 'Client-Focused',
      description: 'Your success is our priority. We listen, adapt, and go beyond to ensure you achieve your goals.',
    },
    {
      icon: Globe,
      title: 'Long-Term Partners',
      description: 'We don\'t just ship projects. We build partnerships that last and systems that scale with your growth.',
    },
  ]

  const industries = [
    { name: 'Healthcare', icon: HeartPulse },
    { name: 'Finance', icon: TrendingUp },
    { name: 'E-commerce', icon: ShoppingBag },
    { name: 'Manufacturing', icon: Building2 },
    { name: 'Logistics', icon: Truck },
    { name: 'Education', icon: GraduationCap },
  ]

  const metrics = [
    { value: 150, label: 'Projects Delivered', suffix: '+' },
    { value: 50, label: 'Happy Clients', suffix: '+' },
    { value: 8, label: 'Years Experience', suffix: '+' },
    { value: 95, label: 'Client Retention', suffix: '%' },
  ]

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Particle Background */}
        <div className="absolute inset-0 z-0">
          <ParticleBackground />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/30 via-background/60 to-background pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn direction="none">
              <Badge className="mb-6 px-4 py-1.5 text-foreground border-border/50 bg-muted/50 backdrop-blur-sm">
                Complex Challenges, Elegant Solutions
              </Badge>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground">
                The Intelligent Way to
                <br />
                Solve Your Hardest Problems
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                From operational inefficiencies to untapped data insights, we architect AI systems that turn your biggest challenges into your greatest competitive advantages.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <Button size="xl" variant="glass" className="rounded-lg">
                    Solve Your Challenge
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="xl" variant="outline" className="rounded-lg">
                    View Solutions
                  </Button>
                </Link>
              </div>
            </FadeIn>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
              <ChevronRight className="h-6 w-6 rotate-90 text-muted-foreground" />
            </div>
          </div>
        </div>
      </section>

      {/* AI Positioning Section */}
      <section className="py-24 lg:py-32 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-muted/50 text-foreground border-border">
                Who We Are
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Technology should solve real problems <br />— not create new ones.
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Netiquette Info Solutions, we partner with businesses to design systems that are practical, scalable, and built for long-term growth. Whether it's a web platform, a mobile application, or an AI-driven solution, our focus is simple: build technology that works reliably and delivers measurable value.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We don't just develop software.
                We build digital infrastructure that supports real operations.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-muted/50 text-foreground border-border">
                How We Help
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Service Offerings
              </h2>
              <p className="text-lg text-muted-foreground">
                We build technology that solves real problems and delivers measurable outcomes. From initial concept to ongoing support, we focus on what matters: systems that work reliably.
              </p>
            </div>
          </FadeIn>

          <StaggeredChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:glow-effect transition-all duration-300 border-border/50 hover:border-accent/30 cursor-pointer h-full">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-muted/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-7 w-7 text-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </StaggeredChildren>

          <FadeIn direction="up" delay={0.3}>
            <div className="text-center mt-12">
              <Link href="/services">
                <Button size="lg" variant="outline" className="rounded-full group">
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 lg:py-32 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-muted/50 text-foreground border-border">
                Our Approach
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                How We Work
              </h2>
              <p className="text-lg text-muted-foreground">
                A structured approach to building reliable, scalable solutions that deliver real value.
              </p>
            </div>
          </FadeIn>

          <StaggeredChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approaches.map((approach, index) => (
              <Card key={index} className="group hover:glow-effect transition-all duration-300 border-border/50 hover:border-accent/30 cursor-pointer h-full">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-muted/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <approach.icon className="h-7 w-7 text-foreground" />
                  </div>
                  <CardTitle className="text-xl">{approach.title}</CardTitle>
                  <CardDescription className="text-base">
                    {approach.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </StaggeredChildren>
        </div>
      </section>

      {/* Why Netiquette */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-muted/50 text-foreground border-border">
                Why Netiquette
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Built on Trust, Delivered with Excellence
              </h2>
              <p className="text-lg text-muted-foreground">
                You need partners who show up, do great work, and communicate clearly. That's who we are and how we've earned our reputation.
              </p>
            </div>
          </FadeIn>

          <StaggeredChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((feature, index) => (
              <Card key={index} className="group hover:glow-effect transition-all duration-300 border-border/50 hover:border-accent/30 h-full">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-muted/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-7 w-7 text-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </StaggeredChildren>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-24 lg:py-32 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-muted/50 text-foreground border-border">
                Industry Expertise
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Trusted Across Industries
              </h2>
              <p className="text-lg text-muted-foreground">
                We deliver specialized AI and digital solutions tailored to your industry's unique challenges.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12 py-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 md:gap-3 hover:scale-110 transition-transform duration-300 cursor-pointer group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-muted/50 group-hover:bg-accent/20 transition-colors duration-300">
                    <industry.icon className="h-5 w-5 md:h-6 md:w-6 text-foreground group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <p className="text-xs md:text-sm font-medium text-foreground whitespace-nowrap">
                    {industry.name}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Case Studies Preview */}
      {/* <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-muted/50 text-foreground border-border">
                Success Stories
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Real Results, Real Impact
              </h2>
              <p className="text-lg text-muted-foreground">
                See how we've helped enterprises and startups achieve their digital transformation goals.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FadeIn direction="left" delay={0.1}>
              <Card className="overflow-hidden hover:glow-effect transition-all duration-300 border-border/50 hover:border-accent/30 h-full">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="/images/case-study-1.png"
                    alt="SaaS Analytics Platform"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge>FinTech</Badge>
                    <Badge variant="outline">Analytics</Badge>
                  </div>
                  <CardTitle>SaaS Analytics Platform</CardTitle>
                  <CardDescription>
                    Built an AI-powered analytics dashboard that helped a FinTech startup increase user engagement by 340%.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/case-studies">
                    <Button variant="ghost" className="group">
                      Read Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <Card className="overflow-hidden hover:glow-effect transition-all duration-300 border-border/50 hover:border-accent/30 h-full">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="/images/case-study-2.png"
                    alt="Mobile Banking App"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge>Banking</Badge>
                    <Badge variant="outline">Mobile App</Badge>
                  </div>
                  <CardTitle>Enterprise Mobile Banking App</CardTitle>
                  <CardDescription>
                    Delivered a secure, AI-enhanced mobile banking experience for 2M+ users with 99.9% uptime.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/case-studies">
                    <Button variant="ghost" className="group">
                      Read Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.3}>
            <div className="text-center">
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="rounded-full group">
                  View All Case Studies
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section> */}

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-accent/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                Let's Build Something Together
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                You know your business. We know technology. Together, we can build systems that work. No unnecessary solutions. Just systems that scale with your growth.
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
