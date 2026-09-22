import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, X, Mail, Eye, EyeOff, LogIn, User as UserIcon, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { ADMIN_NOTIFICATION_EMAIL } from "@/services/emailService";

interface PricingGateProps {
  children: React.ReactNode;
}

/**
 * PricingGate — login gate removed. Pricing is now publicly visible.
 */
const PricingGate = ({ children }: PricingGateProps) => {
  return <>{children}</>;
};

export default PricingGate;
