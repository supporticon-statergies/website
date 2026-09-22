import { toast } from "sonner";

export interface LoginNotificationPayload {
  name: string;
  email: string;
  actionType: "LOGIN" | "SIGNUP";
  company?: string;
  timestamp?: string;
}

// Target Email where notifications are sent
export const ADMIN_NOTIFICATION_EMAIL = "jaimanisa@supporticon.com";

/**
 * Sends a real notification email to jaimanisa@supporticon.com whenever a user logs in or creates an account.
 */
export const sendLoginNotification = async (payload: LoginNotificationPayload): Promise<boolean> => {
  const timestamp = payload.timestamp || new Date().toLocaleString();
  const actionLabel = payload.actionType === "SIGNUP" ? "New Account Created & Logged In" : "User Logged In";

  console.log(`[Email Service] Triggering notification for ${actionLabel}:`, {
    recipient: ADMIN_NOTIFICATION_EMAIL,
    user: payload.name,
    email: payload.email,
    timestamp,
  });

  const subject = `🚨 [Website Alert] ${actionLabel}: ${payload.name} (${payload.email})`;
  const body = 
`Supporticon Website Notification
=========================================
Event: ${actionLabel}
Name: ${payload.name}
Email: ${payload.email}
${payload.company ? `Company: ${payload.company}\n` : ""}Timestamp: ${timestamp}
Page: ${window.location.href}
User Agent: ${navigator.userAgent}
=========================================
This notification was sent to ${ADMIN_NOTIFICATION_EMAIL} automatically upon website login/registration.`;

  let sentSuccessfully = false;

  // Method 1: FormSubmit AJAX API directly targeting jaimanisa@supporticon.com
  try {
    const formSubmitUrl = `https://formsubmit.co/ajax/${encodeURIComponent(ADMIN_NOTIFICATION_EMAIL)}`;
    const response = await fetch(formSubmitUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        _subject: subject,
        message: body,
        company: payload.company || "N/A",
        login_timestamp: timestamp,
        _template: "table",
        _captcha: "false",
      }),
    });

    if (response.ok) {
      sentSuccessfully = true;
      console.log(`[Email Service] Notification successfully delivered to ${ADMIN_NOTIFICATION_EMAIL} via FormSubmit`);
    } else {
      console.warn("[Email Service] FormSubmit returned non-ok status:", response.status);
    }
  } catch (err) {
    console.warn("[Email Service] FormSubmit fetch error:", err);
  }

  // Method 2: Backup Web3Forms Public Gateway (if FormSubmit is blocked or fails)
  if (!sentSuccessfully) {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "08479e0f-90e6-424a-b501-1b9195dfb428", // Public form submission key
          to_email: ADMIN_NOTIFICATION_EMAIL,
          subject: subject,
          from_name: "Supporticon Login Notifier",
          name: payload.name,
          email: payload.email,
          message: body,
        }),
      });

      if (response.ok) {
        sentSuccessfully = true;
        console.log(`[Email Service] Notification sent to ${ADMIN_NOTIFICATION_EMAIL} via Web3Forms`);
      }
    } catch (err) {
      console.warn("[Email Service] Web3Forms fetch error:", err);
    }
  }

  // Method 3: Fallback Mailto Trigger if background HTTP requests are blocked by ad-blocker
  if (!sentSuccessfully) {
    console.warn("[Email Service] Background HTTP providers failed. Attempting mailto dispatch.");
    const mailtoUrl = `mailto:${ADMIN_NOTIFICATION_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    try {
      window.open(mailtoUrl, "_blank");
      sentSuccessfully = true;
    } catch (err) {
      console.error("[Email Service] Mailto fallback error:", err);
    }
  }

  // Display toast feedback to user
  if (sentSuccessfully) {
    toast.success(`Welcome ${payload.name}! Notification sent to ${ADMIN_NOTIFICATION_EMAIL}`, {
      description: `Logged in as ${payload.email}`,
    });
  } else {
    toast.success(`Welcome ${payload.name}!`, {
      description: `Logged in as ${payload.email}`,
    });
  }

  return sentSuccessfully;
};
