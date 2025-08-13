import { SEO } from "@/components/SEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Terms = () => {
  return (
    <main>
      <SEO
        title="Terms & Conditions — Supporticon"
        description="Clear guidelines outlining user responsibilities, data usage, and rights for a transparent experience."
        canonicalPath="/terms"
      />

      <section className="container mx-auto px-4 py-16">
        <h1 className="font-display text-4xl font-bold">Terms & Conditions</h1>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Clear guidelines outlining user responsibilities, data usage, and rights for a transparent online experience.
        </p>

        <div className="mt-8 max-w-4xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="introduction" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left text-xl font-semibold py-4 hover:no-underline">
                Introduction
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <p className="text-muted-foreground leading-relaxed">
                  Supporticon is a strategy-first SaaS company focused on elevating customer support through AI-driven automation and seamless platform integration. Our AI assistant, HelpDude, empowers agents—not replaces them—by drafting intelligent replies, surfacing relevant KB and past ticket solutions, and maintaining response consistency. Built to work across systems like Freshdesk and ZohoDesk, HelpDude enhances support efficiency and accuracy. Real-time insights are powered by unencrypted vector processing via Quadrant DB, without storing raw user data or PII. Sensitive data is securely stored in MongoDB Atlas and hosted on AWS with enterprise-grade safeguards. By using Supporticon, you agree to these terms.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="scope" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left text-xl font-semibold py-4 hover:no-underline">
                Scope of Services
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <p className="text-muted-foreground leading-relaxed">
                  Supporticon is a cloud‑deployed, AI‑powered customer support platform that streamlines ticket resolution. Incoming emails are captured and responded to using LLMs (via Ollama) with RAG, backed by vector databases, MongoDB, and Clearly. The platform pulls relevant KB content, internal documentation, and KT notes to generate accurate replies. It supports multi‑channel input, role‑based access, smart filtering, lifecycle tracking, and is designed for high scalability and reliability.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="user-accounts" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left text-xl font-semibold py-4 hover:no-underline">
                User Account Responsibilities
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <ul className="list-disc pl-5 text-muted-foreground space-y-2 leading-relaxed">
                  <li>Keep domain name, API key, username, password, and email ID confidential and secure.</li>
                  <li>Ensure all provided information is accurate and up to date.</li>
                  <li>Report any unauthorized access or suspicious activity immediately.</li>
                </ul>
                <p className="mt-4 text-muted-foreground">Failure to comply may lead to suspension or termination.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="data-practices" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left text-xl font-semibold py-4 hover:no-underline">
                Data Practices
              </AccordionTrigger>
              <AccordionContent className="pb-4 space-y-4">
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
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="user-obligations" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left text-xl font-semibold py-4 hover:no-underline">
                User Obligations and Conduct
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <ul className="list-disc pl-5 text-muted-foreground space-y-2 leading-relaxed">
                  <li>Do not disrupt, damage, or interfere with the platform.</li>
                  <li>Do not share or generate harmful, abusive, unlawful, or infringing content.</li>
                  <li>Do not access or tamper with servers, APIs, databases, or systems without authorization.</li>
                </ul>
                <p className="mt-4 text-muted-foreground">Supporticon may suspend or terminate access for violations.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="compliance" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left text-xl font-semibold py-4 hover:no-underline">
                Compliance Commitment
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <ul className="list-disc pl-5 text-muted-foreground space-y-2 leading-relaxed">
                  <li>GDPR</li>
                  <li>Indian Laws</li>
                  <li>ISO/IEC 27001</li>
                  <li>SOC 2 Type II</li>
                  <li>MongoDB Atlas (GDPR‑compliant)</li>
                  <li>AWS Security & Compliance</li>
                  <li>Quadrant DB (no raw content or PII stored)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="payment" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left text-xl font-semibold py-4 hover:no-underline">
                Payment Processing
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <p className="text-muted-foreground leading-relaxed">
                  Supporticon uses Zeropay as the official payment gateway. We do not store card information; all payment data is handled by Zeropay under their policies.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="indemnification" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left text-xl font-semibold py-4 hover:no-underline">
                Indemnification
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <p className="text-muted-foreground leading-relaxed">
                  Users agree to indemnify and hold harmless Supporticon from claims arising out of platform use, violations of these Terms, or misuse of accounts.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="termination" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left text-xl font-semibold py-4 hover:no-underline">
                Termination of Services
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <p className="text-muted-foreground leading-relaxed">
                  We may suspend or terminate access for violations. Upon termination, all rights and licenses are revoked and use must cease immediately.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="amendments" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left text-xl font-semibold py-4 hover:no-underline">
                Amendments to Terms
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <p className="text-muted-foreground leading-relaxed">
                  We may update these Terms to reflect changes in services, integrations, or legal obligations. Updates are effective upon publication; significant changes will be emailed.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="governing-law" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left text-xl font-semibold py-4 hover:no-underline">
                Governing Law
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <p className="text-muted-foreground leading-relaxed">
                  These Terms are governed by the laws of India. Disputes are subject to the exclusive jurisdiction of Indian courts.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="contact" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left text-xl font-semibold py-4 hover:no-underline">
                Contact Information
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms or compliance, contact <a className="text-primary underline" href="mailto:support@supporticon.com">support@supporticon.com</a>.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </main>
  );
};

export default Terms;
