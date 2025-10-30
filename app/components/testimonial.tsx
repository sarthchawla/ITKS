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
      className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 relative"
    >
      <Quote className="w-10 h-10 text-zinc-700 mb-4" />
      <p className="text-zinc-300 text-lg leading-relaxed mb-6 italic">
        "{quote}"
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
          <span className="text-white font-bold text-lg">
            {author.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-white font-semibold">{author}</p>
          <p className="text-zinc-500 text-sm">
            {role} at {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

