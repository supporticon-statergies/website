import { useState, useEffect } from "react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useSearchParams } from "react-router-dom";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

const Legal = () => {
  const [searchParams] = useSearchParams();
  const [activeSection, setActiveSection] = useState<'terms' | 'privacy'>('terms');

  useEffect(() => {
    const section = searchParams.get('section');
    if (section === 'terms' || section === 'privacy') {
      setActiveSection(section);
    }
  }, [searchParams]);

  // Scroll to top when section changes
  useScrollToTop([activeSection]);

  const sections = [
    {
      id: 'terms',
      title: 'Terms & Conditions',
      content: (
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Supporticon is a strategy-first SaaS company focused on elevating customer support through AI-driven automation and seamless platform integration. Our AI assistant, HelpDude, empowers agents—not replaces them—by drafting intelligent replies, surfacing relevant KB and past ticket solutions, and maintaining response consistency. Built to work across systems like Freshdesk and ZohoDesk, HelpDude enhances support efficiency and accuracy. Real-time insights are powered by unencrypted vector processing via Quadrant DB, without storing raw user data or PII. Sensitive data is securely stored in MongoDB Atlas and hosted on AWS with enterprise-grade safeguards. By using Supporticon, you agree to these terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Scope of Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              Supporticon is a cloud‑deployed, AI‑powered customer support platform that streamlines ticket resolution. Incoming emails are captured and responded to using LLMs (via Ollama) with RAG, backed by vector databases, MongoDB, and Clearly. The platform pulls relevant KB content, internal documentation, and KT notes to generate accurate replies. It supports multi‑channel input, role‑based access, smart filtering, lifecycle tracking, and is designed for high scalability and reliability.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">User Account Responsibilities</h2>
            <ul className="list-disc pl-5 text-muted-foreground space-y-2 leading-relaxed">
              <li>Keep domain name, API key, username, password, and email ID confidential and secure.</li>
              <li>Ensure all provided information is accurate and up to date.</li>
              <li>Report any unauthorized access or suspicious activity immediately.</li>
            </ul>
            <p className="mt-4 text-muted-foreground">Failure to comply may lead to suspension or termination.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Data Practices</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Data Collection</h4>
                <p className="text-muted-foreground">We collect only data essential for operating and improving Supporticon, including domain details, API keys, user credentials, and email IDs.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Data Usage</h4>
                <p className="text-muted-foreground">Data is used solely for delivering services—ticket generation, AI responses, and knowledge suggestions—aligned with GDPR, SOC 2 Type II, ISO/IEC 27001, and applicable Indian regulations.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Data Storage</h4>
                <p className="text-muted-foreground">Sensitive data is stored securely on AWS. MongoDB Atlas stores encrypted credentials and metadata. Quadrant DB handles unencrypted AI vectors without storing PII.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Data Security</h4>
                <p className="text-muted-foreground">We apply enterprise‑grade security (SSL/TLS, encryption at rest, access controls) following AWS Compliance, ISO 27001, and MongoDB Atlas security best practices.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">User Obligations and Conduct</h2>
            <ul className="list-disc pl-5 text-muted-foreground space-y-2 leading-relaxed">
              <li>Do not disrupt, damage, or interfere with the platform.</li>
              <li>Do not share or generate harmful, abusive, unlawful, or infringing content.</li>
              <li>Do not access or tamper with servers, APIs, databases, or systems without authorization.</li>
            </ul>
            <p className="mt-4 text-muted-foreground">Supporticon may suspend or terminate access for violations.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Compliance Commitment</h2>
            <ul className="list-disc pl-5 text-muted-foreground space-y-2 leading-relaxed">
              <li>GDPR</li>
              <li>Indian Laws</li>
              <li>ISO/IEC 27001</li>
              <li>SOC 2 Type II</li>
              <li>MongoDB Atlas (GDPR‑compliant)</li>
              <li>AWS Security & Compliance</li>
              <li>Quadrant DB (no raw content or PII stored)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Payment Processing</h2>
            <p className="text-muted-foreground leading-relaxed">
              Supporticon uses Zeropay as the official payment gateway. We do not store card information; all payment data is handled by Zeropay under their policies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              Users agree to indemnify and hold harmless Supporticon from claims arising out of platform use, violations of these Terms, or misuse of accounts.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Termination of Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may suspend or terminate access for violations. Upon termination, all rights and licenses are revoked and use must cease immediately.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Amendments to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update these Terms to reflect changes in services, integrations, or legal obligations. Updates are effective upon publication; significant changes will be emailed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms are governed by the laws of India. Disputes are subject to the exclusive jurisdiction of Indian courts.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms or compliance, contact <a className="text-primary underline" href="mailto:founder@supporticon.com">founder@supporticon.com</a>.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'privacy',
      title: 'Privacy Policy',
      content: (
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">About Supporticon</h2>
            <p className="text-muted-foreground leading-relaxed">
              Supporticon is a strategy-first SaaS company focused on elevating customer support through AI-driven automation and seamless platform integration. Our AI assistant, HelpDude, empowers agents—not replaces them—by drafting intelligent replies, surfacing relevant KB and past ticket solutions, and maintaining response consistency. Built to work across systems like Freshdesk and ZohoDesk, HelpDude enhances support efficiency and accuracy. Real-time insights are powered by unencrypted vector processing via Quadrant DB, without storing raw user data or PII. Sensitive data is securely stored in MongoDB Atlas and hosted on AWS with enterprise-grade safeguards. This Privacy Policy outlines how we handle your data in accordance with Indian regulatory standards. By using Supporticon, you agree to these terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Personal Information</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Name and contact information (full name, email address, phone number, postal address).</li>
                  <li>Payment information (credit/debit cards, billing details) processed securely via Stripe or Razorpay.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Sensitive Personal Data or Information (SPDI)</h4>
                <p className="text-muted-foreground">
                  In compliance with Indian law, SPDI may include financial information such as bank account or card numbers processed via payment providers (e.g., Razorpay). Such data is handled with heightened safeguards.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Usage Data</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Technical data: IP address, browser type, device specs, operating system.</li>
                  <li>
                    Interaction data: pages visited, features used, session duration. Our AI, powered by Ollama-hosted LLMs, also processes past tickets, KT documents, and KB articles to generate contextual email drafts and suggestions.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Cookies</h4>
                <p className="text-muted-foreground">Cookies help us improve functionality, personalize content, and provide relevant communications.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Service Delivery</h4>
                <p className="text-muted-foreground">
                  We operate and maintain our services, including automated email drafts generated by referencing internal training docs, KB articles, and related materials via LLMs (Ollama) and RAG.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Account Management</h4>
                <p className="text-muted-foreground">We manage your account, verify identity, process payments, and respond to inquiries.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Service Improvement</h4>
                <p className="text-muted-foreground">We analyze usage to enhance performance, functionality, and security.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Communication</h4>
                <p className="text-muted-foreground">With consent, we may send emails and updates about our services. You can opt out anytime.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Legal Compliance</h4>
                <p className="text-muted-foreground">We process data to comply with legal obligations under Indian law, including fraud prevention and security.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Data Storage and Security</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Data Storage Locations</h4>
                <p className="text-muted-foreground">
                  All personal data, including SPDI, is securely stored on AWS (in India or other regions as required). We apply robust encryption, access controls, and continuous monitoring in line with applicable data protection laws.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Data Security Measures</h4>
                <p className="text-muted-foreground">We use encryption, access controls, and regular assessments aligned with the IT Rules, 2011.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Data Retention</h4>
                <p className="text-muted-foreground">We retain data only as long as necessary for stated purposes or legal obligations and review retention periodically.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Data Sharing and Disclosure</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Third-Party Service Providers</h4>
                <p className="text-muted-foreground">
                  We may share data with vetted providers (e.g., Razorpay, AWS, analytics) bound by confidentiality and limited-use agreements.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Legal Obligations and Enforcement</h4>
                <p className="text-muted-foreground">We may disclose information as required by law or valid legal process.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Business Transfers</h4>
                <p className="text-muted-foreground">In a merger, acquisition, or restructuring, data may transfer with notice and continued protection.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">User Rights and Control</h2>
            <ul className="list-disc pl-5 text-muted-foreground space-y-2 leading-relaxed">
              <li>Access and correction of your account data (domain, email, API key, credentials).</li>
              <li>Withdrawal of consent at any time (may limit functionality).</li>
              <li>Purpose-based processing control for AI drafting features.</li>
              <li>Objection to analytics or automated decision-making where permitted by law.</li>
            </ul>
            <p className="mt-4">To exercise rights, contact us at <a href="mailto:founder@supporticon.com" className="text-primary underline">founder@supporticon.com</a>.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              As a globally integrated application, your data may be processed outside India with appropriate safeguards (e.g., standard contractual clauses) consistent with Indian data protection laws.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">We may revise this policy and will notify you of material changes via email or in-app notices.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">For questions or requests, contact <a href="mailto:founder@supporticon.com" className="text-primary underline">founder@supporticon.com</a>.</p>
            <p className="mt-4 text-sm text-muted-foreground">
              Limitation of Liability: To the fullest extent permitted by law, Supporticon is not liable for direct, indirect, incidental, special, or consequential damages arising from the use of our services.
            </p>
          </div>
        </div>
      )
    }
  ];

  const currentSection = sections.find(section => section.id === activeSection);

  return (
    <main>
      <SEO
        title="Legal — Supporticon"
        description="Terms & Conditions and Privacy Policy for Supporticon services."
        canonicalPath="/legal"
      />

      <section className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h1 className="font-display text-4xl font-bold">Legal Information</h1>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Important legal documents outlining our terms of service and privacy practices.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="sticky top-8">
              <div className="bg-card border rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">Legal Documents</h2>
                <div className="space-y-2">
                  {sections.map((section) => (
                    <Button
                      key={section.id}
                      variant={activeSection === section.id ? "default" : "ghost"}
                      className={`w-full justify-start text-left h-auto py-3 px-4 ${
                        activeSection === section.id 
                          ? "bg-primary text-primary-foreground" 
                          : "hover:bg-muted"
                      }`}
                      onClick={() => setActiveSection(section.id as 'terms' | 'privacy')}
                    >
                      <div>
                        <div className="font-medium">{section.title}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1">
            <div className="bg-card border rounded-lg p-8">
              <div className="mb-6">
                <h2 className="text-3xl font-bold">{currentSection?.title}</h2>
                <Separator className="mt-4" />
              </div>
              <div className="prose prose-gray max-w-none">
                {currentSection?.content}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Legal;
