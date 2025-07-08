import TaskManager from '../components/TaskManager';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TaskPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <TaskManager />
      </main>

      <Footer />
    </div>
  );
}
