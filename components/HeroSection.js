import Link from 'next/link';
import Image from 'next/image';
import SectionAnimator from './SectionAnimator';

// Define the ChevronDownIcon component (or import it if you have it in a separate file)
const ChevronDownIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5} // You can adjust strokeWidth for thickness
    stroke="currentColor"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);


const HeroSection = () => {
  return (
    <SectionAnimator animationClass="fade-in">
      {/* Make the main section relative to position the scroll indicator */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0072b2] to-[#a0acbd] text-white rounded-lg shadow-xl mb-12 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">

            {/* Text Content Column */}
            <div className="md:w-3/5 lg:w-2/3 text-center md:text-left mb-10 md:mb-0 md:pr-10 lg:pr-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                Hi, I'm Christian {/* **REPLACE** */}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-xl mx-auto md:mx-0">
                A passionate Engineer, Researcher, and Maker, building exciting projects and sharing my journey. {/* **REPLACE** */}
              </p>
              <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4 justify-center md:justify-start">
                <Link href="/projects" className="inline-block bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 w-full sm:w-auto">
                    View My Work
                </Link>
                <Link href="/contact" className="inline-block bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-indigo-600 transition duration-300 w-full sm:w-auto">
                    Let's Collaborate
                </Link>
              </div>
            </div>

            {/* Image Column */}
            <div className="md:w-2/5 lg:w-1/3 flex justify-center md:justify-end">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/your-profile-photo.jpeg" // **REPLACE**
                  alt="A picture of Christian Tsoungui Obama" // **REPLACE**
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        {/* This div will be positioned absolutely within the 'relative' parent section */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          {/* Using the ChevronDownIcon component */}
        {/* <ChevronDownIcon className="w-8 h-8 text-white opacity-75" />*/}
          {/* You can also try two chevrons for a different look */}
          <ChevronDownIcon className="w-6 h-6 text-white opacity-50" />
          <ChevronDownIcon className="w-6 h-6 text-white opacity-50 -mt-3" /> 
        </div>

      </section>
    </SectionAnimator>
  );
};

export default HeroSection;
