"use client"

import { motion } from "framer-motion"
import Section from "@/components/Section"
import Image from "next/image"

export default function Support() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Support team background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-800/90"></div>
        </div>

        <div className="absolute top-20 left-20 w-64 h-64 bg-gray-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gray-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-3 mb-8">
              <span className="text-gray-200 text-sm font-medium">🎧 24/7 Support</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
              Expert Support
            </h1>
            <p className="text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
              Get the help you need when you need it. Our expert support team is here to assist you with
              industrial-strength solutions.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Contact Information */}
      <Section className="bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold mb-6 text-gray-900 bg-gradient-to-r from-gray-900 to-gray-900 bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Ready to transform your industrial operations? Our team of experts is standing by to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="group flex items-start gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
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
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Email Support</h3>
                    <a
                      href="mailto:info@scadadog.com"
                      className="text-gray-600 hover:text-gray-800 transition-colors text-lg font-medium"
                    >
                      info@scadadog.com
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Response within 1 hour during business hours</p>
                  </div>
                </div>

                <div className="group flex items-start gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
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
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Phone Support</h3>
                    <a
                      href="tel:+13218056924"
                      className="text-gray-600 hover:text-gray-800 transition-colors text-lg font-medium"
                    >
                      (321) 805-6924
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Direct line to our technical experts</p>
                  </div>
                </div>

                <div className="group flex items-start gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
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
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Office Location</h3>
                    <p className="text-gray-700 text-lg font-medium">Juno Beach, FL</p>
                    <p className="text-gray-500 text-sm mt-1">Serving clients nationwide</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-50 p-10 rounded-3xl shadow-xl border border-gray-100">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-400/20 to-gray-400/20 rounded-full blur-2xl"></div>
                <div className="relative">
                  <h3 className="text-3xl font-bold mb-8 text-gray-900">Support Hours</h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center p-4 bg-white/70 backdrop-blur-sm rounded-xl">
                      <span className="text-gray-700 font-medium">Monday - Friday</span>
                      <span className="font-bold text-gray-900 bg-green-100 px-3 py-1 rounded-full text-sm">
                        8:00 AM - 6:00 PM EST
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/70 backdrop-blur-sm rounded-xl">
                      <span className="text-gray-700 font-medium">Saturday</span>
                      <span className="font-bold text-gray-900 bg-yellow-100 px-3 py-1 rounded-full text-sm">
                        9:00 AM - 2:00 PM EST
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/70 backdrop-blur-sm rounded-xl">
                      <span className="text-gray-700 font-medium">Sunday</span>
                      <span className="font-bold text-gray-900 bg-red-100 px-3 py-1 rounded-full text-sm">
                        Emergency Only
                      </span>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl text-white">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <span>🚨</span> Emergency Support
                    </h4>
                    <p className="text-gray-100 leading-relaxed">
                      For critical system issues outside business hours, please call our emergency line and leave a
                      detailed message. We'll respond within 2 hours for production-critical issues.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Support Process */}
      <Section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Support Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to ensure your issues are resolved quickly and effectively
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Initial Contact",
                description:
                  "Reach out via email or phone with your issue details. We'll acknowledge receipt within 1 hour during business hours.",
              },
              {
                step: "2",
                title: "Assessment & Planning",
                description:
                  "Our experts analyze your issue and develop a resolution plan. We'll provide an estimated timeline and next steps.",
              },
              {
                step: "3",
                title: "Resolution & Follow-up",
                description:
                  "We implement the solution and test thoroughly. Follow-up ensures the issue is fully resolved to your satisfaction.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md text-center"
              >
                <div className="w-12 h-12 bg-gray-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Support Scope */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">What We Support</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-green-50 p-8 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-4 text-green-800">✅ Included Support</h3>
              <ul className="space-y-2 text-green-700">
                <li>• Software installation and configuration</li>
                <li>• System integration troubleshooting</li>
                <li>• Performance optimization</li>
                <li>• Security updates and patches</li>
                <li>• Data migration assistance</li>
                <li>• Training and documentation</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-orange-50 p-8 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-4 text-orange-800">⚠️ Additional Services</h3>
              <ul className="space-y-2 text-orange-700">
                <li>• Custom development projects</li>
                <li>• Hardware procurement and setup</li>
                <li>• On-site installation services</li>
                <li>• Extended maintenance contracts</li>
                <li>• Third-party software licensing</li>
                <li>• Comprehensive system audits</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  )
}
