"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";

export default function Solutions() {
  const products = [
    {
      id: 1,
      name: "Fetch",
      slug: "fetch",
      category: "Data Integration Platform",
      description:
        "Enterprise-grade data integration platform that seamlessly connects industrial systems with modern IT infrastructure.",
      features: [
        "Industrial IoT Adapter Library: Supports legacy and modern equipment via downloadable adapters",
        "Offline Mode & Edge Buffering: Captures data behind firewalls with store-and-forward reliability",
        "Machine Utilization Dashboards: Provides OEE, run-time, idle time, and downtime KPIs",
        "Secure Licensing System: Supports both perpetual and subscription models with machine fingerprinting",
        "API Integration: Export normalized data into Canary, OSIsoft PI, Ignition, or custom analytics systems",
      ],
      image: "/fetch-bg.jpg?height=400&width=600",
      status: "Production Ready",
      version: "v3.2",
      clients: "25+ Industrial Facilities",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      id: 2,
      name: "Scout",
      slug: "scout",
      category: "Predictive Maintenance Suite",
      description:
        "AI-powered predictive maintenance solution that uses machine learning to predict equipment failures before they occur.",
      features: [
        "Validates names, structures, and attributes against ISA/IEC templates",
        "AI-assisted inference of missing or undocumented tags from CSVs, drawings, and OEM docs",
        "Creates structured OPC/SCADA UDTs compatible with Ignition, AVEVA, and GE",
        "Full history of changes for compliance and traceability",
        "Reuse or customize tag templates for inverters, BMS, transformers, etc.",
      ],
      image: "/scout-bg.jpg?height=400&width=600",
      status: "Production Ready",
      version: "v2.1",
      clients: "15+ Manufacturing Plants",
      gradient: "from-gray-700 to-gray-900",
    },
    // {
    //   id: 3,
    //   name: "SecureOT Shield",
    //   slug: "secureot-shield",
    //   category: "OT Cybersecurity Platform",
    //   description:
    //     "Comprehensive cybersecurity solution designed specifically for operational technology environments.",
    //   features: [
    //     "Network segmentation and micro-segmentation",
    //     "Real-time threat detection and response",
    //     "Asset discovery and inventory management",
    //     "Compliance reporting (NIST, IEC 62443)",
    //     "Incident response automation",
    //     "Security awareness training modules",
    //   ],
    //   image: "/placeholder.svg?height=400&width=600",
    //   status: "Production Ready",
    //   version: "v1.8",
    //   clients: "12+ Critical Infrastructure Sites",
    //   gradient: "from-gray-700 to-gray-900",
    //   icon: "🛡️",
    // },
    // {
    //   id: 4,
    //   name: "DataFlow Analytics",
    //   slug: "dataflow-analytics",
    //   category: "Industrial Analytics Platform",
    //   description: "Advanced analytics platform that transforms industrial data into actionable business intelligence.",
    //   features: [
    //     "Real-time and historical data analysis",
    //     "Custom dashboard creation tools",
    //     "Machine learning-based insights",
    //     "KPI tracking and benchmarking",
    //     "Automated report generation",
    //     "Mobile-responsive interface",
    //   ],
    //   image: "/placeholder.svg?height=400&width=600",
    //   status: "Production Ready",
    //   version: "v2.5",
    //   clients: "30+ Operations Centers",
    //   gradient: "from-gray-700 to-gray-900",
    //   icon: "📊",
    // },
  ];

  const solutionsInDevelopment = [
    {
      id: 5,
      name: "EdgeAI Processor",
      category: "Edge Computing Solution",
      description:
        "Lightweight AI processing unit for real-time decision making at the edge of industrial networks.",
      features: [
        "Real-time AI inference at the edge",
        "Low-latency decision making",
        "Offline operation capabilities",
        "Integration with cloud platforms",
        "Energy-efficient processing",
      ],
      image: "/placeholder.svg?height=400&width=600",
      status: "Beta Testing",
      expectedRelease: "Q2 2024",
      gradient: "from-gray-700 to-gray-900",
      icon: "⚡",
      progress: 75,
    },
    {
      id: 6,
      name: "VirtualHMI Designer",
      slug: "virtualhmi-designer",
      category: "HMI Development Platform",
      description:
        "Next-generation HMI design platform with drag-and-drop interface and real-time collaboration features.",
      features: [
        "Drag-and-drop interface builder",
        "Real-time collaboration tools",
        "Responsive design templates",
        "Integration with major PLC brands",
        "Version control and deployment",
      ],
      image: "/placeholder.svg?height=400&width=600",
      status: "Alpha Testing",
      expectedRelease: "Q3 2024",
      gradient: "from-gray-700 to-gray-900",
      icon: "🎨",
      progress: 45,
    },
    {
      id: 7,
      name: "CloudBridge Gateway",
      slug: "cloudbridge-gateway",
      category: "IoT Gateway Solution",
      description:
        "Secure gateway solution for connecting legacy industrial equipment to modern cloud platforms.",
      features: [
        "Protocol translation and bridging",
        "Secure cloud connectivity",
        "Edge data processing",
        "Remote configuration and updates",
        "Failover and redundancy support",
      ],
      image: "/placeholder.svg?height=400&width=600",
      status: "Development",
      expectedRelease: "Q4 2024",
      gradient: "from-gray-700 to-gray-900",
      icon: "☁️",
      progress: 30,
    },
    {
      id: 8,
      name: "AR Maintenance Assistant",
      slug: "ar-maintenance-assistant",
      category: "Augmented Reality Solution",
      description:
        "AR-powered maintenance assistant that provides step-by-step guidance for equipment maintenance and repair.",
      features: [
        "AR-guided maintenance procedures",
        "3D equipment visualization",
        "Voice-activated commands",
        "Integration with maintenance systems",
        "Remote expert assistance",
      ],
      image: "/placeholder.svg?height=400&width=600",
      status: "Research & Development",
      expectedRelease: "Q1 2025",
      gradient: "from-gray-700 to-gray-900",
      icon: "🥽",
      progress: 15,
    },
  ];

  const customSolutions = [
    {
      title: "Legacy System Modernization",
      description:
        "Transform outdated industrial systems with modern technology while maintaining operational continuity.",
      icon: "🔄",
      capabilities: [
        "System assessment and migration planning",
        "Gradual modernization approach",
        "Data preservation and migration",
        "Staff training and support",
      ],
    },
    {
      title: "Custom SCADA Development",
      description:
        "Tailored SCADA solutions designed specifically for your operational requirements and industry needs.",
      icon: "🖥️",
      capabilities: [
        "Custom HMI design and development",
        "Real-time data visualization",
        "Alarm management systems",
        "Historical data trending",
      ],
    },
    {
      title: "Industrial IoT Implementation",
      description:
        "End-to-end IoT solutions that connect your equipment to the digital ecosystem.",
      icon: "🌐",
      capabilities: [
        "Sensor integration and deployment",
        "Wireless network design",
        "Data collection and processing",
        "Cloud platform integration",
      ],
    },
    {
      title: "Process Optimization",
      description:
        "Data-driven process optimization solutions that improve efficiency and reduce operational costs.",
      icon: "⚙️",
      capabilities: [
        "Process analysis and modeling",
        "Performance benchmarking",
        "Optimization algorithm development",
        "Continuous improvement programs",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/solutions-bg.jpg?height=800&width=1600"
            alt="Solutions background"
            fill
            className="object-cover opacity-20 object-[center_30%]"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-black/80"></div> */}
        </div>

        <div className="absolute top-10 left-10 w-20 h-20 bg-gray-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gray-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-3 mb-8">
              <span className="text-gray-200 text-sm font-medium">
                🚀 Innovation Portfolio
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
              Our Solutions
            </h1>
            <p className="text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive portfolio of industrial automation
              products and cutting-edge solutions
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Production Ready Products */}
      <Section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-green-50 border border-green-200 rounded-full px-6 py-2 mb-6">
              <span className="text-green-600 text-sm font-medium">
                ✅ Production Ready
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Our Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Battle-tested solutions deployed across industrial facilities
              worldwide
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-80`}
                  ></div> */}
                  {/* <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-7xl filter drop-shadow-lg">
                      {product.icon}
                    </div>
                  </div> */}

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                      {product.status}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 font-medium">
                        {product.category}
                      </p>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <div>{product.version}</div>
                      <div>{product.clients}</div>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-900">
                      Key Features:
                    </h4>
                    {product.features
                      .slice(0, 4)
                      .map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-3"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    {product.features.length > 4 && (
                      <div className="text-gray-600 text-sm font-medium">
                        +{product.features.length - 4} more features
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      href={`/solutions/${product.slug}`}
                      className="bg-gradient-to-r from-gray-800 to-black text-white px-6 py-3 rounded-xl font-semibold hover:from-gray-700 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      Learn More
                    </Link>
                    <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-gray-800 hover:text-gray-800 transition-colors duration-300">
                      Request Demo
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Solutions in Development */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-orange-50 border border-orange-200 rounded-full px-6 py-2 mb-6">
              <span className="text-orange-600 text-sm font-medium">
                🚧 In Development
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Future Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Next-generation solutions currently in development and testing
              phases
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {solutionsInDevelopment.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-200"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-70`}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl filter drop-shadow-lg">
                      {solution.icon}
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {solution.status}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {solution.name}
                      </h3>
                      <p className="text-gray-600 font-medium text-sm">
                        {solution.category}
                      </p>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <div>Expected: {solution.expectedRelease}</div>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        Development Progress
                      </span>
                      <span className="text-sm font-bold text-gray-600">
                        {solution.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-gray-800 to-black h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${solution.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-gray-900 text-sm">
                      Planned Features:
                    </h4>
                    {solution.features
                      .slice(0, 3)
                      .map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-3"
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-gray-800 to-black text-white px-6 py-3 rounded-xl font-semibold hover:from-gray-700 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                    Join Beta Program
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Custom Solutions */}
      <Section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-purple-50 border border-purple-200 rounded-full px-6 py-2 mb-6">
              <span className="text-purple-600 text-sm font-medium">
                🎯 Custom Solutions
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Tailored Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom-built solutions designed specifically for your unique
              industrial requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {customSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-3xl">{solution.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {solution.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {solution.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">
                    Our Capabilities:
                  </h4>
                  {solution.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{capability}</span>
                    </div>
                  ))}
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
            <h2 className="text-4xl font-bold mb-6">
              Ready to Explore Our Solutions?
            </h2>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Whether you need a production-ready product or a custom solution,
              we're here to help transform your industrial operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-lg"
              >
                Schedule a Demo
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
