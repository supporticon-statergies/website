import { SEO } from "@/components/SEO";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ImageWithLoader from "../components/ImageWithLoader";
import { Mail, Phone, MapPin, Clock, Linkedin, Users, Target, Zap } from "lucide-react";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import aboutImage from "@/assets/about_image.jpg";

const About = () => {
  useScrollToTop();
  
  return (
    <main>
      <SEO
        title="About — Supporticon"
        description="Our mission is to empower support engineers with AI that removes busywork and accelerates answers."
        canonicalPath="/about"
      />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h1 className="font-display text-4xl font-bold mb-6">About Supporticon</h1>
            <p className="text-lg text-muted-foreground mb-6">
              We build SaaS products that deeply understand the day-to-day workflows of support engineers. Our aim is simple: reduce toil, increase clarity, and help teams delight customers.
            </p>
            <p className="text-muted-foreground">
              Founded with a simple mission: to make support engineers' lives easier by bringing the right information to them at the right time, using secure AI systems that respect privacy and context.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-auto h-auto overflow-hidden">
              <ImageWithLoader
                src={aboutImage}
                alt="About SupportIcon"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto grid gap-6 px-4 pb-16 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
          We create intelligent, secure AI tools that work with humans — not against them — to enhance the support experience. Through personalization, enterprise-grade security, and measurable ROI, we empower organizations to elevate both customer and agent satisfaction, transforming support from a cost center into a powerful growth engine.          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Vision
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
          To make customer support a source of pride, joy, and growth — for both the people who deliver it and the customers who experience it, ensuring each interaction fosters trust, value, and satisfaction while strengthening long-term relationships and organizational success.            </CardContent>
        </Card>
      </section>

      {/* Support Icon Origin Story */}
      <section className="container mx-auto px-4 pb-20">
        <h2 className="font-display text-3xl font-bold text-center mb-12">SupportIcon Origin Story</h2>
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                As a founder, every journey has its origin story, and mine began with observing someone I deeply admire 😍 —my husband Manikandan S A💡❤️
              </p>
              
              <p className="mb-6">
                Through his work in Customer Support, I witnessed firsthand the daily struggles he faced: the long hours ⏳, the difficult customers 😓, and the never-ending tasks 📞.
              </p>
              
              <p className="mb-6">
                Yet, at the end of the day, when he received a simple email of appreciation 📧 or had a fruitful call where he truly made a difference, his face would light up ✨.
              </p>
              
              <p className="mb-6">
                He would say, "This call made my day." 😊 Those moments of joy were the highlights of his hard work.
              </p>
              
              <p className="mb-6">
                What struck me the most was "How meaningful those moments were 😇 "—not just for him, but for the customer he was able to help. It was in these moments I realized something: customer support is not just about solving problems; it's about creating connections 🤝 and making people feel valued 💖.
              </p>
              
              <p className="mb-6">
                Inspired by his journey, I thought, "What if I could make his life easier?" 💭 That simple idea turned into a mission to improve the customer support experience. Over time, that idea took shape 🛠️, and I validated it with him—since he's an expert in the field, I knew his feedback would be invaluable.
              </p>
              
              <p className="mb-0">
                And that's how the vision behind Supporticon Strategies Private Limited was born 🚀. We're here to empower customer support professionals with tools that streamline their work 🧑‍💻, so they can focus on what truly matters—creating meaningful connections and making their clients' day. 🌟
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="container mx-auto px-4 pb-20">
        <h2 className="font-display text-3xl font-bold text-center mb-12">Leadership</h2>
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-16 h-16 text-primary/60" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Gowthami Manikandan</h3>
                <p className="text-lg text-primary font-semibold mb-3">CEO & Founder</p>
                <p className="text-muted-foreground mb-4">
                  Leading the vision to transform customer support through AI-powered solutions that empower support engineers and delight customers.
                </p>
                <a 
                  href="https://www.linkedin.com/in/supporticon-gowthami" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  View LinkedIn Profile
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Developers Section */}
      <section className="container mx-auto px-4 pb-20">
        <h2 className="font-display text-3xl font-bold text-center mb-12">Development Team</h2>
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <Card className="p-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sarguru</h3>
              <p className="text-muted-foreground mb-4">AI/ML Developer</p>
              <a 
                href="https://www.linkedin.com/in/sarguru-i-169308255" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                View LinkedIn Profile
              </a>
            </div>
          </Card>

          <Card className="p-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sudhan</h3>
              <p className="text-muted-foreground mb-4">Backend Developer</p>
              <a 
                href="https://www.linkedin.com/in/shanmuga-sudhan-k-237947256" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                View LinkedIn Profile
              </a>
            </div>
          </Card>
        </div>
      </section>

      {/* Company Contact Info */}
      <section className="container mx-auto px-4 pb-20">
        <h2 className="font-display text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold mb-6">Company Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">
                      7-14/4, Madam Sandhu, Tharamangalam,<br />
                      Salem, TamilNadu<br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Mobile</p>
                      <p className="text-muted-foreground">+91 866 734 7679</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-muted-foreground">Monday–Friday, 10:00 AM to 7:00 PM (IST)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Company LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/company/supporticon-strategies-private-limited/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        Follow us on LinkedIn
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a 
                        href="mailto:founder@supporticon.com" 
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        founder@supporticon.com
                      </a>
                    </div>
                  </div>

                  <div className="pt-4">
                    <p className="text-sm text-muted-foreground">
                      Ready to transform your support operations? Let's discuss how Help Dude can elevate your customer experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default About;
