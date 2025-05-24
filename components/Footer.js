// Assume you have these SVG icon components defined elsewhere or in this file
// For example:
// const LinkedInIcon = (props) => <svg /* LinkedIn SVG code */ {...props} />;
// const GitHubIcon = (props) => <svg /* GitHub SVG code */ {...props} />;
// const YouTubeIcon = (props) => <svg /* YouTube SVG code */ {...props} />;

// Placeholder icons for demonstration:
const LinkedInIcon = ({ className }) => <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;
const GitHubIcon = ({ className }) => <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>;
const YouTubeIcon = ({ className }) => <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>;


const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a 
            href="https://www.linkedin.com/in/christiantsoungui/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
            aria-label="Christian Tsoungui Obama on LinkedIn"
          >
            <LinkedInIcon className="h-6 w-6" />
          </a>
          <a 
            href="https://github.com/ChristianTsounguiObama" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
            aria-label="Christian Tsoungui Obama on GitHub"
          >
            <GitHubIcon className="h-6 w-6" />
          </a>
          <a 
            href="https://www.youtube.com/@christiantsounguitech" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
            aria-label="Christian Tsoungui Obama on YouTube"
          >
            <YouTubeIcon className="h-6 w-6" />
          </a>
          {/* Add more social icons here if needed */}
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Christian Tsoungui Obama. All rights reserved.</p>
        {/* <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">
          Built with <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">Next.js</a> & <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">Tailwind CSS</a>.
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;