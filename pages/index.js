import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/ProjectCard';
import SectionAnimator from '../components/SectionAnimator';
import Link from 'next/link'; // Import Link
import { projects } from '../data/projectsData';

export default function Home() {
  const featuredProjects = projects.slice(0, 2); // Show first 2 projects as featured

  return (
    <div>
      <HeroSection />

      <SectionAnimator>
        <section id="featured-projects" className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map(project => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
              View All Projects →
            </Link>
          </div>
        </section>
      </SectionAnimator>

      <SectionAnimator>
        <section className="py-16 bg-gray-200 dark:bg-gray-800 rounded-lg my-12 text-center px-4">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">Ready to Collaborate?</h2>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
            I'm always excited to work on new and challenging projects. If you have an idea or opportunity, let's talk!
          </p>
          <Link href="/contact" className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
            Get in Touch
          </Link>
        </section>
      </SectionAnimator>
    </div>
  );
}
