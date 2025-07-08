import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
  if (dark) {
    document.documentElement.classList.add('dark'); // ✅ must be this
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [dark]);


  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-sm dark:text-white"
    >
      {dark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
