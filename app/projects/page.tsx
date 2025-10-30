"use client";
import { Navigation } from "../components/nav";
import { motion } from "framer-motion";
import { useState } from "react";

const categories = ["All", "Residential", "Commercial", "Hospitality", "Renovation"];

const projects = [
  {
    title: "Modern Luxury Villa",
    category: "Residential",
    location: "Mumbai, India",
    year: "2024",
    description: "A contemporary villa featuring open spaces, natural light, and premium finishes",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
  },
  {
    title: "Corporate Office Space",
    category: "Commercial",
    location: "Gurgaon, India",
    year: "2023",
    description: "Modern office design promoting collaboration and productivity",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  },
  {
    title: "Boutique Hotel Interior",
    category: "Hospitality",
    location: "Jaipur, India",
    year: "2023",
    description: "Elegant hotel interiors blending traditional and contemporary elements",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
  },
  {
    title: "Contemporary Apartment",
    category: "Residential",
    location: "Bangalore, India",
    year: "2024",
    description: "Minimalist apartment design with smart storage solutions",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
  },
  {
    title: "Retail Showroom",
    category: "Commercial",
    location: "Delhi, India",
    year: "2023",
    description: "Innovative retail space designed to enhance customer experience",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
  },
  {
    title: "Heritage Home Restoration",
    category: "Renovation",
    location: "Kolkata, India",
    year: "2024",
    description: "Careful restoration preserving historical character while adding modern amenities",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
  },
  {
    title: "Luxury Penthouse",
    category: "Residential",
    location: "Mumbai, India",
    year: "2023",
    description: "High-end penthouse with panoramic views and bespoke interiors",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
  },
  {
    title: "Restaurant Interior",
    category: "Hospitality",
    location: "Pune, India",
    year: "2024",
    description: "Atmospheric dining space with custom lighting and furniture",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
  },
  {
    title: "Co-Working Space",
    category: "Commercial",
    location: "Hyderabad, India",
    year: "2023",
    description: "Flexible workspace designed for modern professionals",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
  },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-black min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Explore our portfolio of exceptional designs and successful project deliveries across residential, commercial, and hospitality sectors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-6 bg-zinc-900 sticky top-0 z-40 backdrop-blur-lg bg-zinc-900/80">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-white text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 bg-zinc-900">
        <div className="container mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-2xl bg-zinc-800 border border-zinc-700 hover:border-zinc-500 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-black">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-zinc-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-3">
                    {project.location} • {project.year}
                  </p>
                  <p className="text-zinc-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-zinc-400 text-xl">No projects found in this category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "50+", label: "Ongoing Projects" },
              { number: "15+", label: "Years of Excellence" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-zinc-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-zinc-400 mb-8">
              Let's discuss your project and bring your vision to life
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

