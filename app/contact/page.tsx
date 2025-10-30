"use client";
import { Chrome, Mail, PhoneCall, MapPin, Clock, Send } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { motion } from "framer-motion";
import { useState } from "react";

const contactInfo = [
  {
    icon: <PhoneCall size={24} />,
    title: "Phone",
    details: ["+91-9999-207-909"],
    href: "tel:+91-9999-207-909",
  },
  {
    icon: <Mail size={24} />,
    title: "Email",
    details: ["info@itks.in"],
    href: "mailto:info@itks.in",
  },
  {
    icon: <Chrome size={24} />,
    title: "Website",
    details: ["www.itks.in"],
    href: "https://www.itks.in",
  },
  {
    icon: <MapPin size={24} />,
    title: "Address",
    details: ["India"],
    href: "#",
  },
];

const workingHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              Get In Touch
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Have a project in mind? We'd love to hear from you. Let's discuss how we can bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-6 bg-zinc-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <Link
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : "_self"}
                    className="p-8 relative flex flex-col items-center gap-4 duration-700 group"
                  >
                    <span
                      className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                      aria-hidden="true"
                    />
                    <span className="relative z-10 flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200">
                      {info.icon}
                    </span>
                    <div className="z-10 flex flex-col items-center">
                      <span className="text-sm text-zinc-500 mb-2">{info.title}</span>
                      {info.details.map((detail, idx) => (
                        <span
                          key={idx}
                          className="text-lg font-medium duration-150 text-zinc-200 group-hover:text-white text-center"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-zinc-300 mb-2 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-zinc-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-zinc-300 mb-2 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-zinc-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-zinc-300 mb-2 font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-zinc-500 transition-colors"
                        placeholder="+91 1234567890"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-zinc-300 mb-2 font-medium">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-zinc-500 transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="interior-design">Interior Design</option>
                        <option value="architecture">Architecture</option>
                        <option value="project-management">Project Management</option>
                        <option value="contracting">Contracting</option>
                        <option value="consultation">General Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-zinc-300 mb-2 font-medium">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-white" />
                  <h3 className="text-2xl font-bold text-white">Working Hours</h3>
                </div>
                <div className="space-y-4">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-zinc-700 last:border-0">
                      <span className="text-zinc-300 font-medium">{schedule.day}</span>
                      <span className="text-zinc-400">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Quick Response</h3>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  For urgent matters, please call us directly at{" "}
                  <a href="tel:+91-9999-207-909" className="text-white hover:text-zinc-300 transition-colors">
                    +91-9999-207-909
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 px-6 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-2xl overflow-hidden h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-zinc-600 mx-auto mb-4" />
                <p className="text-zinc-500 text-lg">Map integration placeholder</p>
                <p className="text-zinc-600 text-sm mt-2">Add your Google Maps embed or location details here</p>
              </div>
            </div>
          </motion.div>
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
              Visit Our Office
            </h2>
            <p className="text-xl text-zinc-400 mb-8">
              Schedule a consultation at our office to discuss your project in detail
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/projects"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                View Our Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
