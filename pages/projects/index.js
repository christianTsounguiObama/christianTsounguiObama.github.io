// pages/projects/index.js
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../data/projectsData';
import SectionAnimator from '../../components/SectionAnimator'; // Assuming you have this for consistent animation

export default function ProjectsPage() {
  // Define the categories you want to display sections for and their order
  const displayCategoriesOrder = ['Research', 'Robotics', 'AI'];
  // You can add more categories here like 'Web Development', 'Data Science', etc.
  // All other categories from your projectsData will be grouped under "Other Projects"

  // Group projects by category
  const projectsByCategory = {};
  projects.forEach(project => {
    if (!project.category) { // Handle projects that might not have a category yet
      project.category = 'Other'; // Assign to 'Other' if no category is specified
    }
    if (!projectsByCategory[project.category]) {
      projectsByCategory[project.category] = [];
    }
    projectsByCategory[project.category].push(project);
  });

  // Get the list of "Other" categories (those not in displayCategoriesOrder)
  const allProjectCategories = Object.keys(projectsByCategory);
  const otherCategoryNames = allProjectCategories.filter(
    category => !displayCategoriesOrder.includes(category)
  );

  return (
    <SectionAnimator>
      <div className="py-8">
        <h1 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-gray-200">
          My Projects
        </h1>
        
        {/* Render projects for the specified categories in order */}
        {displayCategoriesOrder.map(categoryName => {
          const categoryProjects = projectsByCategory[categoryName] || [];

          if (categoryProjects.length === 0) {
            return null; // Don't render a section if no projects for this primary category
          }

          return (
            <section key={categoryName} className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-gray-700 dark:text-gray-300 border-b-2 border-indigo-500 dark:border-indigo-400 pb-3">
                {categoryName}
              </h2>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryProjects.map(project => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </section>
          );
        })}

        {/* Render "Other Projects" if any exist */}
        {otherCategoryNames.length > 0 && (
          <section key="OtherProjects" className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-gray-700 dark:text-gray-300 border-b-2 border-gray-400 dark:border-gray-600 pb-3">
              Other Projects
            </h2>
            {otherCategoryNames.map(categoryName => {
              const categoryProjects = projectsByCategory[categoryName] || [];
              if (categoryProjects.length === 0) return null; // Should not happen if logic is correct

              return (
                // Optionally, add a sub-heading for each "other" category if you have many
                // <div key={categoryName} className="mb-10"> 
                //   <h3 className="text-2xl font-medium mb-6 text-gray-600 dark:text-gray-400">{categoryName}</h3>
                <div key={categoryName} className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                  {categoryProjects.map(project => (
                    <ProjectCard key={project.slug} project={project} />
                  ))}
                </div>
                // </div>
              );
            })}
          </section>
        )}

        {projects.length === 0 && (
            <p className="text-center text-gray-600 dark:text-gray-400 text-lg">
                No projects to display yet. Check back soon!
            </p>
        )}

      </div>
    </SectionAnimator>
  );
}
