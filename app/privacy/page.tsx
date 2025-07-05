"use client"

import { motion } from "framer-motion"
import Section from "@/components/Section"
import Image from "next/image"

export default function Privacy() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1600"
            alt="Privacy policy background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-black/80"></div>
        </div>

        <div className="absolute top-10 left-10 w-20 h-20 bg-gray-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gray-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
              <span className="text-gray-200 text-sm font-medium">🔒 Privacy & Security</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Your privacy and data security are fundamental to our business. Learn how we protect and handle your
              information.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Privacy Policy Content */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-gray-100 border border-gray-200 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Last Updated: December 2024</h2>
              <p className="text-gray-800 leading-relaxed">
                This Privacy Policy describes how ScadaDog ("we," "our," or "us") collects, uses, and protects your
                personal information when you visit our website or use our services.
              </p>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        <strong>Contact Information:</strong> Name, email address, phone number, company name, and job
                        title when you contact us or fill out forms
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        <strong>Communication Records:</strong> Records of your communications with us, including
                        emails, phone calls, and support tickets
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        <strong>Project Information:</strong> Technical requirements, system specifications, and project
                        details you share with us
                      </span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Automatically Collected Information</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        <strong>Website Usage:</strong> IP address, browser type, device information, pages visited, and
                        time spent on our website
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        <strong>Cookies:</strong> Small data files stored on your device to improve website
                        functionality and user experience
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">2. How We Use Your Information</h2>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      <div>
                        <strong className="text-gray-900">Service Delivery:</strong> To provide industrial automation
                        services, technical support, and project consultation
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      <div>
                        <strong className="text-gray-900">Communication:</strong> To respond to inquiries, provide
                        updates, and maintain ongoing client relationships
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                      <div>
                        <strong className="text-gray-900">Website Improvement:</strong> To analyze website usage and
                        improve user experience
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <span className="text-white text-sm font-bold">4</span>
                      </div>
                      <div>
                        <strong className="text-gray-900">Legal Compliance:</strong> To comply with applicable laws and
                        regulations
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Information Sharing and Disclosure</h2>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    We do not sell, trade, or rent your personal information to third parties. We may share your
                    information only in the following circumstances:
                  </p>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        <strong>Service Providers:</strong> With trusted third-party vendors who assist in providing our
                        services (under strict confidentiality agreements)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        <strong>Legal Requirements:</strong> When required by law, court order, or government regulation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        <strong>Business Protection:</strong> To protect our rights, property, or safety, or that of our
                        clients or others
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Data Security</h2>
                <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-8 border border-gray-200">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    We implement industry-standard security measures to protect your personal information:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-500 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-white text-sm">🔒</span>
                        </div>
                        <span className="font-semibold text-gray-900">SSL/TLS Encryption</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-500 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-white text-sm">🛡️</span>
                        </div>
                        <span className="font-semibold text-gray-900">Secure Data Storage</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-500 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-white text-sm">🔐</span>
                        </div>
                        <span className="font-semibold text-gray-900">Access Controls</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-500 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-white text-sm">📊</span>
                        </div>
                        <span className="font-semibold text-gray-900">Regular Security Audits</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-500 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-white text-sm">🔄</span>
                        </div>
                        <span className="font-semibold text-gray-900">Data Backup Systems</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-500 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-white text-sm">👥</span>
                        </div>
                        <span className="font-semibold text-gray-900">Employee Training</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Your Rights and Choices</h2>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    You have the following rights regarding your personal information:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="p-4 bg-white rounded-xl border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">Access & Portability</h4>
                        <p className="text-sm text-gray-600">Request a copy of your personal information we hold</p>
                      </div>
                      <div className="p-4 bg-white rounded-xl border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">Correction</h4>
                        <p className="text-sm text-gray-600">Update or correct inaccurate information</p>
                      </div>
                      <div className="p-4 bg-white rounded-xl border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">Deletion</h4>
                        <p className="text-sm text-gray-600">Request deletion of your personal information</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 bg-white rounded-xl border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">Opt-out</h4>
                        <p className="text-sm text-gray-600">Unsubscribe from marketing communications</p>
                      </div>
                      <div className="p-4 bg-white rounded-xl border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">Restriction</h4>
                        <p className="text-sm text-gray-600">Limit how we process your information</p>
                      </div>
                      <div className="p-4 bg-white rounded-xl border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">Objection</h4>
                        <p className="text-sm text-gray-600">Object to certain types of processing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Cookies and Tracking</h2>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    We use cookies and similar technologies to enhance your browsing experience:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div>
                        <strong className="text-gray-900">Essential Cookies:</strong> Required for website functionality
                        and security
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <span className="text-white text-xs">i</span>
                      </div>
                      <div>
                        <strong className="text-gray-900">Analytics Cookies:</strong> Help us understand website usage
                        and improve performance
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <span className="text-white text-xs">⚙</span>
                      </div>
                      <div>
                        <strong className="text-gray-900">Preference Cookies:</strong> Remember your settings and
                        preferences
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-6 text-sm">
                    You can control cookie settings through your browser preferences. Note that disabling certain
                    cookies may affect website functionality.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Data Retention</h2>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <p className="text-gray-700 leading-relaxed">
                    We retain your personal information only as long as necessary to fulfill the purposes outlined in
                    this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Specific
                    retention periods vary based on the type of information and applicable legal requirements.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">8. International Data Transfers</h2>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <p className="text-gray-700 leading-relaxed">
                    Your information may be transferred to and processed in countries other than your own. We ensure
                    appropriate safeguards are in place to protect your personal information in accordance with
                    applicable data protection laws.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Changes to This Policy</h2>
                <div className="bg-gray-100 border border-gray-200 rounded-2xl p-8">
                  <p className="text-gray-800 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by
                    posting the new policy on our website and updating the "Last Updated" date. Your continued use of
                    our services after such changes constitutes acceptance of the updated policy.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Contact Us</h2>
                <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-8 border border-gray-200">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-500 rounded-xl flex items-center justify-center mr-4">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Email</div>
                          <a href="mailto:privacy@scadadog.com" className="text-gray-600 hover:text-gray-800">
                            privacy@scadadog.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Phone</div>
                          <a href="tel:+13218056924" className="text-gray-600 hover:text-gray-800">
                            (321) 805-6924
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center mr-4 mt-1">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                          <div className="font-semibold text-gray-900">Address</div>
                          <div className="text-gray-700">
                            ScadaDog
                            <br />
                            Juno Beach, FL
                            <br />
                            United States
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
