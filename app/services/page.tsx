"use client"

import { motion } from "framer-motion"
import Section from "@/components/Section"
import Image from "next/image"

export default function Services() {
  const services = [
    {
      title: "IIoT Data Collection",
      description:
        "Smart Data Acquisition systems that seamlessly collect, process, and transmit data from industrial equipment and sensors.",
      features: [
        "Real-time data streaming",
        "Edge computing capabilities",
        "Secure data transmission",
        "Scalable architecture",
      ],
      icon: "📊",
    },
    {
      title: "Application Development",
      description: "Custom industrial software solutions tailored to your specific operational needs and requirements.",
      features: ["Custom dashboards", "Mobile applications", "Web-based interfaces", "API development"],
      icon: "💻",
    },
    {
      title: "Operational Intelligence",
      description:
        "Transform raw operational data into actionable insights that drive efficiency and informed decision-making.",
      features: ["Advanced analytics", "Predictive maintenance", "Performance optimization", "Real-time monitoring"],
      icon: "🧠",
    },
    {
      title: "SCADA Integration",
      description: "Seamless integration with existing SCADA systems to enhance functionality and connectivity.",
      features: ["Protocol translation", "System modernization", "Data harmonization", "Legacy support"],
      icon: "🔧",
    },
    {
      title: "Gen AI Solutions",
      description:
        "AI-powered automation and analytics solutions that bring intelligence to your industrial processes.",
      features: ["Machine learning models", "Automated decision making", "Pattern recognition", "Intelligent alerts"],
      icon: "🤖",
    },
    {
      title: "Secure Systems",
      description:
        "Comprehensive security solutions designed specifically for industrial environments and OT networks.",
      features: ["Network segmentation", "Access control", "Threat detection", "Compliance management"],
      icon: "🔒",
    },
    {
      title: "Legacy Modernization",
      description: "Upgrade and modernize legacy systems while maintaining operational continuity and data integrity.",
      features: ["System assessment", "Migration planning", "Gradual upgrades", "Training support"],
      icon: "🔄",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/services-bg.webp?height=800&width=1600"
            alt="Industrial services background"
            fill
            className="object-cover object-[center_25%] opacity-20"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-800/90"></div> */}
        </div>

        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-gray-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gray-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-3 mb-8">
              <span className="text-gray-200 text-sm font-medium">🔧 Professional Services</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive solutions that bridge the gap between operational technology and information technology
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Services Grid */}
      <Section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                title: "Seamless SCADA Integration",
                description:
                  "We enable real-time monitoring and automation for industrial operations by integrating SCADA systems with advanced protocols like OPC-UA, Modbus, DNP3, and MQTT, ensuring seamless data flow and control.",
                // features: [
                //   "Real-time data streaming",
                //   "Edge computing capabilities",
                //   "Secure data transmission",
                //   "Scalable architecture",
                // ],
                
                image: "/services/seamless-scada-integration.webp?height=400&width=600",
                gradient: "from-gray-500 to-gray-700",
              },
              {
                title: "Next-Gen Gen AI Solutions",
                description:
                  "Our AI-driven analytics solutions enhance predictive maintenance and decision-making by leveraging intelligent data processing, helping industries optimize performance and reduce downtime.",
                // features: ["Custom dashboards", "Mobile applications", "Web-based interfaces", "API development"],
                image: "/services/next-gen-gen-ai-solutions.webp?height=400&width=600",
                gradient: "from-gray-500 to-gray-700",
              },
              {
                title: "Smart Data Acquisition",
                description:
                  "We specialize in collecting and processing industrial data from SCADA, PLCs, and sensors, ensuring seamless storage and accessibility in both cloud-based and on-premise historians.",
                // features: [
                //   "Advanced analytics",
                //   "Predictive maintenance",
                //   "Performance optimization",
                //   "Real-time monitoring",
                // ],
                image: "/services/smart-data-acquisition.webp?height=400&width=600",
                gradient: "from-gray-500 to-gray-700",
              },
              {
                title: "Secure & Reliable Systems",
                description:
                  "With a strong focus on cybersecurity, we implement end-to-end security measures for OT & IT networks while adopting Six Sigma frameworks to enhance operational efficiency.",
                // features: ["Protocol translation", "System modernization", "Data harmonization", "Legacy support"],
                image: "/services/secure-and-reliable-systems.webp?height=400&width=600",
                gradient: "from-gray-500 to-gray-700",
              },
              {
                title: "Bridging Old & New Technologies",
                description:
                  "We help industries modernize their legacy systems by integrating them with advanced digital platforms, ensuring scalability, improved performance, and future-ready infrastructure.",
                // features: [
                //   "Machine learning models",
                //   "Automated decision making",
                //   "Pattern recognition",
                //   "Intelligent alerts",
                // ],
                image: "/services/bridging-old-and-new-technologies.webp?height=400&width=600",
                gradient: "from-gray-500 to-gray-700",
              },
              {
                title: "Tailored for Your Industry",
                description:
                  "From automation to AI-driven solutions, we develop customized strategies to meet industry-specific needs, serving sectors like energy, manufacturing, and industrial automation.",
                // features: ["Network segmentation", "Access control", "Threat detection", "Compliance management"],
                image: "/services/tailored-for-your-industry.webp?height=400&width=600",
                gradient: "from-gray-500 to-gray-700",
              },
              // {
              //   title: "Legacy Modernization",
              //   description:
              //     "Upgrade and modernize legacy systems while maintaining operational continuity, data integrity, and ensuring smooth transitions.",
              //   features: ["System assessment", "Migration planning", "Gradual upgrades", "Training support"],
              //   icon: "🔄",
              //   image: "/placeholder.svg?height=400&width=600",
              //   gradient: "from-gray-500 to-gray-700",
              // },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:scale-105"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10`}></div> */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* <div className="text-7xl filter drop-shadow-lg">{service.icon}</div> */}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-gray-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">{service.description}</p>

                  {/* <div className="grid grid-cols-1 gap-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div> */}

                  {/* <div className="flex items-center text-gray-600 font-semibold group-hover:text-gray-800 transition-colors">
                    Learn More
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Every industrial environment is unique. Let's discuss how we can tailor our services to meet your specific
              needs.
            </p>
            <a
              href="/contact"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-lg"
            >
              Contact Our Experts
            </a>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
