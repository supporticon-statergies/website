import { StaggerContainer, StaggerItem, HoverCard } from "@/components/ui/motion-utils";

export const RobotCards = () => {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #22D6C4 0%, #12b3a4 100%)",
        backgroundImage:
          "radial-gradient(circle at 10% 15%, rgba(255,255,255,0.08) 0, transparent 40%), radial-gradient(circle at 90% 85%, rgba(255,255,255,0.08) 0, transparent 40%)",
        padding: "48px 24px 64px",
      }}
    >
      {/* Top strip */}
      <div
        style={{
          textAlign: "center",
          color: "rgba(20,32,51,0.75)",
          fontSize: "13px",
          letterSpacing: "0.3px",
          marginBottom: "28px",
          fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif",
        }}
      >
        Swipe wisely, spend smart — see what Aspire can do for you
      </div>

      <StaggerContainer
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {/* CARD 1 — Personality / character */}
        <StaggerItem>
          <HoverCard>
            <div
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "20px 22px 26px",
                position: "relative",
                boxShadow: "0 18px 30px -18px rgba(0,0,0,0.35)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                minHeight: "420px",
                fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif",
              }}
            >
              <div style={{ width: "100%", height: "165px", position: "relative", display: "flex", alignItems: "flex-end", justifyContent: "center", marginBottom: "6px", overflow: "visible" }}>
                <svg style={{ position: "absolute", width: "30px", height: "30px", top: "2px", left: "6px" }} viewBox="0 0 24 24" fill="none">
                  <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="#FFC93C"/>
                </svg>
                <svg style={{ position: "absolute", width: "20px", height: "20px", top: "18px", right: "2px" }} viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="4" fill="#FF6F5E"/>
                </svg>
                <svg width="132" viewBox="0 0 140 176" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
                  <ellipse cx="70" cy="168" rx="38" ry="6" fill="#000" opacity="0.08"/>
                  <ellipse cx="54" cy="156" rx="16" ry="10" fill="#B9C4EE" stroke="#142033" strokeWidth="2.5"/>
                  <ellipse cx="86" cy="156" rx="16" ry="10" fill="#B9C4EE" stroke="#142033" strokeWidth="2.5"/>
                  <rect x="44" y="128" width="20" height="30" rx="8" fill="#EAF3FF" stroke="#142033" strokeWidth="2.5"/>
                  <rect x="76" y="128" width="20" height="30" rx="8" fill="#EAF3FF" stroke="#142033" strokeWidth="2.5"/>
                  <line x1="44" y1="140" x2="64" y2="140" stroke="#142033" strokeWidth="2"/>
                  <line x1="76" y1="140" x2="96" y2="140" stroke="#142033" strokeWidth="2"/>
                  <rect x="34" y="96" width="72" height="48" rx="24" fill="#EAF3FF" stroke="#142033" strokeWidth="3"/>
                  <path d="M62 108 c-5-7-17-3-14 5 c2 7 14 12 14 12 s12-5 14-12 c3-8-9-12-14-5z" fill="#FF6F5E"/>
                  <circle cx="88" cy="110" r="4" fill="#FFC93C" stroke="#142033" strokeWidth="1.5"/>
                  <circle cx="88" cy="122" r="4" fill="#8FD9A8" stroke="#142033" strokeWidth="1.5"/>
                  <circle cx="34" cy="108" r="13" fill="#B9C4EE" stroke="#142033" strokeWidth="2.5"/>
                  <circle cx="106" cy="108" r="13" fill="#B9C4EE" stroke="#142033" strokeWidth="2.5"/>
                  <path d="M34 118 Q20 128 26 144" stroke="#B9C4EE" strokeWidth="14" strokeLinecap="round" fill="none"/>
                  <circle cx="27" cy="146" r="9" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <path d="M106 104 Q124 86 118 62" stroke="#B9C4EE" strokeWidth="14" strokeLinecap="round" fill="none"/>
                  <circle cx="118" cy="56" r="12" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <line x1="112" y1="46" x2="110" y2="39" stroke="#142033" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="118" y1="44" x2="118" y2="37" stroke="#142033" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="124" y1="46" x2="127" y2="39" stroke="#142033" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="133" y1="38" x2="138" y2="32" stroke="#FF6F5E" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="136" y1="52" x2="141" y2="52" stroke="#FF6F5E" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="133" y1="64" x2="138" y2="70" stroke="#FF6F5E" strokeWidth="3" strokeLinecap="round"/>
                  <rect x="25" y="20" width="90" height="82" rx="28" fill="#EAF3FF" stroke="#142033" strokeWidth="3.5"/>
                  <rect x="33" y="30" width="74" height="60" rx="20" fill="#FFFFFF" stroke="#142033" strokeWidth="2"/>
                  <circle cx="18" cy="64" r="10" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <circle cx="122" cy="64" r="10" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <ellipse cx="40" cy="70" rx="9" ry="6" fill="#FF6F5E" opacity="0.35"/>
                  <ellipse cx="100" cy="70" rx="9" ry="6" fill="#FF6F5E" opacity="0.35"/>
                  <circle cx="54" cy="60" r="13" fill="#142033"/>
                  <circle cx="86" cy="60" r="13" fill="#142033"/>
                  <circle cx="58" cy="55" r="4" fill="#fff"/>
                  <circle cx="90" cy="55" r="4" fill="#fff"/>
                  <circle cx="50" cy="65" r="2" fill="#fff"/>
                  <circle cx="82" cy="65" r="2" fill="#fff"/>
                  <path d="M60 80 Q70 88 80 80" stroke="#142033" strokeWidth="4" fill="none" strokeLinecap="round"/>
                  <rect x="66" y="4" width="8" height="18" rx="4" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <circle cx="70" cy="6" r="10" fill="#FF6F5E" stroke="#142033" strokeWidth="2.5"/>
                  <circle cx="67" cy="3" r="2.5" fill="#fff" opacity="0.8"/>
                </svg>
              </div>
              <h3 style={{ fontSize: "15px", lineHeight: "1.35", color: "#142033", fontWeight: 700, margin: "6px 0 8px", letterSpacing: "0.2px" }}>
                HOW IS YOUR CHARACTER WHEN USING A CREDIT CARD?
              </h3>
              <p style={{ fontSize: "12.5px", lineHeight: "1.5", color: "#5b6b7a", margin: 0, maxWidth: "210px" }}>
                Find out how your personality is using a credit card.
              </p>
            </div>
          </HoverCard>
        </StaggerItem>

        {/* CARD 2 — Special promo / gift */}
        <StaggerItem>
          <HoverCard>
            <div
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "20px 22px 26px",
                position: "relative",
                boxShadow: "0 18px 30px -18px rgba(0,0,0,0.35)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                minHeight: "420px",
                fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif",
              }}
            >
              <div style={{ width: "100%", height: "165px", position: "relative", display: "flex", alignItems: "flex-end", justifyContent: "center", marginBottom: "6px", overflow: "visible" }}>
                <svg style={{ position: "absolute", width: "30px", height: "30px", top: "0px", left: "10px" }} viewBox="0 0 24 24" fill="none">
                  <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="#FF6F5E"/>
                </svg>
                <svg width="132" viewBox="0 0 140 176" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
                  <ellipse cx="70" cy="168" rx="38" ry="6" fill="#000" opacity="0.08"/>
                  <ellipse cx="54" cy="156" rx="16" ry="10" fill="#B9C4EE" stroke="#142033" strokeWidth="2.5"/>
                  <ellipse cx="86" cy="156" rx="16" ry="10" fill="#B9C4EE" stroke="#142033" strokeWidth="2.5"/>
                  <rect x="44" y="128" width="20" height="30" rx="8" fill="#EAF3FF" stroke="#142033" strokeWidth="2.5"/>
                  <rect x="76" y="128" width="20" height="30" rx="8" fill="#EAF3FF" stroke="#142033" strokeWidth="2.5"/>
                  <line x1="44" y1="140" x2="64" y2="140" stroke="#142033" strokeWidth="2"/>
                  <line x1="76" y1="140" x2="96" y2="140" stroke="#142033" strokeWidth="2"/>
                  <rect x="34" y="96" width="72" height="48" rx="24" fill="#EAF3FF" stroke="#142033" strokeWidth="3"/>
                  <path d="M62 108 c-5-7-17-3-14 5 c2 7 14 12 14 12 s12-5 14-12 c3-8-9-12-14-5z" fill="#12b3a4"/>
                  <circle cx="88" cy="110" r="4" fill="#FFC93C" stroke="#142033" strokeWidth="1.5"/>
                  <circle cx="88" cy="122" r="4" fill="#8FD9A8" stroke="#142033" strokeWidth="1.5"/>
                  <circle cx="34" cy="108" r="13" fill="#B9C4EE" stroke="#142033" strokeWidth="2.5"/>
                  <circle cx="106" cy="108" r="13" fill="#B9C4EE" stroke="#142033" strokeWidth="2.5"/>
                  <path d="M34 118 Q20 128 26 144" stroke="#B9C4EE" strokeWidth="14" strokeLinecap="round" fill="none"/>
                  <circle cx="27" cy="146" r="9" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <path d="M106 104 Q124 86 118 62" stroke="#B9C4EE" strokeWidth="14" strokeLinecap="round" fill="none"/>
                  <circle cx="118" cy="56" r="12" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <line x1="112" y1="46" x2="110" y2="39" stroke="#142033" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="118" y1="44" x2="118" y2="37" stroke="#142033" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="124" y1="46" x2="127" y2="39" stroke="#142033" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="133" y1="38" x2="138" y2="32" stroke="#12b3a4" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="136" y1="52" x2="141" y2="52" stroke="#12b3a4" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="133" y1="64" x2="138" y2="70" stroke="#12b3a4" strokeWidth="3" strokeLinecap="round"/>
                  <rect x="25" y="20" width="90" height="82" rx="28" fill="#EAF3FF" stroke="#142033" strokeWidth="3.5"/>
                  <rect x="33" y="30" width="74" height="60" rx="20" fill="#FFFFFF" stroke="#142033" strokeWidth="2"/>
                  <circle cx="18" cy="64" r="10" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <circle cx="122" cy="64" r="10" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <ellipse cx="40" cy="70" rx="9" ry="6" fill="#12b3a4" opacity="0.35"/>
                  <ellipse cx="100" cy="70" rx="9" ry="6" fill="#12b3a4" opacity="0.35"/>
                  <circle cx="54" cy="60" r="13" fill="#142033"/>
                  <circle cx="86" cy="60" r="13" fill="#142033"/>
                  <circle cx="58" cy="55" r="4" fill="#fff"/>
                  <circle cx="90" cy="55" r="4" fill="#fff"/>
                  <circle cx="50" cy="65" r="2" fill="#fff"/>
                  <circle cx="82" cy="65" r="2" fill="#fff"/>
                  <path d="M60 80 Q70 88 80 80" stroke="#142033" strokeWidth="4" fill="none" strokeLinecap="round"/>
                  <rect x="66" y="4" width="8" height="18" rx="4" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <circle cx="70" cy="6" r="10" fill="#12b3a4" stroke="#142033" strokeWidth="2.5"/>
                  <circle cx="67" cy="3" r="2.5" fill="#fff" opacity="0.8"/>
                </svg>
              </div>
              <h3 style={{ fontSize: "15px", lineHeight: "1.35", color: "#142033", fontWeight: 700, margin: "6px 0 8px", letterSpacing: "0.2px" }}>
                GET SPECIAL PROMO FOR ASPIRE CREDIT CARD USERS
              </h3>
              <p style={{ fontSize: "12.5px", lineHeight: "1.5", color: "#5b6b7a", margin: 0, maxWidth: "210px" }}>
                This is the reason for you to apply and use our credit card.
              </p>
            </div>
          </HoverCard>
        </StaggerItem>

        {/* CARD 3 — Better cashflow */}
        <StaggerItem>
          <HoverCard>
            <div
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "20px 22px 26px",
                position: "relative",
                boxShadow: "0 18px 30px -18px rgba(0,0,0,0.35)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                minHeight: "420px",
                fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif",
              }}
            >
              <div style={{ width: "100%", height: "165px", position: "relative", display: "flex", alignItems: "flex-end", justifyContent: "center", marginBottom: "6px", overflow: "visible" }}>
                <svg style={{ position: "absolute", width: "30px", height: "30px", top: "4px", right: "10px" }} viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="#FFC93C" strokeWidth="3"/>
                  <text x="12" y="16" fontSize="11" textAnchor="middle" fill="#FFC93C" fontFamily="Arial" fontWeight="bold">$</text>
                </svg>
                <svg width="132" viewBox="0 0 140 176" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
                  <ellipse cx="70" cy="168" rx="38" ry="6" fill="#000" opacity="0.08"/>
                  <ellipse cx="54" cy="156" rx="16" ry="10" fill="#B9C4EE" stroke="#142033" strokeWidth="2.5"/>
                  <ellipse cx="86" cy="156" rx="16" ry="10" fill="#B9C4EE" stroke="#142033" strokeWidth="2.5"/>
                  <rect x="44" y="128" width="20" height="30" rx="8" fill="#EAF3FF" stroke="#142033" strokeWidth="2.5"/>
                  <rect x="76" y="128" width="20" height="30" rx="8" fill="#EAF3FF" stroke="#142033" strokeWidth="2.5"/>
                  <line x1="44" y1="140" x2="64" y2="140" stroke="#142033" strokeWidth="2"/>
                  <line x1="76" y1="140" x2="96" y2="140" stroke="#142033" strokeWidth="2"/>
                  <rect x="34" y="96" width="72" height="48" rx="24" fill="#EAF3FF" stroke="#142033" strokeWidth="3"/>
                  <path d="M62 108 c-5-7-17-3-14 5 c2 7 14 12 14 12 s12-5 14-12 c3-8-9-12-14-5z" fill="#FFC93C"/>
                  <circle cx="88" cy="110" r="4" fill="#FFC93C" stroke="#142033" strokeWidth="1.5"/>
                  <circle cx="88" cy="122" r="4" fill="#8FD9A8" stroke="#142033" strokeWidth="1.5"/>
                  <circle cx="34" cy="108" r="13" fill="#B9C4EE" stroke="#142033" strokeWidth="2.5"/>
                  <circle cx="106" cy="108" r="13" fill="#B9C4EE" stroke="#142033" strokeWidth="2.5"/>
                  <path d="M34 118 Q20 128 26 144" stroke="#B9C4EE" strokeWidth="14" strokeLinecap="round" fill="none"/>
                  <circle cx="27" cy="146" r="9" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <path d="M106 104 Q124 86 118 62" stroke="#B9C4EE" strokeWidth="14" strokeLinecap="round" fill="none"/>
                  <circle cx="118" cy="56" r="12" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <line x1="112" y1="46" x2="110" y2="39" stroke="#142033" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="118" y1="44" x2="118" y2="37" stroke="#142033" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="124" y1="46" x2="127" y2="39" stroke="#142033" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="133" y1="38" x2="138" y2="32" stroke="#FFC93C" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="136" y1="52" x2="141" y2="52" stroke="#FFC93C" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="133" y1="64" x2="138" y2="70" stroke="#FFC93C" strokeWidth="3" strokeLinecap="round"/>
                  <rect x="25" y="20" width="90" height="82" rx="28" fill="#EAF3FF" stroke="#142033" strokeWidth="3.5"/>
                  <rect x="33" y="30" width="74" height="60" rx="20" fill="#FFFFFF" stroke="#142033" strokeWidth="2"/>
                  <circle cx="18" cy="64" r="10" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <circle cx="122" cy="64" r="10" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <ellipse cx="40" cy="70" rx="9" ry="6" fill="#FFC93C" opacity="0.35"/>
                  <ellipse cx="100" cy="70" rx="9" ry="6" fill="#FFC93C" opacity="0.35"/>
                  <circle cx="54" cy="60" r="13" fill="#142033"/>
                  <circle cx="86" cy="60" r="13" fill="#142033"/>
                  <circle cx="58" cy="55" r="4" fill="#fff"/>
                  <circle cx="90" cy="55" r="4" fill="#fff"/>
                  <circle cx="50" cy="65" r="2" fill="#fff"/>
                  <circle cx="82" cy="65" r="2" fill="#fff"/>
                  <path d="M60 80 Q70 88 80 80" stroke="#142033" strokeWidth="4" fill="none" strokeLinecap="round"/>
                  <rect x="66" y="4" width="8" height="18" rx="4" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <circle cx="70" cy="6" r="10" fill="#FFC93C" stroke="#142033" strokeWidth="2.5"/>
                  <circle cx="67" cy="3" r="2.5" fill="#fff" opacity="0.8"/>
                </svg>
              </div>
              <h3 style={{ fontSize: "15px", lineHeight: "1.35", color: "#142033", fontWeight: 700, margin: "6px 0 8px", letterSpacing: "0.2px" }}>
                BETTER CASHFLOW WITH ASPIRE CREDIT CARDS
              </h3>
              <p style={{ fontSize: "12.5px", lineHeight: "1.5", color: "#5b6b7a", margin: 0, maxWidth: "210px" }}>
                Go easy with a simpler digital credit card.
              </p>
            </div>
          </HoverCard>
        </StaggerItem>

        {/* CARD 4 — Security / fraud protection */}
        <StaggerItem>
          <HoverCard>
            <div
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "20px 22px 26px",
                position: "relative",
                boxShadow: "0 18px 30px -18px rgba(0,0,0,0.35)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                minHeight: "420px",
                fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif",
              }}
            >
              <div style={{ width: "100%", height: "165px", position: "relative", display: "flex", alignItems: "flex-end", justifyContent: "center", marginBottom: "6px", overflow: "visible" }}>
                <svg style={{ position: "absolute", width: "30px", height: "30px", top: "2px", left: "8px" }} viewBox="0 0 24 24" fill="none">
                  <path d="M12 2 L20 5 V11 C20 16 16.5 20 12 22 C7.5 20 4 16 4 11 V5 Z" fill="#4C8DFF"/>
                  <path d="M8.5 12 L10.8 14.3 L15.5 9" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg style={{ position: "absolute", width: "18px", height: "18px", top: "20px", right: "4px" }} viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="4" fill="#FF6F5E"/>
                </svg>
                <svg width="132" viewBox="0 0 140 176" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
                  <ellipse cx="70" cy="168" rx="38" ry="6" fill="#000" opacity="0.08"/>
                  <ellipse cx="54" cy="156" rx="16" ry="10" fill="#B9C4EE" stroke="#142033" strokeWidth="2.5"/>
                  <ellipse cx="86" cy="156" rx="16" ry="10" fill="#B9C4EE" stroke="#142033" strokeWidth="2.5"/>
                  <rect x="44" y="128" width="20" height="30" rx="8" fill="#EAF3FF" stroke="#142033" strokeWidth="2.5"/>
                  <rect x="76" y="128" width="20" height="30" rx="8" fill="#EAF3FF" stroke="#142033" strokeWidth="2.5"/>
                  <line x1="44" y1="140" x2="64" y2="140" stroke="#142033" strokeWidth="2"/>
                  <line x1="76" y1="140" x2="96" y2="140" stroke="#142033" strokeWidth="2"/>
                  <rect x="34" y="96" width="72" height="48" rx="24" fill="#EAF3FF" stroke="#142033" strokeWidth="3"/>
                  <path d="M62 104 L74 108 L74 118 C74 126 68 131 62 133 C56 131 50 126 50 118 L50 108 Z" fill="#4C8DFF"/>
                  <path d="M55 118 L60 123 L69 111" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="88" cy="110" r="4" fill="#FFC93C" stroke="#142033" strokeWidth="1.5"/>
                  <circle cx="88" cy="122" r="4" fill="#8FD9A8" stroke="#142033" strokeWidth="1.5"/>
                  <circle cx="34" cy="108" r="13" fill="#B9C4EE" stroke="#142033" strokeWidth="2.5"/>
                  <circle cx="106" cy="108" r="13" fill="#B9C4EE" stroke="#142033" strokeWidth="2.5"/>
                  <path d="M34 118 Q20 128 26 144" stroke="#B9C4EE" strokeWidth="14" strokeLinecap="round" fill="none"/>
                  <circle cx="27" cy="146" r="9" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <path d="M106 104 Q124 86 118 62" stroke="#B9C4EE" strokeWidth="14" strokeLinecap="round" fill="none"/>
                  <circle cx="118" cy="56" r="12" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <line x1="112" y1="46" x2="110" y2="39" stroke="#142033" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="118" y1="44" x2="118" y2="37" stroke="#142033" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="124" y1="46" x2="127" y2="39" stroke="#142033" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="133" y1="38" x2="138" y2="32" stroke="#4C8DFF" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="136" y1="52" x2="141" y2="52" stroke="#4C8DFF" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="133" y1="64" x2="138" y2="70" stroke="#4C8DFF" strokeWidth="3" strokeLinecap="round"/>
                  <rect x="25" y="20" width="90" height="82" rx="28" fill="#EAF3FF" stroke="#142033" strokeWidth="3.5"/>
                  <rect x="33" y="30" width="74" height="60" rx="20" fill="#FFFFFF" stroke="#142033" strokeWidth="2"/>
                  <circle cx="18" cy="64" r="10" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <circle cx="122" cy="64" r="10" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <ellipse cx="40" cy="70" rx="9" ry="6" fill="#4C8DFF" opacity="0.35"/>
                  <ellipse cx="100" cy="70" rx="9" ry="6" fill="#4C8DFF" opacity="0.35"/>
                  <circle cx="54" cy="60" r="13" fill="#142033"/>
                  <circle cx="86" cy="60" r="13" fill="#142033"/>
                  <circle cx="58" cy="55" r="4" fill="#fff"/>
                  <circle cx="90" cy="55" r="4" fill="#fff"/>
                  <circle cx="50" cy="65" r="2" fill="#fff"/>
                  <circle cx="82" cy="65" r="2" fill="#fff"/>
                  <path d="M60 80 Q70 88 80 80" stroke="#142033" strokeWidth="4" fill="none" strokeLinecap="round"/>
                  <rect x="66" y="4" width="8" height="18" rx="4" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <circle cx="70" cy="6" r="10" fill="#4C8DFF" stroke="#142033" strokeWidth="2.5"/>
                  <circle cx="67" cy="3" r="2.5" fill="#fff" opacity="0.8"/>
                </svg>
              </div>
              <h3 style={{ fontSize: "15px", lineHeight: "1.35", color: "#142033", fontWeight: 700, margin: "6px 0 8px", letterSpacing: "0.2px" }}>
                STAY PROTECTED WITH SMART FRAUD ALERTS
              </h3>
              <p style={{ fontSize: "12.5px", lineHeight: "1.5", color: "#5b6b7a", margin: 0, maxWidth: "210px" }}>
                Real-time monitoring and instant lock keep your account safe 24/7.
              </p>
            </div>
          </HoverCard>
        </StaggerItem>
      </StaggerContainer>

      <StaggerContainer
        className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-12"
        style={{ maxWidth: "1100px", margin: "48px auto 0" }}
      >
        {/* CARD 1 — Personality / character */}
        <StaggerItem>
          <HoverCard>
            <div
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "20px 22px 26px",
                position: "relative",
                boxShadow: "0 18px 30px -18px rgba(0,0,0,0.35)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                minHeight: "420px",
                fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif",
              }}
            >
              <div style={{ width: "100%", height: "165px", position: "relative", display: "flex", alignItems: "flex-end", justifyContent: "center", marginBottom: "6px", overflow: "visible" }}>
                <svg style={{ position: "absolute", width: "30px", height: "30px", top: "2px", left: "6px" }} viewBox="0 0 24 24" fill="none">
                  <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="#FFC93C"/>
                </svg>
                <svg style={{ position: "absolute", width: "20px", height: "20px", top: "18px", right: "2px" }} viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="4" fill="#FF6F5E"/>
                </svg>
                <svg width="132" viewBox="0 0 140 176" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
                  <ellipse cx="70" cy="168" rx="38" ry="6" fill="#000" opacity="0.08"/>
                  <ellipse cx="54" cy="156" rx="16" ry="10" fill="#B9C4EE" stroke="#142033" strokeWidth="2.5"/>
                  <ellipse cx="86" cy="156" rx="16" ry="10" fill="#B9C4EE" stroke="#142033" strokeWidth="2.5"/>
                  <rect x="44" y="128" width="20" height="30" rx="8" fill="#EAF3FF" stroke="#142033" strokeWidth="2.5"/>
                  <rect x="76" y="128" width="20" height="30" rx="8" fill="#EAF3FF" stroke="#142033" strokeWidth="2.5"/>
                  <line x1="44" y1="140" x2="64" y2="140" stroke="#142033" strokeWidth="2"/>
                  <line x1="76" y1="140" x2="96" y2="140" stroke="#142033" strokeWidth="2"/>
                  <rect x="34" y="96" width="72" height="48" rx="24" fill="#EAF3FF" stroke="#142033" strokeWidth="3"/>
                  <path d="M62 108 c-5-7-17-3-14 5 c2 7 14 12 14 12 s12-5 14-12 c3-8-9-12-14-5z" fill="#FF6F5E"/>
                  <circle cx="88" cy="110" r="4" fill="#FFC93C" stroke="#142033" strokeWidth="1.5"/>
                  <circle cx="88" cy="122" r="4" fill="#8FD9A8" stroke="#142033" strokeWidth="1.5"/>
                  <circle cx="34" cy="108" r="13" fill="#B9C4EE" stroke="#142033" strokeWidth="2.5"/>
                  <circle cx="106" cy="108" r="13" fill="#B9C4EE" stroke="#142033" strokeWidth="2.5"/>
                  <path d="M34 118 Q20 128 26 144" stroke="#B9C4EE" strokeWidth="14" strokeLinecap="round" fill="none"/>
                  <circle cx="27" cy="146" r="9" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <path d="M106 104 Q124 86 118 62" stroke="#B9C4EE" strokeWidth="14" strokeLinecap="round" fill="none"/>
                  <circle cx="118" cy="56" r="12" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <line x1="112" y1="46" x2="110" y2="39" stroke="#142033" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="118" y1="44" x2="118" y2="37" stroke="#142033" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="124" y1="46" x2="127" y2="39" stroke="#142033" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="133" y1="38" x2="138" y2="32" stroke="#FF6F5E" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="136" y1="52" x2="141" y2="52" stroke="#FF6F5E" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="133" y1="64" x2="138" y2="70" stroke="#FF6F5E" strokeWidth="3" strokeLinecap="round"/>
                  <rect x="25" y="20" width="90" height="82" rx="28" fill="#EAF3FF" stroke="#142033" strokeWidth="3.5"/>
                  <rect x="33" y="30" width="74" height="60" rx="20" fill="#FFFFFF" stroke="#142033" strokeWidth="2"/>
                  <circle cx="18" cy="64" r="10" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <circle cx="122" cy="64" r="10" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <ellipse cx="40" cy="70" rx="9" ry="6" fill="#FF6F5E" opacity="0.35"/>
                  <ellipse cx="100" cy="70" rx="9" ry="6" fill="#FF6F5E" opacity="0.35"/>
                  <circle cx="54" cy="60" r="13" fill="#142033"/>
                  <circle cx="86" cy="60" r="13" fill="#142033"/>
                  <circle cx="58" cy="55" r="4" fill="#fff"/>
                  <circle cx="90" cy="55" r="4" fill="#fff"/>
                  <circle cx="50" cy="65" r="2" fill="#fff"/>
                  <circle cx="82" cy="65" r="2" fill="#fff"/>
                  <path d="M60 80 Q70 88 80 80" stroke="#142033" strokeWidth="4" fill="none" strokeLinecap="round"/>
                  <rect x="66" y="4" width="8" height="18" rx="4" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <circle cx="70" cy="6" r="10" fill="#FF6F5E" stroke="#142033" strokeWidth="2.5"/>
                  <circle cx="67" cy="3" r="2.5" fill="#fff" opacity="0.8"/>
                </svg>
              </div>
              <h3 style={{ fontSize: "15px", lineHeight: "1.35", color: "#142033", fontWeight: 700, margin: "6px 0 8px", letterSpacing: "0.2px" }}>
                HOW IS YOUR CHARACTER WHEN USING A CREDIT CARD?
              </h3>
              <p style={{ fontSize: "12.5px", lineHeight: "1.5", color: "#5b6b7a", margin: 0, maxWidth: "210px" }}>
                Find out how your personality is using a credit card.
              </p>
            </div>
          </HoverCard>
        </StaggerItem>

        {/* CARD 2 — Special promo / gift */}
        <StaggerItem>
          <HoverCard>
            <div
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "20px 22px 26px",
                position: "relative",
                boxShadow: "0 18px 30px -18px rgba(0,0,0,0.35)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                minHeight: "420px",
                fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif",
              }}
            >
              <div style={{ width: "100%", height: "165px", position: "relative", display: "flex", alignItems: "flex-end", justifyContent: "center", marginBottom: "6px", overflow: "visible" }}>
                <svg style={{ position: "absolute", width: "30px", height: "30px", top: "0px", left: "10px" }} viewBox="0 0 24 24" fill="none">
                  <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="#FF6F5E"/>
                </svg>
                <svg width="132" viewBox="0 0 140 176" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
                  <ellipse cx="70" cy="168" rx="38" ry="6" fill="#000" opacity="0.08"/>
                  <ellipse cx="54" cy="156" rx="16" ry="10" fill="#B9C4EE" stroke="#142033" strokeWidth="2.5"/>
                  <ellipse cx="86" cy="156" rx="16" ry="10" fill="#B9C4EE" stroke="#142033" strokeWidth="2.5"/>
                  <rect x="44" y="128" width="20" height="30" rx="8" fill="#EAF3FF" stroke="#142033" strokeWidth="2.5"/>
                  <rect x="76" y="128" width="20" height="30" rx="8" fill="#EAF3FF" stroke="#142033" strokeWidth="2.5"/>
                  <line x1="44" y1="140" x2="64" y2="140" stroke="#142033" strokeWidth="2"/>
                  <line x1="76" y1="140" x2="96" y2="140" stroke="#142033" strokeWidth="2"/>
                  <rect x="34" y="96" width="72" height="48" rx="24" fill="#EAF3FF" stroke="#142033" strokeWidth="3"/>
                  <path d="M62 108 c-5-7-17-3-14 5 c2 7 14 12 14 12 s12-5 14-12 c3-8-9-12-14-5z" fill="#12b3a4"/>
                  <circle cx="88" cy="110" r="4" fill="#FFC93C" stroke="#142033" strokeWidth="1.5"/>
                  <circle cx="88" cy="122" r="4" fill="#8FD9A8" stroke="#142033" strokeWidth="1.5"/>
                  <circle cx="34" cy="108" r="13" fill="#B9C4EE" stroke="#142033" strokeWidth="2.5"/>
                  <circle cx="106" cy="108" r="13" fill="#B9C4EE" stroke="#142033" strokeWidth="2.5"/>
                  <path d="M34 118 Q20 128 26 144" stroke="#B9C4EE" strokeWidth="14" strokeLinecap="round" fill="none"/>
                  <circle cx="27" cy="146" r="9" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <path d="M106 104 Q124 86 118 62" stroke="#B9C4EE" strokeWidth="14" strokeLinecap="round" fill="none"/>
                  <circle cx="118" cy="56" r="12" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <line x1="112" y1="46" x2="110" y2="39" stroke="#142033" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="118" y1="44" x2="118" y2="37" stroke="#142033" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="124" y1="46" x2="127" y2="39" stroke="#142033" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="133" y1="38" x2="138" y2="32" stroke="#12b3a4" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="136" y1="52" x2="141" y2="52" stroke="#12b3a4" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="133" y1="64" x2="138" y2="70" stroke="#12b3a4" strokeWidth="3" strokeLinecap="round"/>
                  <rect x="25" y="20" width="90" height="82" rx="28" fill="#EAF3FF" stroke="#142033" strokeWidth="3.5"/>
                  <rect x="33" y="30" width="74" height="60" rx="20" fill="#FFFFFF" stroke="#142033" strokeWidth="2"/>
                  <circle cx="18" cy="64" r="10" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <circle cx="122" cy="64" r="10" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <ellipse cx="40" cy="70" rx="9" ry="6" fill="#12b3a4" opacity="0.35"/>
                  <ellipse cx="100" cy="70" rx="9" ry="6" fill="#12b3a4" opacity="0.35"/>
                  <circle cx="54" cy="60" r="13" fill="#142033"/>
                  <circle cx="86" cy="60" r="13" fill="#142033"/>
                  <circle cx="58" cy="55" r="4" fill="#fff"/>
                  <circle cx="90" cy="55" r="4" fill="#fff"/>
                  <circle cx="50" cy="65" r="2" fill="#fff"/>
                  <circle cx="82" cy="65" r="2" fill="#fff"/>
                  <path d="M60 80 Q70 88 80 80" stroke="#142033" strokeWidth="4" fill="none" strokeLinecap="round"/>
                  <rect x="66" y="4" width="8" height="18" rx="4" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <circle cx="70" cy="6" r="10" fill="#12b3a4" stroke="#142033" strokeWidth="2.5"/>
                  <circle cx="67" cy="3" r="2.5" fill="#fff" opacity="0.8"/>
                </svg>
              </div>
              <h3 style={{ fontSize: "15px", lineHeight: "1.35", color: "#142033", fontWeight: 700, margin: "6px 0 8px", letterSpacing: "0.2px" }}>
                GET SPECIAL PROMO FOR ASPIRE CREDIT CARD USERS
              </h3>
              <p style={{ fontSize: "12.5px", lineHeight: "1.5", color: "#5b6b7a", margin: 0, maxWidth: "210px" }}>
                This is the reason for you to apply and use our credit card.
              </p>
            </div>
          </HoverCard>
        </StaggerItem>

        {/* CARD 3 — Better cashflow */}
        <StaggerItem>
          <HoverCard>
            <div
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "20px 22px 26px",
                position: "relative",
                boxShadow: "0 18px 30px -18px rgba(0,0,0,0.35)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                minHeight: "420px",
                fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif",
              }}
            >
              <div style={{ width: "100%", height: "165px", position: "relative", display: "flex", alignItems: "flex-end", justifyContent: "center", marginBottom: "6px", overflow: "visible" }}>
                <svg style={{ position: "absolute", width: "30px", height: "30px", top: "4px", right: "10px" }} viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="#FFC93C" strokeWidth="3"/>
                  <text x="12" y="16" fontSize="11" textAnchor="middle" fill="#FFC93C" fontFamily="Arial" fontWeight="bold">$</text>
                </svg>
                <svg width="132" viewBox="0 0 140 176" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
                  <ellipse cx="70" cy="168" rx="38" ry="6" fill="#000" opacity="0.08"/>
                  <ellipse cx="54" cy="156" rx="16" ry="10" fill="#B9C4EE" stroke="#142033" strokeWidth="2.5"/>
                  <ellipse cx="86" cy="156" rx="16" ry="10" fill="#B9C4EE" stroke="#142033" strokeWidth="2.5"/>
                  <rect x="44" y="128" width="20" height="30" rx="8" fill="#EAF3FF" stroke="#142033" strokeWidth="2.5"/>
                  <rect x="76" y="128" width="20" height="30" rx="8" fill="#EAF3FF" stroke="#142033" strokeWidth="2.5"/>
                  <line x1="44" y1="140" x2="64" y2="140" stroke="#142033" strokeWidth="2"/>
                  <line x1="76" y1="140" x2="96" y2="140" stroke="#142033" strokeWidth="2"/>
                  <rect x="34" y="96" width="72" height="48" rx="24" fill="#EAF3FF" stroke="#142033" strokeWidth="3"/>
                  <path d="M62 108 c-5-7-17-3-14 5 c2 7 14 12 14 12 s12-5 14-12 c3-8-9-12-14-5z" fill="#FFC93C"/>
                  <circle cx="88" cy="110" r="4" fill="#FFC93C" stroke="#142033" strokeWidth="1.5"/>
                  <circle cx="88" cy="122" r="4" fill="#8FD9A8" stroke="#142033" strokeWidth="1.5"/>
                  <circle cx="34" cy="108" r="13" fill="#B9C4EE" stroke="#142033" strokeWidth="2.5"/>
                  <circle cx="106" cy="108" r="13" fill="#B9C4EE" stroke="#142033" strokeWidth="2.5"/>
                  <path d="M34 118 Q20 128 26 144" stroke="#B9C4EE" strokeWidth="14" strokeLinecap="round" fill="none"/>
                  <circle cx="27" cy="146" r="9" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <path d="M106 104 Q124 86 118 62" stroke="#B9C4EE" strokeWidth="14" strokeLinecap="round" fill="none"/>
                  <circle cx="118" cy="56" r="12" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <line x1="112" y1="46" x2="110" y2="39" stroke="#142033" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="118" y1="44" x2="118" y2="37" stroke="#142033" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="124" y1="46" x2="127" y2="39" stroke="#142033" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="133" y1="38" x2="138" y2="32" stroke="#FFC93C" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="136" y1="52" x2="141" y2="52" stroke="#FFC93C" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="133" y1="64" x2="138" y2="70" stroke="#FFC93C" strokeWidth="3" strokeLinecap="round"/>
                  <rect x="25" y="20" width="90" height="82" rx="28" fill="#EAF3FF" stroke="#142033" strokeWidth="3.5"/>
                  <rect x="33" y="30" width="74" height="60" rx="20" fill="#FFFFFF" stroke="#142033" strokeWidth="2"/>
                  <circle cx="18" cy="64" r="10" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <circle cx="122" cy="64" r="10" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <ellipse cx="40" cy="70" rx="9" ry="6" fill="#FFC93C" opacity="0.35"/>
                  <ellipse cx="100" cy="70" rx="9" ry="6" fill="#FFC93C" opacity="0.35"/>
                  <circle cx="54" cy="60" r="13" fill="#142033"/>
                  <circle cx="86" cy="60" r="13" fill="#142033"/>
                  <circle cx="58" cy="55" r="4" fill="#fff"/>
                  <circle cx="90" cy="55" r="4" fill="#fff"/>
                  <circle cx="50" cy="65" r="2" fill="#fff"/>
                  <circle cx="82" cy="65" r="2" fill="#fff"/>
                  <path d="M60 80 Q70 88 80 80" stroke="#142033" strokeWidth="4" fill="none" strokeLinecap="round"/>
                  <rect x="66" y="4" width="8" height="18" rx="4" fill="#B9C4EE" stroke="#142033" strokeWidth="2"/>
                  <circle cx="70" cy="6" r="10" fill="#FFC93C" stroke="#142033" strokeWidth="2.5"/>
                  <circle cx="67" cy="3" r="2.5" fill="#fff" opacity="0.8"/>
                </svg>
              </div>
              <h3 style={{ fontSize: "15px", lineHeight: "1.35", color: "#142033", fontWeight: 700, margin: "6px 0 8px", letterSpacing: "0.2px" }}>
                BETTER CASHFLOW WITH INSTALLMENTS
              </h3>
              <p style={{ fontSize: "12.5px", lineHeight: "1.5", color: "#5b6b7a", margin: 0, maxWidth: "210px" }}>
                Pay your bills with installments up to 12 months with a 0% interest rate.
              </p>
            </div>
          </HoverCard>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
};
