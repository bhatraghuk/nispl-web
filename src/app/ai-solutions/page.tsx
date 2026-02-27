'use client'

import Link from 'next/link'
import { ArrowRight, Brain, Zap, Shield, BarChart3, Globe, Database, Code, Target, Layers, CheckCircle2, Cpu } from 'lucide-react'
import { Button } from '@/components/ui/cta-button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import PageWrapper from '@/components/page-wrapper'
import FadeIn from '@/components/animations/fade-in'
import StaggeredChildren from '@/components/animations/staggered-children'

export default function AISolutions() {
  const capabilities = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Custom ML models trained on your data to deliver accurate predictions and insights.',
      items: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Deep Neural Networks'],
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Forecast trends, optimize operations, and make data-driven decisions with confidence.',
      items: ['Time Series Forecasting', 'Anomaly Detection', 'Risk Assessment', 'Churn Prediction'],
    },
    {
      icon: Code,
      title: 'Natural Language Processing',
      description: 'Understand and generate human language at scale with advanced NLP capabilities.',
      items: ['Text Classification', 'Sentiment Analysis', 'Named Entity Recognition', 'Language Translation'],
    },
    {
      icon: Globe,
      title: 'Computer Vision',
      description: 'Extract meaningful insights from images and videos with state-of-the-art vision models.',
      items: ['Object Detection', 'Image Classification', 'Facial Recognition', 'OCR & Document Analysis'],
    },
  ]

  const useCases = [
    {
      industry: 'Healthcare',
      icon: '🏥',
      useCases: [
        'Medical image analysis & diagnosis',
        'Predictive patient outcomes',
        'Drug discovery optimization',
        'Automated medical coding',
      ],
    },
    {
      industry: 'Finance',
      icon: '💰',
      useCases: [
        'Fraud detection & prevention',
        'Algorithmic trading',
        'Credit risk assessment',
        'Customer churn prediction',
      ],
    },
    {
      industry: 'E-Commerce',
      icon: '🛒',
      useCases: [
        'Personalized recommendations',
        'Demand forecasting',
        'Dynamic pricing',
        'Visual search',
      ],
    },
    {
      industry: 'Manufacturing',
      icon: '🏭',
      useCases: [
        'Predictive maintenance',
        'Quality control automation',
        'Supply chain optimization',
        'Process optimization',
      ],
    },
    {
      industry: 'Logistics',
      icon: '🚚',
      useCases: [
        'Route optimization',
        'Demand prediction',
        'Fleet management',
        'Warehouse automation',
      ],
    },
    {
      industry: 'Education',
      icon: '🎓',
      useCases: [
        'Personalized learning paths',
        'Automated assessment',
        'Student performance prediction',
        'Content recommendation',
      ],
    },
  ]

  const developmentProcess = [
    {
      icon: Target,
      title: 'Problem Definition',
      description: 'Define clear AI objectives, success metrics, and business impact KPIs.',
    },
    {
      icon: Database,
      title: 'Data Preparation',
      description: 'Collect, clean, and prepare high-quality training datasets for model development.',
    },
    {
      icon: Brain,
      title: 'Model Development',
      description: 'Train and fine-tune custom AI models optimized for your specific use case.',
    },
    {
      icon: Layers,
      title: 'Integration & Deployment',
      description: 'Seamlessly integrate AI models into your existing systems and infrastructure.',
    },
    {
      icon: Zap,
      title: 'Monitoring & Optimization',
      description: 'Continuously monitor model performance and optimize for accuracy and efficiency.',
    },
  ]

  const securityGovernance = [
    {
      title: 'Data Privacy',
      description: 'GDPR-compliant data handling with encryption, anonymization, and access controls.',
      items: ['End-to-end encryption', 'Data anonymization', 'Role-based access', 'Audit logging'],
    },
    {
      title: 'Model Security',
      description: 'Robust model security against adversarial attacks and data poisoning.',
      items: ['Adversarial testing', 'Input validation', 'Model versioning', 'Secure deployment'],
    },
    {
      title: 'Compliance & Ethics',
      description: 'Ethical AI development practices aligned with industry standards and regulations.',
      items: ['Bias detection & mitigation', 'Explainable AI', 'Regulatory compliance', 'Ethical review'],
    },
  ]

  const frameworks = [
    { name: 'TensorFlow', icon: '🔷' },
    { name: 'PyTorch', icon: '🔶' },
    { name: 'Scikit-learn', icon: '🟢' },
    { name: 'OpenAI API', icon: '⚡' },
    { name: 'Hugging Face', icon: '🤗' },
    { name: 'LangChain', icon: '🔗' },
    { name: 'Pinecone', icon: '🌲' },
    { name: 'Vector DB', icon: '📊' },
  ]

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/ai-dashboard.png"
            alt="AI Technology Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>

        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 px-4 py-1.5 bg-primary/10 text-primary border-primary/20">
                Artificial Intelligence Solutions
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                Enterprise AI That <span className="gradient-text">Delivers Results</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Transform your business with custom AI solutions. From machine learning to computer vision, we build intelligent systems that drive measurable outcomes.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Our Capabilities
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Core AI Technologies
              </h2>
              <p className="text-lg text-muted-foreground">
                Cutting-edge AI capabilities tailored to your business needs, built on industry-leading frameworks.
              </p>
            </div>
          </FadeIn>

          <StaggeredChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <Card key={index} className="hover:glow-effect transition-all duration-300 border-border/50 hover:border-primary/30 h-full">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <capability.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{capability.title}</CardTitle>
                  <CardDescription className="text-base">
                    {capability.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {capability.items.map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </StaggeredChildren>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-24 lg:py-32 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Industry Solutions
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                AI Across Every Industry
              </h2>
              <p className="text-lg text-muted-foreground">
                Real-world AI applications solving complex challenges across diverse sectors.
              </p>
            </div>
          </FadeIn>

          <StaggeredChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((industry, index) => (
              <Card key={index} className="hover:glow-effect transition-all duration-300 border-border/50 hover:border-primary/30 h-full">
                <CardHeader>
                  <div className="text-5xl mb-4">{industry.icon}</div>
                  <CardTitle className="text-xl mb-3">{industry.industry}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {industry.useCases.map((useCase, i) => (
                      <li key={i} className="flex items-start text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </StaggeredChildren>
        </div>
      </section>

      {/* AI Development Process */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Our Process
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                AI Development Process
              </h2>
              <p className="text-lg text-muted-foreground">
                A proven methodology for developing and deploying production-ready AI solutions.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {developmentProcess.map((step, index) => (
              <FadeIn key={index} direction="up" delay={index * 0.1}>
                <div className="relative h-full">
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <Card className="h-full pt-8 border-border/50 hover:border-primary/30 transition-colors duration-300">
                    <CardHeader>
                      <step.icon className="h-8 w-8 text-primary mb-3" />
                      <CardTitle className="text-base">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">
                        {step.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Model Deployment Strategy */}
      <section className="py-24 lg:py-32 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  Deployment
                </Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Production-Ready AI Deployment
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We don't just build AI models — we deploy them into production environments where they deliver real business value. Our deployment strategy ensures scalability, reliability, and performance.
                </p>

                <ul className="space-y-4">
                  {[
                    'Cloud-native deployment (AWS, GCP, Azure)',
                    'Containerized models with Docker & Kubernetes',
                    'Real-time and batch inference pipelines',
                    'Auto-scaling infrastructure',
                    'Model monitoring and drift detection',
                    'A/B testing frameworks',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <Card className="border-border/50">
                <CardHeader>
                  <Cpu className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>AI Tech Stack</CardTitle>
                  <CardDescription>
                    Industry-leading frameworks and tools we use to build AI solutions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {frameworks.map((fw, index) => (
                      <div
                        key={index}
                        className="flex items-center p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors duration-300"
                      >
                        <span className="text-xl mr-2">{fw.icon}</span>
                        <span className="font-medium text-sm">{fw.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Data Security & Governance */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Security & Governance
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Trustworthy AI Systems
              </h2>
              <p className="text-lg text-muted-foreground">
                Enterprise-grade security, privacy, and governance built into every AI solution we deliver.
              </p>
            </div>
          </FadeIn>

          <StaggeredChildren className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {securityGovernance.map((section, index) => (
              <Card key={index} className="hover:glow-effect transition-all duration-300 border-border/50 hover:border-primary/30 h-full">
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary mb-3" />
                  <CardTitle className="text-xl mb-2">{section.title}</CardTitle>
                  <CardDescription className="text-base">
                    {section.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </StaggeredChildren>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <Brain className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Ready to Harness the Power of AI?
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Let's discuss how AI can transform your business operations and drive sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg h-auto">
                    Start Your AI Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg h-auto">
                    See AI Case Studies
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
