import {
  Dialog,
  DialogContent,
  DialogClose,
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
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Loader2,
  Send,
  User,
  Mail,
  Phone,
  Building2,
  MessageSquare,
  Briefcase,
  Users,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ── Validation schema ─────────────────────────────────────────────────────────
const PHONE_REGEX = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?[-\s\.]?[0-9]{3,4}[-\s\.]?[0-9]{3,6}$/;

const demoSchema = z.object({
  name: z
    .string()
    .min(2, "Full name must be at least 2 characters.")
    .max(120, "Full name is too long.")
    .trim(),
  email: z
    .string()
    .email("Please enter a valid work email address.")
    .min(1, "Work email is required."),
  company: z
    .string()
    .min(2, "Company name must be at least 2 characters.")
    .max(120, "Company name is too long.")
    .trim(),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || val.trim() === "" || PHONE_REGEX.test(val.trim()),
      "Please enter a valid phone number."
    ),
  jobTitle: z.string().max(100, "Job title is too long.").optional(),
  companySize: z
    .enum(["", "1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"])
    .optional(),
  interest: z
    .enum([
      "",
      "HelpDude Platform",
      "HelpDude for Freshdesk",
      "Manufacturing & Hardware AI",
      "All Products",
      "Custom Enterprise Plan",
    ])
    .optional(),
  message: z
    .string()
    .max(2000, "Message must be under 2000 characters.")
    .optional(),
});

type FormValues = z.infer<typeof demoSchema>;

// ── Props ─────────────────────────────────────────────────────────────────────
interface RequestDemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// ── Helper: field error message ───────────────────────────────────────────────
const FieldError = ({ message }: { message?: string }) =>
  message ? (
    <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
      <AlertCircle className="w-3 h-3 shrink-0" />
      {message}
    </p>
  ) : null;

// ── Select wrapper styled to match Input ─────────────────────────────────────
const StyledSelect = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement> & { hasError?: boolean }
>(({ className, hasError, children, ...props }, ref) => (
  <div className="relative">
    <select
      ref={ref}
      className={cn(
        "w-full appearance-none rounded-xl border border-slate-200 bg-white px-3 pr-9 text-sm h-10 text-slate-800",
        "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
        "transition-colors duration-150",
        "disabled:cursor-not-allowed disabled:opacity-50",
        hasError && "border-red-400 focus:ring-red-200 focus:border-red-400",
        className
      )}
      {...props}
    >
      {children}
    </select>
    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
  </div>
));
StyledSelect.displayName = "StyledSelect";

