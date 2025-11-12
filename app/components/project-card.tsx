"use client";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  delay?: number;
}

export const ProjectCard = ({
  title,
  category,
  image,
  delay = 0,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent dark:from-black dark:via-black/50 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: delay + 0.2 }}
        >
          <p className="text-sm text-gray-200 dark:text-zinc-300 mb-2 uppercase tracking-wider">
            {category}
          </p>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <div className="w-12 h-1 bg-white transform origin-left group-hover:w-24 transition-all duration-500" />
        </motion.div>
      </div>
    </motion.div>
  );
};

