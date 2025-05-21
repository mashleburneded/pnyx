import Image from 'next/image'

const courses = [
  { name: 'Intro to Algorithmic Trading', level: 'Basic' },
  { name: 'Market Making Strategies', level: 'Intermediate' },
  { name: 'Directional Strategies & V2 Framework', level: 'Intermediate' },
  { name: 'Cross Exchange Market Making', level: 'Advanced' },
];

const features = [
  {
    icon: 'https://ext.same-assets.com/1232453280/538812354.svg',
    title: '12+ LIVE SESSIONS',
    description: 'Dive deep into market theory, technical implementation, and deployment strategies with expert instructors',
  },
  {
    icon: 'https://ext.same-assets.com/1232453280/4031047187.svg',
    title: 'BUILD YOUR ALGO',
    description: 'Design, build, and deploy your own custom algorithmic trading strategy from concept to live execution',
  },
  {
    icon: 'https://ext.same-assets.com/1232453280/1877744345.svg',
    title: 'HANDS-ON COACHING',
    description: 'Get personalized help during office hours to troubleshoot your code and optimize your trading strategies',
  },
  {
    icon: 'https://ext.same-assets.com/1232453280/2833895142.svg',
    title: 'GET CERTIFIED',
    description: 'Present your strategy on Demo Day and earn official recognition as a certified Hummingbot market maker',
  },
];

export default function AccelerateCareerSection() {
  return (
    <section className="py-16 md:py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-primary">
          ACCELERATE YOUR TRADING CAREER
        </h2>
        <p className="text-base md:text-lg text-gray-400 text-center mb-10">
          From zero to professional market maker in just 4 intense weeks
        </p>

        <div className="mb-10 max-w-4xl mx-auto">
          <Image
            src="https://ext.same-assets.com/1232453280/849522504.webp"
            alt="Cohort Program Overview"
            width={1200}
            height={675}
            className="rounded-lg mx-auto shadow-2xl"
          />
        </div>

        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-10 text-sm md:text-base">
          Your cohort enrollment includes all four premium{' '}
          <a href="https://courses.botcamp.xyz/slides/all" className="text-primary hover:underline">
            Botcamp courses
          </a>{' '}
          an $800 value with over 20 hours of expert instruction from basic to advanced trading concepts
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {courses.map((course) => (
            <div
              key={course.name}
              className="bg-gray-900 p-5 rounded-lg flex flex-col items-center text-center hover:shadow-primary/20 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-primary mb-1.5">{course.name}</h3>
              <p className="text-gray-400 text-sm">{course.level}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center">
              <div className="relative w-12 h-12 mb-3">
                <Image src={feature.icon} alt={feature.title} layout="fill" objectFit="contain" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-1.5">{feature.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
