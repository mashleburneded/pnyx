import Link from 'next/link';

const stats = [
  { value: '$34 billion', label: 'Last 12M Reported Trade Volume' },
  { value: '50+', label: 'Official CEX and DEX Connectors' },
  { value: '15K+', label: 'Active Discord Members' },
];

export default function PoweredByHummingbotSection() {
  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Powered by Hummingbot
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Hummingbot is an open source Python framework that helps you run automated trading strategies on any CEX and DEX
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="p-6 rounded-lg">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-6">
          <Link href="https://hummingbot.org" className="text-primary hover:underline">
            Website
          </Link>
          <Link href="https://github.com/hummingbot/hummingbot" className="text-primary hover:underline">
            Github
          </Link>
        </div>
      </div>
    </section>
  );
}
