import { SEO } from "@/components/SEO";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { supporticonUploads } from "@/assets/supporticon-uploads";
import { useState } from "react";

const Events = () => {
  useScrollToTop();
  const [showPastEventDetails, setShowPastEventDetails] = useState(false);

  return (
    <>
      <SEO
        title="Events | Supporticon"
        description="Empowering customers to learn and grow together. Showcase success stories of our customers."
        image={supporticonUploads.logo}
      />
      <main className="min-h-screen pt-24 pb-16 bg-transparent">
        <div className="container mx-auto px-4 max-w-6xl pt-12 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-green-100/80 drop-shadow-sm text-green-700 font-semibold text-sm border border-green-200">
            Upcoming & Past Events
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-slate-900 leading-tight">
            Empowering customers to{" "}
            <span className="text-green-600">learn and grow</span> together
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            At events we showcase the success stories of our customers, and
            bring digital transformation & service experience leaders together.
          </p>

          {/* Two Cards Section */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Past Events Card - Left Side */}
            <div
              onClick={() => setShowPastEventDetails(!showPastEventDetails)}
              className="bg-white/60 backdrop-blur-md border border-green-100 rounded-3xl p-8 shadow-lg relative overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 hover:border-green-300"
            >
              <div className="absolute top-0 left-0 w-48 h-48 bg-green-200 rounded-full blur-[80px] -z-10 mix-blend-multiply opacity-50"></div>
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-6 text-slate-900">
                  ✅ Past Events
                </h3>
                <p className="text-slate-600 font-medium text-lg mb-4">
                  SupportIcon HackFest 2025
                </p>
                <p className="text-slate-500 text-sm">
                  October 31 to November 1, 2025
                </p>
                <p className="text-green-600 font-semibold mt-4">
                  {showPastEventDetails ? "Hide Details" : "View Details"} →
                </p>
              </div>
            </div>

            {/* Upcoming Events Card - Right Side */}
            <div className="bg-white/60 backdrop-blur-md border border-green-100 rounded-3xl p-8 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] -z-10 mix-blend-multiply opacity-50 bg-primary"></div>
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-6 text-slate-900">
                  📅 Upcoming Events
                </h3>
                <p className="text-slate-600 font-medium text-lg">
                  Stay tuned! We'll be announcing new events and webinars soon.
                </p>
              </div>
            </div>
          </div>

          {/* Expanded Details Section */}
          {showPastEventDetails && (
            <div className="mt-8 bg-white/60 backdrop-blur-md border border-green-100 rounded-3xl p-6 md:p-12 shadow-lg relative overflow-hidden text-left animate-in fade-in zoom-in duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full blur-[80px] -z-10 mix-blend-multiply opacity-50"></div>

              <div className="bg-slate-50/50 rounded-2xl p-6 md:p-8">
                <h4 className="text-2xl font-bold mb-4 text-slate-900">
                  🚀 SupportIcon HackFest 2025
                </h4>

                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  A 2-Day Intensive Development Sprint, where students and early
                  career builders got hands on with real ticketing system
                  software development, from first idea to market ready pitch.
                </p>

                <div className="bg-green-50/50 border border-green-100 rounded-2xl p-6 mb-8">
                  <h5 className="font-semibold text-slate-900 mb-4">
                    Event Details
                  </h5>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>
                      <strong>Date:</strong> October 31 to November 1, 2025
                    </li>
                    <li>
                      <strong>Time:</strong> 9:00 AM to 5:00 PM (IST)
                    </li>
                    <li>
                      <strong>Venue:</strong> Annapoorana Engineering College,
                      Salem, Tamil Nadu, India
                    </li>
                  </ul>
                </div>

                <h5 className="text-xl font-bold mb-4 text-slate-900">
                  Not Your Traditional Hackathon
                </h5>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Most hackathons end at 'build something cool'. HackFest 2025
                  took participants further, applying the same industrial
                  standards used to build the best ticketing system products in
                  the market.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Events;
