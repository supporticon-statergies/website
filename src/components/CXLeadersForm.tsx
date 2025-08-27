import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Download, Mail, MessageCircle, Linkedin, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

interface CXLeadersFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface FormData {
  fullName: string;
  email: string;
  role: string;
  challenge: string;
  challengeOther?: string;
  connectMethod: string;
}

const challenges = [
  "Reducing support costs",
  "Improving CSAT/NPS", 
  "Reducing agent attrition",
  "Scaling global teams efficiently",
  "Other"
];

const roles = [
  "CX Leader",
  "Vice President", 
  "Director",
  "Manager",
  "Founder",
  "CEO",
  "CTO",
  "CMO"
];

const connectMethods = [
  { value: "linkedin", label: "LinkedIn", icon: Linkedin },
  { value: "email", label: "Email", icon: Mail },
  { value: "whatsapp", label: "WhatsApp", icon: MessageCircle }
];

export const CXLeadersForm = ({ open, onOpenChange }: CXLeadersFormProps) => {
  const [step, setStep] = useState<"form" | "success">("form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    role: "",
    challenge: "",
    challengeOther: "",
    connectMethod: ""
  });
  const { toast } = useToast();

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.role || !formData.challenge || !formData.connectMethod) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const emailContent = `
New CX Leaders Insight Hub Submission

Full Name: ${formData.fullName}
Email: ${formData.email}
Role: ${formData.role}
Biggest CX Challenge: ${formData.challenge}${formData.challenge === "Other" && formData.challengeOther ? ` - ${formData.challengeOther}` : ""}
Preferred Contact Method: ${formData.connectMethod}
Submitted at: ${new Date().toLocaleString()}
      `;

      // Try multiple email services for better reliability
      let emailSent = false;

      // Method 1: Try our own PHP script first
      try {
        const phpResponse = await fetch('/send-email.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            role: formData.role,
            challenge: formData.challenge,
            challengeOther: formData.challengeOther,
            connectMethod: formData.connectMethod
          })
        });

        const phpResult = await phpResponse.json();
        if (phpResponse.ok && phpResult.success) {
          emailSent = true;
          console.log('Email sent via PHP script');
        }
      } catch (error) {
        console.log('PHP script failed:', error);
      }

      // Method 2: Try Formsubmit.co (free and reliable)
      if (!emailSent) {
      try {
        const formSubmitResponse = await fetch('https://formsubmit.co/supp0rtkasupp0rt@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.fullName,
            email: formData.email,
            subject: `CX Leaders Insight Hub - New Submission from ${formData.fullName}`,
            message: emailContent,
            _captcha: 'false',
            _template: 'table'
          })
        });

        if (formSubmitResponse.ok) {
          emailSent = true;
          console.log('Email sent via FormSubmit');
        }
      } catch (error) {
        console.log('FormSubmit failed:', error);
      }
      }

      // Method 3: Try EmailJS as backup
      if (!emailSent) {
        try {
          const emailjsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              service_id: 'default_service',
              template_id: 'template_feedback',
              user_id: 'user_public_key',
              template_params: {
                to_email: 'founder@supporticon.com',
                from_name: formData.fullName,
                from_email: formData.email,
                subject: `CX Leaders Insight Hub - ${formData.fullName}`,
                message: emailContent
              }
            })
          });

          if (emailjsResponse.ok) {
            emailSent = true;
            console.log('Email sent via EmailJS');
          }
        } catch (error) {
          console.log('EmailJS failed:', error);
        }
      }

      // Method 4: Fallback to mailto
      if (!emailSent) {
        const mailtoLink = `mailto:supp0rtkasupp0rt@gmail.com?subject=${encodeURIComponent(`CX Leaders Insight Hub - ${formData.fullName}`)}&body=${encodeURIComponent(emailContent)}`;
        window.open(mailtoLink, '_blank');
        
        toast({
          title: "Email client opened!",
          description: "Please send the email from your email application.",
        });
      } else {
        toast({
          title: "Form submitted successfully!",
          description: "We'll be in touch soon.",
        });
      }

      // Always show success screen
      setStep("success");
      
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownload = () => {
    // Download the FAQ PDF
    const link = document.createElement('a');
    link.href = '/CX-Leaders-FAQ.pdf';
    link.download = 'CX-Leaders-FAQ.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClose = () => {
    setStep("form");
    setFormData({
      fullName: "",
      email: "",
      role: "",
      challenge: "",
      challengeOther: "",
      connectMethod: ""
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        {step === "form" ? (
          <>
            <DialogHeader className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-t-lg -m-6 mb-6">
              <DialogTitle className="text-2xl font-bold bg-brand-gradient bg-clip-text text-transparent font-display">
                CX Leaders Insight Hub
              </DialogTitle>
              <p className="text-muted-foreground font-sans text-base leading-relaxed mt-3">
                Thank you for stopping by! We'd love to share how <span className="font-semibold text-blue-600">HelpDude</span> is <span className="font-semibold text-purple-600">transforming CX</span> for enterprises like yours. Just quick questions ↓
              </p>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sm font-medium">
                  1. Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  2. Email ID <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full"
                />
              </div>

              {/* Role */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">
                  3. Role <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map((role) => (
                      <SelectItem key={role} value={role}>
                        {role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Biggest Challenge */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">
                  4. Biggest CX Challenge Today? <span className="text-red-500">*</span>
                </Label>
                <div className="grid grid-cols-1 gap-2">
                  {challenges.map((challenge) => (
                    <Button
                      key={challenge}
                      type="button"
                      variant={formData.challenge === challenge ? "default" : "outline"}
                      className={`justify-start h-auto p-3 text-left ${
                        formData.challenge === challenge 
                          ? "bg-primary text-primary-foreground" 
                          : "hover:bg-muted"
                      }`}
                      onClick={() => handleInputChange("challenge", challenge)}
                    >
                      {challenge}
                    </Button>
                  ))}
                </div>
                
                {formData.challenge === "Other" && (
                  <Textarea
                    placeholder="Please specify your challenge..."
                    value={formData.challengeOther}
                    onChange={(e) => handleInputChange("challengeOther", e.target.value)}
                    className="mt-2"
                  />
                )}
              </div>

              {/* Connect Method */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">
                  5. Best way to connect post-event <span className="text-red-500">*</span>
                </Label>
                <div className="grid grid-cols-1 gap-2">
                  {connectMethods.map((method) => {
                    const IconComponent = method.icon;
                    return (
                      <Button
                        key={method.value}
                        type="button"
                        variant={formData.connectMethod === method.value ? "default" : "outline"}
                        className={`justify-start h-auto p-3 ${
                          formData.connectMethod === method.value 
                            ? "bg-primary text-primary-foreground" 
                            : "hover:bg-muted"
                        }`}
                        onClick={() => handleInputChange("connectMethod", method.value)}
                      >
                        <IconComponent className="w-4 h-4 mr-2" />
                        {method.label}
                      </Button>
                    );
                  })}
                </div>
              </div>

              <Button 
                type="submit" 
                variant="hero"
                className="w-full text-white border-none shadow-brand"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-6 py-8">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-green-600">Thanks for sharing!</h3>
              <p className="text-muted-foreground">
                We'll send you a personalized 1-pager on how HelpDude can solve {
                  formData.challenge === "Other" && formData.challengeOther 
                    ? formData.challengeOther.toLowerCase()
                    : formData.challenge.toLowerCase()
                }.
              </p>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <p className="font-medium mb-4">
                To get answers for your questions related to HelpDude is here
              </p>
              <Button 
                onClick={handleDownload}
                variant="hero"
                className="text-white border-none shadow-brand"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Now
              </Button>
            </div>

            <Button variant="outline" onClick={handleClose} className="w-full">
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
