"use client"

import { motion } from "framer-motion"
import Section from "@/components/Section"
import ContactForm from "@/components/ContactForm"
import Image from "next/image"

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Contact us background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-black/90"></div>
        </div>

        <div className="absolute top-20 left-20 w-80 h-80 bg-gray-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gray-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-3 mb-8">
              <span className="text-gray-200 text-sm font-medium">💬 Get In Touch</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your industrial operations? Let's discuss how we can help bridge your IT and OT
              systems.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
                <h2 className="text-3xl font-bold mb-2 text-gray-900">Send us a Message</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900 bg-gradient-to-r from-gray-900 to-gray-900 bg-clip-text text-transparent">
                  Let's Connect
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Whether you need immediate support or want to discuss a new project, our team is here to help.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="group flex items-start gap-6 p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="bg-gradient-to-br from-gray-500 to-gray-600 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-xl">Email Us</h3>
                    <a
                      href="mailto:info@scadadog.com"
                      className="text-gray-600 hover:text-gray-800 transition-colors text-lg font-medium"
                    >
                      info@scadadog.com
                    </a>
                    <p className="text-gray-600 text-sm mt-2">We respond within 1 hour during business hours</p>
                  </div>
                </div>

                <div className="group flex items-start gap-6 p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="bg-gradient-to-br from-gray-500 to-gray-600 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-xl">Call Us</h3>
                    <a
                      href="tel:+13218056924"
                      className="text-gray-600 hover:text-gray-800 transition-colors text-lg font-medium"
                    >
                      (321) 805-6924
                    </a>
                    <p className="text-gray-600 text-sm mt-2">Direct line to our technical experts</p>
                  </div>
                </div>

                <div className="group flex items-start gap-6 p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="bg-gradient-to-br from-gray-500 to-gray-600 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-xl">Visit Us</h3>
                    <p className="text-gray-700 text-lg font-medium">Juno Beach, FL</p>
                    <p className="text-gray-600 text-sm mt-2">Serving clients nationwide</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-50 p-8 rounded-3xl border border-gray-200">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Business Hours</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white/70 backdrop-blur-sm rounded-2xl">
                    <span className="text-gray-700 font-medium">Monday - Friday</span>
                    <span className="font-bold text-gray-900 bg-green-100 px-4 py-2 rounded-full text-sm">
                      8:00 AM - 6:00 PM EST
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/70 backdrop-blur-sm rounded-2xl">
                    <span className="text-gray-700 font-medium">Saturday</span>
                    <span className="font-bold text-gray-900 bg-yellow-100 px-4 py-2 rounded-full text-sm">
                      9:00 AM - 2:00 PM EST
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/70 backdrop-blur-sm rounded-2xl">
                    <span className="text-gray-700 font-medium">Sunday</span>
                    <span className="font-bold text-gray-900 bg-red-100 px-4 py-2 rounded-full text-sm">
                      Emergency Only
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions about our services</p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What types of industrial systems do you work with?",
                answer:
                  "We work with a wide range of industrial systems including SCADA, PLC, HMI, DCS, and various industrial protocols like Modbus, OPC-UA, Ethernet/IP, and more.",
              },
              {
                question: "How quickly can you respond to support requests?",
                answer:
                  "We respond to support requests within 1 hour during business hours. For critical production issues, we offer emergency support with 2-hour response times.",
              },
              {
                question: "Do you provide on-site services?",
                answer:
                  "Yes, we provide on-site services for system installation, commissioning, and complex troubleshooting. We serve clients nationwide from our Florida base.",
              },
              {
                question: "Can you integrate with our existing systems?",
                answer:
                  "We specialize in integrating new solutions with existing industrial infrastructure while maintaining operational continuity.",
              },
              {
                question: "What security measures do you implement?",
                answer:
                  "We implement comprehensive cybersecurity measures including network segmentation, access control, threat detection, and compliance management specifically designed for OT environments.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
