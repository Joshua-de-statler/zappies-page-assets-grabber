import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Target, MessageSquare, TrendingUp, BarChart3, ClipboardList, Video, CheckCircle, Star, Quote } from "lucide-react";
import Navigation from "@/components/Navigation";
import TrustBar from "@/components/TrustBar";
import ValueCard from "@/components/ValueCard";
import ProcessStep from "@/components/ProcessStep";
import AuditForm from "@/components/AuditForm";
import StickyCallToAction from "@/components/StickyCallToAction";
import heroImage from "@/assets/hero-ai-chat.jpg";
import dashboardImage from "@/assets/dashboard-metrics.jpg";
import aiTechnologyImage from "@/assets/ai-technology.jpg";
import revenueGrowthImage from "@/assets/revenue-growth.jpg";
import dataAnalyticsImage from "@/assets/data-analytics.jpg";
import socialProofImage from "@/assets/social-proof.jpg";

const Index = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('audit-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const valuePoints = [
    {
      icon: Target,
      title: "Pinpoint where leads drop off",
      description: "Get a detailed analysis of your conversion funnel to identify exactly where potential customers are falling through the cracks."
    },
    {
      icon: MessageSquare,
      title: "Fix broken messaging & timing",
      description: "Discover the messaging gaps and timing issues that are costing you sales, with specific recommendations for improvement."
    },
    {
      icon: TrendingUp,
      title: "Double your conversion without increasing ad spend",
      description: "Learn proven strategies to dramatically improve your conversion rates using your existing traffic and leads."
    },
    {
      icon: Video,
      title: "Receive a custom video breakdown",
      description: "Get a personalized 10-15 minute video audit showing exactly what to fix and how to implement the changes."
    }
  ];

  const processSteps = [
    {
      icon: ClipboardList,
      title: "Submit Your Details",
      description: "Tell us about your business, website, and biggest conversion challenges in our simple form."
    },
    {
      icon: BarChart3,
      title: "We Analyze Your Funnel",
      description: "Our AI-powered tools and expert team analyze your entire conversion process and identify leak points."
    },
    {
      icon: Video,
      title: "Get Your Custom Video",
      description: "Receive a personalized video audit with specific action steps to fix your conversion problems."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechStart Solutions",
      role: "CEO",
      content: "Zappies AI found conversion leaks we didn't even know existed. We increased our lead-to-customer rate by 73% in just 6 weeks. The video audit was incredibly detailed and actionable.",
      rating: 5,
      revenue: "$127K additional revenue"
    },
    {
      name: "Marcus Rodriguez",
      company: "GrowthMaster Agency",
      role: "Marketing Director",
      content: "The insights were mind-blowing. They identified 3 critical points where we were losing qualified leads. After implementing their recommendations, our conversion rate doubled.",
      rating: 5,
      revenue: "2.3x conversion rate increase"
    },
    {
      name: "Jennifer Walsh",
      company: "E-commerce Plus",
      role: "Founder",
      content: "I was skeptical about another 'free audit' but this exceeded all expectations. The team found issues our expensive consultants missed and gave us a clear roadmap to success.",
      rating: 5,
      revenue: "$89K saved in ad spend"
    },
    {
      name: "David Kim",
      company: "SaaS Solutions Inc",
      role: "Growth Manager",
      content: "The AI-powered analysis was incredibly thorough. We went from 2.1% to 4.8% conversion rate in 8 weeks. The video explanation made it easy for our entire team to understand and implement.",
      rating: 5,
      revenue: "128% revenue growth"
    }
  ];

  const faqItems = [
    {
      question: "How long does the audit take?",
      answer: "Our team typically completes your audit within 24-48 hours of receiving your submission. Complex funnels may take up to 72 hours."
    },
    {
      question: "What exactly do I get in the audit?",
      answer: "You'll receive a 10-15 minute personalized video audit showing exactly where your funnel is losing money, specific recommendations for improvement, and a prioritized action plan."
    },
    {
      question: "Is this really free?",
      answer: "Yes, absolutely! This is our way of demonstrating our expertise and building relationships with serious business owners who are committed to growth."
    },
    {
      question: "What if I don't have a website or funnel yet?",
      answer: "No problem! We can analyze your current marketing approach and provide recommendations for setting up a high-converting funnel from scratch."
    },
    {
      question: "How detailed is the analysis?",
      answer: "Very detailed. We analyze your entire customer journey, from initial contact to final conversion, identifying specific bottlenecks and providing actionable solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground font-heading leading-tight">
                  Stop Losing 67% of Your Qualified Leads
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Get a free AI-powered audit that reveals exactly where your funnel is bleeding money and how to fix it in the next 30 days.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button onClick={scrollToForm} variant="cta" size="lg">
                  🎥 Get Free Audit Worth $2,500
                </Button>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>No credit card required</span>
                </div>
              </div>
              
              <div className="flex items-center gap-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">1,200+</div>
                  <div className="text-sm text-muted-foreground">Businesses Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">$50M+</div>
                  <div className="text-sm text-muted-foreground">Revenue Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">82%</div>
                  <div className="text-sm text-muted-foreground">Avg. Conversion Lift</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="AI-powered conversion optimization dashboard" 
                className="rounded-lg shadow-large w-full"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Value Proposition Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground font-heading mb-4">
              Discover What's Costing You Thousands in Lost Revenue
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI-powered audit identifies the hidden conversion killers in your funnel and provides a step-by-step plan to fix them.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valuePoints.map((point, index) => (
              <ValueCard key={index} {...point} />
            ))}
          </div>
          
          {/* CTA after value proposition */}
          <div className="text-center mt-16">
            <Button onClick={scrollToForm} variant="cta" size="lg" className="mb-4">
              🎥 Get Your Free Audit Now - Worth $2,500
            </Button>
            <p className="text-sm text-muted-foreground">
              Join 1,200+ businesses that increased revenue by 82%
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Section - Join our 1200+ businesses with Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground font-heading mb-4">
              Join our 1,200+ businesses that increased their revenue by 82%
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See what our clients are saying about their transformation
            </p>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-medium hover:shadow-large transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                    <p className="text-muted-foreground italic leading-relaxed pl-6">
                      "{testimonial.content}"
                    </p>
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <p className="text-sm font-medium text-primary">{testimonial.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-green-600">{testimonial.revenue}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Results Stats */}
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">$50M+</div>
              <div className="text-muted-foreground">Revenue Generated</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">24-48hrs</div>
              <div className="text-muted-foreground">Audit Turnaround</div>
            </div>
          </div>
          
          {/* CTA after testimonials */}
          <div className="text-center mt-16">
            <Button onClick={scrollToForm} variant="cta" size="lg" className="mb-4">
              💰 Get My Revenue Audit - Free
            </Button>
            <p className="text-sm text-muted-foreground">
              Ready to join our success stories? Get started now.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground font-heading mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Get your personalized audit in 3 simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {processSteps.map((step, index) => (
              <ProcessStep key={index} step={index + 1} {...step} />
            ))}
          </div>
          
          {/* CTA after process steps */}
          <div className="text-center mt-16">
            <Button onClick={scrollToForm} variant="cta" size="lg" className="mb-4">
              🚀 Start Your Free Audit Today
            </Button>
            <p className="text-sm text-muted-foreground">
              Ready in 24-48 hours • No strings attached
            </p>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-heading mb-6">
                See exactly what you're missing with our AI-powered analysis
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Conversion Bottleneck Detection</h3>
                    <p className="text-muted-foreground">Identify exactly where potential customers abandon your funnel</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Messaging Optimization</h3>
                    <p className="text-muted-foreground">Discover what messaging resonates with your audience</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Revenue Recovery Plan</h3>
                    <p className="text-muted-foreground">Get a step-by-step plan to recover lost revenue</p>
                  </div>
                </div>
              </div>
              
              {/* CTA in proof section */}
              <div className="mt-8">
                <Button onClick={scrollToForm} variant="cta" size="lg" className="mb-3">
                  🎯 Claim Your Free Revenue Audit
                </Button>
                <p className="text-sm text-muted-foreground">
                  See exactly what's costing you money
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={dashboardImage} 
                alt="Conversion analytics dashboard" 
                className="rounded-lg shadow-large w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-heading mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our free audit process
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          {/* CTA after FAQ */}
          <div className="text-center mt-16">
            <Button onClick={scrollToForm} variant="cta" size="lg" className="mb-4">
              ✅ Get Started - Free Audit Available Now
            </Button>
            <p className="text-sm text-muted-foreground">
              All questions answered? Let's get your audit started.
            </p>
          </div>
        </div>
      </section>

      <AuditForm />

      {/* Sticky CTA for Mobile */}
      <StickyCallToAction>
        <Button onClick={scrollToForm} variant="cta" className="w-full shadow-large">
          🎥 Get Free Audit
        </Button>
      </StickyCallToAction>
    </div>
  );
};

export default Index;