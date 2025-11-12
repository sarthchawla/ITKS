"use client";
import { Navigation } from "../components/nav";
import { motion } from "framer-motion";
import { 
  Home, 
  Building2, 
  Ruler, 
  PaintBucket, 
  Lightbulb,
  Hammer,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Interior Design",
    description: "Transform your living or working space with our expert interior design services. We create environments that are both aesthetically pleasing and highly functional.",
    features: [
      "Space Planning & Layout Design",
      "Color Consultation & Material Selection",
      "Custom Furniture Design",
      "Lighting Design & Implementation",
      "3D Visualization & Rendering",
      "Sustainable Design Solutions"
    ],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
  },
  {
    icon: Building2,
    title: "Architecture Design",
    description: "Our architectural services blend innovation with practicality, creating structures that stand the test of time while meeting modern needs.",
    features: [
      "Residential Architecture",
      "Commercial Building Design",
      "Renovation & Restoration",
      "Building Information Modeling (BIM)",
      "Sustainable Architecture",
      "Regulatory Compliance & Permits"
    ],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
  },
  {
    icon: Ruler,
    title: "Project Management",
    description: "End-to-end project management ensuring your vision becomes reality on time and within budget, with minimal stress.",
    features: [
      "Project Planning & Scheduling",
      "Budget Management & Cost Control",
      "Quality Assurance & Control",
      "Vendor & Contractor Coordination",
      "Risk Management",
      "Regular Progress Reporting"
    ],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
  },
  {
    icon: PaintBucket,
    title: "Contracting Services",
    description: "Professional contracting with skilled craftsmen who bring precision and excellence to every aspect of construction.",
    features: [
      "General Contracting",
      "Specialized Trade Work",
      "Finishing & Detailing",
      "MEP (Mechanical, Electrical, Plumbing)",
      "Quality Materials Sourcing",
      "Post-Construction Support"
    ],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80",
  },
];

const process = [
  {
    step: "01",
    title: "Consultation",
    description: "Initial meeting to understand your vision, requirements, and budget",
  },
  {
    step: "02",
    title: "Concept Design",
    description: "Creating preliminary designs and 3D visualizations for your approval",
  },
  {
    step: "03",
    title: "Planning",
    description: "Detailed planning, material selection, and project timeline development",
  },
  {
    step: "04",
    title: "Execution",
    description: "Professional implementation with regular updates and quality checks",
  },
  {
    step: "05",
    title: "Handover",
    description: "Final walkthrough, documentation, and post-project support",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-zinc-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-zinc-400 leading-relaxed">
              Comprehensive design and construction solutions tailored to bring your vision to life with precision and creativity
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-zinc-900">
        <div className="container mx-auto max-w-6xl space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-gray-900 dark:text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 dark:text-zinc-400 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-zinc-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-zinc-900 dark:to-black">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto">
              A streamlined approach to ensure your project's success from concept to completion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center border-2 border-gray-300 dark:border-white/20">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-zinc-400 text-sm">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-gray-300/20 dark:from-white/20 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white dark:bg-black">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Start Your Project
            </h2>
            <p className="text-xl text-gray-600 dark:text-zinc-400 mb-8">
              Ready to transform your space? Get in touch with us today for a consultation
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-zinc-200 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

