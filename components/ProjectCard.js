import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
  return (
    <Link href={`/projects/${project.slug}`} legacyBehavior>
      <a className="block bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 group h-full flex flex-col">
        <div className="relative h-48 w-full">
          <Image
            src={project.image || '/images/placeholder.jpg'}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="group-hover:opacity-90 transition-opacity duration-300"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-3 flex-grow">{project.description.substring(0, 100)}...</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">{tag}</span>
            ))}
          </div>
          <span className="mt-auto text-blue-600 dark:text-blue-400 font-medium group-hover:underline self-start">
            View Details →
          </span>
        </div>
      </a>
    </Link>
  );
};

export default ProjectCard;
