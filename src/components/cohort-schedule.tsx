import Image from 'next/image';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const scheduleHighlights = [
  {
    title: 'Theory Sessions',
    description: 'Taught by Hummingbot core maintainers, these sessions cover fundamental market making concepts, strategies, and business models.',
    icon: 'https://ext.same-assets.com/1232453280/538812354.svg',
  },
  {
    title: 'Technical Sessions',
    description: "Hands-on coding workshops where you'll learn to build, test, and deploy algorithmic trading strategies using Hummingbot.",
    icon: 'https://ext.same-assets.com/1232453280/4031047187.svg',
  },
  {
    title: 'Demo Day',
    description: 'Present your custom trading strategy to peers and industry experts, showcasing your skills and earning certification as a Hummingbot developer.',
    icon: 'https://ext.same-assets.com/1232453280/2833895142.svg',
  },
];

const weeklySchedule = [
  {
    week: 0,
    title: 'Preparation',
    details: [
      {
        type: 'Prework',
        description:
          'Begin your journey by completing the Intro to Algo Trading course, which will establish the foundational knowledge needed for the bootcamp. The course includes hands-on coding challenges to get you comfortable with the basics of algorithmic trading before the live sessions begin.',
      },
    ],
  },
  {
    week: 1,
    title: 'Foundations',
    details: [
      {
        sessionTitle: 'Introduction to Market Making',
        date: 'Tuesday September 9, 2025',
        type: 'Theory',
        description:
          "Your journey begins with understanding the fundamentals of trading bots. We'll explore order book mechanics including the difference between makers and takers, and how queue priority affects your trades. You'll learn about different exchange types (spot vs. perpetual, centralized vs. decentralized) and gain insights into strategy types like directional trading strategies, market making strategies, and more that form the basis of algorithmic trading.",
      },
      {
        sessionTitle: 'The Hummingbot Open Source Framework',
        date: 'Wednesday September 10, 2025',
        type: 'Technical',
        description:
          "Dive into the technical architecture of Hummingbot with a comprehensive overview of the framework including core components, connector design, strategy implementation, and complementary services. You'll set up your development environment and learn scripting basics such as accessing order books, retrieving candle data, executing trades, and handling events. The session concludes with an introduction to the powerful StrategyV2 framework, covering executors and controllers.",
      },
      {
        sessionTitle: 'Pure Market Making Strategies',
        date: 'Thursday September 11, 2025',
        type: 'Theory',
        description:
          "Explore the concept of market making in depth, learning how to select ideal markets for your strategies. You'll study the influential Avellaneda & Stoikov paper that forms the theoretical foundation for many modern market making approaches. The session covers essential aspects of measuring profitability and implementing risk management techniques to protect your capital while maximizing returns.",
      },
      {
        sessionTitle: 'StrategyV2 Controllers',
        date: 'Friday September 12, 2025',
        type: 'Technical',
        description:
          "This hands-on session focuses on implementing advanced trading strategies through Hummingbot's controller system. You'll work with directional controllers including Bollinger Bands and MACD indicators, and even code a new controller from scratch during the live session. The class also covers market making controllers that operate around mid-price with dynamic spreads, as well as generic controllers for arbitrage and cross-exchange market making.",
      },
      {
        type: 'Week 1 Homework',
        description:
          'Choose a strategy type as your focus area and complete the corresponding course materials and coding challenges. Begin designing your own trading strategy using the provided Design Template, laying the groundwork for your final project.',
      },
    ],
  },
  {
    week: 2,
    title: 'Advanced Techniques',
    details: [
      {
        sessionTitle: 'Advanced Market Making Strategies',
        date: 'Tuesday September 16, 2025',
        type: 'Theory',
        description:
          'Elevate your trading expertise by exploring sophisticated strategies including arbitrage, cross-exchange market making, and grid trading approaches. This session will help you develop the critical thinking needed to select the optimal strategy for different market conditions and trading objectives, giving you a comprehensive toolkit for algorithmic trading.',
      },
      {
        sessionTitle: 'Coding Custom Strategies',
        date: 'Wednesday September 17, 2025',
        type: 'Technical',
        description:
          "Enhance your trading algorithms with practical coding exercises to add multi-timeframe support to directional strategies. You'll develop a statistical arbitrage controller from scratch and learn how to create configurations that run multiple controllers within the same bot instance, maximizing efficiency and creating sophisticated trading systems.",
      },
      {
        sessionTitle: 'The Business of Market Making',
        date: 'Thursday September 18, 2025',
        type: 'Theory',
        description:
          'Transition from technical concepts to business applications by exploring market maker business models including liquidity mining,market making-as-a-service, and token loans with embedded options. Learn to identify lucrative opportunities and potential pitfalls while mastering the art of scaling your operations through bot management. The session concludes with critical operational security practices to protect your assets and trading systems.',
      },
      {
        sessionTitle: 'Running Hummingbot in Production',
        date: 'Friday September 19, 2025',
        type: 'Technical',
        description:
          "Prepare for real-world deployment with a deep dive into setting up Hummingbot for production use. You'll learn how to securely deploy the full stack of Backend API, Dashboard, and Broker services, including security best practices. The session covers deploying bots on cloud providers and using the Quants-Lab research repository to interact with the Backend API for managing configurations, monitoring account balances, and controlling bot operations.",
      },
      {
        type: 'Week 2 Homework',
        description:
          "Complete your strategy design template and begin implementing your custom controller. Analyze the notebooks in the Hummingbot quants-lab repository to improve your strategy's analytical foundation. Set up your production environment and deploy a bot running at least three different controller configurations to gain practical deployment experience.",
      },
    ],
  },
  {
    week: 3,
    title: 'Implementation & Coaching',
    details: [
      {
        type: 'Personalized Office Hours',
        description:
          'Week 3 is dedicated to intensive implementation of your trading strategy with personalized support. Daily office hours with our expert instructors provide one-on-one guidance as you build your custom trading controller. These sessions offer the perfect opportunity to troubleshoot challenges, refine your approach, and ensure your strategy is market-ready.',
      },
      { sessionTitle: 'Office Hours with Mike', date: 'Tuesday September 23, 2025', type: 'Coaching' },
      { sessionTitle: 'Office Hours with Fede', date: 'Wednesday September 24, 2025', type: 'Coaching' },
      { sessionTitle: 'Office Hours with Mike', date: 'Thursday September 25, 2025', type: 'Coaching' },
      { sessionTitle: 'Office Hours with Fede', date: 'Friday September 26, 2025', type: 'Coaching' },
      {
        type: 'Week 3 Homework',
        description:
          "Complete the implementation of your custom trading controller and create a 5-minute video presentation that demonstrates your strategy in action. Your video should explain the strategy's concept, implementation details, and show it running in a production environmentpreparing you for the final Demo Day presentation.",
      },
    ],
  },
  {
    week: 4,
    title: 'Culmination & Certification',
    details: [
      {
        sessionTitle: 'Demo Day',
        date: 'Tuesday September 30, 2025',
        type: 'Presentation',
        description:
          "The culmination of your Botcamp journey arrives with Demo Day, where each participant's video presentation will be showcased to the entire cohort. This celebration of achievement gives you the opportunity to present your trading strategy to peers and instructors while learning from the diverse approaches of fellow participants. The session concludes with students voting for the Cohort MVP, recognizing exceptional innovation and execution in strategy development.",
      },
      {
        type: 'Official Certification',
        description:
          "Upon completing Demo Day, you'll be officially certified as a Hummingbot Market Maker. This prestigious recognition includes:",
        items: [
          'Addition to the official Hummingbot Certified Developers List',
          'Digital certification badge for your LinkedIn profile and resume',
          'Priority access to Hummingbot ecosystem opportunities and partnerships',
        ],
        footer:
          'Certification types include Market Maker, Strategy V2 Developer, and Script Developer based on your final project implementation.',
      },
    ],
  },
];

