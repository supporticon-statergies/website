import { useState, useRef } from "react";
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
  ArrowRight,
} from "lucide-react";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import aboutImage from "@/assets/about.png";
import { AmbientAccent } from "@/components/PageVisuals";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion-utils";

interface TeamMember {
  name: string;
  role: string;
  badge?: string;
  linkedin: string;
}

const devTeam: TeamMember[] = [
  {
    name: "Sarguru",
    role: "AI/ML Developer",
    linkedin: "sarguru-i",
  },
  {
    name: "Sudhan",
    role: "AI Engineer",
    linkedin: "shanmuga-sudhan-k",
  },
  {
    name: "JaiManisha",
    role: "Sales Development Representative",
    linkedin: "https://www.linkedin.com/in/jaimanisa-kirubakaran-76b733346?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  {
    name: "JaiSudharshan",
    role: "ML Developer",
    linkedin: "jaisudharshan-d",
  },
  {
    name: "Mehashree",
    role: "UI/UX Developer",
    linkedin: "mehashree-r-05b4442bb",
  },
];

const TeamCard = ({ dev }: { dev: TeamMember }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xc = rect.width / 2;
    const yc = rect.height / 2;

    const tiltX = ((yc - y) / yc) * 3;
    const tiltY = ((x - xc) / xc) * 3;

    setTilt({ x: tiltX, y: tiltY });
    setMousePos({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setMousePos({ x: 0, y: 0 });
  };

  const initials = dev.name
    .trim()
    .split(/\s+/)
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const avatarBgGradient = "from-emerald-500 to-teal-600 text-emerald-50";

  const getLinkedinUrl = (handle: string) => {
    if (!handle) return "";
    if (handle.startsWith("http://") || handle.startsWith("https://")) {
      return handle;
    }
    if (handle.includes("linkedin.com")) {
      return handle.startsWith("www.") ? `https://${handle}` : `https://www.${handle}`;
    }
    return `https://www.linkedin.com/in/${handle}`;
  };

  return (
    <StaggerItem className="w-full max-w-[370px] md:max-w-none md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] flex relative z-10">
      {/* Outer glow wrapper — positioned outside framer-motion stacking context */}
      <div className="relative w-full">
        {/* External glow — static gradient */}
        <div
          className="absolute -inset-1 rounded-[26px] blur-xl transition-opacity duration-300 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(59, 130, 246, 0.2) 100%)",
            opacity: isHovered ? 1 : 0,
          }}
        />
        {/* External spotlight glow — follows cursor */}
        <div
          className="absolute -inset-1 rounded-[26px] blur-xl transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(280px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(16, 185, 129, 0.22), rgba(59, 130, 246, 0.16) 50%, transparent 100%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Main card shell */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative w-full rounded-[24px] p-[1.5px] transition-all duration-300 ease-out select-none shadow-[0_12px_30px_rgba(0,0,0,0.04)] transform-gpu"
          style={{
            transform: isHovered
              ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-6px)`
              : `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`,
            transition: isHovered
              ? "transform 0.1s ease-out, box-shadow 0.3s ease"
              : "transform 0.3s ease-out, box-shadow 0.3s ease",
            ["--mouse-x" as any]: `${mousePos.x}px`,
            ["--mouse-y" as any]: `${mousePos.y}px`,
          }}
        >
          {/* Border: default subtle border */}
          <div
            className="absolute inset-0 rounded-[24px] border border-slate-200/60 transition-opacity duration-300 pointer-events-none"
            style={{ opacity: isHovered ? 0 : 1 }}
          />
          {/* Border: animated gradient border on hover */}
          <div
            className="absolute inset-0 rounded-[24px] transition-opacity duration-300 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, #10b981, #2dd4bf, #3b82f6)",
              padding: "1.5px",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              opacity: isHovered ? 1 : 0,
            }}
          />
          {/* Border spotlight: cursor-following highlight on the border */}
          <div
            className="absolute inset-0 rounded-[24px] transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(150px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(16, 185, 129, 0.7), rgba(59, 130, 246, 0.5) 50%, transparent 100%)`,
              padding: "1.5px",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              opacity: isHovered ? 1 : 0,
            }}
          />

          {/* Glassmorphic Card Body */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 bg-white/70 backdrop-blur-xl rounded-[22.5px] p-6 sm:p-8 relative overflow-hidden border border-white/40">
            {/* Inner spotlight overlay following cursor */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300"
              style={{
                background: `radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(16, 185, 129, 0.12), rgba(59, 130, 246, 0.08) 40%, transparent 80%)`,
                opacity: isHovered ? 1 : 0,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/40 pointer-events-none" />


          {/* Left Column: Avatar */}
          <div className="flex-shrink-0 relative">
            <div className="relative w-24 h-24 sm:w-26 sm:h-26 rounded-full p-0.5 bg-gradient-to-tr from-emerald-100 to-blue-100 shadow-inner transition-colors duration-500">
              <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-slate-50 relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${avatarBgGradient} flex items-center justify-center font-display font-black text-3xl sm:text-4xl tracking-wider transition-transform duration-300 ${isHovered ? "scale-110" : "scale-100"
                    }`}
                >
                  {initials}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex-grow flex flex-col justify-between min-w-0 w-full">
            <div>
              {/* Header */}
              <div className="mb-2">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                    {dev.name}
                  </h3>
                  {dev.badge && (
                    <span className="text-[8px] font-extrabold tracking-wider uppercase px-2 py-0.5 rounded-full bg-emerald-500 text-white shadow-sm shadow-emerald-500/30 whitespace-nowrap">
                      {dev.badge}
                    </span>
                  )}
                </div>
                <p className="text-emerald-600 font-bold text-xs tracking-wider uppercase mt-1">
                  {dev.role}
                </p>
              </div>
            </div>

            {/* Footer row containing link & social icons */}
            <div className="border-t border-slate-100/50 pt-4 flex items-center justify-between w-full mt-4">
              <a
                href={getLinkedinUrl(dev.linkedin)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors group/btn"
              >
                View Profile
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </a>

              {/* Social links row — driven by isHovered state, not CSS group-hover */}
              <div
                className="flex items-center gap-2 transition-all duration-300"
                style={{
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "translateY(0px)" : "translateY(6px)",
                  pointerEvents: isHovered ? "auto" : "none",
                }}
              >
                <a
                  href={getLinkedinUrl(dev.linkedin)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${dev.name}'s LinkedIn`}
                  className="w-7 h-7 rounded-full bg-slate-50 hover:bg-[#0077b5] hover:text-white text-slate-400 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm border border-slate-100"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
          </div>{/* end card body */}
        </div>{/* end main card shell */}
      </div>{/* end outer glow wrapper */}
    </StaggerItem>
  );
};

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

      {/* Premium Development Team Showcase Section */}
      <section className="relative z-20 py-28 overflow-hidden bg-[radial-gradient(circle_at_50%_40%,rgba(240,253,250,0.5)_0%,rgba(255,255,255,0)_70%)]">
        {/* Background Decorative Blobs */}
        <div className="absolute top-1/3 left-10 w-[500px] h-[500px] rounded-full bg-emerald-50/40 blur-[130px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: "8s" }} />
        <div className="absolute bottom-1/3 right-10 w-[500px] h-[500px] rounded-full bg-blue-50/40 blur-[130px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: "10s" }} />

        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4">
              Meet the Team Behind Supporticon
            </h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto font-medium">
              Passionate engineers, designers, and AI specialists building the future of customer support.
            </p>

            {/* Decorative gradient line */}
            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 mx-auto mt-6 rounded-full shadow-sm" />
          </div>

          <StaggerContainer className="flex flex-wrap gap-8 max-w-6xl mx-auto justify-center relative z-10">
            {devTeam.map((dev) => (
              <TeamCard key={dev.name} dev={dev} />
            ))}
          </StaggerContainer>
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
