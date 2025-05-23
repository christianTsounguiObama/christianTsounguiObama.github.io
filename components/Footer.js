const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Christian Tsoungui Obama. All rights reserved.</p> {/* **REPLACE Your Name** */}
        {/*<p className="text-sm">
          Built with <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">Next.js</a> & <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">Tailwind CSS</a>.
        </p>*/}
        {/* Add social links here if desired */}
      </div>
    </footer>
  );
};

export default Footer;
