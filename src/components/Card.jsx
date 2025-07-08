// src/components/Card.jsx
import { motion } from 'framer-motion';

export default function Card({ title, content, children }) {
  return (
    <motion.div
    
      className="w-full max-w-xl mx-auto border rounded-lg shadow p-4 sm:p-6 md:p-8 transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
    >
      
      
      {title && (
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
          {title}
        </h2>
        
      )}
      {content && (
        <p className="text-gray-700 dark:text-gray-300 mb-4 text-base sm:text-lg">
          {content}
        </p>
      )}
      <div className="flex flex-wrap gap-4 justify-center">{children}</div>
    </motion.div>
    
  );
}
