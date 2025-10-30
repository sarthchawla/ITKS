"use client";
import Link from "next/link";
import React from "react";
import { Hero } from "./components/hero";
import { ServiceCard } from "./components/service-card";
import { ProjectCard } from "./components/project-card";
import { Testimonial } from "./components/testimonial";
import { 
  Home as HomeIcon, 
  Building2, 
  Ruler, 
  PaintBucket, 
  Sparkles,
  ArrowRight 
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: HomeIcon,
    title: "Interior Design",
    description: "Create stunning, functional spaces that reflect your unique style and enhance your daily living experience.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  },
  {
    icon: Building2,
    title: "Architecture Design",
    description: "Innovative architectural solutions that blend aesthetics with functionality for residential and commercial projects.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
  },
  {
    icon: Ruler,
    title: "Project Management",
    description: "End-to-end project coordination ensuring timely delivery, quality control, and seamless execution.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
  },
  {
    icon: PaintBucket,
    title: "Contracting",
    description: "Professional contracting services with skilled craftsmen delivering excellence in every detail.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
  },
];

const projects = [
  {
    title: "Modern Luxury Villa",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    title: "Corporate Office Space",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    title: "Boutique Hotel Interior",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  },
  {
    title: "Contemporary Apartment",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
];

const testimonials = [
  {
    quote: "ITKS transformed our office space beyond our expectations. Their attention to detail and professional approach made the entire process seamless.",
    author: "Rajesh Kumar",
    role: "CEO",
    company: "Tech Innovations Ltd",
  },
  {
    quote: "The team's creativity and expertise in interior design helped us create a home that truly reflects our personality. Highly recommended!",
    author: "Priya Sharma",
    role: "Homeowner",
    company: "Mumbai",
  },
  {
    quote: "Outstanding project management and execution. They delivered our commercial project on time and within budget with exceptional quality.",
    author: "Amit Patel",
    role: "Director",
    company: "Retail Solutions Inc",
  },
];

export default function Home() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Comprehensive solutions for all your interior and architectural needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                image={service.image}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 px-6 bg-zinc-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-end mb-16"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Featured Projects
              </h2>
              <p className="text-xl text-zinc-400">
                Explore our portfolio of exceptional designs
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden md:flex items-center gap-2 text-white hover:text-zinc-300 transition-colors group"
            >
              View All Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                category={project.category}
                image={project.image}
                delay={index * 0.1}
              />
            ))}
          </div>

          <Link
            href="/projects"
            className="md:hidden flex items-center justify-center gap-2 text-white hover:text-zinc-300 transition-colors group mt-8"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Excellence in every aspect of design and execution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Sparkles,
                title: "Innovative Design",
                description: "Cutting-edge designs that push boundaries while maintaining functionality",
              },
              {
                icon: Building2,
                title: "Quality Craftsmanship",
                description: "Meticulous attention to detail with premium materials and skilled execution",
              },
              {
                icon: HomeIcon,
                title: "Client-Centric Approach",
                description: "Your vision is our priority, with personalized solutions for every project",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-black">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Hear what our satisfied clients have to say
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
              Let's bring your vision to life with our expert design and construction services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Project
              </Link>
              <Link
                href="/projects"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black border-t border-zinc-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-4">ITKS</h3>
              <p className="text-zinc-400 text-sm">
                Infinity Turnkey Solutions - Your partner in creating exceptional spaces
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li><Link href="/services" className="hover:text-white transition-colors">Interior Design</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Architecture</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Project Management</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Contracting</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li>+91-9999-207-909</li>
                <li>info@itks.in</li>
                <li>www.itks.in</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Infinity Turnkey Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
