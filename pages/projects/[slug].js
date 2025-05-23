import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../../data/projectsData';
import ProjectDetailTabs from '../../components/ProjectDetailTabs';
import SectionAnimator from '../../components/SectionAnimator';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

export async function getStaticPaths() {
  const paths = projects.map(project => ({
    params: { slug: project.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) {
    return { notFound: true }; // Return 404 if project not found
  }
  return { props: { project } };
}

export default function ProjectDetailPage({ project }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <SectionAnimator>
      <div className="py-8">
        <Link href="/projects" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6 group">
          <ArrowLeftIcon className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>

        <article className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-xl">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">{project.title}</h1>
          
          <div className="relative w-full h-64 sm:h-96 mb-6 rounded-lg overflow-hidden shadow-md">
            <Image
              src={project.image || '/images/placeholder.jpg'}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              priority // Prioritize loading for LCP element
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">{tag}</span>
            ))}
          </div>
          
          <ProjectDetailTabs project={project} />
        </article>
      </div>
    </SectionAnimator>
  );
}