const WeekIcon = ({ weekNumber }: { weekNumber: number }) => {
  let actualIconSrc = 'https://ext.same-assets.com/1232453280/2453636751.svg'; // default to 1.svg
  if (weekNumber === 0) actualIconSrc = 'https://ext.same-assets.com/1232453280/2956181938.svg';
  else if (weekNumber === 1) actualIconSrc = 'https://ext.same-assets.com/1232453280/2453636751.svg';
  else if (weekNumber === 2) actualIconSrc = 'https://www.botcamp.xyz/cohorts/2.svg'; // Placeholder, replace with actual if available
  else if (weekNumber === 3) actualIconSrc = 'https://ext.same-assets.com/1232453280/3262849583.svg';
  else if (weekNumber === 4) actualIconSrc = 'https://www.botcamp.xyz/cohorts/4.svg'; // Placeholder, replace with actual if available

  return (
    <div className="relative w-10 h-10 md:w-12 md:h-12 mr-3 md:mr-4 flex-shrink-0">
      <Image src={actualIconSrc} alt={`Week ${weekNumber}`} layout="fill" objectFit="contain" />
    </div>
  );
};

export default function CohortScheduleSection() {
  return (
    <section className="py-16 md:py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-primary">
          Botcamp Cohort 12 Schedule
        </h2>
        <p className="text-base md:text-lg text-gray-400 text-center max-w-2xl lg:max-w-3xl mx-auto mb-8">
          A Botcamp cohort is an intensive 4-week bootcamp that teaches participants the theory, business, and technical aspects of market making. By the end of the cohort, students will have designed and coded their own custom market making strategy and earned an official Hummingbot Certification.
        </p>
        <p className="text-sm md:text-base text-gray-500 text-center max-w-2xl lg:max-w-3xl mx-auto mb-12">
          Each session runs for 1.5 to 2 hours with interactive Q&A, and participants receive lifetime access to all session recordings, code samples, and course materials.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {scheduleHighlights.map((highlight) => (
            <div
              key={highlight.title}
              className="bg-gray-900 p-5 rounded-lg flex flex-col items-center text-center hover:shadow-primary/20 hover:shadow-lg transition-shadow"
            >
              <div className="relative w-10 h-10 mb-3">
                <Image src={highlight.icon} alt={highlight.title} layout="fill" objectFit="contain" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-1.5">{highlight.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>

        {weeklySchedule.map((weekData) => (
          <div key={weekData.week} className="mb-10">
            <div className="flex items-center mb-5">
              <WeekIcon weekNumber={weekData.week} />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-primary">
                  Week {weekData.week}: {weekData.title}
                </h3>
              </div>
            </div>
            <div className="pl-0 md:pl-16 relative"> {/* Removed space-y-2, accordion items will manage their own spacing */}
              {/* Vertical timeline bar - Positioned to be alongside the accordion items */}
              {weekData.details.length > 1 && ( // Only show if there's more than one item to connect
                 <div className="absolute left-[5px] md:left-[calc(4rem+5px)] top-[1rem] bottom-[1rem] w-0.5 bg-border opacity-70 rounded-full -translate-x-1/2"></div> {/* Changed bg-gray-700 to bg-border */}
              )}
              <Accordion type="single" collapsible className="w-full">
                {weekData.details.map((detail, index) => (
                  <AccordionItem key={index} value={`week-${weekData.week}-detail-${index}`} className="border-b border-border last:border-b-0 relative"> {/* Changed border-gray-700 to border-border */}
                    {/* Timeline Dot - Positioned to the left of the trigger */}
                    <div className="absolute left-[5px] md:left-[calc(4rem+5px)] top-[calc(1rem+4px)] w-2.5 h-2.5 rounded-full bg-primary ring-2 ring-offset-2 ring-offset-background ring-background group-data-[state=open]:ring-primary/50 transition-all -translate-x-1/2"></div> {/* Changed ring-black to ring-background */}
                    
                    <AccordionTrigger className="py-4 text-left hover:no-underline group pl-8 md:pl-12"> {/* Added padding for dot */}
                      <div className="flex-grow"> {/* Content of the trigger itself */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          {/* Ensure default color is foreground, specific types override, hover to primary for default only */}
                          <h4 className={`text-lg font-semibold transition-colors ${
                              detail.type && !detail.sessionTitle && detail.type.toLowerCase().includes('homework') ? 'text-yellow-400 group-hover:text-yellow-300' :
                              detail.type && !detail.sessionTitle && detail.type.toLowerCase().includes('office hours') ? 'text-orange-300 group-hover:text-orange-200' :
                              detail.type && !detail.sessionTitle && detail.type.toLowerCase().includes('certification') ? 'text-fuchsia-300 group-hover:text-fuchsia-200' :
                              'text-foreground group-hover:text-primary' // Default to text-foreground
                            }`}>{detail.sessionTitle || detail.type}
                          </h4>
                          <div className="flex items-center mt-1 sm:mt-0 flex-shrink-0">
                            {detail.date && <p className="text-xs text-muted-foreground mr-3 whitespace-nowrap">{detail.date}</p>} {/* Changed text-gray-500 to text-muted-foreground */}
                            {/* Display badge if type exists, regardless of sessionTitle, for consistency */}
                            {detail.type && (
                              <span
                                className={`px-1.5 py-0.5 rounded-full text-xs font-medium ${
                                  detail.type === 'Theory'
                                    ? 'bg-sky-500/20 text-sky-300'
                                    : detail.type === 'Technical'
                                    ? 'bg-emerald-500/20 text-emerald-300'
                                    : detail.type === 'Coaching'
                                    ? 'bg-orange-500/20 text-orange-300'
                                    : detail.type === 'Presentation'
                                    ? 'bg-fuchsia-500/20 text-fuchsia-300'
                                    : detail.type.toLowerCase().includes('homework')
                                    ? 'bg-yellow-500/20 text-yellow-300'
                                    : detail.type.toLowerCase().includes('office hours')
                                    ? 'bg-orange-500/20 text-orange-300'
                                    : detail.type.toLowerCase().includes('certification')
                                    ? 'bg-fuchsia-500/20 text-fuchsia-300'
                                    : 'bg-muted text-muted-foreground' // Default badge for other types like 'Prework', theme aligned
                                }`}
                              >
                                {detail.type}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      {/* Chevron is part of AccordionTrigger by default in ShadCN (added via ::after pseudo-element) */}
                    </AccordionTrigger>
                    <AccordionContent className="pl-8 md:pl-12 pb-6 pt-2 text-muted-foreground text-sm leading-relaxed"> {/* Changed text-gray-400 to text-muted-foreground, increased bottom padding */}
                      <p>{detail.description}</p>
                      {detail.items && (
                        <ul className="list-none mt-3 space-y-1.5"> {/* Increased spacing */}
                          {detail.items.map((item: string, i: number) => (
                            <li key={i} className="flex items-start">
                              <svg
                                className="w-3.5 h-3.5 mr-2.5 mt-0.5 text-primary flex-shrink-0" // Increased margin
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {detail.footer && <p className="text-xs text-gray-500 mt-3">{detail.footer}</p>} {/* Increased margin */}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
