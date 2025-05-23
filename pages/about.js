import Image from 'next/image';
import SectionAnimator from '../components/SectionAnimator';

export default function AboutPage() {
  return (
    <SectionAnimator>
      <div className="py-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">About Me</h1>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-48 h-48 md:w-60 md:h-60 relative rounded-full overflow-hidden shadow-md flex-shrink-0 border-4 border-indigo-500 dark:border-indigo-400">
              <Image 
                src="/images/your-profile-photo.jpeg" // **REPLACE THIS** with your actual photo path
                alt="Your Name"
                layout="fill"
                objectFit="cover"
                className="rounded-full" // Ensure the image itself is rounded if the container doesn't clip
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-3">Christian Tsoungui Obama</h2>
              <p className="text-lg text-indigo-600 dark:text-indigo-400 mb-4">Engineer, Researcher & Maker | Passionate About Robotics & AI | Building Smart Systems That Learn, Move & Inspire</p>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  Hello! I’m an engineer, researcher, and maker passionate about robotics and AI. I design smart systems that learn, move, and inspire — and I share my work to spark curiosity, innovation, and learning in others.
                </p>
                <p>
		 With my background in electromechanics and expertise in applied mathematics, I bridge the gap between research and practical applications by designing, simulating, and prototyping innovative and functional tech solutions.

                 My work is often featured on my 
                  <a href="https://www.youtube.com/@christiantsounguitech" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> YouTube channel</a>, 
                  where I share tutorials and insights from my projects.
                </p>
                <p>
                  When I'm not coding or creating, you can find me reading, cycling, or playing football.
                  I'm always open to new collaborations and exciting opportunities.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-100">My Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Mathematical modeling', 'Simulation', 'Artificial Intelligence', 'CAD/CAE', 'C/C++', 'Python', 'AVR programming', 'ROS2', 'NVIDI Isaac Sim'].map(skill => ( // Customize this list
                <span key={skill} className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionAnimator>
  );
}
