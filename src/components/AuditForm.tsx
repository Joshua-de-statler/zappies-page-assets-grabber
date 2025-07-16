import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AuditForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    website: "",
    struggle: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Audit Request Submitted! 🎉",
      description: "We'll send your personalized video audit within 24-48 hours.",
    });

    setIsSubmitting(false);
    setFormData({ fullName: "", email: "", website: "", struggle: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="audit-form" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-heading">
              Apply for an audit today and unlock 82% more closed leads and revenue without wasting more money on marketing
            </h2>
            <p className="text-lg text-muted-foreground">
              Get a personalized video audit that shows you exactly where your funnel is bleeding money and how to fix it.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <Shield className="w-8 h-8 text-primary" />
                <div>
                  <p className="font-semibold text-sm">100% Free</p>
                  <p className="text-xs text-muted-foreground">No strings attached</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <Clock className="w-8 h-8 text-primary" />
                <div>
                  <p className="font-semibold text-sm">24-48 Hours</p>
                  <p className="text-xs text-muted-foreground">Quick turnaround</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                <Zap className="w-8 h-8 text-primary" />
                <div>
                  <p className="font-semibold text-sm">Action Plan</p>
                  <p className="text-xs text-muted-foreground">Step-by-step fixes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <Card className="shadow-large">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-center">
                Get Your Free Audit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Business Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@business.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="website">Website URL *</Label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    required
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://your-website.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="struggle">What's your biggest conversion challenge?</Label>
                  <Textarea
                    id="struggle"
                    name="struggle"
                    value={formData.struggle}
                    onChange={handleChange}
                    placeholder="Tell us about your main conversion problems..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "🎥 Get My Free Audit"}
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AuditForm;