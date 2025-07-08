import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto p-6 text-gray-800 dark:text-gray-100">
        <h1 className="text-3xl font-bold mb-4">About This Website</h1>

        <p className="mb-4 text-lg">
          This is a modern React application built using Vite, Tailwind CSS, and React Router.
          It showcases various features including task management, API integration, search and pagination,
          as well as responsive design and dark mode support.
        </p>

        <p className="mb-4">
          The project demonstrates effective use of React hooks (<code>useState</code>, <code>useEffect</code>),
          reusable components, and integration with a public API to fetch and display football-related news.
        </p>

        <p className="mb-4">
          Styling is handled entirely with Tailwind CSS utility classes, ensuring fast, consistent,
          and responsive UI across mobile, tablet, and desktop devices.
        </p>

        <p>
          A theme switcher is available to toggle between light and dark modes, offering a better experience
          based on your environment or personal preference.
        </p>
      </main>

      <Footer />
    </div>
  );
}
