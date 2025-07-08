// src/components/Button.jsx
export default function Button({ variant = 'primary', children, ...props }) {
  const baseStyle = 'px-4 py-2 rounded font-semibold transition duration-200 w-full sm:w-auto text-center';

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
