import React, { useEffect } from "react";
import {
  ArrowRight,
  Activity,
  TrendingUp,
  BookOpen,
  Clock,
  Users,
  Lightbulb,
  Shield,
  Briefcase,
  Workflow,
  CheckCircle,
  Database,
  Eye,
  MessageSquare,
  Zap,
  BarChart,
  X,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

export const caseStudies = [
  {
    title: "The 11 PM Slack Message",
    industry: "B2B SaaS",
    pain: "Agent burnout",
    feature: "Auto Pilot",
    summary:
      "AI resolves repetitive tickets automatically, reducing late night workload.",
    icon: MessageSquare,
    paragraphs: [
      "Priya joined the support team because she genuinely loved helping people solve problems.",
      "Eighteen months later, she is answering the same billing question for the fourteenth time this week. It is 11 PM. She has a Slack message from a customer in Australia who cannot log in. Again.",
      "She knows the answer. She has always known the answer. It is in ticket #847 from March. But finding it, reformatting it, personalising it, sending it, that cycle is what is breaking her.",
      "Her manager, Arjun, notices her output metrics are strong. What he cannot see in the dashboard is that she has stopped suggesting product improvements in team meetings. She stopped six weeks ago. That is when she stopped caring.",
      'Arjun does not know he is three months away from losing his best engineer to a competitor who offers her a 20% pay rise and the promise of "less repetitive work."',
      "Then HelpDude's Auto Pilot goes live.",
      "The Australian login ticket arrives at 11 PM. Auto Pilot searches the KB, matches it to a resolved ticket pattern with 94% confidence, and sends a grounded reply in 28 seconds.",
      "Priya does not wake up to a queue of twelve identical tickets. She wakes up to three, the ones that actually need her.",
      "She starts talking in team meetings again. She submitted a product suggestion last Tuesday. It was a good one.",
      "Arjun did not get the resignation letter. He got a more engaged engineer and a support operation that no longer depends on one person being awake at 11 PM in Mumbai.",
      "What changed: Nothing about Priya. Everything about what landed in her queue.",
    ],
    featureExplanation:
      "HelpDude feature: Auto Pilot autonomous resolution for high confidence repeat tickets. No agent required.",
  },
  {
    title: "The Board Slide That Almost Killed the Team",
    industry: "Fintech",
    pain: "Leader embarrassment / board pressure",
    feature: "ROI Dashboard",
    summary: "Support impact becomes measurable and visible to leadership.",
    icon: TrendingUp,
    paragraphs: [
      "Marcus had thirty seconds to answer the CFO's question.",
      '"You have eighteen support staff. Your resolution time is 9.2 minutes. We are spending £340,000 a year on a team that answers questions. What is the ROI?"',
      "Marcus had built that team from four people to eighteen over three years. He knew the churn they had prevented. He knew the escalations they had caught before they became enterprise contract cancellations. He knew the edge case his senior engineer had flagged six months ago that saved a £200,000 renewal.",
      "But he had no slide for any of it.",
      'He said "I will get you that data" and felt the room shift.',
      "That night he built a spreadsheet. It took four hours and was mostly estimates. He never presented it. He knew a CFO would pull it apart in ninety seconds.",
      "Three months after HelpDude went live, Marcus walked into the next board meeting with a single slide.",
      "Tickets deflected this quarter: 1,847. Agent hours recovered: 312. Resolution time: 9.2 minutes down to 3.4 minutes. Customer-facing response SLA breaches: zero.",
      "The CFO did not ask the ROI question. She asked if they could expand the programme.",
      "What changed: Marcus did not change. His team did not change. The data was always being created, HelpDude simply made it visible.",
    ],
    featureExplanation:
      "HelpDude feature: Built-in ROI dashboard. Deflection count, resolution time, confidence scores, override rate, automatically tracked from day one.",
  },
  {
    title: "The Knowledge That Walked Out the Door",
    industry: "E commerce",
    pain: "Fear of losing senior engineers",
    feature: "Knowledge Capture Loop",
    summary: "Agent knowledge is automatically captured and reused.",
    icon: BookOpen,
    paragraphs: [
      "When David handed in his notice, his manager Sarah said all the right things.",
      '"We will miss you. You have been amazing. Let us have a proper handover."',
      "What she meant was: please spend your last two weeks writing down everything you know.",
      "David spent his last two weeks writing down the things he could articulate. The refund policy exceptions. The courier integration workarounds. The known issues with the returns portal on Safari.",
      'What he could not write down were the things he did not know he knew. The instinct that told him a "where is my order" ticket from a customer with three previous escalations needed a different tone. The pattern he had noticed where a specific product SKU generated ten times more complaints in December than any other month.',
      "Three months after David left, a junior engineer made the wrong call on a high value customer who had been flagged in four previous tickets. The customer left. The contract was worth £18,000 a year.",
      "Sarah spent a week trying to find what David would have done differently. She found it eventually, buried in ticket #2,341 from fourteen months ago.",
      "HelpDude's knowledge capture loop does not wait for someone to resign.",
      "Every time an engineer resolves a ticket, especially when they override an AI suggestion and type a better answer, that correction becomes part of the team's knowledge automatically. Not a KB article. Not a Word document. A living, searchable layer that every engineer on every shift can access.",
      "David's instincts would have been in the system from week one.",
      "The £18,000 customer might still be there.",
    ],
    featureExplanation:
      "HelpDude feature: Knowledge Capture Loop. Every agent correction trains the team's AI automatically. No manual KB updates required.",
  },
  {
    title: "The New Hire Who Was Good on Week One",
    industry: "B2B SaaS",
    pain: "Long agent ramp time",
    feature: "Co Pilot with citations",
    summary: "AI helps new hires resolve tickets with confidence from day one.",
    icon: Users,
    paragraphs: [
      "The standard onboarding for a new support engineer at Callum's company was nine weeks.",
      'Not because the product was that complex. Because the product was documented in seventeen different places, a KB that was three years old, a Confluence wiki that three people understood, a shared Google Drive folder called "useful stuff" that nobody had curated since 2021, and the collective memory of six engineers who had been there since the beginning.',
      "New hires spent nine weeks learning how to navigate the archaeology before they could help a customer confidently.",
      "Callum's cost per hire, including the ramp period, was £14,000. His team of twelve turned over two people a year. That was £28,000 in ramp costs before a single customer interaction happened.",
      "His best engineers spent 30% of their time answering questions from new hires. That is almost one and a half engineers' worth of capacity consumed by onboarding every year.",
      "The first ticket the new hire handled with HelpDude Co Pilot went like this:",
      'Customer: "Our API integration stopped returning data after the latest update."',
      'HelpDude searched the KB, the closed tickets, and the internal docs simultaneously. It surfaced a suggested reply in 11 seconds. At the bottom: "Source: Ticket #3,847, same integration, same update, resolved by senior engineer James on 14 Feb."',
      "The new hire read the suggestion. Read the source. Sent the reply.",
      "It was right. James was not involved. The new hire had been on the job for six days.",
      "Ramp time did not go to zero. But it went from nine weeks to three. The institutional knowledge was already in the system, HelpDude just made it accessible before the new hire had memorised it.",
    ],
    featureExplanation:
      "HelpDude feature: Co Pilot with inline citations. Every suggested reply shows exactly where the answer came from.",
  },
  {
    title: "The 3 AM Ticket Nobody Saw",
    industry: "Fintech / Banking",
    pain: "24/7 coverage without 24/7 staffing",
    feature: "Auto Pilot",
    summary: "AI resolves tickets instantly regardless of time zones.",
    icon: Clock,
    paragraphs: [
      "The ticket arrived at 3:14 AM.",
      "A small business owner in Singapore had woken up to find her payment processing account locked. She had payroll running at 9 AM. She needed this resolved in the next six hours or she could not pay her staff.",
      "The support team in London was asleep. The on call engineer was on call for Severity 1 infrastructure issues, not account access queries. The first person to see her ticket would be whoever logged on at 8:30 AM London time, which was 3:30 PM Singapore time. Six hours after payroll was due.",
      "By the time London opened, she had already called the account manager. The account manager had already escalated internally. The Head of Support had already written an apology. The damage, to the relationship, to the renewal conversation, to the Net Promoter Score, was done before a single engineer had opened a laptop.",
      "The ticket itself took four minutes to resolve. It was a standard account verification step. The answer was in the KB.",
      "Four minutes of resolution time. Six hours of anxiety, escalation, and relationship damage.",
      "With HelpDude Auto Pilot, the ticket at 3:14 AM is not waiting for London to wake up.",
      "It is searched against the KB, matched to the correct resolution path, and responded to within 30 seconds. If it requires account access changes a human must authorise, the customer receives an immediate acknowledgement with a realistic timeline, not silence.",
      "She still has her payroll question answered before she needs to escalate. The account manager does not get a 4 AM call. The Head of Support does not write an apology.",
      "The resolution was always four minutes. The cost was always zero. The only variable was when it happened.",
    ],
    featureExplanation:
      "HelpDude feature: Auto Pilot 24/7 autonomous resolution. No agent required for high confidence tickets regardless of time zone or shift pattern.",
  },
  {
    title: "The Senior Engineer Who Became a Human Search Engine",
    industry: "Healthcare SaaS",
    pain: "Senior engineer dependency",
    feature: "Co Pilot + Knowledge Capture",
    summary: "AI distributes expert knowledge across the team.",
    icon: Database,
    paragraphs: [
      "Everyone on the team knew to ask Nadia.",
      "Nadia had been there for six years. She had seen every version of the product, every migration, every integration quirk with every major EHR system. When a junior engineer hit a wall, they asked Nadia. When a ticket came in that nobody recognised, it went to Nadia. When an enterprise customer escalated, Nadia was the one who joined the call.",
      "Nadia was also the most expensive person on the team. And she was spending approximately 40% of her time answering questions that had already been answered, in her own previous tickets, in her own previous resolutions, in her own memory.",
      "She was not doing support. She was doing oral history.",
      "She had mentioned, twice, in one on ones with her manager, that she was feeling underutilised. That the work she found meaningful, the genuinely complex clinical workflow problems, the product feedback that changed roadmap decisions, was being crowded out by being the team's search engine.",
      "Her manager heard it but did not act on it. There was no system to replace what Nadia did informally.",
      "Six months later, Nadia was leading a clinical informatics team at a hospital system. Her institutional knowledge left with her. The team spent four months rebuilding what she carried in her head.",
      "HelpDude does not replace Nadia. It captures her.",
      "Every ticket Nadia resolved, every correction she made to an AI suggestion, every override where she typed a better answer, those became part of the team's knowledge layer from the first week HelpDude was live.",
      "When the junior engineer hits a wall now, they do not ask Nadia. They see her answer, cited, sourced, searchable, in the Co Pilot suggestion that appears eleven seconds after the ticket opens.",
      "Nadia still left. But this time, she left knowledge behind.",
    ],
    featureExplanation:
      "HelpDude features: Co Pilot suggested replies + Knowledge Capture Loop. Senior engineer expertise captured automatically, accessible to every agent on every shift.",
  },
  {
    title: "The Customer Who Knew More Than the Agent",
    industry: "E commerce",
    pain: "Inconsistent reply quality",
    feature: "Co Pilot with KB grounding",
    summary: "AI ensures consistent and accurate responses.",
    icon: Eye,
    paragraphs: [
      "The customer had been using the platform for four years.",
      "She had contacted support eleven times. She had spoken to nine different agents. She had, on three separate occasions, been given incorrect information about the returns policy, and had the email thread to prove it.",
      'On her twelfth contact, she opened with: "I have been told three different things about this. I am going to need you to check before you answer."',
      "The agent on shift, a capable, conscientious person who had been on the team for four months, spent six minutes searching the KB, the policy documents, and the last two tickets from this customer before replying. The reply was correct. But the six minutes felt long. And the customer's opening line had already established the dynamic: she trusted the platform more than she trusted the support team.",
      "That perception does not reset with one correct answer. It resets with consistent correct answers, over time, from every agent she speaks to.",
      "With HelpDude Co Pilot, the agent on shift does not spend six minutes searching.",
      "They spend eleven seconds waiting for a suggested reply that cites the current returns policy document, cross referenced against this customer's previous tickets, with a note flagging that she has received conflicting information before.",
      "The reply is accurate. It acknowledges the inconsistency. It is sent in under two minutes.",
      "The customer does not open her next ticket with a warning. She opens it with a question.",
      "That is what consistency at scale looks like. Not the same agent every time. The same quality every time.",
    ],
    featureExplanation:
      "HelpDude feature: Co Pilot with Multilayer RAG, KB articles, past tickets, and customer history searched simultaneously.",
  },
  {
    title: "The Ticket That Should Have Been a Product Decision",
    industry: "B2B SaaS",
    pain: "Support insights never reaching product",
    feature: "Knowledge Capture",
    summary: "Recurring issues influence product roadmap decisions.",
    icon: Lightbulb,
    paragraphs: [
      "For eight months, support engineers at a project management SaaS company had been fielding a specific question every week.",
      '"Can I export the Gantt chart as a PDF?"',
      "Each engineer answered it individually. Some found a workaround involving a browser print function. Some said it was not possible. Some escalated it to product and were told it was on the roadmap. The roadmap answer stopped being true after a deprioritisation decision in Q2, but nobody told support.",
      "The Head of Support, Isabel, knew vaguely that the Gantt export question came up often. She did not know it came up 340 times in eight months. She did not know that 23% of the customers who asked it cancelled their subscription within 90 days. She did not know that the workaround three of her engineers had developed was actually reliable, it was just not documented anywhere.",
      "Product was making roadmap decisions without this data. Support had the data and did not know it.",
      "HelpDude surfaces the pattern Isabel could not see.",
      "When the same question recurs at volume, the knowledge capture layer flags it. When agents override AI suggestions with a consistent workaround, that workaround becomes part of the team's knowledge automatically. When 340 tickets cluster around the same unresolved product gap, the data exists to take to product leadership.",
      "Isabel does not go to the next product meeting with an anecdote. She goes with 340 tickets, a 23% churn correlation, and a workaround that already works and just needs documentation.",
      'The Gantt PDF export moves from "nice to have" to "this is costing us customers."',
      "Support did not just answer the question. Support changed the roadmap.",
    ],
    featureExplanation:
      "HelpDude feature: Knowledge Capture Loop identifying recurring patterns from resolved tickets. Support intelligence that reaches product decisions.",
  },
  {
    title: "The Escalation That Never Should Have Happened",
    industry: "Fintech",
    pain: "Poor context transfer",
    feature: "Co Pilot routing + context",
    summary: "AI maintains full context across agents.",
    icon: Shield,
    paragraphs: [
      "The enterprise customer had sent a polite but pointed email to the CEO.",
      "Not to support. Not to their account manager. To the CEO.",
      "It was about a billing discrepancy that had been in the support queue for eleven days. Not because it was complex. Because it had been assigned to three different agents across two shifts, and each handover had lost context. The fourth agent, seeing a ticket with no clear history, had sent a generic acknowledgement asking the customer to re explain the issue.",
      "That was the email that went to the CEO.",
      "The Head of Support, James, spent the next two days in damage control. He reconstructed the ticket history manually. He wrote a personal apology. He offered a service credit. He joined a call with the account manager and the customer.",
      "The billing discrepancy itself took twenty minutes to resolve once someone with context looked at it.",
      "Eleven days. Four agents. Zero context transfer. One CEO email. Two days of senior time. One service credit. All for a billing query.",
      "With HelpDude Co Pilot, the second agent who opens the ticket sees everything the first agent knew.",
      "Not a ticket history they have to scroll through. A suggested reply that already incorporates the previous context, the customer's history, and the specific nature of the discrepancy, with citations showing exactly which previous interaction each piece of information came from.",
      "The handover is not a gap in the story. It is a continuation.",
      "The ticket does not reach day eleven. It reaches day two. The CEO does not receive an email. The account manager does not join a damage control call.",
      "James spends his Tuesday on strategy, not apology.",
    ],
    featureExplanation:
      "HelpDude feature: Co Pilot with full ticket and customer history context. Every agent who opens the ticket starts where the last one finished.",
  },
  {
    title: "The Agent Who Was Always Right But Never Fast",
    industry: "Healthcare SaaS",
    pain: "Quality vs speed trade off",
    feature: "Co Pilot suggested reply",
    summary: "AI reduces search time while maintaining quality.",
    icon: Zap,
    paragraphs: [
      "Daniel was the most accurate agent on the team.",
      'His CSAT was consistently 4.8 out of 5. His customer comments used words like "thorough," "patient," and "actually understood my problem." In the twelve months he had been on the team, he had never sent an incorrect reply.',
      "His Average Handle Time was 18.4 minutes. The team average was 11.2.",
      "His manager, Sophie, was caught between two realities. The metrics said Daniel was slow. The customers said Daniel was the best person they had ever spoken to in support. A performance review built on AHT would put one of her best people on an improvement plan.",
      "She had three options. Push Daniel to go faster and risk losing the quality her customers loved. Accept the AHT gap and be unable to justify it to leadership. Or find a way to make quality and speed coexist.",
      "There was no fourth option in the system she had.",
      "Daniel's AHT dropped to 9.1 minutes in his third week with HelpDude Co Pilot.",
      "Not because he rushed. Because he stopped spending twelve of his eighteen minutes searching for the answer he already knew was somewhere in the system.",
      "HelpDude found it for him in eleven seconds. Cited. Sourced. Ready to review.",
      "Daniel still read every suggestion. He still edited when his instinct said the tone was slightly off. He still added the sentence at the end that made the customer feel seen rather than processed.",
      "He just stopped doing the archaeology.",
      "His CSAT is 4.9 now. His manager stopped worrying about the performance review conversation.",
      "The trade off Sophie thought was permanent was actually a search problem.",
    ],
    featureExplanation:
      "HelpDude feature: Co Pilot 11-second suggested reply. Frees agent cognitive capacity for quality, judgment, and tone, not search.",
  },
  {
    title: "The Support Team That Saved the Renewal",
    industry: "B2B SaaS",
    pain: "Support impact on retention invisible",
    feature: "Auto Pilot + ROI Dashboard",
    summary: "Support impact on retention becomes measurable.",
    icon: Activity,
    paragraphs: [
      "Nobody gave the support team credit for the renewal.",
      "When the £180,000 enterprise contract was renewed in March, the congratulations went to the account manager. The celebration was in the sales Slack channel. The quarterly business review slide showed the account manager's name next to the logo.",
      "What the slide did not show was that in the eight weeks before renewal, the customer had submitted fourteen support tickets. Eleven had been resolved within four hours. Three had been escalated and resolved within twenty four hours with a personal follow up.",
      'The customer\'s success lead had mentioned, in the renewal call, that their support experience had been "noticeably better" in the last quarter. That comment moved the needle. The CSM knew it. The account manager suspected it. But there was no data to put on a slide.',
      "The Head of Support, Rachel, heard about the renewal from someone else's Slack message. She felt something complicated, proud of her team, but invisible in the outcome.",
      "The next renewal cycle, Rachel walked into the QBR with a different kind of contribution.",
      "HelpDude's ROI dashboard showed the customer's ticket history for the preceding quarter, resolution time, deflection rate, SLA adherence, agent override rate. It showed the three tickets that had been escalated and the time to resolution that kept them inside the renewal window.",
      "She did not claim the renewal. She showed the data that made the renewal environment possible.",
      'The Head of Sales looked at the slide and said something nobody had said in three years of QBRs: "Support is doing more for retention than we realised."',
      "Rachel did not need the credit. She needed the visibility. They are different things, and only one of them changes how the team gets resourced next year.",
    ],
    featureExplanation:
      "HelpDude feature: ROI Dashboard. Deflection count, resolution time, and SLA data that makes support's contribution to retention visible and quantifiable.",
  },
  {
    title: "The Ticket That Taught the Whole Team",
    industry: "E commerce",
    pain: "Knowledge silos",
    feature: "Knowledge Capture Loop",
    summary: "One solution becomes team-wide knowledge instantly.",
    icon: Workflow,
    paragraphs: [
      "The workaround for the mobile checkout bug on Samsung Galaxy S21 devices existed in exactly one place.",
      "Yemi's head.",
      "Yemi had discovered it nine months ago when a customer reported it. She had spent forty minutes reverse engineering the issue, found a sequence of cache clearing steps that resolved it reliably, and closed the ticket. She had meant to write a KB article. There were seventeen other tickets open that afternoon. She never did.",
      "In the nine months since, fourteen other customers had reported the same issue on the same device. Seven of them had been told the team was investigating. Four had been escalated to the development team, who had investigated, confirmed it was a known client side issue, and closed the ticket, every time. Three had been given incorrect advice that made the issue worse.",
      "Total engineering time consumed by an issue that had a documented resolution: approximately six hours. Fourteen customer interactions, seven of them unresolved, three of them made worse.",
      "Yemi did not know any of this. She was handling sixty tickets a week.",
      "When HelpDude's Knowledge Capture Loop sees Yemi resolve a Samsung S21 ticket using a specific method, it does not wait for her to write the KB article.",
      "It captures the resolution. It tags the device type, the symptom pattern, and the steps taken. The next time the same ticket arrives, regardless of who is on shift, regardless of whether Yemi is working that day, the Co Pilot suggestion includes her method, cited back to her original resolution.",
      "The fifteenth Samsung S21 ticket is resolved in three minutes by a junior engineer on their second week.",
      "No escalation. No development team investigation. No incorrect advice. Three minutes.",
      "Yemi still has not written the KB article. She does not need to.",
    ],
    featureExplanation:
      "HelpDude feature: Knowledge Capture Loop. Agent resolutions become team knowledge automatically, no KB article required.",
  },
  {
    title: "The Metric That Was Lying",
    industry: "B2B SaaS",
    pain: "Hidden burnout",
    feature: "Auto Pilot deflection",
    summary: "AI reduces workload and reveals true team capacity.",
    icon: BarChart,
    paragraphs: [
      "The dashboard looked healthy.",
      "CSAT: 4.6. First Response Time: 2.1 hours. Resolution Rate: 94%. Backlog: manageable.",
      "What the dashboard could not show was that achieving those numbers required every senior engineer on the team to work through lunch four days a week. That the junior engineers were burning through their capacity handling volume while the seniors handled complexity on top of their own queues. That three people had quietly started looking at other jobs.",
      "The Head of Support, Kevin, presented the dashboard to his VP every month and received positive feedback. He did not tell the VP that the numbers were being held up by individual effort that was not sustainable. He did not know how to quantify that in a metric that a VP would act on.",
      "The numbers were real. The story behind them was invisible.",
      "High performing metrics sustained by unsustainable human effort are not a success story. They are a countdown timer.",
      "HelpDude does not just improve the metrics. It changes what produces them.",
      "When Auto Pilot handles 34% of inbound ticket volume autonomously, the senior engineers are no longer the load bearing wall of a system that cannot afford to lose them.",
      "When the deflection dashboard shows 847 tickets resolved without agent touch this month, Kevin does not present a CSAT score to his VP. He presents a capacity story, what his team achieved, and what they no longer had to carry to achieve it.",
      "The lunch breaks came back in week three. The job searches stopped in week six. Kevin cannot prove the correlation, but he does not need to.",
      "A 4.6 CSAT maintained by a team that is not burning out is a completely different thing from a 4.6 CSAT maintained by a team that is.",
    ],
    featureExplanation:
      "HelpDude feature: Auto Pilot deflection + ROI dashboard showing ticket volume handled without agent touch. The metric and the story behind it.",
  },
  {
    title: "The AI That Agents Actually Trusted",
    industry: "Fintech",
    pain: "AI distrust",
    feature: "Co Pilot with citations",
    summary: "Transparent AI improves adoption.",
    icon: CheckCircle,
    paragraphs: [
      "The first AI tool the team tried lasted four months.",
      'It was not a bad product. The suggestions were often close. The problem was that "often close" in fintech support is not good enough when the answer involves a customer\'s money, their compliance requirements, or their regulatory obligations.',
      "The agents stopped using it in week six. Not officially. They just stopped clicking on the suggestions. They kept the tool open because they had been asked to use it. They read the suggestions the way you read a fortune cookie, acknowledging the effort, acting on your own judgment regardless.",
      "Their manager had spent budget and political capital getting the tool approved. She could not admit it was not being used. The tool sat on the dashboard unused for three more months before it was quietly removed.",
      "The agents were not resistant to AI. They were resistant to AI they could not verify.",
      "The difference with HelpDude Co Pilot is the citation.",
      'Not "here is a suggested reply." Here is a suggested reply, and here is Ticket #4,231 from February, where your senior engineer resolved the same regulatory query for the same account type, using this exact approach.',
      "The agent does not have to trust the AI. They trust the source. They trust the closed ticket from a colleague they respect. They trust the KB article they helped write. They trust the documentation that was accurate last week.",
      "The AI is not asking them to take its word for it. It is showing its work.",
      "Adoption in week three was 78%. Not because of training. Not because of management pressure. Because the agents found, for the first time, that checking the AI suggestion took less time than ignoring it.",
    ],
    featureExplanation:
      "HelpDude feature: Co Pilot with inline citations on every suggestion. Agents see exactly where the answer came from before they send.",
  },
  {
    title: "The Support Leader Who Got a Seat at the Table",
    industry: "B2B SaaS",
    pain: "Support seen as cost center",
    feature: "Full HelpDude stack",
    summary: "Support becomes a strategic function.",
    icon: Briefcase,
    paragraphs: [
      "For seven years, Maya had run one of the best support teams in her industry.",
      "She knew it was the best because her customers told her. Her CSAT was top quartile. Her churn prevention numbers, the renewals her team had protected through responsive, knowledgeable support, were real and significant.",
      "She also knew it was the best because of what it cost her personally to keep it that way. The hiring decisions she agonised over. The knowledge transfer sessions she ran every time someone left. The escalations she handled personally at 9 PM because she did not trust the system to handle them without her.",
      'She had never been invited to a product roadmap meeting. She had never been asked to present at a board meeting. She had never had a budget conversation that started with "what do you need to grow" rather than "where can we cut."',
      "Support was a cost centre. Maya was the person who managed the cost.",
      "She had the data to change that perception. She just did not have it in a form anyone upstairs would act on.",
      "Twelve months after HelpDude went live, Maya's quarterly review looked different.",
      "Not because the numbers were better, though they were. But because for the first time she could tell the complete story of what her team contributed to the business.",
      "She could show the CFO 4,200 tickets resolved without agent touch, and the salary cost equivalent of what that represented. She could show the product team 340 recurring tickets that clustered around the same unresolved feature gap, and the churn rate of customers who asked that question. She could show the board that her team's average response time had dropped from 8.4 minutes to 3.1, and correlate it with a 12-point NPS improvement in the same quarter.",
      "She was not presenting support metrics. She was presenting business outcomes.",
      "The product team invited her to the roadmap meeting in February. It was the first time in seven years.",
      "The CFO asked, in March, whether support AI could be extended to the customer success team.",
      "Maya had spent seven years building something worth noticing. HelpDude gave her the language to make it visible.",
      "That is what changes when support stops being a cost centre. Not the work. The conversation around it.",
    ],
    featureExplanation:
      "HelpDude features: Full stack, Auto Pilot deflection, Co Pilot with citations, Knowledge Capture Loop, ROI Dashboard. Support intelligence that earns a seat at the strategic table.",
  },
];

export const CaseStudiesList = () => {
  // Lock body scroll when modal is open
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 animate-in fade-in slide-in-from-bottom-5 duration-700 relative z-10">
        {caseStudies.map((study, i) => {
          const slug = study.title
            .toLowerCase()
            .replace(/[^\w\s]/gi, "")
            .replace(/\s+/g, "-");
          return (
            <Card
              key={i}
              className="group relative overflow-hidden border-white/60 bg-white/70 backdrop-blur-md rounded-3xl p-7 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Decorative softly glowing blurred circle behind content */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#C8E6A0]/40 rounded-full blur-3xl group-hover:bg-[#a8d97f]/50 transition-colors pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex items-center justify-center rounded-full px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-[#F5E6D3] text-amber-900 border border-[#EAD2B7]">
                    {study.industry}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-green-50 shadow-inner flex items-center justify-center text-green-600">
                    <study.icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-green-700 transition-colors">
                  {study.title}
                </h3>

                <div className="mb-5 flex-grow">
                  <div className="text-xs font-bold text-rose-500 mb-2 uppercase tracking-wide">
                    Problem:{" "}
                    <span className="font-semibold text-slate-600 normal-case tracking-normal ml-1">
                      {study.pain}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {study.summary}
                  </p>
                </div>

                <div className="mt-auto pt-4 flex flex-col gap-4 border-t border-slate-100">
                  <div className="inline-flex items-center gap-2 bg-[#E8F5D8]/80 px-3 py-1.5 rounded-lg border border-[#C8E6A0]/50 self-start">
                    <span className="text-[10px] font-bold text-green-800 uppercase tracking-widest">
                      Built With:
                    </span>
                    <span className="text-xs font-bold text-green-900">
                      {study.feature}
                    </span>
                  </div>

                  <Link
                    to={`/resources/case-study/${slug}`}
                    className="inline-flex items-center text-sm font-bold text-slate-800 hover:text-green-600 group/link transition-colors mt-2 text-left"
                  >
                    Read full story
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
};
