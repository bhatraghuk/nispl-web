'use client'

import React, { useState } from 'react'
import { Mail, Phone, MapPin, MessageSquare, Send, Clock, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/cta-button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import PageWrapper from '@/components/page-wrapper'
import FadeIn from '@/components/animations/fade-in'
import StaggeredChildren from '@/components/animations/staggered-children'
import { useToast } from '@/hooks/use-toast'

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    // ── Send to Lead Capture webhook ─────────────────────────────
    try {
      await fetch('https://lead.netiquetteinfo.com/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:    formData.name,
          email:   formData.email,
          phone:   formData.phone,
          company: formData.company,
          service: formData.service,
          budget:  formData.budget,
          source:  'Website Contact Form',
          message: formData.message,
        }),
      })
    } catch (webhookErr) {
      console.error('[Lead Capture]', webhookErr)
      // Silent fail — never block the form submission
    }
    // ─────────────────────────────────────────────────────────────

    setIsSubmitting(false)
    setIsSubmitted(true)

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
      variant: "default",
    })

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '', email: '', company: '',
        phone: '', service: '', budget: '', message: '',
      })
      setIsSubmitted(false)
    }, 3000)

  } catch (error) {
    setIsSubmitting(false)
    console.error('Error submitting form:', error)
    toast({
      title: "Error",
      description: "Failed to send message. Please try again.",
      variant: "destructive",
    })
  }
}



  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   setIsSubmitting(true)

  //   try {
  //     const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || ''
  //     const endpoint = webhookUrl || '/api/contact'

  //     const response = await fetch(endpoint, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     })

  //     if (!response.ok) {
  //       throw new Error('Failed to send message')
  //     }

  //     setIsSubmitting(false)
  //     setIsSubmitted(true)

  //     toast({
  //       title: "Message Sent!",
  //       description: "We'll get back to you within 24 hours.",
  //       variant: "default",
  //     })

  //     // Reset form after 3 seconds
  //     setTimeout(() => {
  //       setFormData({
  //         name: '',
  //         email: '',
  //         company: '',
  //         phone: '',
  //         service: '',
  //         budget: '',
  //         message: '',
  //       })
  //       setIsSubmitted(false)
  //     }, 3000)
  //   } catch (error) {
  //     setIsSubmitting(false)
  //     console.error('Error submitting form:', error)

  //     toast({
  //       title: "Error",
  //       description: "Failed to send message. Please try again.",
  //       variant: "destructive",
  //     })
  //   }
  // }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@netiquette.in',
      link: 'mailto:info@netiquette.in',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 97024 84712',
      link: 'tel:+919702484712',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mumbai, India',
      link: null,
    },
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      value: '+91 97024 84712',
      link: 'https://wa.me/919702484712',
    },
  ]

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM IST' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM IST' },
    { day: 'Sunday', hours: 'Closed' },
  ]

  const services = [
    'AI & Machine Learning',
    'Web Development',
    'Mobile App Development',
    'Enterprise Solutions',
    'Consulting',
    'Other',
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
                Contact Us
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                Let’s Start a <span className="gradient-text">Conversation</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Tell us about your requirements, and we’ll respond with clarity and direction.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <FadeIn direction="left">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription className="text-base">
                    We’d love to understand your project, challenges, or goals. Share a few details, and our team will get back to you shortly.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@company.com"
                          className="bg-background"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="bg-background"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service *</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 rounded-md border border-input bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="">Select a service</option>
                        {services.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget</Label>
                      <Input
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        placeholder="Estimated budget (e.g. $10k - $50k)"
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your project, goals, and timeline..."
                        rows={6}
                        className="bg-background resize-none"
                      />
                    </div>

                    {isSubmitted && (
                      <div className="flex items-center gap-2 text-sm text-primary">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>Message sent successfully! We'll be in touch soon.</span>
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      variant="gradient"
                      className="w-full h-14 text-base"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="mr-2">Sending...</span>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn direction="right" delay={0.2}>
              <div className="space-y-6">
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-xl">Contact Information</CardTitle>
                    <CardDescription>
                      Reach out to us through any of these channels
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div key={index}>
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <info.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-muted-foreground mb-1">
                              {info.label}
                            </p>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="text-foreground hover:text-primary transition-colors"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-foreground">{info.value}</p>
                            )}
                          </div>
                        </div>
                        {index < contactInfo.length - 1 && <div className="mt-4 border-t border-border/50" />}
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <CardTitle className="text-xl">Office Hours</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {officeHours.map((schedule, index) => (
                        <li key={index} className="flex justify-between items-center">
                          <span className="text-muted-foreground">{schedule.day}</span>
                          <span className="font-medium">{schedule.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                FAQ
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
            </div>
          </FadeIn>

          <StaggeredChildren className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                question: 'What industries do you serve?',
                answer: 'We work across healthcare, finance, e-commerce, manufacturing, logistics, education, and more. Our AI and digital solutions are adaptable to any industry.',
              },
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary based on complexity. A simple website may take 4-8 weeks, while enterprise AI solutions typically take 3-6 months. We provide detailed timelines during the discovery phase.',
              },
              {
                question: 'Do you offer ongoing support and maintenance?',
                answer: 'Yes, we offer comprehensive support and maintenance packages to ensure your systems run smoothly after launch. This includes bug fixes, updates, and performance optimization.',
              },
              {
                question: 'What is your pricing model?',
                answer: 'We offer flexible pricing models including fixed-price projects, time & materials, and dedicated team engagements. We provide detailed quotes after understanding your requirements.',
              },
              {
                question: 'Do you sign NDAs?',
                answer: 'Absolutely. We take confidentiality seriously and are happy to sign NDAs before discussing your project details.',
              },
              {
                question: 'Can you work with our existing team?',
                answer: 'Yes, we can collaborate seamlessly with your in-house team, providing expertise and additional capacity as needed. We adapt to your workflows and tools.',
              },
            ].map((faq, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/30 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-lg mb-2">{faq.question}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {faq.answer}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </StaggeredChildren>
        </div>
      </section>
    </PageWrapper>
  )
}
