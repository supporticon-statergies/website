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
      title: 'Terms of Service (Data & Privacy)',
      content: (
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service describe how Supporticon handles end-user data when you use our applications and integrations. They are intentionally focused on data: what we collect, where it is stored, how it is protected, and when it is deleted. By installing or using our app, you agree to these data and privacy terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Types of Data We Process</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Data Collection</h4>
                <p className="text-muted-foreground">
                  We collect and process only the data needed to operate our app and provide AI-assisted customer support features. This may include:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
                  <li>Name and email address of your users or agents.</li>
                  <li>Helpdesk domain or subdomain (for example, your Freshdesk domain) and configuration details required for integration.</li>
                  <li>Support-related content and metadata (such as tickets, messages, knowledge base content, and similar material) needed to power AI responses.</li>
                  <li>Basic usage and diagnostic information (such as logs and performance metrics) to keep the service reliable and secure.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Purpose of Use</h4>
                <p className="text-muted-foreground">
                  We use this data only to operate, maintain, and improve our app for your company—such as generating AI-assisted responses based solely on your company&apos;s data, surfacing relevant content from your own systems, and securing the service. We do not sell or rent end-user data, we do not use your data to train models that serve other companies, and we do not use it for unrelated advertising or marketing.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Data Storage, Location & Security</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Where Data Is Stored</h4>
                <p className="text-muted-foreground">
                  All end-user data processed by our app, including data in DynamoDB and our vector database, is stored only in Amazon Web Services (AWS) data centers located in India. We do not store end-user data in any other country.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Encryption at Rest</h4>
                <p className="text-muted-foreground">
                  All end-user data stored in AWS services (including DynamoDB and our vector database) is encrypted at rest using AWS-managed encryption with AES-256 or equivalent industry-standard algorithms.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Encryption in Transit</h4>
                <p className="text-muted-foreground">
                  All data transmitted between your systems and our services is encrypted in transit using HTTPS (TLS). We do not permit unencrypted connections for production use.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Data Sharing & Transfers</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Third-Party Sharing</h4>
                <p className="text-muted-foreground">
                  We do not share end-user data with any third-party entities for their own purposes. End-user data is used only within our AWS environment to operate the app and is not sold, rented, or disclosed to external parties, except where we are legally required to do so.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">EEA Data Transfers</h4>
                <p className="text-muted-foreground">
                  We do not transfer end-user data of residents of the European Economic Area (EEA) outside the EEA. Our app is designed so that all stored end-user data remains within AWS India.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Data Retention & Deletion</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Retention</h4>
                <p className="text-muted-foreground">
                  We keep end-user data only for as long as it is needed to provide the app and fulfill the purposes described above, or as required by applicable law.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Uninstall & Account Closure</h4>
                <p className="text-muted-foreground">
                  When you uninstall the app or request closure of your account, we delete or irreversibly anonymize associated end-user data within 30 days, unless we are required by law to retain it for a longer period.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Your Responsibilities</h2>
            <ul className="list-disc pl-5 text-muted-foreground space-y-2 leading-relaxed">
              <li>Provide accurate integration details (such as helpdesk domain and API credentials) and keep them up to date.</li>
              <li>Maintain the security of your accounts, credentials, and access tokens that connect your systems to our app.</li>
              <li>Ensure you have appropriate rights and consents to send end-user data to our app for processing.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the maximum extent permitted by law, Supporticon is not liable for any indirect, incidental, special, or consequential damages arising from the use of our services or from data processing activities carried out in accordance with these Terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Changes to These Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update these Terms from time to time to reflect changes in our services or legal requirements. When we make material changes, we will notify you via in-app notice or email, and your continued use of the app after the effective date constitutes acceptance of the updated Terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Governing Law & Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms are governed by the laws of India, and any disputes will be subject to the exclusive jurisdiction of the courts in India. If you have questions about these Terms or our data handling practices, contact{" "}
              <a className="text-primary underline" href="mailto:founder@supporticon.com">
                founder@supporticon.com
              </a>.
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
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed">
              This Privacy Policy explains how Supporticon collects, uses, stores, and protects end-user data when you use our applications and integrations. It is focused specifically on data handling and security. By installing or using our app, you agree to the practices described here.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Personal Information</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Name and email address of your users or agents.</li>
                  <li>Account identifiers related to your helpdesk or support platform (such as your Freshdesk domain or similar identifiers).</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Support Content & Metadata</h4>
                <p className="text-muted-foreground">
                  To provide AI-assisted responses and recommendations, we process support-related content that you choose to connect to our app. This may include tickets, conversations, knowledge base articles, and similar support data, along with metadata such as timestamps and tags.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Usage Data</h4>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Technical information such as IP address, browser type, device type, and basic diagnostic logs.</li>
                  <li>Interaction data such as which features you use and basic performance metrics, used to keep the service reliable and secure.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Cookies</h4>
                <p className="text-muted-foreground">
                  We may use cookies or similar technologies to maintain sessions, secure access, and understand basic usage. These do not give us access to your other systems or unrelated personal data.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Service Delivery</h4>
                <p className="text-muted-foreground">
                  We operate and maintain our app, including generating AI-assisted replies and suggestions based on the support content and configuration you connect to our service.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Account Management</h4>
                <p className="text-muted-foreground">
                  We use your contact and account information to manage your workspace or integration, authenticate access, and respond to support requests.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Service Improvement</h4>
                <p className="text-muted-foreground">
                  We analyze aggregated usage and diagnostic data to improve performance, stability, and user experience, and to prevent abuse.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Communication</h4>
                <p className="text-muted-foreground">
                  We may send you service-related emails (such as important updates or security notices). Where required, we will obtain your consent for any optional communications, and you can opt out at any time.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Legal Compliance</h4>
                <p className="text-muted-foreground">
                  We may process and retain certain information as necessary to comply with applicable laws, enforce our terms, and protect our rights and the rights of others.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Data Storage and Security</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Data Storage Locations</h4>
                <p className="text-muted-foreground">
                  All end-user data we store is hosted only in Amazon Web Services (AWS) data centers located in India. We do not store end-user data in any other geographic region.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Data Security Measures</h4>
                <p className="text-muted-foreground">
                  All end-user data stored in AWS services (including DynamoDB and our vector database) is encrypted at rest using AWS-managed encryption (AES-256 or equivalent), and all data in transit between your systems and our services is encrypted using HTTPS (TLS). We apply access controls and logging to reduce the risk of unauthorized access.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Data Retention</h4>
                <p className="text-muted-foreground">
                  We retain end-user data only for as long as necessary to provide the app and for other legitimate purposes (such as complying with legal obligations). When you uninstall the app or request closure of your account, we delete or irreversibly anonymize associated end-user data within 30 days, unless a longer retention period is required by law.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Data Sharing and Disclosure</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Third-Party Sharing</h4>
                <p className="text-muted-foreground">
                  We do not share end-user data with third parties for their own independent purposes, and we do not sell or rent end-user data. End-user data is used only within our AWS environment to operate and secure the app, except where disclosure is strictly required by applicable law or legal process.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Legal Obligations and Enforcement</h4>
                <p className="text-muted-foreground">
                  We may disclose information if required to do so by law, regulation, or valid legal request, or if we reasonably believe disclosure is necessary to protect our rights, users, or the public.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Business Transfers</h4>
                <p className="text-muted-foreground">
                  If we are involved in a merger, acquisition, or other corporate transaction, your data may be transferred as part of that transaction. We will continue to protect your data and will notify you of any material changes to how it is handled.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">User Rights and Control</h2>
            <ul className="list-disc pl-5 text-muted-foreground space-y-2 leading-relaxed">
              <li>Access and correction of your account information (such as domain, email address, and configuration details) by contacting us.</li>
              <li>Request deletion or anonymization of end-user data, subject to our legal obligations and technical feasibility.</li>
              <li>Uninstall the app at any time, after which associated end-user data will be deleted or anonymized within 30 days (unless law requires otherwise).</li>
            </ul>
            <p className="mt-4">
              To exercise these rights or ask questions about your data, contact us at{" "}
              <a href="mailto:founder@supporticon.com" className="text-primary underline">
                founder@supporticon.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our app is designed so that all stored end-user data remains in AWS data centers located in India. We do not transfer stored end-user data of European Economic Area (EEA) residents outside the EEA.
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

      <section className="container mx-auto px-4 py-12 md:py-16">
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
