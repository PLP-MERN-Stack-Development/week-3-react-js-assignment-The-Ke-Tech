// src/components/Layout.jsx
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-1 p-4 md:p-8">{children}</main>
      <Footer />
    </div>
  );
}
