import { SEO } from "@/components/SEO";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ImageWithLoader from "../components/ImageWithLoader";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Linkedin,
  Users,
  Target,
  Zap,
} from "lucide-react";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import aboutImage from "@/assets/about.png";
import { AmbientAccent } from "@/components/PageVisuals";

const About = () => {
  useScrollToTop();

  return (
    <main className="pb-12 bg-transparent relative">
      <SEO
        title="About, Supporticon"
        description="Our mission is to empower support engineers with AI that removes busywork and accelerates answers."
        canonicalPath="/about"
      />

      {/* Ambient accents */}
      <AmbientAccent position="right" color="emerald" />
      <AmbientAccent position="left" color="blue" />

      {/* Hero Section - Wrapped in white background card as requested */}
      <section className="container mx-auto px-4 py-8 md:py-20">
        <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-green-100 shadow-2xl p-8 md:p-16">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="animate-in slide-in-from-left duration-700">
              <h1 className="font-display text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">
                About Supporticon
              </h1>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                Supporticon Strategies Private Limited builds AI powered IT
                helpdesk software for SaaS support teams across India and
                beyond.
              </p>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                We exist because we believe the quality of your customer support
                determines the trajectory of your business, and that most
                helpdesk systems are built to manage ticket queues, not to
                protect the customer relationships that drive revenue. We are
                building the tools that change that.
              </p>

            </div>
            <div className="flex justify-center animate-in slide-in-from-right duration-700">
              <div className="relative group overflow-hidden rounded-3xl shadow-xl border-8 border-white">
                <ImageWithLoader
                  src={aboutImage}
                  alt="About SupportIcon"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Mission Card - Rectangular style */}
          <div>
            <div className="rounded-3xl bg-white/80 border border-green-100 shadow-2xl p-10 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-6 w-6 text-green-600" />
                <span className="text-2xl font-bold text-slate-900">
                  Mission
                </span>
              </div>
              <div className="text-slate-500 text-lg leading-relaxed">
                We create intelligent, secure AI tools that work with humans,
                not against them, to enhance the support experience. Through
                personalization, enterprise grade security, and measurable ROI,
                we empower organizations to elevate both customer and agent
                satisfaction, transforming support from a cost center into a
                powerful growth engine.
              </div>
            </div>
          </div>
          {/* Vision Card - Rectangular style */}
          <div>
            <div className="rounded-3xl bg-white/80 border border-green-100 shadow-2xl p-10 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="h-6 w-6 text-green-600" />
                <span className="text-2xl font-bold text-slate-900">
                  Vision
                </span>
              </div>
              <div className="text-slate-500 text-lg leading-relaxed">
                To make customer support a source of pride, joy, and growth, for
                both the people who deliver it and the customers who experience
                it, ensuring each interaction fosters trust, value, and
                satisfaction while strengthening long term relationships and
                organizational success. We envision a world where every helpdesk
                system interaction builds customer trust, deepens product
                understanding, and strengthens the long term relationship
                between a business and the people it serves.
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Supporticon Story */}
      <section className="container mx-auto px-4 pb-24">
        <h2 className="font-display text-4xl font-bold text-center mb-4 text-slate-900 leading-tight">
          Supporticon Story
        </h2>
        <p className="text-center text-lg text-slate-500 mb-16">
          How a Personal Observation Became a SaaS IT Helpdesk Software Company
        </p>
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 rounded-[2.5rem] border-green-50 shadow-xl bg-white/70 backdrop-blur-md">
            <div className="prose prose-lg max-w-none text-slate-500 leading-relaxed">
              <p className="mb-6 flex items-baseline gap-1">
                <span className="text-5xl font-bold text-green-600 leading-none select-none">E</span>
                <span>
                  very meaningful company starts with a personal story. Ours
                  started with Manikandan S A.
                </span>
              </p>

              <p className="mb-6">
                Our Founder Gowthami Manikandan watched her husband navigate the
                daily demands of a fast moving customer service ticketing
                system, the long hours, the fragmented knowledge, the relentless
                queue, she didn't just see operational friction. she saw what it
                cost the customers on the other end.
              </p>

              <p className="mb-6">
                When the knowledge wasn't there, the response was slow. When the
                escalation path was unclear, the customer waited. When the
                answer was inconsistent, trust eroded quietly, and renewals
                didn't come. These weren't just agent problems. They were
                customer experience failures happening invisibly, at scale,
                every single day.
              </p>

              <p className="mb-6">
                But she also saw the other side. When Manikandan had the right
                answer, delivered with clarity and genuine care, something
                remarkable happened. The customer felt it. He felt it. He would
                say:{" "}
                <span className="font-semibold text-slate-700 italic">
                  "This call made my day."
                </span>{" "}
                And she knew: that is the product. That moment, at scale, for
                every support team using IT helpdesk software that actually
                works.
              </p>

              <p className="mb-0">
                That observation became a conviction. That conviction became
                Supporticon, best customer support software for the SaaS teams
                that keep businesses running, one resolved ticket at a time.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="container mx-auto px-4 pb-20">
        <h2 className="font-display text-4xl font-bold text-center mb-16 text-slate-900 leading-tight">
          Leadership
        </h2>
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 rounded-[2.5rem] bg-white border-green-50 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-40 h-40 bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <Users className="w-20 h-20 text-white opacity-90" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-extrabold text-slate-900 mb-2">
                  Gowthami Manikandan
                </h3>
                <p className="text-xl text-green-600 font-bold mb-4 tracking-wide">
                  CEO & Founder
                </p>
                <p className="text-slate-500 text-lg leading-relaxed mb-6">
                  Gowthami leads Supporticon's vision to transform SaaS customer
                  support through AI powered IT helpdesk software. Her core
                  belief: every SaaS business's strongest retention tool is a
                  support team equipped with the right intelligence, at the
                  right moment. Her empathy first, outcome first approach is
                  embedded in every product decision Supporticon makes.
                </p>
                <a
                  href="https://www.linkedin.com/in/supporticon-gowthami"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-slate-50 text-slate-700 px-6 py-3 rounded-full font-bold hover:bg-indigo-50 hover:text-indigo-600 transition-all shadow-sm"
                >
                  <Linkedin className="h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Developers Section */}

      <section className="container mx-auto px-4 pb-24">
        <h2 className="font-display text-4xl font-bold text-center mb-16 text-slate-900 leading-tight">
          Development Team
        </h2>
        <div className="grid gap-10 md:grid-cols-2 max-w-4xl mx-auto">
          {[
            {
              name: "Sarguru",
              role: "AI/ML Developer",
              color: "#1A7FB5",
              linkedin: "sarguru-i",
            },
            {
              name: "Sudhan",
              role: "Backend Developer",
              color: "green",
              linkedin: "shanmuga-sudhan-k",
            },
            {
              name: "Jai Manisa",
              role: "SDR",
              color: "green",
              linkedin: "shanmuga-sudhan-k",
            },
            {
              name: "Jai Sudharshan ",
              role: "Backend Developer",
              color: "green",
              linkedin: "shanmuga-sudhan-k",
            },
            {
              name: "MehaShree",
              role: "Backend Developer",
              color: "green",
              linkedin: "shanmuga-sudhan-k",
            },
          ].map((dev) => (
            <Card
              key={dev.name}
              className="p-8 rounded-[2rem] border-green-50 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80"
            >
              <div className="text-center">
                <div
                  className={`w-28 h-28 rounded-2xl flex items-center justify-center mx-auto mb-6 ${dev.color === "green" ? "bg-green-100" : ""}`}
                  style={
                    dev.color !== "green"
                      ? { backgroundColor: dev.color + "22" }
                      : {}
                  }
                >
                  <Users
                    className={`w-14 h-14 ${dev.color === "green" ? "text-green-600" : ""}`}
                    style={dev.color !== "green" ? { color: dev.color } : {}}
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {dev.name}
                </h3>
                <p className="text-slate-500 font-medium mb-6">{dev.role}</p>
                <a
                  href={`https://www.linkedin.com/in/${dev.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:gap-3 transition-all"
                >
                  <Linkedin className="h-4 w-4" />
                  View Profile
                </a>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Company Contact Info */}
      <section className="container mx-auto px-4 pb-24">
        <h2 className="font-display text-4xl font-bold text-center mb-16 text-slate-900 leading-tight">
          Get in Touch
        </h2>
        <div className="max-w-5xl mx-auto">
          <Card className="p-8 md:p-16 rounded-[3rem] border border-green-100 bg-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-50 -mr-32 -mt-32" />

            <div className="grid gap-16 lg:grid-cols-2 relative z-10">
              {/* Left Column: Company Info */}
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <span className="w-8 h-1 bg-green-600 rounded-full"></span>
                    Company Information
                  </h3>

                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                        <MapPin className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-lg mb-1">
                          Address
                        </p>
                        <p className="text-slate-500 leading-relaxed text-lg">
                          7-14/4, Madam Sandhu,
                          <br />
                          Tharamangalam, Salem,
                          <br />
                          TamilNadu, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Phone className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-lg mb-1">
                          Mobile
                        </p>
                        <p className="text-slate-600 font-bold text-xl">
                          +91 866 734 7679
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Clock className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-lg mb-1">
                          Business Hours
                        </p>
                        <p className="text-slate-500 font-medium text-lg">
                          Monday to Friday, 10:00 AM to 7:00 PM (IST)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Connect */}
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <span className="w-8 h-1 bg-indigo-600 rounded-full"></span>
                    Connect With Us
                  </h3>

                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Linkedin className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-lg mb-1">
                          Company LinkedIn
                        </p>
                        <a
                          href="https://www.linkedin.com/company/supporticon-strategies-private-limited/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 font-bold text-lg hover:underline underline-offset-4"
                        >
                          Follow us on LinkedIn
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Mail className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-lg mb-1">
                          Email
                        </p>
                        <a
                          href="mailto:founder@supporticon.com"
                          className="text-green-600 font-bold text-lg hover:underline underline-offset-4"
                        >
                          founder@supporticon.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Message */}
                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                  <p className="text-slate-600 leading-relaxed font-medium">
                    Ready to transform your support operations? Let's discuss
                    how Help Dude can elevate your customer experience.
                  </p>
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
