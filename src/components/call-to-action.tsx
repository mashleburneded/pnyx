import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CallToActionSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to transform your trading skills?
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Join Botcamp Cohort 12 and learn professional market making.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild size="lg" className="bg-primary text-black hover:bg-yellow-400 w-full sm:w-auto px-8 py-3 text-base font-semibold">
            <Link href="https://courses.botcamp.xyz/event/botcamp-cohort-12-12/register">Enroll Now</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:text-primary w-full sm:w-auto px-8 py-3 text-base font-semibold">
            <Link href="https://t.me/botcampcohorts">Chat in Telegram</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
