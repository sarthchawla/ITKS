"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  delay?: number;
}

export const Testimonial = ({
  quote,
  author,
  role,
  company,
  delay = 0,
}: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-8 relative shadow-sm dark:shadow-none"
    >
      <Quote className="w-10 h-10 text-gray-400 dark:text-zinc-700 mb-4" />
      <p className="text-gray-700 dark:text-zinc-300 text-lg leading-relaxed mb-6 italic">
        "{quote}"
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-zinc-700 dark:to-zinc-800 flex items-center justify-center">
          <span className="text-gray-900 dark:text-white font-bold text-lg">
            {author.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-gray-900 dark:text-white font-semibold">{author}</p>
          <p className="text-gray-600 dark:text-zinc-500 text-sm">
            {role} at {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

