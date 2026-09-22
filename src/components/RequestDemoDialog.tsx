import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import * as React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Loader2, Send, User, Mail, Phone, Building2, MessageSquare } from "lucide-react";

interface RequestDemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type FormValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

const SALES_EMAIL = "jaimanisa@supporticon.com";

const RequestDemoDialog: React.FC<RequestDemoDialogProps> = ({
  open,
  onOpenChange,
}) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { name: "", email: "", phone: "", company: "", message: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
      
      if (!accessKey || accessKey === "your_web3forms_access_key_here") {
        console.warn("Web3Forms access key is missing. Using mailto fallback.");
        const subject = encodeURIComponent("Hardware Demo Request");
        const body = encodeURIComponent(
          `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nCompany: ${values.company}\n\nMessage:\n${values.message}\n\n(User is asking for the hardware demo)`
        );
        window.location.href = `mailto:${SALES_EMAIL}?subject=${subject}&body=${body}`;
        toast.success("Opening your email client...", {
          description: "Please send the drafted email to request a demo.",
          duration: 5000,
        });
        onOpenChange(false);
        reset();
        setIsSubmitting(false);
        return;
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Hardware Demo Request from ${values.name}`,
          from_name: "SupportIcon Website",
          name: values.name,
          email: values.email,
          phone: values.phone,
          company: values.company || "Not Provided",
          message: `${values.message}\n\n---\nContext: User is asking for the hardware demo for Manufacturing & Hardware.`,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success("🎉 Demo request sent!", {
          description: "Our sales team will contact you within 24 hours.",
          duration: 5000,
        });
        onOpenChange(false);
        reset();
      } else {
        throw new Error(data.message || "Failed to send email");
      }
    } catch (error) {
      console.error("Email send error:", error);
      toast.error("Failed to send request", {
        description: `Please email us directly at ${SALES_EMAIL}`,
        duration: 6000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg p-0 overflow-hidden rounded-2xl border-0 shadow-2xl">
        {/* Header gradient banner */}
        <div className="bg-gradient-to-br from-primary via-primary/90 to-emerald-500 px-6 pt-6 pb-5 text-white">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Send className="w-4 h-4 text-white" />
              </div>
              <DialogTitle className="text-white text-xl font-bold">
                Request a Demo
              </DialogTitle>
            </div>
            <DialogDescription className="text-white/80 text-sm">
              Fill in your details and our sales team will reach out within 24 hours.
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Form body */}
        <form onSubmit={handleSubmit(onSubmit)} className="px-6 py-5 space-y-4 bg-white">

          {/* Name + Email row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="demo-name" className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-primary" />
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="demo-name"
                placeholder="Jane Doe"
                className="rounded-xl border-slate-200 focus:border-primary text-sm h-10"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-xs text-red-500">Name is required</p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="demo-email" className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-primary" />
                Work Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="demo-email"
                type="email"
                placeholder="you@company.com"
                className="rounded-xl border-slate-200 focus:border-primary text-sm h-10"
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
              />
              {errors.email && (
                <p className="text-xs text-red-500">Valid email is required</p>
              )}
            </div>
          </div>

          {/* Phone + Company row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="demo-phone" className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-primary" />
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <Input
                id="demo-phone"
                type="tel"
                placeholder="+91 98765 43210"
                className="rounded-xl border-slate-200 focus:border-primary text-sm h-10"
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <p className="text-xs text-red-500">Phone is required</p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="demo-company" className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-primary" />
                Company Name
              </Label>
              <Input
                id="demo-company"
                placeholder="Acme Corp"
                className="rounded-xl border-slate-200 focus:border-primary text-sm h-10"
                {...register("company")}
              />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <Label htmlFor="demo-message" className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-primary" />
              What are you looking to solve?
            </Label>
            <Textarea
              id="demo-message"
              placeholder="Tell us about your use case or any specific questions..."
              className="rounded-xl border-slate-200 focus:border-primary text-sm resize-none"
              rows={3}
              {...register("message")}
            />
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center pt-1 gap-3">
            <p className="text-xs text-slate-400">
              📧 Notification sent to <span className="font-medium text-slate-600">jaimanisa@supporticon.com</span>
            </p>
            <div className="flex gap-2 shrink-0">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="rounded-xl"
                onClick={() => onOpenChange(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="hero"
                size="sm"
                className="rounded-xl min-w-[120px]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 mr-1.5" />
                    Send Request
                  </>
                )}
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RequestDemoDialog;
