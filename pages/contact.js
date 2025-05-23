import SectionAnimator from '../components/SectionAnimator';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch(form.action, { // Make sure to set your Formspree endpoint in the form's action attribute
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      });
      if (response.ok) {
        alert("Thanks for reaching out! I'll get back to you soon.");
        form.reset();
      } else {
        const responseData = await response.json();
        if (responseData && responseData.errors) {
          alert(responseData.errors.map(error => error.message).join(", "));
        } else {
          alert("Oops! There was a problem submitting your form. Please try again.");
        }
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form. Please try again.");
    }
  };

  return (
    <SectionAnimator>
      <div className="py-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">Get In Touch</h1>
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Send me a message</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Have a project in mind, a collaboration idea, or just want to say hi? Fill out the form, and I'll get back to you!
              </p>
              <form onSubmit={handleSubmit} action="https://formspree.io/f/xzzrqlav" method="POST"> {/* **REPLACE YOUR_FORMSPREE_ID** */}
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                  <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                  <input type="email" name="_replyto" id="email" required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                  <input type="text" name="subject" id="subject" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                  <textarea name="message" id="message" rows="4" required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-8 md:mt-0">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Alternatively, you can reach out to me directly:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <EnvelopeIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-gray-800 dark:text-gray-100">Email</span><br/>
                    <a href="mailto:christian.tsoungui.obama@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">christian.tsoungui.obama@gmail.com</a> {/* **REPLACE EMAIL** */}
                  </div>
                </li>
                {/* Add Phone and Location li elements if desired, similar to above */}
              </ul>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">Connect on Social Media:</h3>
                <div className="flex space-x-4">
                  {/* **REPLACE # with your actual social media links** */}
                  <a href="https://www.linkedin.com/in/christiantsoungui/" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">LinkedIn</a>
                  <a href="https://github.com/ChristianTsounguiObama" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">GitHub</a>
                  <a href="https://www.youtube.com/@christiantsounguitech" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">YouTube</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionAnimator>
  );
}
