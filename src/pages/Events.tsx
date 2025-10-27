import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { Calendar, MapPin, Clock, Users, Rocket, Target } from "lucide-react";

const Events = () => {
  useScrollToTop();

  const day1Schedule = [
    {
      time: "9:00 – 9:30 AM",
      title: "Inauguration & Welcome Note",
      description: "Kick-off, set the tone, inspire participants",
    },
    {
      time: "9:30 – 10:00 AM",
      title: "Inspiring Founder's Talk: 'From Campus to Market'",
      subtitle: "(by Supporticon Founder)",
      description: "Connect student ideas to real-world startup journeys & why this journey matters",
    },
    {
      time: "10:00 – 10:45 AM",
      title: "Sample Project Showcase: Idea → Market Conviction",
      description: "Walkthrough video + talk explaining the journey from idea to customer validation",
    },
    {
      time: "10:45 – 11:00 AM",
      title: "Short Break",
      description: "",
    },
    {
      time: "11:00 – 11:45 AM",
      title: "Design & Architecture Sprint",
      description: "Teams outline product flow, wireframes, and tech stack",
    },
    {
      time: "11:45 – 12:45 PM",
      title: "Build Sprint 1: Core Development",
      description: "Teams split modules & begin development",
    },
    {
      time: "12:45 – 1:30 PM",
      title: "Lunch Break",
      description: "",
    },
    {
      time: "1:30 – 3:00 PM",
      title: "Build Sprint 1 Continuation",
      description: "Mentor checkpoints with teams to validate module split, progress tracking",
    },
    {
      time: "3:00 – 3:15 PM",
      title: "Tea Break",
      description: "",
    },
    {
      time: "3:15 – 4:15 PM",
      title: "Mentor Guidance Round",
      description: "Deep-dive mentoring on technical blocks, idea refinement, scalability, & ensure 50% project completion",
    },
    {
      time: "4:15 – 4:45 PM",
      title: "Daily Stand-up Presentations",
      description: "Teams present progress → mentors give feedback",
    },
    {
      time: "4:45 – 5:00 PM",
      title: "Wrap-up Day 1",
      description: "Recap learnings, set expectations for Day 2",
    },
  ];

  const day2Schedule = [
    {
      time: "9:00 – 9:15 AM",
      title: "Kickstart Day 2",
      description: "Quick energizer, recap of Day 1 progress, and outline of today's goals",
    },
    {
      time: "9:15 – 10:45 AM",
      title: "Build Sprint 2: Feature Completion & Integration",
      description: "Teams finish core functionalities, integrate modules, and test flows",
    },
    {
      time: "10:45 – 11:00 AM",
      title: "Short Break",
      description: "",
    },
    {
      time: "11:00 – 12:45 PM",
      title: "Build Sprint 3: MVP Finalization",
      description: "Teams focus on achieving a functional MVP ready for demo. Mentors assist in bug fixing, polish, and usability improvements",
    },
    {
      time: "12:45 – 1:30 PM",
      title: "Lunch Break",
      description: "",
    },
    {
      time: "1:30 – 2:15 PM",
      title: "Pitch Deck Workshop: 'How to Sell Your Idea in 5 Minutes'",
      description: "Trainers explain startup pitching, storytelling, and framing value proposition",
    },
    {
      time: "2:15 – 3:00 PM",
      title: "Pitch Practice & Mock Demo",
      description: "Teams rehearse their pitches in front of mentors, get quick feedback",
    },
    {
      time: "3:00 – 3:15 PM",
      title: "Tea Break",
      description: "",
    },
    {
      time: "3:15 – 4:15 PM",
      title: "Final Presentations to Jury",
      description: "Each team gets 5 minutes to demo + 2 minutes Q&A. Judges evaluate innovation, execution, and business potential",
    },
    {
      time: "4:15 – 4:45 PM",
      title: "Jury Deliberation & Knowledge Talk",
      description: "While jury decides, a short inspiring session (e.g., 'From Hackathon Project to Startup')",
    },
    {
      time: "4:45 – 5:00 PM",
      title: "Feedback Sharing & Closing Ceremony",
      description: "",
    },
  ];

  return (
    <main>
      <SEO
        title="Events — SupportIcon HackFest 2025"
        description="Join SupportIcon HackFest 2025 - A 2-day sprint intensive development hackathon on October 31 and November 1, 2025 at Annapoorana Engineering College, Salem."
        canonicalPath="/events"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 border-b">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              🚀 Upcoming Event
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              SupportIcon HackFest 2025
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              A 2-Day Sprint · Intensive Development
            </p>
            
            {/* Event Info Cards */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="flex flex-col items-center p-4 bg-background/80 backdrop-blur rounded-lg border">
                <Calendar className="h-6 w-6 text-primary mb-2" />
                <div className="text-sm font-medium">Date</div>
                <div className="text-xs text-muted-foreground mt-1">October 31 - November 1, 2025</div>
              </div>
              <div className="flex flex-col items-center p-4 bg-background/80 backdrop-blur rounded-lg border">
                <Clock className="h-6 w-6 text-primary mb-2" />
                <div className="text-sm font-medium">Time</div>
                <div className="text-xs text-muted-foreground mt-1">9:00 AM - 5:00 PM</div>
              </div>
              <div className="flex flex-col items-center p-4 bg-background/80 backdrop-blur rounded-lg border">
                <MapPin className="h-6 w-6 text-primary mb-2" />
                <div className="text-sm font-medium">Venue</div>
                <div className="text-xs text-muted-foreground mt-1">Annapoorana Engineering College</div>
                <div className="text-xs text-muted-foreground">Salem, Tamil Nadu, India</div>
              </div>
            </div>

            <Button 
              size="lg" 
              variant="hero"
              className="text-lg px-8"
              onClick={() => window.open('https://docs.google.com/forms/d/16CeX9CrJFO6iR_cqXHtY4EWIYJ5oOkSwIP65jWErRo0/edit', '_blank')}
            >
              Register Now
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-6 text-center">
            Not Your Traditional Hackathon
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center">
              <CardHeader>
                <Target className="h-10 w-10 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Industrial Standards</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Learn and apply real-world app development approaches used in the industry
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Rocket className="h-10 w-10 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Idea to Market</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Transform your concept from initial idea through build to sales strategy
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-10 w-10 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Team Work</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Collaboration is essential - work together to achieve your goals
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
            <p className="text-lg">
              This hackathon follows an <span className="font-semibold text-primary">industrial standards approach</span> 
              {" "}to app development - starting from ideation, through building, to creating a go-to-market strategy. 
              Experience the full product development lifecycle in just 2 days!
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="bg-muted/30 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-10 text-center">
            Event Schedule
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Day 1 */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-primary text-primary-foreground">
                <CardTitle className="text-2xl">
                  Day 1 - October 31, 2025
                </CardTitle>
                <p className="text-sm opacity-90">Foundation & Development Sprint</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {day1Schedule.map((item, index) => (
                    <div key={index} className={`pb-4 ${index !== day1Schedule.length - 1 ? 'border-b' : ''}`}>
                      <div className="flex items-start gap-3">
                        <div className="min-w-[120px] text-sm font-medium text-primary">
                          {item.time}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm mb-1">
                            {item.title}
                            {item.subtitle && (
                              <span className="block text-xs font-normal text-muted-foreground mt-1">
                                {item.subtitle}
                              </span>
                            )}
                          </h3>
                          {item.description && (
                            <p className="text-xs text-muted-foreground">
                              👉 {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Day 2 */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-primary text-primary-foreground">
                <CardTitle className="text-2xl">
                  Day 2 - November 1, 2025
                </CardTitle>
                <p className="text-sm opacity-90">Completion & Presentation</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {day2Schedule.map((item, index) => (
                    <div key={index} className={`pb-4 ${index !== day2Schedule.length - 1 ? 'border-b' : ''}`}>
                      <div className="flex items-start gap-3">
                        <div className="min-w-[120px] text-sm font-medium text-primary">
                          {item.time}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm mb-1">
                            {item.title}
                          </h3>
                          {item.description && (
                            <p className="text-xs text-muted-foreground">
                              👉 {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Ideas?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join us for an intensive 2-day journey from concept to market-ready product
          </p>
          <Button 
            size="lg" 
            variant="hero"
            className="text-lg px-8"
            onClick={() => window.open('https://docs.google.com/forms/d/16CeX9CrJFO6iR_cqXHtY4EWIYJ5oOkSwIP65jWErRo0/edit', '_blank')}
          >
            Register for HackFest 2025
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Events;

