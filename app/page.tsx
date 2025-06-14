import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Education } from '@/components/education';
import { Experience } from '@/components/experience';
import { Projects } from '@/components/projects';
import { Statistics } from '@/components/statistics';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Statistics />
      <Contact />
      <Footer />
    </main>
  );
}