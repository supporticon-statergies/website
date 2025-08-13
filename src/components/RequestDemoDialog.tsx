import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface RequestDemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type FormValues = {
  name: string;
  phone: string;
  email: string;
};

const RequestDemoDialog: React.FC<RequestDemoDialogProps> = ({ open, onOpenChange }) => {
  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: { name: "", phone: "", email: "" },
  });

  const onSubmit = (values: FormValues) => {
    const subject = "Supporticon Demo Request";
    const body = `Name: ${values.name}\nPhone: ${values.phone}\nEmail: ${values.email}\n`;
    const mailto = `mailto:founder@supporticon.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    try {
      window.location.href = mailto;
      toast.success("Opening your email client to send the request");
      onOpenChange(false);
      reset();
    } catch (e) {
      toast.error("Could not open email client. Please email founder@supporticon.com");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Request a demo</DialogTitle>
          <DialogDescription>
            Enter your details and we'll reach out shortly.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" placeholder="Jane Doe" required {...register("name")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone number</Label>
            <Input id="phone" type="tel" placeholder="+1 555 123 4567" required {...register("phone")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Work email</Label>
            <Input id="email" type="email" placeholder="you@company.com" required {...register("email")} />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="hero">
              Send request
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RequestDemoDialog;