// ── Main component ────────────────────────────────────────────────────────────
const RequestDemoDialog: React.FC<RequestDemoDialogProps> = ({
  open,
  onOpenChange,
}) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitState, setSubmitState] = React.useState<
    "idle" | "success" | "error"
  >("idle");
  const [serverError, setServerError] = React.useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(demoSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      jobTitle: "",
      companySize: "",
      interest: "",
      message: "",
    },
  });

  const messageValue = watch("message") ?? "";

  // Reset everything when dialog closes
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      // Small delay so animation can finish
      setTimeout(() => {
        reset();
        setSubmitState("idle");
        setServerError("");
      }, 300);
    }
    onOpenChange(open);
  };

  const onSubmit = async (values: FormValues) => {
    if (isSubmitting) return; // prevent duplicate submissions
    setIsSubmitting(true);
    setServerError("");

    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3001";

    try {
      const response = await fetch(`${apiUrl}/api/request-demo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim().toLowerCase(),
          company: values.company.trim(),
          phone: values.phone?.trim() || "",
          jobTitle: values.jobTitle?.trim() || "",
          companySize: values.companySize || "",
          interest: values.interest || "",
          message: values.message?.trim() || "",
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitState("success");
        reset();
      } else if (response.status === 422) {
        // Validation errors from server
        const details: string[] = data.details || [];
        setServerError(
          details.length > 0
            ? details.join(" ")
            : data.error || "Please check your inputs and try again."
        );
        setSubmitState("error");
      } else if (response.status === 429) {
        setServerError(
          "Too many requests. Please wait 15 minutes before trying again."
        );
        setSubmitState("error");
      } else {
        setServerError(
          data.error ||
            "Something went wrong. Please check your details and try again."
        );
        setSubmitState("error");
      }
    } catch (err) {
      // Network error (server down, no internet, etc.)
      console.error("[RequestDemo] Network error:", err);
      setServerError(
        "Unable to reach our server. Please check your connection and try again."
      );
      setSubmitState("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Success state ─────────────────────────────────────────────────────────
  if (submitState === "success") {
    return (
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-md p-0 overflow-hidden rounded-2xl border-0 shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-br from-primary via-primary/90 to-emerald-500 px-6 pt-6 pb-5 text-white">
            <DialogHeader>
              <DialogTitle className="sr-only">Demo Request Sent</DialogTitle>
              <DialogDescription className="sr-only">
                Your demo request has been received.
              </DialogDescription>
            </DialogHeader>
          </div>

          {/* Success body */}
          <div className="px-8 py-10 bg-white flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center mb-5">
              <CheckCircle2 className="w-9 h-9 text-emerald-500" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              Request Received!
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
              Thank you! Your demo request has been received. Our sales team
              will contact you shortly.
            </p>

            <div className="mt-8 w-full space-y-2">
              <Button
                variant="hero"
                className="w-full rounded-xl"
                onClick={() => handleOpenChange(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  // ── Form state ────────────────────────────────────────────────────────────
  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-2xl p-0 overflow-hidden rounded-2xl border-0 shadow-2xl max-h-[95vh] overflow-y-auto">
        {/* Header gradient banner */}
        <div className="bg-gradient-to-br from-primary via-primary/90 to-emerald-500 px-6 pt-6 pb-5 text-white sticky top-0 z-10">
          <div className="flex items-start justify-between">
            <DialogHeader>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <DialogTitle className="text-white text-xl font-bold">
                  Request a Demo
                </DialogTitle>
              </div>
              <DialogDescription className="text-white/80 text-sm">
                Fill in your details and our sales team will reach out within 24
                hours.
              </DialogDescription>
            </DialogHeader>
            <DialogClose className="mt-1 rounded-full w-7 h-7 flex items-center justify-center bg-white/20 hover:bg-white/30 transition-colors text-white shrink-0" aria-label="Close">
              <X className="w-4 h-4" />
            </DialogClose>
          </div>
        </div>

        {/* Form body */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="px-6 py-6 space-y-5 bg-white"
        >
          {/* Row 1: Full Name + Work Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="space-y-1.5">
              <Label
                htmlFor="demo-name"
                className="text-xs font-semibold text-slate-600 flex items-center gap-1.5"
              >
                <User className="w-3.5 h-3.5 text-primary" />
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="demo-name"
                placeholder="Jane Doe"
                autoComplete="name"
                className={cn(
                  "rounded-xl border-slate-200 focus:border-primary text-sm h-10 transition-colors",
                  errors.name && "border-red-400 focus:border-red-400"
                )}
                disabled={isSubmitting}
                {...register("name")}
              />
              <FieldError message={errors.name?.message} />
            </div>

            {/* Work Email */}
            <div className="space-y-1.5">
              <Label
                htmlFor="demo-email"
                className="text-xs font-semibold text-slate-600 flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-primary" />
                Work Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="demo-email"
                type="email"
                placeholder="you@company.com"
                autoComplete="work email"
                className={cn(
                  "rounded-xl border-slate-200 focus:border-primary text-sm h-10 transition-colors",
                  errors.email && "border-red-400 focus:border-red-400"
                )}
                disabled={isSubmitting}
                {...register("email")}
              />
              <FieldError message={errors.email?.message} />
            </div>
          </div>

          {/* Row 2: Company Name + Phone Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Company Name */}
            <div className="space-y-1.5">
              <Label
                htmlFor="demo-company"
                className="text-xs font-semibold text-slate-600 flex items-center gap-1.5"
              >
                <Building2 className="w-3.5 h-3.5 text-primary" />
                Company Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="demo-company"
                placeholder="Acme Corp"
                autoComplete="organization"
                className={cn(
                  "rounded-xl border-slate-200 focus:border-primary text-sm h-10 transition-colors",
                  errors.company && "border-red-400 focus:border-red-400"
                )}
                disabled={isSubmitting}
                {...register("company")}
              />
              <FieldError message={errors.company?.message} />
            </div>

            {/* Phone Number */}
            <div className="space-y-1.5">
              <Label
                htmlFor="demo-phone"
                className="text-xs font-semibold text-slate-600 flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-primary" />
                Phone Number
              </Label>
              <Input
                id="demo-phone"
                type="tel"
                placeholder="+91 98765 43210"
                autoComplete="tel"
                className={cn(
                  "rounded-xl border-slate-200 focus:border-primary text-sm h-10 transition-colors",
                  errors.phone && "border-red-400 focus:border-red-400"
                )}
                disabled={isSubmitting}
                {...register("phone")}
              />
              <FieldError message={errors.phone?.message} />
            </div>
          </div>

          {/* Row 3: Job Title + Company Size */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Job Title */}
            <div className="space-y-1.5">
              <Label
                htmlFor="demo-job-title"
                className="text-xs font-semibold text-slate-600 flex items-center gap-1.5"
              >
                <Briefcase className="w-3.5 h-3.5 text-primary" />
                Job Title
              </Label>
              <Input
                id="demo-job-title"
                placeholder="Head of Customer Support"
                autoComplete="organization-title"
                className="rounded-xl border-slate-200 focus:border-primary text-sm h-10 transition-colors"
                disabled={isSubmitting}
                {...register("jobTitle")}
              />
              <FieldError message={errors.jobTitle?.message} />
            </div>

            {/* Company Size */}
            <div className="space-y-1.5">
              <Label
                htmlFor="demo-company-size"
                className="text-xs font-semibold text-slate-600 flex items-center gap-1.5"
              >
                <Users className="w-3.5 h-3.5 text-primary" />
                Company Size
              </Label>
              <StyledSelect
                id="demo-company-size"
                disabled={isSubmitting}
                hasError={!!errors.companySize}
                {...register("companySize")}
              >
                <option value="">Select company size…</option>
                <option value="1-10">1–10 employees</option>
                <option value="11-50">11–50 employees</option>
                <option value="51-200">51–200 employees</option>
                <option value="201-500">201–500 employees</option>
                <option value="501-1000">501–1,000 employees</option>
                <option value="1000+">1,000+ employees</option>
              </StyledSelect>
              <FieldError message={errors.companySize?.message} />
            </div>
          </div>

          {/* Row 4: Interested In (full width) */}
          <div className="space-y-1.5">
            <Label
              htmlFor="demo-interest"
              className="text-xs font-semibold text-slate-600 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Interested In
            </Label>
            <StyledSelect
              id="demo-interest"
              disabled={isSubmitting}
              hasError={!!errors.interest}
              {...register("interest")}
            >
              <option value="">Select a product…</option>
              <option value="HelpDude Platform">HelpDude Platform (Standalone)</option>
              <option value="HelpDude for Freshdesk">HelpDude for Freshdesk</option>
              <option value="Manufacturing & Hardware AI">
                Manufacturing &amp; Hardware AI
              </option>
              <option value="All Products">All Products</option>
              <option value="Custom Enterprise Plan">Custom Enterprise Plan</option>
            </StyledSelect>
            <FieldError message={errors.interest?.message} />
          </div>

          {/* Row 5: Message (full width) */}
          <div className="space-y-1.5">
            <Label
              htmlFor="demo-message"
              className="text-xs font-semibold text-slate-600 flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-primary" />
              Message / Requirements
            </Label>
            <Textarea
              id="demo-message"
              placeholder="Tell us about your use case, team size, current challenges, or any specific questions…"
              className="rounded-xl border-slate-200 focus:border-primary text-sm resize-none transition-colors"
              rows={4}
              disabled={isSubmitting}
              {...register("message")}
            />
            <div className="flex justify-between items-center">
              <FieldError message={errors.message?.message} />
              <span
                className={cn(
                  "text-xs ml-auto",
                  messageValue.length > 1800
                    ? "text-orange-500"
                    : "text-slate-400"
                )}
              >
                {messageValue.length}/2000
              </span>
            </div>
          </div>

          {/* Server-side error banner */}
          {submitState === "error" && serverError && (
            <div className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
              <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <p className="text-xs text-red-700 leading-relaxed">{serverError}</p>
            </div>
          )}

          {/* Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center pt-1 gap-3 border-t border-slate-100">
            <p className="text-xs text-slate-400 order-2 sm:order-1">
              🔒 Your data is kept confidential and never sold.
            </p>
            <div className="flex gap-2 shrink-0 w-full sm:w-auto order-1 sm:order-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="rounded-xl flex-1 sm:flex-none"
                onClick={() => handleOpenChange(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="hero"
                size="sm"
                className="rounded-xl flex-1 sm:flex-none min-w-[140px]"
                disabled={isSubmitting}
                aria-disabled={isSubmitting}
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
