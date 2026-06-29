import { useState } from "react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import {
  Download,
  BookOpen,
  Brain,
  BarChart2,
  Rocket,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const ebookSections = [
  {
    icon: BarChart2,
    title: "Phase 1: Land, Build Your ICP",
    description:
      "Before onboarding begins, conduct a knowledge transfer with sales to understand your customer's goals, history, and expectations. Segment accounts by funding round, tech stack, contract type, industry, and role to identify your Ideal Customer Profile, and use technographic data to spot at risk accounts, pinpoint upsell potential, and avoid preventable churn from the start.",
  },
  {
    icon: Rocket,
    title: "Phase 2: Onboard, Accelerate Time to Value",
    description:
      "Build time bound onboarding milestones that matter to your customer, not your product roadmap. Days 1 to 10: requirements gathering & welcome call. Days 11 to 20: configuration & documentation sign off. Days 21 to 30: role based training validated by usage data. Days 31 to 45: go live and active user threshold. Automate plays triggered by outstanding tasks to keep customers on track.",
  },
  {
    icon: Brain,
    title: "Phase 3: Adopt & Engage, Drive Product Adoption",
    description:
      "Track usage frequency, feature adoption, active users, and time in app to identify engagement gaps. Segment by positive signals (daily logins, sticky feature use) and negative signals (no login in 14+ days, license utilization under 20%). Reverse engineer your most successful customers to build a benchmark profile and automate hyper personalized outreach at scale.",
  },
  {
    icon: BookOpen,
    title: "Phase 4: Retain & Expand, Forecast & Grow",
    description:
      "Build dynamic health scores using quantitative factors, product usage, support ticket volume, NPS, service utilization, and qualitative factors, relationship quality, CSM sentiment, perceived ROI, and competitor risk. Monitor champion turnover via automated alerts, and time expansion conversations using buyer intent signals like funding rounds, feature consumption spikes, and webinar attendance.",
  },
];

const faqs = [
  {
    q: "Who is this playbook for?",
    a: "This playbook is for customer success leaders, CX directors, and operations managers at B2B SaaS and subscription businesses. If you're dealing with high churn, lack of visibility into customer health, or manual reactive processes, and want to build scalable, data driven wins, this guide is built for you.",
  },
  {
    q: "What business impact can I expect from these strategies?",
    a: "According to ChurnZero research cited in the playbook, reducing customer churn by just 5% can increase profits from 25% to 125%. The playbook gives you the exact segmentation models, automation plays, and health scoring frameworks to start moving that needle.",
  },
  {
    q: "What is the 'three C's' framework in the playbook?",
    a: "The playbook is built around three C's that define every high-functioning customer success strategy: Connected Experiences (a unified view of each customer across their full journey), an Engaging Customer Journey (personalised, timely touchpoints at every phase), and a Culture of Customer-Centricity (asking 'How is this customer experiencing what I'm doing?' before every decision).",
  },
  {
    q: "Who are the experts featured in the playbook?",
    a: "The playbook features insights from Dominic Constandi, Vice President of Customer Success at ZoomInfo, and Abby Hammer, Chief Customer Officer at ChurnZero, two of the most recognised voices in B2B customer success. Their real world advice and frameworks are woven throughout every phase.",
  },
  {
    q: "How do I build a customer health score using this playbook?",
    a: "The playbook covers both quantitative factors, product usage, login history, support ticket volume, NPS scores, and service utilisation, and qualitative factors, relationship quality, CSM sentiment, perceived ROI, and competitor risk. It guides you on building dynamic, segment-specific health scores rather than a one size fits all model.",
  },
  {
    q: "Will I get follow up emails after downloading?",
    a: "We'll send you the playbook link and occasional insights on customer success best practices. You can unsubscribe at any time, no questions asked.",
  },
];

