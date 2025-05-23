import { useState } from 'react';
import Image from 'next/image';
import { CodeBracketIcon, PhotoIcon, DocumentArrowDownIcon, UserCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

const ProjectDetailTabs = ({ project }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: InformationCircleIcon },
    { id: 'tech', label: 'Tech & Role', icon: CodeBracketIcon },
    { id: 'gallery', label: 'Gallery/Demo', icon: PhotoIcon },
    { id: 'materials', label: 'Shared Materials', icon: DocumentArrowDownIcon },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="prose dark:prose-invert max-w-none mt-6">
            <p>{project.description}</p>
            {project.youtubeUrl && (
                 <div className="aspect-w-16 aspect-h-9 my-6 rounded-lg overflow-hidden shadow-md">
                    <iframe 
                        src={`https://www.youtube.com/embed/${project.youtubeUrl.split('v=')[1]?.split('&')[0]}`}
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>
            )}
          </div>
        );
      case 'tech':
        return (
          <div className="prose dark:prose-invert max-w-none mt-6">
            <h3 className="font-semibold text-lg">Technologies Used:</h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              {project.techStack?.map(tech => <li key={tech}>{tech}</li>)}
            </ul>
            <h3 className="font-semibold text-lg mt-6">My Role:</h3>
            <p>{project.myRole}</p>
          </div>
        );
      case 'gallery':
        return (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Gallery</h3>
            {project.galleryImages && project.galleryImages.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {project.galleryImages.map((imgSrc, index) => (
                  <div key={index} className="relative aspect-video rounded-lg overflow-hidden shadow-md"> {/* Use aspect-video or aspect-square */}
                    <Image src={imgSrc} alt={`Project gallery image ${index + 1}`} layout="fill" objectFit="cover" />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 dark:text-gray-400">No gallery images available for this project.</p>
            )}
          </div>
        );
      case 'materials':
        return (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Downloads & Links</h3>
            {(project.sharedMaterials && project.sharedMaterials.length > 0) || project.githubUrl || project.liveDemoUrl ? (
              <ul className="space-y-3">
                {project.githubUrl && (
                     <li>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                            <CodeBracketIcon className="h-5 w-5 mr-2 flex-shrink-0" /> View Source Code on GitHub
                        </a>
                    </li>
                )}
                {project.liveDemoUrl && (
                     <li>
                        <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                            <UserCircleIcon className="h-5 w-5 mr-2 flex-shrink-0" /> View Live Demo {/* Or a more appropriate icon like EyeIcon */}
                        </a>
                    </li>
                )}
                {project.sharedMaterials?.map(material => (
                  <li key={material.name}>
                    <a href={material.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <DocumentArrowDownIcon className="h-5 w-5 mr-2 flex-shrink-0" /> {material.name}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 dark:text-gray-400">No specific shared materials or links for this project yet.</p>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-8">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-4 sm:space-x-8 overflow-x-auto" aria-label="Tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center group
                ${activeTab === tab.id
                  ? 'border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-indigo-300'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:border-gray-600'
                }
              `}
            >
              <tab.icon aria-hidden="true" className={`h-5 w-5 mr-2 ${activeTab === tab.id ? 'text-indigo-500 dark:text-indigo-400' : 'text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300'}`} />
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="py-6">
        {/* TODO: Add transition animations for tab content (e.g., Framer Motion's AnimatePresence) */}
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ProjectDetailTabs;
