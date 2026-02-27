'use client'

import { Code2, Server, Brain, Cloud, Shield, Zap, Database, Globe, LayoutTemplate } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import FadeIn from '@/components/animations/fade-in'

export default function TechnologySection() {
  const categories = [
    {
      id: 'frontend',
      icon: LayoutTemplate,
      title: 'Frontend',
      description: 'Modern, responsive user interfaces built with cutting-edge frameworks.',
      technologies: [
        { name: 'Next.js 16', category: 'Framework', level: 'Expert' },
        { name: 'React 19', category: 'Library', level: 'Expert' },
        { name: 'TypeScript 5', category: 'Language', level: 'Expert' },
        { name: 'Tailwind CSS 4', category: 'Styling', level: 'Expert' },
        { name: 'Framer Motion', category: 'Animation', level: 'Advanced' },
        { name: 'Zustand', category: 'State Management', level: 'Advanced' },
        { name: 'TanStack Query', category: 'Data Fetching', level: 'Advanced' },
        { name: 'shadcn/ui', category: 'UI Components', level: 'Expert' },
      ],
    },
    {
      id: 'backend',
      icon: Server,
      title: 'Backend',
      description: 'Scalable, secure server-side solutions built for performance.',
      technologies: [
        { name: 'Node.js', category: 'Runtime', level: 'Expert' },
        { name: 'Python', category: 'Language', level: 'Expert' },
        { name: 'Next.js API Routes', category: 'API Framework', level: 'Expert' },
        { name: 'Express.js', category: 'Framework', level: 'Advanced' },
        { name: 'FastAPI', category: 'Framework', level: 'Advanced' },
        { name: 'REST APIs', category: 'Architecture', level: 'Expert' },
        { name: 'GraphQL', category: 'API Protocol', level: 'Advanced' },
        { name: 'WebSocket', category: 'Real-time', level: 'Advanced' },
      ],
    },
    {
      id: 'ai-ml',
      icon: Brain,
      title: 'AI & ML',
      description: 'State-of-the-art artificial intelligence and machine learning frameworks.',
      technologies: [
        { name: 'TensorFlow', category: 'ML Framework', level: 'Expert' },
        { name: 'PyTorch', category: 'ML Framework', level: 'Expert' },
        { name: 'Scikit-learn', category: 'ML Library', level: 'Expert' },
        { name: 'OpenAI API', category: 'LLM Integration', level: 'Advanced' },
        { name: 'Hugging Face', category: 'NLP Models', level: 'Expert' },
        { name: 'LangChain', category: 'LLM Framework', level: 'Advanced' },
        { name: 'Pinecone', category: 'Vector Database', level: 'Advanced' },
        { name: 'OpenCV', category: 'Computer Vision', level: 'Advanced' },
      ],
    },
    {
      id: 'cloud-devops',
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Enterprise cloud infrastructure and DevOps best practices.',
      technologies: [
        { name: 'AWS', category: 'Cloud Provider', level: 'Expert' },
        { name: 'Google Cloud', category: 'Cloud Provider', level: 'Advanced' },
        { name: 'Azure', category: 'Cloud Provider', level: 'Advanced' },
        { name: 'Docker', category: 'Containerization', level: 'Expert' },
        { name: 'Kubernetes', category: 'Orchestration', level: 'Expert' },
        { name: 'CI/CD Pipelines', category: 'Automation', level: 'Expert' },
        { name: 'Terraform', category: 'IaC', level: 'Advanced' },
        { name: 'GitHub Actions', category: 'CI/CD', level: 'Expert' },
      ],
    },
    {
      id: 'databases',
      icon: Database,
      title: 'Databases',
      description: 'Robust database solutions for structured and unstructured data.',
      technologies: [
        { name: 'PostgreSQL', category: 'Relational', level: 'Expert' },
        { name: 'MySQL', category: 'Relational', level: 'Expert' },
        { name: 'MongoDB', category: 'NoSQL', level: 'Expert' },
        { name: 'Redis', category: 'Cache', level: 'Expert' },
        { name: 'Prisma', category: 'ORM', level: 'Expert' },
        { name: 'Pinecone', category: 'Vector DB', level: 'Advanced' },
        { name: 'Elasticsearch', category: 'Search', level: 'Advanced' },
        { name: 'TimescaleDB', category: 'Time Series', level: 'Intermediate' },
      ],
    },
    {
      id: 'security',
      icon: Shield,
      title: 'Security & Auth',
      description: 'Enterprise-grade security and authentication solutions.',
      technologies: [
        { name: 'NextAuth.js', category: 'Auth Framework', level: 'Expert' },
        { name: 'OAuth 2.0', category: 'Protocol', level: 'Expert' },
        { name: 'JWT', category: 'Token', level: 'Expert' },
        { name: 'HTTPS/TLS', category: 'Encryption', level: 'Expert' },
        { name: 'SOC 2 Compliance', category: 'Standard', level: 'Expert' },
        { name: 'GDPR Compliance', category: 'Standard', level: 'Expert' },
        { name: 'Rate Limiting', category: 'Security', level: 'Expert' },
        { name: 'Input Validation', category: 'Security', level: 'Expert' },
      ],
    },
  ]

  const principles = [
    {
      icon: Zap,
      title: 'Modern',
      description: 'We use the latest stable versions of frameworks and tools.',
    },
    {
      icon: Shield,
      title: 'Secure',
      description: 'Security embedded in every layer of our tech stack.',
    },
    {
      icon: Code2,
      title: 'Scalable',
      description: 'Technology choices prioritize horizontal scalability.',
    },
    {
      icon: Globe,
      title: 'Future-Proof',
      description: 'Strong community support and long-term viability.',
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-primary text-primary-foreground'
      case 'Advanced':
        return 'bg-primary/80 text-primary-foreground'
      case 'Intermediate':
        return 'bg-primary/60 text-primary-foreground'
      default:
        return 'bg-secondary text-secondary-foreground'
    }
  }

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Our Technology Stack
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Modern, Secure, <span className="gradient-text">Scalable</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              A carefully curated technology stack optimized for performance, security, and developer productivity.
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12">
            {principles.map((principle, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-muted/30 hover:bg-primary/5 transition-colors duration-300">
                <principle.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-base mb-1">{principle.title}</h3>
                <p className="text-sm text-muted-foreground">{principle.description}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <Tabs defaultValue="frontend" className="w-full">
            {/* Modern Pill-style Tabs */}
            <div className="mb-8 overflow-x-auto scrollbar-hide">
              <TabsList className="inline-flex h-auto p-1.5 bg-muted/50 backdrop-blur-sm rounded-2xl shadow-sm min-w-max sm:min-w-0">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 data-[state=active]:bg-background data-[state=active]:shadow-lg data-[state=active]:scale-105 data-[state=active]:text-primary hover:bg-background/80 hover:scale-102 whitespace-nowrap"
                  >
                    <category.icon className="h-5 w-5" />
                    <span>{category.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <Card className="border-border/50 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="bg-gradient-to-r from-muted/30 to-muted/10 pb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 shadow-inner">
                        <category.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl sm:text-3xl mb-2">{category.title}</CardTitle>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {category.technologies.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="flex items-center justify-between p-4 rounded-xl bg-background border border-border/40 hover:border-primary/40 hover:bg-primary/5 hover:shadow-md transition-all duration-300 group"
                        >
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-base truncate group-hover:text-primary transition-colors">{tech.name}</h4>
                            <p className="text-xs text-muted-foreground mt-0.5">{tech.category}</p>
                          </div>
                          <Badge className={getLevelColor(tech.level) + ' text-xs ml-3 flex-shrink-0 px-2.5 py-1 rounded-full'}>
                            {tech.level}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </FadeIn>
      </div>
    </section>
  )
}
