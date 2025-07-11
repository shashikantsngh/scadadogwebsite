"use client"

import { motion } from "framer-motion"
import Section from "@/components/Section"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import React, { useState } from "react"

// Solution data - in a real app, this would come from a CMS or database
const solutions = {
  "fetch": { //scadaconnect-pro
    id: 1,
    name: "Fetch",
    category: "Machine Utilization & IoT Adapter Platform",
    description:
      "Enterprise-grade data integration platform that seamlessly connects industrial systems with modern IT infrastructure.",
    longDescription: `
Fetch is SCADADOG’s plug-and-play edge data platform that connects industrial machines to cloud analytics systems with minimal configuration. Designed for manufacturers and energy operators, Fetch standardizes machine data across diverse protocols (Modbus, OPC-UA, MQTT, Siemens, Haas, Fanuc, Heidenhain, etc.) into a unified format for real-time utilization monitoring.`,
    features: [
      {
        title: "Industrial IoT Adapter Library",
        description: "Supports legacy and modern equipment via downloadable adapters",
        icon: "🔌",
      },
      {
        title: "Offline Mode & Edge Buffering",
        description: " Captures data behind firewalls with store-and-forward reliability",
        icon: "⚡",
      },
      {
        title: "Machine Utilization Dashboards",
        description: "Provides OEE, run-time, idle time, and downtime KPIs",
        icon: "☁️",
      },
      {
        title: "Secure Licensing System",
        description: "Supports both perpetual and subscription models with machine fingerprinting",
        icon: "🔒",
      },
      {
        title: "API Integration",
        description: " Export normalized data into Canary, OSIsoft PI, Ignition, or custom analytics systems",
        icon: "📈",
      },
      {
        title: "Built-in Analytics  *dummy",
        description: "Integrated data historian, real-time analytics, and machine learning capabilities",
        icon: "📊",
      },
    ],
    specifications: {
      "Data Throughput": "1M+ tags per second",
      "Protocol Support": "300+ industrial protocols",
      "Deployment Options": "Cloud, On-premise, Hybrid",
      Security: "AES-256 encryption, OAuth 2.0",
      Scalability: "Horizontal scaling up to 1000 nodes",
      Uptime: "99.99% guaranteed SLA",
    },
    useCases: [
      {
        title: "Discrete manufacturing",
        description: "CNC, lathes, PLC-controlled machines",
        industries: ["Automotive", "Electronics", "Pharmaceuticals"],
      },
      {
        title: "Renewable energy",
        description: "Solar, BESS, and inverter fleet runtime metrics",
        industries: ["Utilities", "Oil & Gas", "Renewable Energy"],
      },
      {
        title: "Process Optimization",
        description: "Fleet-wide machine performance comparison",
        industries: ["Chemical", "Food & Beverage", "Mining"],
      },
    ],
    pricing: {
      starter: {
        name: "Starter",
        price: "$2,500/month",
        features: ["Up to 10,000 tags", "5 protocol drivers", "Basic analytics", "Email support"],
      },
      professional: {
        name: "Professional",
        price: "$7,500/month",
        features: ["Up to 100,000 tags", "All protocol drivers", "Advanced analytics", "24/7 support"],
      },
      enterprise: {
        name: "Enterprise",
        price: "Custom pricing",
        features: ["Unlimited tags", "Custom protocols", "ML/AI capabilities", "Dedicated support"],
      },
    },
    image: "/fetch-bg.webp?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    status: "Production Ready",
    version: "v3.2",
    clients: "25+ Industrial Facilities",
    gradient: "bg-gradient-to-br from-gray-900/20 via-gray-800 to-black/50",
    testimonials: [
      {
        quote:
          "ScadaConnect Pro transformed our data infrastructure. We now have real-time visibility across all our manufacturing lines.",
        author: "John Smith",
        title: "IT Director",
        company: "Global Manufacturing Corp",
      },
      {
        quote:
          "The platform's reliability and scalability have been exceptional. Zero downtime in 18 months of operation.",
        author: "Sarah Johnson",
        title: "Operations Manager",
        company: "Energy Solutions Inc",
      },
    ],
  },
  "scout": {
    id: 2,
    name: "Scout",
    category: "Tag & Asset Management Application",
    description:
      "AI-powered predictive maintenance solution that uses machine learning to predict equipment failures before they occur.",
    longDescription: `
Scout is SCADADOG’s smart tag governance tool, purpose-built for SCADA engineers and energy asset managers. It standardizes and manages data point definitions (tags) across large distributed fleets, ensuring compliance with ISA-95, IEC-61850, and customer-specific naming guidelines.

The platform has helped our clients reduce unplanned downtime by an average of 40% and maintenance costs by 30%, while extending equipment life by 15-20%.
    `,
    features: [
      {
        title: "Tag Linting Engine:",
        description: "Validates names, structures, and attributes against ISA/IEC templates",
        icon: "🤖",
      },
      {
        title: "Automated Tag Suggestions",
        description: " AI-assisted inference of missing or undocumented tags from CSVs, drawings, and OEM docs",
        icon: "📡",
      },
      {
        title: "UDT Generator",
        description: "Creates structured OPC/SCADA UDTs compatible with Ignition, AVEVA, and GE",
        icon: "🚨",
      },
      {
        title: "Change Tracking & Auditing",
        description: "Full history of changes for compliance and traceability",
        icon: "🔧",
      },
      {
        title: "Asset Templates Library",
        description: "Reuse or customize tag templates for inverters, BMS, transformers, etc.",
        icon: "📱",
      },
      {
        title: "ROI Tracking  * dummy",
        description: "Comprehensive reporting and ROI tracking dashboard",
        icon: "💰",
      },
    ],
    specifications: {
      "Prediction Accuracy": "95% for critical equipment",
      "Data Sources": "Vibration, Temperature, Pressure, Flow",
      "Alert Types": "Email, SMS, Push notifications",
      "Mobile Support": "iOS, Android native apps",
      Integration: "REST API, OPC-UA, Modbus",
      Reporting: "Real-time dashboards, scheduled reports",
    },
    useCases: [
      {
        title: "Rotating Equipment",
        description: "Pumps, motors, compressors, and turbines monitoring",
        industries: ["Oil & Gas", "Power Generation", "Manufacturing"],
      },
      {
        title: "Production Lines",
        description: "Conveyor systems, packaging equipment, and assembly lines",
        industries: ["Automotive", "Food & Beverage", "Electronics"],
      },
      {
        title: "Critical Infrastructure",
        description: "HVAC systems, elevators, and building automation",
        industries: ["Commercial Real Estate", "Healthcare", "Data Centers"],
      },
    ],
    pricing: {
      starter: {
        name: "Starter",
        price: "$1,500/month",
        features: ["Up to 50 assets", "Basic ML models", "Email alerts", "Standard support"],
      },
      professional: {
        name: "Professional",
        price: "$4,500/month",
        features: ["Up to 500 assets", "Advanced ML models", "Mobile app", "Priority support"],
      },
      enterprise: {
        name: "Enterprise",
        price: "Custom pricing",
        features: ["Unlimited assets", "Custom ML models", "API access", "Dedicated support"],
      },
    },
    image: "/scout-bg.webp?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    status: "Production Ready",
    version: "v2.1",
    clients: "15+ Manufacturing Plants",
    gradient: "bg-gradient-to-br from-gray-900/20 via-gray-800 to-black/50",
    testimonials: [
      {
        quote: "IntelliMaint AI helped us reduce unplanned downtime by 45%. The ROI was achieved in just 8 months.",
        author: "Mike Chen",
        title: "Maintenance Manager",
        company: "Advanced Manufacturing",
      },
      {
        quote: "The predictive accuracy is impressive. We've prevented 3 major equipment failures this year alone.",
        author: "Lisa Rodriguez",
        title: "Plant Engineer",
        company: "Process Industries Inc",
      },
    ],
  },
  "secureot-shield": {
    id: 3,
    name: "SecureOT Shield",
    category: "OT Cybersecurity Platform",
    description: "Comprehensive cybersecurity solution designed specifically for operational technology environments.",
    longDescription: `
SecureOT Shield provides enterprise-grade cybersecurity specifically designed for operational technology (OT) environments. Unlike traditional IT security solutions, our platform understands the unique requirements of industrial networks, including real-time constraints, legacy protocols, and safety-critical operations.

The platform provides comprehensive protection against cyber threats while maintaining operational continuity and compliance with industry standards like NIST and IEC 62443.
    `,
    features: [
      {
        title: "Network Segmentation",
        description: "Advanced micro-segmentation for OT networks with zero-trust architecture",
        icon: "🛡️",
      },
      {
        title: "Threat Detection",
        description: "Real-time threat detection using behavioral analysis and machine learning",
        icon: "🔍",
      },
      {
        title: "Asset Discovery",
        description: "Automatic discovery and inventory of all OT assets and communications",
        icon: "📋",
      },
      {
        title: "Compliance Reporting",
        description: "Automated compliance reporting for NIST, IEC 62443, and other standards",
        icon: "📊",
      },
      {
        title: "Incident Response",
        description: "Automated incident response with playbooks and forensic capabilities",
        icon: "🚨",
      },
      {
        title: "Security Training",
        description: "Comprehensive security awareness training for OT personnel",
        icon: "🎓",
      },
    ],
    specifications: {
      "Network Monitoring": "Real-time traffic analysis",
      "Threat Intelligence": "Global threat feeds integration",
      Compliance: "NIST, IEC 62443, NERC CIP",
      Deployment: "Passive monitoring, no disruption",
      Integration: "SIEM, SOAR, ticketing systems",
      "Response Time": "Sub-second threat detection",
    },
    useCases: [
      {
        title: "Critical Infrastructure",
        description: "Power plants, water treatment, and transportation systems",
        industries: ["Utilities", "Water/Wastewater", "Transportation"],
      },
      {
        title: "Manufacturing Security",
        description: "Production line protection and intellectual property security",
        industries: ["Automotive", "Aerospace", "Pharmaceuticals"],
      },
      {
        title: "Process Industries",
        description: "Chemical plants, refineries, and mining operations",
        industries: ["Oil & Gas", "Chemical", "Mining"],
      },
    ],
    pricing: {
      starter: {
        name: "Starter",
        price: "$3,000/month",
        features: ["Up to 100 assets", "Basic monitoring", "Standard reports", "Email support"],
      },
      professional: {
        name: "Professional",
        price: "$8,500/month",
        features: ["Up to 1000 assets", "Advanced analytics", "Custom reports", "24/7 support"],
      },
      enterprise: {
        name: "Enterprise",
        price: "Custom pricing",
        features: ["Unlimited assets", "Custom integrations", "Dedicated SOC", "On-site support"],
      },
    },
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    status: "Production Ready",
    version: "v1.8",
    clients: "12+ Critical Infrastructure Sites",
    gradient: "from-red-500 to-pink-600",
    icon: "🛡️",
    testimonials: [
      {
        quote: "SecureOT Shield gave us the visibility and protection we needed without disrupting operations.",
        author: "David Kim",
        title: "CISO",
        company: "Critical Infrastructure Corp",
      },
      {
        quote: "The compliance reporting features saved us months of manual work during our audit.",
        author: "Amanda Foster",
        title: "Security Manager",
        company: "Energy Systems LLC",
      },
    ],
  },
  "dataflow-analytics": {
    id: 4,
    name: "DataFlow Analytics",
    category: "Industrial Analytics Platform",
    description: "Advanced analytics platform that transforms industrial data into actionable business intelligence.",
    longDescription: `
DataFlow Analytics is a comprehensive industrial analytics platform that transforms raw operational data into actionable business intelligence. Built specifically for industrial environments, it provides real-time analytics, historical trending, and predictive insights that drive operational excellence.

The platform processes millions of data points per second and provides intuitive dashboards that enable operators, engineers, and executives to make data-driven decisions that improve efficiency, reduce costs, and optimize performance.
    `,
    features: [
      {
        title: "Real-time Analytics",
        description: "Process and analyze millions of data points in real-time with sub-second latency",
        icon: "⚡",
      },
      {
        title: "Custom Dashboards",
        description: "Drag-and-drop dashboard builder with role-based access and mobile optimization",
        icon: "📊",
      },
      {
        title: "Machine Learning Insights",
        description: "Built-in ML algorithms for pattern recognition and anomaly detection",
        icon: "🧠",
      },
      {
        title: "KPI Tracking",
        description: "Comprehensive KPI tracking with benchmarking and target management",
        icon: "🎯",
      },
      {
        title: "Automated Reporting",
        description: "Scheduled reports with customizable templates and distribution lists",
        icon: "📋",
      },
      {
        title: "Mobile Interface",
        description: "Responsive web interface optimized for tablets and smartphones",
        icon: "📱",
      },
    ],
    specifications: {
      "Data Processing": "10M+ data points per second",
      "Dashboard Types": "Real-time, historical, predictive",
      "Export Formats": "PDF, Excel, CSV, PowerPoint",
      "API Access": "REST API with real-time WebSocket",
      "Mobile Support": "Responsive web, native apps",
      "Data Retention": "Configurable from 1 day to 10 years",
    },
    useCases: [
      {
        title: "Production Optimization",
        description: "Real-time production monitoring and optimization analytics",
        industries: ["Manufacturing", "Food & Beverage", "Pharmaceuticals"],
      },
      {
        title: "Energy Management",
        description: "Energy consumption analysis and optimization recommendations",
        industries: ["Utilities", "Manufacturing", "Commercial Buildings"],
      },
      {
        title: "Quality Analytics",
        description: "Quality metrics tracking and root cause analysis",
        industries: ["Automotive", "Electronics", "Aerospace"],
      },
    ],
    pricing: {
      starter: {
        name: "Starter",
        price: "$2,000/month",
        features: ["Up to 10,000 tags", "5 dashboards", "Basic analytics", "Standard support"],
      },
      professional: {
        name: "Professional",
        price: "$6,000/month",
        features: ["Up to 100,000 tags", "Unlimited dashboards", "Advanced analytics", "Priority support"],
      },
      enterprise: {
        name: "Enterprise",
        price: "Custom pricing",
        features: ["Unlimited tags", "Custom analytics", "White-label option", "Dedicated support"],
      },
    },
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    status: "Production Ready",
    version: "v2.5",
    clients: "30+ Operations Centers",
    gradient: "from-purple-500 to-indigo-600",
    icon: "📊",
    testimonials: [
      {
        quote: "DataFlow Analytics helped us identify $2M in annual savings through process optimization.",
        author: "Robert Johnson",
        title: "Operations Director",
        company: "Manufacturing Excellence",
      },
      {
        quote: "The real-time dashboards transformed how our operators monitor and control our processes.",
        author: "Jennifer Lee",
        title: "Plant Manager",
        company: "Process Control Systems",
      },
    ],
  },
}

