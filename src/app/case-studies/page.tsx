'use client'

import Link from 'next/link'
import { ArrowRight, TrendingUp, Users, Clock, CheckCircle2, BarChart3, Smartphone, Globe, Zap, Award } from 'lucide-react'
import { Button } from '@/components/ui/cta-button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import PageWrapper from '@/components/page-wrapper'
import FadeIn from '@/components/animations/fade-in'
import StaggeredChildren from '@/components/animations/staggered-children'

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      industry: 'FinTech',
      icon: '💰',
      title: 'AI-Powered Analytics Platform',
      client: 'FinTech Startup',
      problem: 'A rapidly growing FinTech startup needed to transform raw transaction data into actionable insights for their users. Their existing solution was slow, manual, and couldn\'t scale.',
      aiUsed: ['Predictive Analytics', 'Machine Learning', 'Data Visualization'],
      implementation: 'Built a real-time analytics platform with ML models that predict spending patterns, identify fraud, and provide personalized financial recommendations.',
      results: [
        '340% increase in user engagement',
        '65% reduction in fraud incidents',
        '2M+ transactions processed daily',
        '99.9% system uptime',
      ],
      image: '/images/case-study-1.png',
      technologies: ['Python', 'TensorFlow', 'Next.js', 'PostgreSQL', 'Redis'],
    },
    {
      id: 2,
      industry: 'Banking',
      icon: '🏦',
      title: 'Enterprise Mobile Banking App',
      client: 'Leading Bank',
      problem: 'A traditional bank needed to digitize their services with a secure, user-friendly mobile app that could compete with neo-banks while maintaining enterprise-grade security.',
      aiUsed: ['Computer Vision', 'Biometric Authentication', 'Anomaly Detection'],
      implementation: 'Developed a feature-rich mobile banking application with AI-powered fraud detection, secure biometric authentication, and personalized financial insights.',
      results: [
        '2M+ active users within 12 months',
        '4.8/5 App Store rating',
        '99.99% uptime across 3 regions',
        '45% increase in digital transactions',
      ],
      image: '/images/case-study-2.png',
      technologies: ['React Native', 'Node.js', 'TensorFlow', 'AWS', 'Firebase'],
    },
    {
      id: 3,
      industry: 'E-Commerce',
      icon: '🛒',
      title: 'Smart Recommendation Engine',
      client: 'Retail Giant',
      problem: 'An e-commerce platform with 50K+ products struggled to show relevant products to customers, resulting in low conversion rates and cart abandonment.',
      aiUsed: ['Collaborative Filtering', 'Deep Learning', 'Natural Language Processing'],
      implementation: 'Built an AI-powered recommendation engine that analyzes user behavior, product attributes, and purchase history to deliver hyper-personalized product suggestions.',
      results: [
        '280% increase in conversion rate',
        '45% higher average order value',
        '3.2x improvement in click-through rate',
        'Reduced cart abandonment by 60%',
      ],
      image: '/images/tech-abstract.png',
      technologies: ['Python', 'PyTorch', 'TensorFlow', 'Redis', 'Kubernetes'],
    },
    {
      id: 4,
      industry: 'Healthcare',
      icon: '🏥',
      title: 'AI Diagnostic Assistant',
      client: 'Healthcare Provider',
      problem: 'A healthcare network needed to reduce diagnostic time and improve accuracy for common conditions while maintaining doctor oversight.',
      aiUsed: ['Computer Vision', 'Deep Learning', 'Medical AI'],
      implementation: 'Developed an AI diagnostic assistant that analyzes medical images and patient data to provide preliminary diagnoses, helping doctors make faster, more accurate decisions.',
      results: [
        '50% reduction in diagnostic time',
        '92% accuracy in preliminary diagnoses',
        'Improved patient throughput by 70%',
        'Reduced false negatives by 40%',
      ],
      image: '/images/ai-dashboard.png',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'AWS', 'Docker'],
    },
    {
      id: 5,
      industry: 'Logistics',
      icon: '🚚',
      title: 'Intelligent Route Optimization',
      client: 'Logistics Company',
      problem: 'A logistics company operating 500+ vehicles needed to optimize delivery routes in real-time considering traffic, weather, and delivery windows.',
      aiUsed: ['Reinforcement Learning', 'Predictive Analytics', 'Geospatial AI'],
      implementation: 'Built an intelligent routing system using reinforcement learning that continuously optimizes routes based on real-time conditions and learns from historical data.',
      results: [
        '35% reduction in fuel costs',
        '25% improvement in on-time deliveries',
        '15% increase in daily deliveries per vehicle',
        'Reduced driver overtime by 40%',
      ],
      image: '/images/hero-bg.png',
      technologies: ['Python', 'TensorFlow', 'PostGIS', 'Node.js', 'Redis'],
    },
    {
      id: 6,
      industry: 'Manufacturing',
      icon: '🏭',
      title: 'Predictive Maintenance System',
      client: 'Manufacturing Enterprise',
      problem: 'A manufacturing facility faced frequent equipment failures leading to unplanned downtime and significant production losses.',
      aiUsed: ['Time Series Analysis', 'Anomaly Detection', 'IoT Analytics'],
      implementation: 'Implemented a predictive maintenance system that monitors equipment sensors, predicts failures before they occur, and schedules maintenance proactively.',
      results: [
        '80% reduction in unplanned downtime',
        '65% decrease in maintenance costs',
        'Extended equipment life by 30%',
        'Improved production yield by 15%',
      ],
      image: '/images/service-web.png',
      technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'AWS IoT', 'PostgreSQL'],
    },
  ]

  const metrics = [
    { icon: TrendingUp, value: '95%', label: 'Client Satisfaction' },
    { icon: Users, value: '50+', label: 'Projects Completed' },
    { icon: Globe, value: '15', label: 'Industries Served' },
    { icon: Award, value: '8', label: 'Years Experience' },
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
                Case Studies
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                Real Results, <span className="gradient-text">Real Impact</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover how we've helped enterprises and startups achieve their digital transformation goals with AI-powered solutions.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StaggeredChildren className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <metric.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {metric.value}
                </div>
                <p className="text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </StaggeredChildren>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Our Work
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground">
                Explore how we've solved complex challenges and delivered measurable business outcomes.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <FadeIn key={study.id} direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 0.1}>
                <Card className="overflow-hidden hover:glow-effect transition-all duration-300 border-border/50 hover:border-primary/30 h-full flex flex-col">
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">
                        {study.industry}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{study.icon}</span>
                      <span className="text-sm text-muted-foreground">{study.client}</span>
                    </div>
                    <CardTitle className="text-xl mb-2">{study.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {study.problem}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center">
                        <Zap className="h-4 w-4 text-primary mr-2" />
                        AI Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {study.aiUsed.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center">
                        <BarChart3 className="h-4 w-4 text-primary mr-2" />
                        Key Results
                      </h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <CheckCircle2 className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center">
                        <Globe className="h-4 w-4 text-primary mr-2" />
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full group">
                      View Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve similar results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg h-auto">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg h-auto">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageWrapper>
  )
}
