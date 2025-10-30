"use client";
import { Navigation } from "../components/nav";
import { motion } from "framer-motion";
import { Award, Users, Target, Heart, TrendingUp, Shield } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for perfection in every project, ensuring the highest quality standards in design and execution.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Transparency and honesty form the foundation of our relationships with clients and partners.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in working closely with our clients to understand and realize their unique vision.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "Constantly evolving our methods and embracing new technologies to deliver cutting-edge solutions.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Delivering on our promises with consistent quality, on-time completion, and budget adherence.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Uncompromising commitment to superior craftsmanship and attention to detail in every aspect.",
  },
];

const team = [
  {
    name: "Rajesh Sharma",
    role: "Founder & Lead Architect",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    description: "15+ years of experience in architectural design and project management",
  },
  {
    name: "Priya Mehta",
    role: "Interior Design Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    description: "Award-winning interior designer specializing in luxury residential projects",
  },
  {
    name: "Amit Kumar",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    description: "Expert in managing large-scale commercial and residential developments",
  },
  {
    name: "Neha Patel",
    role: "Senior Designer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    description: "Specialist in sustainable design and innovative space planning solutions",
  },
];

const milestones = [
  { year: "2009", event: "Company Founded", description: "Started with a vision to transform spaces" },
  { year: "2012", event: "100 Projects", description: "Completed our 100th successful project" },
  { year: "2015", event: "National Recognition", description: "Received Best Design Firm award" },
  { year: "2018", event: "Team Expansion", description: "Grew to a team of 50+ professionals" },
  { year: "2020", event: "Sustainable Focus", description: "Launched green building initiative" },
  { year: "2024", event: "500+ Projects", description: "Celebrating 500+ successful deliveries" },
];

export default function AboutPage() {
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
              About Us
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Transforming visions into reality through innovative design, meticulous planning, and exceptional execution
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-zinc-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  Founded in 2009, Infinity Turnkey Solutions began with a simple yet powerful vision: to create spaces that inspire, function beautifully, and stand the test of time. What started as a small team of passionate designers has grown into a full-service design and construction firm.
                </p>
                <p>
                  Over the past 15 years, we've had the privilege of working on over 500 projects across residential, commercial, and hospitality sectors. Each project has been an opportunity to push boundaries, innovate, and deliver excellence.
                </p>
                <p>
                  Today, we're proud to be recognized as one of the leading design and construction firms, known for our commitment to quality, innovation, and client satisfaction. Our team of 50+ professionals brings together diverse expertise in architecture, interior design, project management, and construction.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80"
                  alt="Our Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-600 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 bg-black">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-zinc-400">
              Key milestones in our growth story
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-zinc-800" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="inline-block bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                      <div className="text-2xl font-bold text-white mb-2">{milestone.event}</div>
                      <p className="text-zinc-400">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border-4 border-black">
                      <span className="text-black font-bold">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              The talented professionals behind our success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-square mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-zinc-400 text-sm mb-2">{member.role}</p>
                <p className="text-zinc-500 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-zinc-900">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-zinc-400 mb-8">
              Ready to start your next project? We'd love to hear from you
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