// CSS-only eBook cover component
const EBookCover = () => (
  <div
    style={{
      width: "100%",
      maxWidth: 300,
      aspectRatio: "3/4",
      background:
        "linear-gradient(160deg, #0f172a 0%, #1e293b 60%, #134e2a 100%)",
      borderRadius: "0.75rem 1.5rem 1.5rem 0.75rem",
      boxShadow: "6px 6px 0px #a8d97f, 0 20px 60px rgba(0,0,0,0.4)",
      padding: "2rem 1.75rem",
      display: "flex",
      flexDirection: "column" as const,
      justifyContent: "space-between",
      position: "relative" as const,
      overflow: "hidden",
      userSelect: "none" as const,
    }}
  >
    {/* Decorative circles */}
    <div
      style={{
        position: "absolute",
        top: -40,
        right: -40,
        width: 160,
        height: 160,
        borderRadius: "50%",
        background: "rgba(168,217,127,0.08)",
        pointerEvents: "none",
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: 60,
        left: -30,
        width: 120,
        height: 120,
        borderRadius: "50%",
        background: "rgba(168,217,127,0.06)",
        pointerEvents: "none",
      }}
    />

    {/* Top section */}
    <div>
      {/* Icon */}
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          background: "rgba(168,217,127,0.18)",
          border: "1px solid rgba(168,217,127,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1.5rem",
        }}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a8d97f"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <circle cx="9" cy="10" r="1" fill="#a8d97f" />
          <circle cx="12" cy="10" r="1" fill="#a8d97f" />
          <circle cx="15" cy="10" r="1" fill="#a8d97f" />
        </svg>
      </div>

      {/* Label */}
      <div
        style={{
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.15em",
          color: "#a8d97f",
          textTransform: "uppercase",
          marginBottom: "1rem",
        }}
      >
        HelpDude · Free Playbook
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: 800,
          color: "#ffffff",
          lineHeight: 1.3,
          margin: "0 0 0.75rem 0",
        }}
      >
        The Modern Customer Success Playbook
      </h3>
      <p
        style={{
          fontSize: "0.75rem",
          color: "#94a3b8",
          lineHeight: 1.5,
          margin: 0,
        }}
      >
        Proven Strategies for Customer Loyalty, Growth &amp; Retention at Scale
      </p>
    </div>

    {/* Bottom section */}
    <div>
      <div
        style={{
          height: 1,
          background: "rgba(168,217,127,0.25)",
          marginBottom: "1rem",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: 10, color: "#64748b", fontWeight: 600 }}>
          18 pages · Free
        </span>
        <div
          style={{
            background: "#a8d97f",
            color: "#0f172a",
            borderRadius: 6,
            padding: "4px 10px",
            fontSize: 10,
            fontWeight: 700,
          }}
        >
          DOWNLOAD FREE
        </div>
      </div>
    </div>
  </div>
);

