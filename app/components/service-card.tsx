"use client";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  delay?: number;
}

export const ServiceCard = ({
  icon: Icon,
  title,
  description,
  image,
  delay = 0,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-zinc-400 leading-relaxed">{description}</p>
        
        <Link
          href="/services"
          className="inline-flex items-center gap-2 mt-4 text-white hover:text-zinc-300 transition-colors group/link"
        >
          Learn More
          <svg
            className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

