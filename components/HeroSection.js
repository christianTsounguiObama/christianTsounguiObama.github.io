import Link from 'next/link';
import SectionAnimator from './SectionAnimator'; // Import SectionAnimator

const HeroSection = () => {
  return (
    <SectionAnimator animationClass="fade-in"> {/* Apply animation here */}
      <section className="text-center py-20 px-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white rounded-lg shadow-xl mb-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I'm Christian {/* **REPLACE** */}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          A passionate Engineer, Researcher, and Maker building exciting projects and sharing my journey. {/* **REPLACE** */}
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/projects" className="inline-block bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 w-full sm:w-auto">
              View My Work
          </Link>
          <Link href="/contact" className="inline-block bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-indigo-600 transition duration-300 w-full sm:w-auto">
              Let's Collaborate
          </Link>
        </div>
        {/* Optional: Add a subtle scroll down indicator */}
      </section>
    </SectionAnimator>
  );
};

export default HeroSection;