interface SolutionPageProps {
  params: {
    slug: string
  }
}

export default function SolutionPage({ params }: SolutionPageProps) {
  const solution = solutions[params.slug as keyof typeof solutions]

  if (!solution) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={solution.image || "/placeholder.svg"}
            alt={solution.name}
            fill
            className="object-cover opacity-20"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-black/80"></div> */}
        </div>

        <div className="absolute top-10 left-10 w-80 h-80 bg-gray-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gray-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
                <span className="text-gray-200 text-sm font-medium">{solution.category}</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">{solution.name}</h1>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">{solution.description}</p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-lg">
                  Request Demo
                </button>
                {/* <button className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Download Datasheet
                </button> */}
              </div>

              <div className="flex items-center gap-8 text-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{solution.version}</div>
                  <div className="text-sm">Current Version</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{solution.clients}</div>
                  <div className="text-sm">Active Deployments</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{solution.status}</div>
                  <div className="text-sm">Status</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div
                className={`relative w-full h-96 bg-gradient-to-br ${solution.gradient} rounded-3xl overflow-hidden shadow-2xl`}
              >
                
                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl filter drop-shadow-lg">{solution.icon}</div>
                </div> */}
                <div className="absolute top-6 right-6">
                  <span className="bg-gray-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {solution.status}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Overview Section */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Overview</h2>
            <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">{solution.longDescription}</div>
          </motion.div>
        </div>
      </Section>

      {/* Features Section */}
      <Section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive capabilities designed for enterprise-scale industrial operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solution.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Specifications Section */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Technical Specifications</h2>
              <div className="space-y-4">
                {Object.entries(solution.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <span className="font-semibold text-gray-900">{key}</span>
                    <span className="text-gray-600 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Use Cases</h2>
              <div className="space-y-6">
                {solution.useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-500 to-gray-600 rounded-2xl p-6 border border-gray-100"
                  >
                    <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                    <p className="text-gray-100 mb-4">{useCase.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {useCase.industries.map((industry) => (
                        <span
                          key={industry}
                          className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Pricing Section */}
      <Section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Pricing Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options to match your organization's needs and scale
            </p>
          </motion.div>

          {/* Using useState to manage the selected plan */}
          {(() => {
            // We need to use IIFE because useState cannot be called conditionally
            const [selectedPlan, setSelectedPlan] = React.useState<string>("professional");
            
            return (
              <div className="grid md:grid-cols-3 gap-8">
                {Object.entries(solution.pricing).map(([key, plan], index) => {
                  const isSelected = selectedPlan === key;
                  
                  return (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      onClick={() => setSelectedPlan(key)}
                      className={`bg-white rounded-3xl p-8 shadow-lg transition-all duration-300 cursor-pointer border-2 
                        ${isSelected 
                          ? "border-gray-600 ring-4 ring-gray-500/20 shadow-xl transform scale-[1.02]" 
                          : "border-gray-100 hover:border-gray-300 hover:shadow-xl hover:scale-[1.01]"
                        }
                      `}
                    >
                      {key === "professional" && (
                        <div className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-bold text-center mb-6">
                          Most Popular
                        </div>
                      )}
                      <h3 className={`text-2xl font-bold mb-2 ${isSelected ? "text-gray-900" : "text-gray-800"}`}>
                        {plan.name}
                      </h3>
                      <div className={`text-4xl font-bold mb-6 ${isSelected ? "text-gray-700" : "text-gray-600"}`}>
                        {plan.price}
                      </div>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full flex-shrink-0 ${isSelected ? "bg-green-600" : "bg-green-500"}`}></div>
                            <span className={`${isSelected ? "text-gray-800" : "text-gray-700"}`}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                          isSelected
                            ? "bg-gray-600 text-white hover:bg-gray-700"
                            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                        }`}
                      >
                        {key === "enterprise" ? "Contact Sales" : "Start Free Trial"}
                      </button>
                      
                      {/* Selection indicator */}
                      {/* {isSelected && (
                        <div className="mt-6 text-center">
                          <span className="inline-flex items-center text-sm font-medium text-gray-600">
                            <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Selected Plan
                          </span>
                        </div>
                      )} */}
                    </motion.div>
                  );
                })}
              </div>
            );
          })()}
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from organizations using {solution.name}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {solution.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100"
              >
                <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600 font-medium">{testimonial.title}</div>
                    <div className="text-gray-600 text-sm">{testimonial.company}</div>
                  </div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
              Experience the power of {solution.name} with a personalized demo or start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-lg">
                Schedule Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300">
                Start Free Trial
              </button>
              <Link
                href="/solutions"
                className="border-2 border-white/50 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300"
              >
                ← Back to Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