export default function EBooks() {
  useScrollToTop();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    linkedin: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.company.trim()) e.company = "Company name is required";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
    // Trigger download
    const link = document.createElement("a");
    link.href = "/modern customer success playbook.pdf";
    link.download = "Modern Customer Success Playbook.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
      setForm({ name: "", email: "", company: "", linkedin: "" });
    }, 2000);
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    width: "100%",
    padding: "0.7rem 1rem",
    borderRadius: "0.6rem",
    border: `1.5px solid ${errors[field] ? "#f87171" : "#d1fae5"}`,
    fontSize: "0.92rem",
    fontFamily: "inherit",
    outline: "none",
    background: "rgba(255,255,255,0.9)",
    color: "#0f172a",
    boxSizing: "border-box" as const,
    transition: "border-color 0.2s",
  });

  return (
    <>
      <SEO
        title="Sources, SupportIcon"
        description="Download the Modern Customer Support Playbook. Free guide to AI driven support transformation."
        canonicalPath="/sources"
      />

      {/* ── Download Gate Modal ── */}
      {showModal && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowModal(false);
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(15,23,42,0.55)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <div
            style={{
              background: "linear-gradient(160deg, #ffffff 0%, #f0fdf4 100%)",
              borderRadius: "1.5rem",
              padding: "2.5rem 2rem",
              maxWidth: 460,
              width: "100%",
              boxShadow: "0 32px 80px rgba(0,0,0,0.18)",
              border: "1px solid rgba(200,230,160,0.5)",
              position: "relative",
              animation: "modalIn 0.3s cubic-bezier(0.34,1.56,0.64,1)",
            }}
          >
            <style>{`@keyframes modalIn { from { opacity:0; transform:scale(0.9) translateY(20px); } to { opacity:1; transform:scale(1) translateY(0); } }`}</style>

            {/* Close */}
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                background: "#f1f5f9",
                border: "none",
                borderRadius: "50%",
                width: 32,
                height: 32,
                cursor: "pointer",
                fontSize: 18,
                color: "#64748b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "inherit",
              }}
            >
              ×
            </button>

            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "1rem",
                  background: "#dcfce7",
                  border: "1px solid #bbf7d0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                }}
              >
                <Download style={{ width: 22, height: 22, color: "#16a34a" }} />
              </div>
              <h2
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  color: "#0f172a",
                  margin: "0 0 0.4rem",
                }}
              >
                Get Your Free Playbook
              </h2>
              <p style={{ color: "#64748b", fontSize: "0.88rem", margin: 0 }}>
                Fill in your details to instantly download the playbook.
              </p>
            </div>

            {submitted ? (
              <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
                <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>
                  🎉
                </div>
                <p
                  style={{
                    fontWeight: 700,
                    color: "#16a34a",
                    fontSize: "1.1rem",
                    margin: 0,
                  }}
                >
                  Download starting!
                </p>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "0.85rem",
                    marginTop: "0.5rem",
                  }}
                >
                  Thank you, {form.name}!
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {/* Name */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "#374151",
                      marginBottom: "0.35rem",
                    }}
                  >
                    Full Name <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    style={inputStyle("name")}
                  />
                  {errors.name && (
                    <p
                      style={{
                        color: "#ef4444",
                        fontSize: "0.75rem",
                        margin: "0.3rem 0 0",
                      }}
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "#374151",
                      marginBottom: "0.35rem",
                    }}
                  >
                    Work Email <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    style={inputStyle("email")}
                  />
                  {errors.email && (
                    <p
                      style={{
                        color: "#ef4444",
                        fontSize: "0.75rem",
                        margin: "0.3rem 0 0",
                      }}
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "#374151",
                      marginBottom: "0.35rem",
                    }}
                  >
                    Company Name <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Inc."
                    value={form.company}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, company: e.target.value }))
                    }
                    style={inputStyle("company")}
                  />
                  {errors.company && (
                    <p
                      style={{
                        color: "#ef4444",
                        fontSize: "0.75rem",
                        margin: "0.3rem 0 0",
                      }}
                    >
                      {errors.company}
                    </p>
                  )}
                </div>

                {/* LinkedIn */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "#374151",
                      marginBottom: "0.35rem",
                    }}
                  >
                    LinkedIn URL{" "}
                    <span style={{ color: "#94a3b8", fontWeight: 400 }}>
                      (optional)
                    </span>
                  </label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/yourname"
                    value={form.linkedin}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, linkedin: e.target.value }))
                    }
                    style={inputStyle("linkedin")}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    marginTop: "0.5rem",
                    padding: "0.85rem 1rem",
                    background: "linear-gradient(135deg, #4ade80, #16a34a)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "0.625rem",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    fontFamily: "inherit",
                    transition: "opacity 0.2s",
                    width: "100%",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <Download style={{ width: 16, height: 16 }} />
                  Download Free Playbook
                </button>
                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: "0.72rem",
                    textAlign: "center",
                    margin: 0,
                  }}
                >
                  🔒 We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
      <main style={{ minHeight: "100vh", paddingTop: "5rem" }}>
        {/* ── Hero Section ── */}
        <section
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "4rem 1.5rem 5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "4rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {/* Left: Cover */}
            <div
              style={{
                flex: "0 0 auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <EBookCover />
            </div>

            {/* Right: Info */}
            <div style={{ flex: 1, minWidth: 280 }}>
              {/* Label */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: "#E8F5D8",
                  color: "#166534",
                  border: "1px solid #C8E6A0",
                  borderRadius: 999,
                  padding: "4px 14px",
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "1.25rem",
                }}
              >
                <BookOpen style={{ width: 13, height: 13 }} />
                Free Source
              </div>

              <h1
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 2.6rem)",
                  fontWeight: 800,
                  color: "#0f172a",
                  lineHeight: 1.2,
                  margin: "0 0 1rem 0",
                }}
              >
                The Modern Customer Success Playbook
              </h1>
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "#64748b",
                  fontWeight: 500,
                  margin: "0 0 0.75rem 0",
                }}
              >
                Proven Strategies for Customer Loyalty, Growth &amp; Retention
                at Scale
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#475569",
                  lineHeight: 1.75,
                  margin: "0 0 1rem 0",
                }}
              >
                The evolution of every high-functioning customer success
                strategy centers around three C's: connected experiences, an
                engaging customer journey, and a culture built on
                customer centricity. Satisfaction won't cut it, quarterbacking
                your customers to long term success is proven to combat churn
                and transform customer success teams into revenue drivers.
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#475569",
                  lineHeight: 1.75,
                  margin: "0 0 2rem 0",
                }}
              >
                According to <strong>ChurnZero</strong>, reducing customer churn
                by just <strong>5%</strong> can increase profits from{" "}
                <strong>25% to 125%</strong>. This playbook gives you the
                data driven strategies, automation plays, and segmentation
                models to get there.{" "}
                <Link
                  to="/resources"
                  style={{ color: "#16a34a", textDecoration: "underline" }}
                >
                  Explore all our resources here.
                </Link>
              </p>

              {/* What you'll get pills */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginBottom: "2rem",
                }}
              >
                {[
                  "18 pages",
                  "4 Phases",
                  "Data-Driven Strategies",
                  "Free download",
                ].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "#F5E6D3",
                      color: "#92400e",
                      border: "1px solid #EAD2B7",
                      borderRadius: 999,
                      padding: "4px 12px",
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* ── Download Button ── */}
              <div
                style={{
                  background: "rgba(255,255,255,0.8)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(200,230,160,0.5)",
                  borderRadius: "1.25rem",
                  padding: "1.75rem",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                }}
              >
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#0f172a",
                    margin: "0 0 1.25rem 0",
                  }}
                >
                  Get your free copy, quick details needed →
                </p>
                <button
                  onClick={() => setShowModal(true)}
                  style={{
                    width: "100%",
                    padding: "0.85rem 1rem",
                    background: "linear-gradient(135deg, #4ade80, #16a34a)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "0.625rem",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    fontFamily: "inherit",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <Download style={{ width: 16, height: 16 }} />
                  Download Free Source
                </button>
                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: "0.75rem",
                    textAlign: "center",
                    margin: "0.75rem 0 0 0",
                  }}
                >
                  Free · Instant download
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── What's Inside ── */}
        <section
          style={{
            background: "rgba(255,255,255,0.5)",
            backdropFilter: "blur(8px)",
            borderTop: "1px solid rgba(200,230,160,0.3)",
            borderBottom: "1px solid rgba(200,230,160,0.3)",
            padding: "5rem 1.5rem",
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                  fontWeight: 800,
                  color: "#0f172a",
                  margin: "0 0 0.75rem 0",
                }}
              >
                What's Inside the Playbook
              </h2>
              <p
                style={{
                  color: "#64748b",
                  fontSize: "1.05rem",
                  maxWidth: 600,
                  margin: "0 auto",
                }}
              >
                Four phases of the optimised customer journey, from landing your
                first customers to retaining and expanding your most valuable
                accounts.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {ebookSections.map((section, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.75)",
                    border: "1px solid rgba(200,230,160,0.4)",
                    borderRadius: "1.25rem",
                    padding: "2rem 1.75rem",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 32px rgba(0,0,0,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "0.75rem",
                      background: "#E8F5D8",
                      border: "1px solid #C8E6A0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.25rem",
                      color: "#16a34a",
                    }}
                  >
                    <section.icon style={{ width: 22, height: 22 }} />
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#a8d97f",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Chapter {i + 1}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#0f172a",
                      margin: "0 0 0.6rem 0",
                      lineHeight: 1.3,
                    }}
                  >
                    {section.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "#64748b",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {section.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQs ── */}
        <section
          style={{ maxWidth: 760, margin: "0 auto", padding: "5rem 1.5rem" }}
        >
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 800,
              color: "#0f172a",
              textAlign: "center",
              margin: "0 0 2.5rem 0",
            }}
          >
            Frequently Asked Questions
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.75)",
                  border: "1px solid rgba(200,230,160,0.4)",
                  borderRadius: "1rem",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    padding: "1.1rem 1.5rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    textAlign: "left" as const,
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "#0f172a",
                    }}
                  >
                    {faq.q}
                  </span>
                  {openFaq === i ? (
                    <ChevronUp
                      style={{
                        width: 18,
                        height: 18,
                        color: "#16a34a",
                        flexShrink: 0,
                      }}
                    />
                  ) : (
                    <ChevronDown
                      style={{
                        width: 18,
                        height: 18,
                        color: "#94a3b8",
                        flexShrink: 0,
                      }}
                    />
                  )}
                </button>
                {openFaq === i && (
                  <div
                    style={{
                      padding: "0 1.5rem 1.25rem",
                      borderTop: "1px solid #f1f5f9",
                    }}
                  >
                    <p
                      style={{
                        color: "#475569",
                        fontSize: "0.9rem",
                        lineHeight: 1.75,
                        margin: "0.75rem 0 0 0",
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section
          style={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
            padding: "4rem 1.5rem",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 800,
                color: "#fff",
                margin: "0 0 0.75rem 0",
              }}
            >
              Ready to build a world-class customer success strategy?
            </h2>
            <p
              style={{
                color: "#94a3b8",
                fontSize: "1rem",
                margin: "0 0 2rem 0",
                lineHeight: 1.7,
              }}
            >
              Download the free playbook and get proven, data driven strategies
              to reduce churn, drive adoption, and turn your customer success
              team into a revenue engine.
            </p>
            <button
              onClick={() => setShowModal(true)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#a8d97f",
                color: "#0f172a",
                border: "none",
                borderRadius: "0.75rem",
                padding: "0.85rem 2rem",
                fontSize: "0.95rem",
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <Download style={{ width: 16, height: 16 }} />
              Get Free Source
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
